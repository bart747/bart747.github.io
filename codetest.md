# Code test

```
func createPage(article article) {
	htmlTmpl, err := os.ReadFile(siteData.pageTemplate)
	if err != nil {
		log.Fatal(err, " | The template file is necessary.")
	}

	tmpl, err := template.New("webpage").Parse(string(htmlTmpl))
	check(err)

	pattern := regexp.MustCompile(`\.md`)
	fileName := pattern.ReplaceAllString(article.fileName, `.html`)

	file, err := os.Create(siteData.pagesDir + fileName)
	check(err)
	defer file.Close()

	type pageData struct {
		Title   string
		Link    string
		Content string
	}

	err = tmpl.Execute(file, pageData{article.title, siteData.domain + "/" + fileName, article.content})
	check(err)
	fmt.Println("·", fileName, " : ", article.title)
}

func getMarkdownFiles() []string {
	entries, err := os.ReadDir(siteData.pagesDir)
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
```
