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

func check(err error) {
	if err != nil {
		panic(err)
	}
}

func getMarkdownFiles() []string {
	pages, err := os.ReadDir(SiteData.pagesDir)
	if err != nil {
		log.Fatal(err)
	}

	var fileCollection []string

	for _, p := range pages {
		re, err := regexp.Compile(`\w\.md`)
		check(err)
		match := re.MatchString(p.Name())

		if match {
			fileCollection = append(fileCollection, p.Name())
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
	file, err := os.ReadFile(SiteData.pagesDir + fileName)
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

	patternCode := regexp.MustCompile(`<pre><code>[\s\S]*<\/code><\/pre>`)
	content := patternCode.ReplaceAllStringFunc(buf.String(), Highlight)

	lines := strings.Split(string(file), "\n")
	pattern := regexp.MustCompile(`# `)
	title := pattern.ReplaceAllString(lines[0], "")

	return article{title, fileName, content}
}

func createPage(article article) {
	htmlTmpl, err := os.ReadFile(SiteData.pageTemplate)
	if err != nil {
		log.Fatal(err, " | The template file is necessary.")
	}

	tmpl, err := template.New("webpage").Parse(string(htmlTmpl))
	check(err)

	pattern := regexp.MustCompile(`\.md`)
	fileName := pattern.ReplaceAllString(article.fileName, `.html`)

	file, err := os.Create(SiteData.pagesDir + fileName)
	check(err)
	defer file.Close()

	type pageData struct {
		Title   string
		Link    string
		Content string
	}

	err = tmpl.Execute(file, pageData{article.title, SiteData.domain + "/" + fileName, article.content})
	check(err)
	fmt.Println("·", fileName, " : ", article.title)
}

func build() {
	mdFiles := getMarkdownFiles()
	for i := range mdFiles {
		createPage(parseMarkdownFile(mdFiles[i]))
	}
}

func main() {
	fmt.Println("Created following pages:")
	build()
	CreateSitemap()
}
