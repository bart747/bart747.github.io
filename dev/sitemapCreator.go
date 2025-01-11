package main

import (
	"fmt"
	"log"
	"os"
	"regexp"
)

func CreateSitemap() {
	pages, err := os.ReadDir(SiteData.pagesDir)
	if err != nil {
		log.Fatal(err)
	}

	file, err := os.Create(SiteData.sitemap)
	check(err)
	defer file.Close()

	html := regexp.MustCompile(`\w\.html`)
	template := regexp.MustCompile(`Template.html`)
	index := regexp.MustCompile(`index.html`)
	page404 := regexp.MustCompile(`404.html`)
	testpage := regexp.MustCompile(`_test_`)

	file.WriteString(SiteData.domain + "/" + "\n")
	for _, p := range pages {
		if html.MatchString(p.Name()) &&
			!template.MatchString(p.Name()) &&
			!index.MatchString(p.Name()) &&
			!page404.MatchString(p.Name()) &&
			!testpage.MatchString(p.Name()) {
			file.WriteString(SiteData.domain + "/" + p.Name() + "\n")
			check(err)
		}
	}
	file.Sync()
	fmt.Println("·", "sitemap")
}
