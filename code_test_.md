# Code test

Some code snippets.

<pre><code>
Go
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

</code></pre>

Anoter one.

<pre><code>
JavaScript
function prefetch(url) {
  if (!document.querySelector(`link[rel="prefetch"][href="${url}"]`)) {
    const link = document.createElement('link');
    link.rel = 'prefetch';
    link.href = url;
    document.head.appendChild(link);
  }
}

console.log("<div>abc</div>")

</code></pre>

<pre><code>
Go
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

s := true
a := 3
b := 4.4
fmt.Println(a == b)  // false
fmt.Println(a != b)  // true
fmt.Println(a < b)   // true
fmt.Println(a > b)   // false
fmt.Println(a >= b)  // false
fmt.Println(a <= b)  // true
</code></pre>

<pre><code>
TypeScript
type DescribableFunction = {
  description: string;
  (someArg: number): boolean;
};
function doSomething(fn: DescribableFunction) {
  console.log(fn.description + " returned " + fn(6));
}
 
function myFunc(someArg: number) {
  return someArg > 3;
}
myFunc.description = "default description";
 
doSomething(myFunc);

function makeDate(timestamp: number): Date;
function makeDate(m: number, d: number, y: number): Date;
function makeDate(mOrTimestamp: number, d?: number, y?: number): Date {
  if (d !== undefined && y !== undefined) {
    return new Date(y, mOrTimestamp, d);
  } else {
    return new Date(mOrTimestamp);
  }
}
const d1 = makeDate(12345678);
const d2 = makeDate(5, 5, 5);
const d3 = makeDate(1, 3);

const a = 1.01
</code></pre>
