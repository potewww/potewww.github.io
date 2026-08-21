/**
 * Reusable Global Header & Dropdown Navigation Menu Component
 * Renders the site header, theme toggle, and drawer navigation menu
 * dynamically across all pages using assets from assets/icons/.
 */
class NavMenuComponent {
  constructor() {
    this.container = null;
    this.isNavOpen = false;
  }

  async render(targetContainerId = 'site-header') {
    this.container = document.getElementById(targetContainerId);
    if (!this.container) {
      const wrapper = document.querySelector('.site-wrapper') || document.body;
      this.container = document.createElement('header');
      this.container.id = targetContainerId;
      this.container.className = 'site-header';
      wrapper.insertBefore(this.container, wrapper.firstChild);
    } else {
      this.container.className = 'site-header';
    }

    // Generate Nav Content Rows from NAV_MENU_DATA
    let navRowsHTML = '';
    if (typeof NAV_MENU_DATA !== 'undefined' && Array.isArray(NAV_MENU_DATA)) {
      NAV_MENU_DATA.forEach(group => {
        group.items.forEach((item, index) => {
          const categoryText = index === 0 ? group.category : '';
          navRowsHTML += `
            <div class="nav-row">
              <div class="nav-category" style="transition-delay: ${item.categoryDelay};">${categoryText}</div>
              <a href="${item.url}" class="nav-row-link nav-item-body" style="transition-delay: ${item.bodyDelay};">
                <span class="nav-row-title">${item.title}</span>
                <span class="nav-row-detail">${item.detail}</span>
              </a>
              <div class="nav-divider ${item.dividerType}" style="transition-delay: ${item.dividerDelay};"></div>
            </div>
          `;
        });
      });
    }

    // Header & Drawer HTML structure with data-svg pointing to assets/icons/
    this.container.innerHTML = `
      <!-- Left section: Logo + Name Trigger -->
      <div class="logo-wrapper">
        <button id="logo-btn" class="logo-btn" aria-label="Toggle navigation menu" aria-expanded="false">
          <span class="logo-icon-container" data-svg="assets/icons/logo.svg" data-svg-class="logo-icon"></span>
          <div class="logo-text">
            <span class="logo-title">potewww</span>
            <span class="logo-subtitle">Filippo Rossi</span>
          </div>
        </button>
      </div>

      <!-- Right section: Theme Toggle Button -->
      <button id="theme-toggle-btn" class="theme-toggle-btn" aria-label="Toggle light/dark theme">
        <span class="theme-icon-container" data-svg="assets/icons/theme-moon.svg" data-svg-class="theme-icon"></span>
      </button>

      <!-- Navigation Drawer Backdrop Overlay -->
      <div id="nav-backdrop" class="nav-backdrop" aria-hidden="true"></div>

      <!-- Navigation Drawer Side Panel -->
      <div id="nav-panel" class="nav-panel" role="dialog" aria-label="Navigation menu" aria-hidden="true">
        <div class="nav-panel-header">
          <div class="nav-header-line"></div>
          <button id="nav-close-btn" class="nav-close-btn" aria-label="Close menu">
            <span class="close-icon-container" data-svg="assets/icons/close.svg"></span>
          </button>
        </div>

        <nav class="nav-content">
          ${navRowsHTML}
        </nav>
      </div>
    `;

    if (typeof svgLoader !== 'undefined') {
      await svgLoader.loadAll();
    }

    this.bindEvents();
  }

  bindEvents() {
    const logoBtn = document.getElementById('logo-btn');
    const navBackdrop = document.getElementById('nav-backdrop');
    const navPanel = document.getElementById('nav-panel');
    const navCloseBtn = document.getElementById('nav-close-btn');
    const themeToggleBtn = document.getElementById('theme-toggle-btn');
    const navLinks = this.container.querySelectorAll('.nav-row-link');

    const toggleNav = (open) => {
      this.isNavOpen = typeof open === 'boolean' ? open : !this.isNavOpen;

      if (this.isNavOpen) {
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

    if (logoBtn) {
      logoBtn.addEventListener('click', (e) => {
        e.preventDefault();
        toggleNav();
      });
    }

    if (navCloseBtn) {
      navCloseBtn.addEventListener('click', () => toggleNav(false));
    }

    if (navBackdrop) {
      navBackdrop.addEventListener('click', () => toggleNav(false));
    }

    navLinks.forEach(link => {
      link.addEventListener('click', () => toggleNav(false));
    });

    document.addEventListener('keydown', (e) => {
      if (e.key === 'Escape' && this.isNavOpen) {
        toggleNav(false);
      }
    });

    if (typeof themeManager !== 'undefined') {
      themeManager.init(themeToggleBtn);
    }
  }
}

const navMenuComponent = new NavMenuComponent();
