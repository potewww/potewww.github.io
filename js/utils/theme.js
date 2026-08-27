/**
 * Theme Manager Utility
 * Manages light and dark theme switching and loads moon/sun icon assets.
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

  async applyTheme(theme) {
    this.currentTheme = theme;
    this.root.classList.remove('light', 'dark');
    this.root.classList.add(theme);

    if (this.toggleBtn && typeof svgLoader !== 'undefined') {
      const iconPath = theme === 'light' ? 'assets/icons/theme-moon.svg' : 'assets/icons/theme-sun.svg';
      await svgLoader.loadInto(this.toggleBtn, iconPath, 'theme-icon');
    }
  }
}

const themeManager = new ThemeManager();
