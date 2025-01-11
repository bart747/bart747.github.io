package main

import "regexp"

func Highlight(s string) string {
	matches := map[string]string{
		`(\()|(\))`:           `color-dim`,
		`(\{)|(\})`:           `color-dim`,
		`(return )`:           `color-bright`,
		`(func )|(function )`: `color-bright`,
	}

	for k, v := range matches {
		s = regexp.MustCompile(k).ReplaceAllString(s, `<span class="`+v+`">$0</span>`)
	}

	return s
}
