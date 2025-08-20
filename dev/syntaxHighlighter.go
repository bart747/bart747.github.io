package main

import (
	"bytes"
	"github.com/alecthomas/chroma/v2
	"github.com/alecthomas/chroma/v2/formatters/html"
	"github.com/alecthomas/chroma/v2/lexers"
	"github.com/alecthomas/chroma/v2/styles"
	"regexp"
	"strings"
)

/*
// Simple approach
func Highlight(s string) string {
	matches := []string{`\(`, `\)`, `\{`, `\}`, `\[`, `\]`}

	for _, v := range matches {
		pattern := regexp.MustCompile(v)
		s = pattern.ReplaceAllString(s, `<span style="color:#888;">$0</span>`)
	}

	return s
}
*/

// This is more complex and fancy version that uses Chroma.
var langNames = []string{"C", "CSS", "Go", "HTML", "JavaScript", "Python", "react", "Rust", "TypeScript"}

func Highlight(src string) string {
	src = regexp.MustCompile(`<pre><code>\n|</code></pre>`).ReplaceAllString(src, "")

	lines := strings.Split(string(src), "\n")

	// There's assumption that the first line of the code block might be the language name.
	langName := ""
	content := src
	for _, name := range langNames {
		if name == lines[0] {
			langName = lines[0]
			content = strings.Join(lines[1:], "\n")
		}
	}

	lexer := lexers.Get(langName)
	if lexer == nil {
		lexer = lexers.Fallback
	}
	// Some lexers can be extremely chatty.
	// To mitigate this, coalesce runs of identical token types into a single token.
	lexer = chroma.Coalesce(lexer)

	formatter := html.New(html.WithLineNumbers(true), html.WithClasses(true))

	var w bytes.Buffer

	iterator, err := lexer.Tokenise(nil, content)
	check(err)
	errf := formatter.Format(&w, styles.Fallback, iterator)
	check(errf)

	return w.String()
}
