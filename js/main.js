/**
 * Main Application Script
 * Initializes shared components and loads asset SVGs on DOM ready.
 */
document.addEventListener('DOMContentLoaded', async () => {
  // Render shared global header and navigation menu component
  if (typeof navMenuComponent !== 'undefined') {
    await navMenuComponent.render('site-header');
  }

  // Load all asset SVGs specified in data-svg attributes across the page
  if (typeof svgLoader !== 'undefined') {
    await svgLoader.loadAll();
  }
});
