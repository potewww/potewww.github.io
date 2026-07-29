Struttura del sito dopo la riorganizzazione
============================================

/
├── index.html          -> redirect automatico a home.html (serve per GitHub Pages)
├── home.html           -> home page (era index.html)
├── style.css
├── menu.js
├── menu-data.js         -> ora usa path assoluti (es. /math/index.html)
│
├── math/
│   ├── index.html       -> era math.html
│   ├── appunti.html     -> era appunti.html (i link ai PDF NON sono stati toccati)
│   ├── appunti/          -> QUI vanno spostati i tuoi PDF esistenti (cartella "appunti" del repo attuale)
│   ├── tutorati.html     -> placeholder nuovo
│   ├── algebra.html      -> placeholder nuovo (già linkato nel menu ma non esisteva)
│   └── analisi.html      -> placeholder nuovo (già linkato nel menu ma non esisteva)
│
├── projects/
│   └── index.html       -> era projects.html
│
└── wip/
    └── index.html       -> placeholder nuovo (già linkato dalla home ma non esisteva)

Cosa devi fare tu:
- Copiare il contenuto della tua cartella "appunti/" (i PDF) dentro math/appunti/
- youtube.html non è stato incluso: era vuoto e non referenziato da nessun link
  (il menu punta direttamente al canale YouTube esterno)
