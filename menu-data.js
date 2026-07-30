const MENU_STRUCTURE = [
  {
    label: "Home",
    href: "/home.html"
  },
  {
    label: "Math",
    href: "/math/index.html",
    children: [
      { label: "Appunti", href: "/math/appunti.html" },
      { label: "Tutorati", href: "/math/tutorati.html" }
    ]
  },
  {
    label: "Projects",
    href: "/projects/index.html",
    children: [
      { label: "PoteSplit", href: "https://potewww.github.io/potesplit/" },
      { label: "TV-Tracker", href: "https://potewww.github.io/TV-tracker/" },
      { label: "YouTube", href: "https://www.youtube.com/@potewww" }
    ]
  },
  {
    label: "Work in Progress",
    href: "prova1.html",
    children: [

      { label: "prova2", href: "https://potewww.github.io/potesplit/" },
      { label: "prova3", href: "https://potewww.github.io/TV-tracker/" },
      {
        label: "prova4",
        href: "prova.html",
        children: [
          { label: "prova5", href: "projects/potesplit/docs.html" }
        ]
      },
      { label: "Prov6", href: "projects/altro.html" }
    ]
  }
];
