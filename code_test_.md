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

asdaf && aslfjjahf || adga

sads >= aslfjjahf
asf < asf

func createSitemap() {
	entries, err := os.ReadDir(siteData.pagesDir)
	if err != nil {
		log.Fatal(err)
	}

	file, err := os.Create(siteData.sitemap)
	check(err)
	defer file.Close()

	for _, e := range entries {
		match, err := regexp.Compile(`\w\.html`)
		check(err)
		nmatch, err := regexp.Compile(`Template.html`)
		check(err)
		nmatch2, err := regexp.Compile(`index.html`)
		check(err)
		if match.MatchString(e.Name()) && !nmatch.MatchString(e.Name()) || !nmatch2.MatchString(e.Name()) {
			file.WriteString("https://bart747.github.io/" + e.Name() + "\n")
			check(err)
		}
	}
	file.Sync()
	fmt.Println("·", "sitemap")
}

for k, v := range matches {
	s = regexp.MustCompile(k).ReplaceAllString(s, `<span class="`+v+`">$0</span>`)
}

type person struct {
    name string
    age  int
}

window.addEventListener("load", () => {
  const links = document.querySelectorAll('.prefLink');
  function createPrefLink(link) {
    const url = link.getAttribute('href');
    if (!document.querySelector(`link[rel="prefetch"][href="${url}"]`)) {
      const prefLink = document.createElement('link');
      prefLink.rel = 'prefetch';
      prefLink.href = url;
      document.head.appendChild(prefLink);
    }
  }
  links.forEach(link => {
    link.addEventListener('mouseover', () => createPrefLink(link));
    link.addEventListener('touchstart', () => createPrefLink(link));
  });
});

def my_function():
  print("Hello from a function")

interface SquareConfig {
  color?: string;
  width?: number;
}
 
function createSquare(config: SquareConfig): { color: string; area: number } {
  let newSquare = { color: "white", area: 100 };
  if (config.color) {
    newSquare.color = config.color;
  }
  if (config.width) {
    newSquare.area = config.width * config.width;
  }
  return newSquare;
}
 
let mySquare = createSquare({ color: "black" });


```
