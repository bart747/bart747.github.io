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

	err := os.Mkdir("testDir", 0755)
	check(err)
	defer os.RemoveAll("testDir")

	file, err := os.Create("testDir/testFile.md")
	check(err)
	defer file.Close()

	file.WriteString("# Test Headline")
	check(err)
	file.Sync()

	parsedMD, err := parseMarkdownFile("testFile.md", "testDir")
	check(err)
	err = createPage(parsedMD, SiteData.pageTemplate, "testDir")
	check(err)
	page, err := os.ReadFile("testDir/testFile.html")
	check(err)

	matched, err := regexp.Match(`<!DOCTYPE html>`, page)
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

	err := os.Mkdir("testDir", 0755)
	check(err)
	defer os.RemoveAll("testDir")

	file, err := os.Create("testDir/testFile.md") // in case no files
	check(err)
	defer file.Close()
	files := getMarkdownFiles("testDir")

	isNonEmpty := len(files) > 0

	check(err)

	if !isNonEmpty || err != nil {
		t.Fatalf(`getMarkdownFiles faild to collect a file.`)
	}
}
