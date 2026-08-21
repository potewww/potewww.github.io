/**
 * Theme Manager Utility
 * Manages light and dark theme switching and persistence.
 */
class ThemeManager {
  constructor() {
    this.root = document.documentElement;
    this.currentTheme = 'light';
    this.toggleBtn = null;
  }

  init(toggleBtnElement) {
    this.toggleBtn = toggleBtnElement;

    const savedTheme = localStorage.getItem('theme');
    if (savedTheme) {
      this.applyTheme(savedTheme);
    } else {
      const prefersDark = window.matchMedia('(prefers-color-scheme: dark)').matches;
      this.applyTheme(prefersDark ? 'dark' : 'light');
    }

    if (this.toggleBtn) {
      this.toggleBtn.addEventListener('click', () => {
        const newTheme = this.currentTheme === 'light' ? 'dark' : 'light';
        localStorage.setItem('theme', newTheme);
        this.applyTheme(newTheme);
      });
    }
  }

  applyTheme(theme) {
    this.currentTheme = theme;
    this.root.classList.remove('light', 'dark');
    this.root.classList.add(theme);

    if (this.toggleBtn && typeof ICONS !== 'undefined') {
      this.toggleBtn.innerHTML = theme === 'light' ? ICONS.moon : ICONS.sun;
    }
  }
}

const themeManager = new ThemeManager();
