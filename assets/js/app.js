(function () {
  const routes = {
    home: Templates.home,
    projects: Templates.projects,
    cadastro: Templates.cadastro
  };

  const viewRoot = document.getElementById('view-root');
  const initialRoute = window.location.hash.replace('#', '') || window.__INITIAL_ROUTE__ || 'home';

  if (!viewRoot) return;

  function updateNav(route) {
    document.querySelectorAll('[data-route]').forEach((link) => {
      const isActive = link.dataset.route === route;
      if (isActive) {
        link.setAttribute('aria-current', 'page');
      } else {
        link.removeAttribute('aria-current');
      }
    });
  }

  function render(route) {
    const template = routes[route] || routes.home;
    viewRoot.innerHTML = template();
    updateNav(route);
    if (window.Masker) {
      window.Masker.init(viewRoot);
    }
    if (window.FormValidator) {
      window.FormValidator.init(viewRoot);
    }
    document.dispatchEvent(new CustomEvent('spa:render', { detail: { route } }));
  }

  function getRouteFromHash() {
    const hash = window.location.hash.replace('#', '');
    return hash && routes[hash] ? hash : null;
  }

  function navigate(route) {
    if (!routes[route]) {
      route = 'home';
    }
    if (window.location.hash.replace('#', '') === route) {
      render(route);
    } else {
      window.location.hash = route;
    }
  }

  document.addEventListener('click', (event) => {
    const link = event.target.closest('[data-route]');
    if (!link) return;
    const route = link.dataset.route;
    if (!route) return;
    event.preventDefault();
    navigate(route);
  });

  window.addEventListener('hashchange', () => {
    const route = getRouteFromHash() || window.__INITIAL_ROUTE__ || 'home';
    render(route);
  });

  navigate(initialRoute);
})();
