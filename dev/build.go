package main

import (
	"bytes"
	"errors"
	"fmt"
	"log"
	"net/url"
	"os"
	"path/filepath"
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

func getMarkdownFiles(directory string) []string {
	pages, err := os.ReadDir(directory)
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

func parseMarkdownFile(fileName string, fileDir string) (article, error) {
	var buf bytes.Buffer
	file, err := os.ReadFile(filepath.Join(fileDir, fileName))
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

	patternCode := regexp.MustCompile(`<pre><code>[\s\S]+?<\/code><\/pre>`)
	content := patternCode.ReplaceAllStringFunc(buf.String(), Highlight)

	lines := strings.Split(string(file), "\n")
	pattern := regexp.MustCompile(`# `)

	findTitle := func(lines []string) (string, error) {
		for i := range lines {
			if strings.Contains(lines[i], "# ") {
				title := pattern.ReplaceAllString(lines[i], "")
				return title, nil
			}
		}
		return "", errors.New(fileName + " does not have a title. Titles are required.")
	}

	title, err := findTitle(lines)
	check(err)

	return article{title, fileName, content}, nil
}

func createPage(article article, templateDir string, pagesDir string) error {
	htmlTmpl, err := os.ReadFile(templateDir)
	if err != nil {
		log.Fatal(err, " | The template file is necessary.")
	}

	tmpl, err := template.New("webpage").Parse(string(htmlTmpl))
	check(err)

	pattern := regexp.MustCompile(`\.md`)
	fileName := pattern.ReplaceAllString(article.fileName, `.html`)

	file, err := os.Create(filepath.Join(pagesDir, fileName))
	check(err)
	defer file.Close()

	type pageData struct {
		Title   string
		Link    string
		Content string
	}

	baseURL, _ := url.Parse(SiteData.domain)
	fullURL := baseURL.JoinPath(fileName)
	link := fullURL.String()

	err = tmpl.Execute(file, pageData{article.title, link, article.content})
	check(err)
	fmt.Println("·", fileName, " : ", article.title)

	return nil
}

func build() {
	mdFiles := getMarkdownFiles(SiteData.pagesDir)
	for i := range mdFiles {
		parsedMD, err := parseMarkdownFile(mdFiles[i], SiteData.pagesDir)
		check(err)
		err = createPage(
			parsedMD,
			SiteData.pageTemplate,
			SiteData.pagesDir)
		check(err)
	}
}

func main() {
	fmt.Println("Created following pages:")
	build()
	CreateSitemap()
}
