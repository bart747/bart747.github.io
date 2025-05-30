package main

import (
	"bytes"
	"errors"
	"fmt"
	"github.com/alecthomas/chroma/v2"
	formatHTML "github.com/alecthomas/chroma/v2/formatters/html"
	"github.com/alecthomas/chroma/v2/lexers"
	//	"github.com/alecthomas/chroma/v2/quick"
	"github.com/alecthomas/chroma/v2/styles"
	"github.com/yuin/goldmark"
	//	"github.com/yuin/goldmark/parser"
	"github.com/yuin/goldmark/renderer/html"
	"log"
	"net/url"
	"os"
	"path/filepath"
	"regexp"
	"strings"
	"text/template"
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
	file, err := os.ReadFile(filepath.Join(fileDir, fileName))
	check(err)

	if strings.Contains(string(file), "```") {
		fmt.Println("The markdown file contains ```, which might result in improper handling of code snippets. Consider [<pre><code>].")
	}

	markdown := goldmark.New(
		goldmark.WithRendererOptions(
			html.WithUnsafe(),
		),
	)

	var buf bytes.Buffer
	if err := markdown.Convert(file, &buf); err != nil {
		check(err)
	}
	hl := func(src string) string {
		src = regexp.MustCompile(`\n<pre><code>\n|\n</code></pre>`).ReplaceAllString(src, "")

		lexer := lexers.Get("C")
		if lexer == nil {
			lexer = lexers.Fallback
		}

		lexer = chroma.Coalesce(lexer)

		formatter := formatHTML.New(formatHTML.WithLineNumbers(true), formatHTML.WithClasses(true))

		var w bytes.Buffer
		check(err)
		iterator, err := lexer.Tokenise(nil, src)
		check(err)
		errf := formatter.Format(&w, styles.Fallback, iterator)
		check(errf)

		return w.String()
	}

	patternCode := regexp.MustCompile(`\n<pre><code>[\s\S]+?<\/code><\/pre>\n`)
	content := patternCode.ReplaceAllStringFunc(buf.String(), hl)

	lines := strings.Split(string(file), "\n")
	patternHeadline := regexp.MustCompile(`# `)

	findTitle := func(lines []string) (string, error) {
		for i := range lines {
			if strings.Contains(lines[i], patternHeadline.String()) {
				title := patternHeadline.ReplaceAllString(lines[i], "")
				return title, nil
			}
		}
		return "", errors.New(fileName + " does not have a title (a headline with '#'). Titles are required.")
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
