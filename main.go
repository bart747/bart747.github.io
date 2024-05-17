package main

import (
	"bytes"
	"fmt"
	"github.com/yuin/goldmark"
	"github.com/yuin/goldmark/parser"
	"github.com/yuin/goldmark/renderer/html"
	"log"
	"os"
	"regexp"
	"strings"
	"text/template"
)

func check(e error) {
	if e != nil {
		panic(e)
	}
}

func getMarkdownFiles() []string {
	entries, err := os.ReadDir("./")
	if err != nil {
		log.Fatal(err)
	}

	var fileCollection []string

	for _, e := range entries {
		match, err := regexp.MatchString(`\w\.md`, e.Name())
		check(err)

		if match == true {
			fileCollection = append(fileCollection, e.Name())
		}
	}

	return fileCollection
}

type article struct {
	title   string
	name    string
	content string
}

func parseMarkdownFile(fileName string) article {
	var buf bytes.Buffer
	file, err := os.ReadFile("./" + fileName)
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

	content := buf.String()
	lines := strings.Split(string(file), "\n")
	pattern := regexp.MustCompile(`# `)
	title := pattern.ReplaceAllString(lines[0], "")

	return article{title, fileName, content}
}

func createPage(article article) {
	htmlTmpl, err := os.ReadFile("./Template.html")
	if err != nil {
		log.Fatal(err, " | The template file is necessary.")
	}

	tmpl, err := template.New("webpage").Parse(string(htmlTmpl))
	check(err)

	pattern := regexp.MustCompile(`\.md`)
	fileName := pattern.ReplaceAllString(article.name, `.html`)

	file, err := os.Create(fileName)
	check(err)
	defer file.Close()

	type pageData struct {
		Title   string
		Content string
	}

	err = tmpl.Execute(file, pageData{article.title, article.content})
	check(err)
	fmt.Println("·", fileName, " → ", article.title)
}

func build() {
	mdFiles := getMarkdownFiles()
	fmt.Println("just created:")
	for i := range mdFiles {
		createPage(parseMarkdownFile(mdFiles[i]))
	}
}

func main() {
	build()
}
