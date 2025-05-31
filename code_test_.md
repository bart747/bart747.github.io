# Code test

Some code snippets.

<pre><code>
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
</code></pre>

Anoter one.

```
function prefetch(url) {
  if (!document.querySelector(`link[rel="prefetch"][href="${url}"]`)) {
    const link = document.createElement('link');
    link.rel = 'prefetch';
    link.href = url;
    document.head.appendChild(link);
  }
}

```

<pre><code>
if lexer == nil {
	lexer = lexers.Fallback
}

if lexer > 5 {
	lexer = lexers.Fallback
}

func Highlight(s string) string {
	matches := map[string]string{
		`\(`: `#999`,
		`\)`: `#999`,
		`\{`: `#999`,
		`\}`: `#999`,
		`\[`: `#aaa`,
		`\]`: `#aaa`,
	}

	for k, v := range matches {
		s = regexp.MustCompile(k).ReplaceAllString(s, `<span style="color:`+v+`;">$0</span>`)
	}

	return s
}
</code></pre>

