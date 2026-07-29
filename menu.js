function buildMenuList(items) {
  const ul = document.createElement('ul');

  items.forEach(item => {
    const li = document.createElement('li');

    if (item.children && item.children.length > 0) {
      li.classList.add('has-submenu');

      const toggle = document.createElement('div');
      toggle.classList.add('submenu-toggle');

      const label = document.createElement('a');
      label.classList.add('submenu-label');
      label.href = item.href;
      label.textContent = item.label;

      const arrow = document.createElement('span');
      arrow.classList.add('submenu-arrow');
      arrow.textContent = '▸';

      toggle.appendChild(label);
      toggle.appendChild(arrow);
      li.appendChild(toggle);

      arrow.addEventListener('click', () => {
        li.classList.toggle('open');
      });

      const subUl = buildMenuList(item.children);
      subUl.classList.add('submenu');
      li.appendChild(subUl);
    } else {
      const link = document.createElement('a');
      link.href = item.href;
      link.textContent = item.label;
      li.appendChild(link);
    }

    ul.appendChild(li);
  });

  return ul;
}

function buildNavMenu() {
  const navMenu = document.getElementById('navMenu');
  if (!navMenu) return;

  const rootUl = buildMenuList(MENU_STRUCTURE);
  navMenu.appendChild(rootUl);
}

document.addEventListener('DOMContentLoaded', buildNavMenu);
