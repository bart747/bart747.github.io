package main

import (
	"os"
	"regexp"
	"testing"
)

func TestPageCreation(t *testing.T) {

	check := func(err error) {
		if err != nil {
			t.Fatal(err)
		}
	}

	file, err := os.Create("../testFile.md")
	check(err)
	defer file.Close()
	file.WriteString("# Test Headline")
	check(err)
	file.Sync()

	parsedMD, err := parseMarkdownFile("testFile.md")
	check(err)
	err = createPage(parsedMD)
	check(err)
	page, err := os.ReadFile("../testFile.html")
	check(err)

	matched, err := regexp.Match(`<!DOCTYPE html>`, page)
	check(err)

	err = os.Remove("../testFile.md")
	check(err)
	err = os.Remove("../testFile.html")
	check(err)

	if !matched || err != nil {
		t.Fatalf(`createPage didn't create a valid page.`)
	}
}

func TestFileCollecting(t *testing.T) {
	check := func(err error) {
		if err != nil {
			t.Fatal(err)
		}
	}

	file, err := os.Create("../testFile.md") // in case no files
	check(err)
	defer file.Close()
	files := getMarkdownFiles()

	isNonEmpty := len(files) > 0

	err = os.Remove("../testFile.md")
	check(err)

	if !isNonEmpty || err != nil {
		t.Fatalf(`getMarkdownFiles faild to collect a file.`)
	}
}
