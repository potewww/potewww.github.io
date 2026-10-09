/**
 * tutorati.js — Accordion, Search & Filter logic for the Tutorati page.
 * No dependencies. Runs after DOMContentLoaded.
 */
document.addEventListener('DOMContentLoaded', () => {
  const searchInput  = document.getElementById('tutorati-search');
  const emptyState   = document.getElementById('tutorati-empty');
  const coursesWrap  = document.getElementById('tutorati-courses');
  const filterBtns   = document.querySelectorAll('.filter-tag');
  const accordions   = document.querySelectorAll('.course-accordion');

  let activeFilter = 'all';

  /* ─── Accordion Toggle ─── */
  accordions.forEach(acc => {
    const header = acc.querySelector('.accordion-header');
    const body   = acc.querySelector('.accordion-body');

    header.addEventListener('click', () => {
      const isOpen = header.getAttribute('aria-expanded') === 'true';
      toggleAccordion(header, body, !isOpen);
    });

    // Keyboard: Enter / Space
    header.addEventListener('keydown', (e) => {
      if (e.key === 'Enter' || e.key === ' ') {
        e.preventDefault();
        header.click();
      }
    });
  });

  function toggleAccordion(header, body, open) {
    header.setAttribute('aria-expanded', String(open));
    if (open) {
      // Expand: set max-height to scrollHeight, then clear after transition
      body.style.maxHeight = body.scrollHeight + 'px';
      const onEnd = () => {
        body.style.maxHeight = 'none';
        body.removeEventListener('transitionend', onEnd);
      };
      body.addEventListener('transitionend', onEnd);
    } else {
      // Collapse: first lock to current height, then animate to 0
      body.style.maxHeight = body.scrollHeight + 'px';
      // Force reflow so the browser registers the current value
      void body.offsetHeight;
      body.style.maxHeight = '0';
    }
  }

  function closeAccordion(acc) {
    const header = acc.querySelector('.accordion-header');
    const body   = acc.querySelector('.accordion-body');
    header.setAttribute('aria-expanded', 'false');
    body.style.maxHeight = '0';
  }

  /* ─── Filter Tags ─── */
  filterBtns.forEach(btn => {
    btn.addEventListener('click', () => {
      filterBtns.forEach(b => b.classList.remove('active'));
      btn.classList.add('active');
      activeFilter = btn.dataset.filter;
      applyFilters();
    });
  });

  /* ─── Search ─── */
  searchInput.addEventListener('input', () => {
    applyFilters();
  });

  /* ─── Core filter logic ─── */
  function applyFilters() {
    const query = searchInput.value.trim().toLowerCase();
    let visibleCount = 0;

    accordions.forEach(acc => {
      const year     = acc.dataset.year || '';
      const course   = acc.dataset.course || '';
      const keywords = acc.dataset.keywords || '';

      // Year filter
      const yearMatch = (activeFilter === 'all') || (year === activeFilter);

      // Text search: match against course name, year, keywords, and session topics
      let textMatch = true;
      if (query) {
        const haystack = [
          course,
          year,
          keywords,
          // Also include session topic text
          ...Array.from(acc.querySelectorAll('.session-topic')).map(el => el.textContent)
        ].join(' ').toLowerCase();
        textMatch = haystack.includes(query);
      }

      const show = yearMatch && textMatch;
      acc.hidden = !show;

      if (show) {
        visibleCount++;
      } else {
        closeAccordion(acc);
      }
    });

    // Empty state
    emptyState.hidden = (visibleCount > 0);
    coursesWrap.hidden = (visibleCount === 0);
  }
});
