/**
 * Icon Provider Utility
 * Central repository of SVG icon markups for UI components.
 */
const ICONS = {
  logo: `
    <svg width="32" height="32" viewBox="0 0 32 32" fill="none" stroke="currentColor" xmlns="http://www.w3.org/2000/svg" class="logo-icon" aria-hidden="true">
      <g stroke-width="0.5" opacity="0.5">
        <line x1="2" y1="13" x2="26" y2="13" />
        <line x1="13" y1="2" x2="13" y2="28" />
        <line x1="20" y1="20" x2="20" y2="25" />
        <line x1="16" y1="20" x2="25" y2="20" />
        <circle cx="20" cy="25" r="0.5" fill="currentColor" stroke="none" />
        <circle cx="25" cy="20" r="0.5" fill="currentColor" stroke="none" />
      </g>
      <path d="M 6 26 L 6 6 L 20 6 L 20 16 A 4 4 0 0 1 16 20 L 6 20" stroke-width="2" stroke-linecap="square" stroke-linejoin="miter" />
      <circle cx="13" cy="13" r="1.5" fill="currentColor" stroke="none" />
    </svg>
  `,

  moon: `
    <svg width="17" height="17" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.8" stroke-linecap="round" stroke-linejoin="round" class="theme-icon">
      <path d="M21 12.79A9 9 0 1 1 11.21 3 7 7 0 0 0 21 12.79z" fill="#B9BAF5" fill-opacity="0.25" />
      <circle cx="17.5" cy="6" r="1" fill="#B9BAF5" stroke="none" />
    </svg>
  `,

  sun: `
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
  `,

  close: `
    <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
      <line x1="18" y1="6" x2="6" y2="18"></line>
      <line x1="6" y1="6" x2="18" y2="18"></line>
    </svg>
  `,

  arrowLeft: `
    <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
      <line x1="19" y1="12" x2="5" y2="12"></line>
      <polyline points="12 19 5 12 12 5"></polyline>
    </svg>
  `
};
