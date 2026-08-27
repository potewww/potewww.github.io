/**
 * Asset SVG Loader Utility
 * Loads SVG vector assets directly from files in the assets/ directory.
 */
class SVGLoader {
  constructor() {
    this.cache = new Map();
  }

  async fetchSVG(url) {
    if (this.cache.has(url)) {
      return this.cache.get(url);
    }

    try {
      const fetchUrl = url.includes('?') ? url : `${url}?v=2125`;
      const response = await fetch(fetchUrl);
      if (!response.ok) throw new Error(`HTTP error! status: ${response.status}`);
      const text = await response.text();
      this.cache.set(url, text);
      return text;
    } catch (err) {
      console.warn(`SVGLoader: Fallback for ${url}`, err);
      return null;
    }
  }

  async loadInto(element, url, className = '') {
    if (!element) return;
    const svgText = await this.fetchSVG(url);

    if (svgText) {
      const parser = new DOMParser();
      const doc = parser.parseFromString(svgText, 'image/svg+xml');
      const svgEl = doc.querySelector('svg');
      if (svgEl) {
        if (className) svgEl.setAttribute('class', className);
        element.innerHTML = '';
        element.appendChild(svgEl);
        return;
      }
    }

    // Fallback if fetch fails
    const img = document.createElement('img');
    img.src = url;
    if (className) img.className = className;
    img.alt = 'Asset SVG';
    element.innerHTML = '';
    element.appendChild(img);
  }

  async loadAll() {
    const targets = document.querySelectorAll('[data-svg]');
    const promises = Array.from(targets).map(el => {
      const url = el.getAttribute('data-svg');
      const cls = el.getAttribute('data-svg-class') || '';
      return this.loadInto(el, url, cls);
    });
    await Promise.all(promises);
  }
}

const svgLoader = new SVGLoader();
