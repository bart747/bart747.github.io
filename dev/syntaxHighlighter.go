package main

import (
	"regexp"
)

func Highlight(s string) string {
	matches := []string{`\(`, `\)`, `\{`, `\}`, `\[`, `\]`}

	for _, v := range matches {
		pattern := regexp.MustCompile(v)
		s = pattern.ReplaceAllString(s, `<span style="color:#888;">$0</span>`)
	}

	return s
}

// This is more complex and fancy version that uses Chroma. So far the boring-simple is enough.
/*
	hl := func(src string) string {
		src = regexp.MustCompile(`\n<pre><code>\n|\n</code></pre>`).ReplaceAllString(src, "")

		lexer := lexers.Get("TypeScript")
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
*/
