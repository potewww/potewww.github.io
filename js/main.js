/**
 * Main Application Script
 * Initializes shared components and page-specific handlers on DOM ready.
 */
document.addEventListener('DOMContentLoaded', () => {
  // Render shared global header and navigation menu component
  if (typeof navMenuComponent !== 'undefined') {
    navMenuComponent.render('site-header');
  }
});
