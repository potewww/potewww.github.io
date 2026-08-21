/**
 * Menu Data Configuration
 * Single source of truth for the site dropdown navigation menu.
 */
const NAV_MENU_DATA = [
  {
    category: 'Math',
    items: [
      {
        title: 'Appunti',
        detail: 'Notes & Lectures',
        url: 'math.html#appunti',
        dividerType: 'full',
        categoryDelay: '100ms',
        bodyDelay: '120ms',
        dividerDelay: '100ms'
      },
      {
        title: 'Tutorati',
        detail: 'Tutoring Sessions',
        url: 'math.html#tutorati',
        dividerType: 'indented',
        categoryDelay: '145ms',
        bodyDelay: '165ms',
        dividerDelay: '145ms'
      }
    ]
  },
  {
    category: 'Projects',
    items: [
      {
        title: 'PoteSplit',
        detail: 'Web Application',
        url: 'projects.html#potesplit',
        dividerType: 'full',
        categoryDelay: '190ms',
        bodyDelay: '210ms',
        dividerDelay: '190ms'
      },
      {
        title: 'TV-Tracker',
        detail: 'Entertainment Tracker',
        url: 'projects.html#tv-tracker',
        dividerType: 'indented',
        categoryDelay: '235ms',
        bodyDelay: '255ms',
        dividerDelay: '235ms'
      },
      {
        title: 'YouTube',
        detail: 'Video Channel',
        url: 'projects.html#youtube',
        dividerType: 'indented',
        categoryDelay: '280ms',
        bodyDelay: '300ms',
        dividerDelay: '280ms'
      }
    ]
  },
  {
    category: 'WIP',
    items: [
      {
        title: 'prova2',
        detail: 'Experimental Draft',
        url: 'wip.html#prova2',
        dividerType: 'full',
        categoryDelay: '325ms',
        bodyDelay: '345ms',
        dividerDelay: '325ms'
      },
      {
        title: 'prova3',
        detail: 'Experimental Draft',
        url: 'wip.html#prova3',
        dividerType: 'indented',
        categoryDelay: '370ms',
        bodyDelay: '390ms',
        dividerDelay: '370ms'
      },
      {
        title: 'prova4',
        detail: 'Experimental Draft',
        url: 'wip.html#prova4',
        dividerType: 'indented',
        categoryDelay: '415ms',
        bodyDelay: '435ms',
        dividerDelay: '415ms'
      },
      {
        title: 'Prov6',
        detail: 'Experimental Draft',
        url: 'wip.html#prov6',
        dividerType: 'indented',
        categoryDelay: '460ms',
        bodyDelay: '480ms',
        dividerDelay: '460ms'
      }
    ]
  }
];

if (typeof module !== 'undefined' && module.exports) {
  module.exports = { NAV_MENU_DATA };
}
