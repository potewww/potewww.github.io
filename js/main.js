document.addEventListener('DOMContentLoaded', () => {
  // --- Theme Toggle Logic ---
  const themeToggleBtn = document.getElementById('theme-toggle-btn');
  const root = document.documentElement;

  // Icons markup
  const moonIconMarkup = `
    <svg width="17" height="17" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.8" stroke-linecap="round" stroke-linejoin="round" class="theme-icon">
      <path d="M21 12.79A9 9 0 1 1 11.21 3 7 7 0 0 0 21 12.79z" fill="#B9BAF5" fill-opacity="0.25" />
      <circle cx="17.5" cy="6" r="1" fill="#B9BAF5" stroke="none" />
    </svg>
  `;

  const sunIconMarkup = `
    <svg width="17" height="17" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.8" stroke-linecap="round" stroke-linejoin="round" class="theme-icon">
      <circle cx="12" cy="12" r="5" fill="#B9BAF5" fill-opacity="0.3" />
      <line x1="12" y1="1" x2="12" y2="3" />
      <line x1="12" y1="21" x2="12" y2="23" />
      <line x1="4.22" y1="4.22" x2="5.64" y2="5.64" />
      <line x1="18.36" y1="18.36" x2="19.78" y2="19.78" />
      <line x1="1" y1="12" x2="3" y2="12" />
      <line x1="21" y1="12" x2="23" y2="12" />
      <line x1="4.22" y1="19.78" x2="5.64" y2="18.36" />
      <line x1="18.36" y1="5.64" x2="19.78" y2="4.22" />
    </svg>
  `;

  let currentTheme = 'light';

  const applyTheme = (theme) => {
    currentTheme = theme;
    root.classList.remove('light', 'dark');
    root.classList.add(theme);
    themeToggleBtn.innerHTML = theme === 'light' ? moonIconMarkup : sunIconMarkup;
  };

  // Initialize theme
  const savedTheme = localStorage.getItem('theme');
  if (savedTheme) {
    applyTheme(savedTheme);
  } else {
    const prefersDark = window.matchMedia('(prefers-color-scheme: dark)').matches;
    applyTheme(prefersDark ? 'dark' : 'light');
  }

  themeToggleBtn.addEventListener('click', () => {
    const newTheme = currentTheme === 'light' ? 'dark' : 'light';
    localStorage.setItem('theme', newTheme);
    applyTheme(newTheme);
  });

  // --- Navigation Drawer Logic ---
  const logoBtn = document.getElementById('logo-btn');
  const navBackdrop = document.getElementById('nav-backdrop');
  const navPanel = document.getElementById('nav-panel');
  const navCloseBtn = document.getElementById('nav-close-btn');

  let isNavOpen = false;

  const toggleNav = (open) => {
    isNavOpen = typeof open === 'boolean' ? open : !isNavOpen;

    if (isNavOpen) {
      navBackdrop.classList.add('open');
      navPanel.classList.add('open');
      logoBtn.classList.add('active');
      document.body.classList.add('nav-open');
      logoBtn.setAttribute('aria-expanded', 'true');
      navPanel.setAttribute('aria-hidden', 'false');
    } else {
      navBackdrop.classList.remove('open');
      navPanel.classList.remove('open');
      logoBtn.classList.remove('active');
      document.body.classList.remove('nav-open');
      logoBtn.setAttribute('aria-expanded', 'false');
      navPanel.setAttribute('aria-hidden', 'true');
    }
  };

  logoBtn.addEventListener('click', () => toggleNav());
  navCloseBtn.addEventListener('click', () => toggleNav(false));
  navBackdrop.addEventListener('click', () => toggleNav(false));

  document.addEventListener('keydown', (e) => {
    if (e.key === 'Escape' && isNavOpen) {
      toggleNav(false);
    }
  });
});
