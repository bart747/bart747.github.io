// Prefetch link targets that have '.prefLink' class.

function prefetch(url) {
  if (!document.querySelector(`link[rel="prefetch"][href="${url}"]`)) {
    const link = document.createElement('link');
    link.rel = 'prefetch';
    link.href = url;
    document.head.appendChild(link);
  }
}

// handle intersection of target and viewport
function handleIntersect(entries, observer) {
  entries.forEach(entry => {
    if (entry.isIntersecting) {
      console.log(entry)
      const url = entry.target.href;
      prefetch(url);
      observer.unobserve(entry.target);
    }
  })
}


const observer = new IntersectionObserver(handleIntersect, {
  root: null, // Observes the viewport
  rootMargin: '0px',
  threshold: 1.0, // Trigger when [0.1-1] of the link is visible
})

// Observe all anchor links on the page
function observeLinks() {
  const links = document.querySelectorAll('.prefLink');
  links.forEach(link => {
    observer.observe(link);
  });
}

globalThis.addEventListener('load', observeLinks);
