package main

import (
	"bytes"
	"fmt"
	"log"
	"os"
	"regexp"
	"strings"
	"text/template"

	"github.com/yuin/goldmark"
	"github.com/yuin/goldmark/parser"
	"github.com/yuin/goldmark/renderer/html"
)

var siteData = struct {
	domain       string
	pagesDir     string
	pageTemplate string
	sitemap      string
}{
	"https://bart747.github.io",
	"../",
	"../Template.html",
	"../sitemap.txt",
}

func check(err error) {
	if err != nil {
		panic(err)
	}
}

func getMarkdownFiles() []string {
	entries, err := os.ReadDir(siteData.pagesDir)
	if err != nil {
		log.Fatal(err)
	}

	var fileCollection []string

	for _, e := range entries {
		re, err := regexp.Compile(`\w\.md`)
		check(err)
		match := re.MatchString(e.Name())

		if match {
			fileCollection = append(fileCollection, e.Name())
		}
	}

	return fileCollection
}

type article struct {
	title    string
	fileName string
	content  string
}

func parseMarkdownFile(fileName string) article {
	var buf bytes.Buffer
	file, err := os.ReadFile(siteData.pagesDir + fileName)
	check(err)

	parser := goldmark.New(
		goldmark.WithParserOptions(
			parser.WithAutoHeadingID(),
		),
		goldmark.WithRendererOptions(
			html.WithUnsafe(),
		),
	)

	if err := parser.Convert(file, &buf); err != nil {
		check(err)
	}

	highlight := func(s string) string {
		matches := map[string]string{
			`(\()|(\))`:            `color-dim`,
			`(\{)|(\})`:            `color-dim`,
			`(return )`:            `color-bright`,
			`(func )|(function )`:  `color-bright`,
			`(var )|( := )|(def )`: `color-bright`,
			`(const )|(let )`:      `color-bright`,
		}

		for k, v := range matches {
			s = regexp.MustCompile(k).ReplaceAllString(s, `<span class="`+v+`">$1$2$3</span>`)
		}

		return s
	}

	patternCode := regexp.MustCompile(`<pre><code>[\s\S]*<\/code><\/pre>`)
	content := patternCode.ReplaceAllStringFunc(buf.String(), highlight)

	lines := strings.Split(string(file), "\n")
	pattern := regexp.MustCompile(`# `)
	title := pattern.ReplaceAllString(lines[0], "")

	return article{title, fileName, content}
}

func createPage(article article) {
	htmlTmpl, err := os.ReadFile(siteData.pageTemplate)
	if err != nil {
		log.Fatal(err, " | The template file is necessary.")
	}

	tmpl, err := template.New("webpage").Parse(string(htmlTmpl))
	check(err)

	pattern := regexp.MustCompile(`\.md`)
	fileName := pattern.ReplaceAllString(article.fileName, `.html`)

	file, err := os.Create(siteData.pagesDir + fileName)
	check(err)
	defer file.Close()

	type pageData struct {
		Title   string
		Link    string
		Content string
	}

	err = tmpl.Execute(file, pageData{article.title, siteData.domain + "/" + fileName, article.content})
	check(err)
	fmt.Println("·", fileName, " : ", article.title)
}

func build() {
	mdFiles := getMarkdownFiles()
	for i := range mdFiles {
		createPage(parseMarkdownFile(mdFiles[i]))
	}
}

func createSitemap() {
	entries, err := os.ReadDir(siteData.pagesDir)
	if err != nil {
		log.Fatal(err)
	}

	file, err := os.Create(siteData.sitemap)
	check(err)
	defer file.Close()

	match := regexp.MustCompile(`\w\.html`)
	template := regexp.MustCompile(`Template.html`)
	index := regexp.MustCompile(`index.html`)
	page404 := regexp.MustCompile(`404.html`)
	testpage := regexp.MustCompile(`_test_`)

	file.WriteString("https://bart747.github.io/" + "\n")
	for _, e := range entries {
		if match.MatchString(e.Name()) &&
			!template.MatchString(e.Name()) &&
			!index.MatchString(e.Name()) &&
			!page404.MatchString(e.Name()) &&
			!testpage.MatchString(e.Name()) {
			file.WriteString("https://bart747.github.io/" + e.Name() + "\n")
			check(err)
		}
	}
	file.Sync()
	fmt.Println("·", "sitemap")
}

func main() {
	fmt.Println("Created following pages:")
	build()
	createSitemap()
}
