(function () {
  const body = document.body;
  const navToggle = document.querySelector('[data-menu-toggle]');
  const navMenu = document.querySelector('[data-nav-menu]');

  function toggleNav(force) {
    if (!navMenu || !navToggle) return;
    const isOpen = typeof force === 'boolean' ? force : !navMenu.classList.contains('is-open');
    navMenu.classList.toggle('is-open', isOpen);
    navToggle.setAttribute('aria-expanded', String(isOpen));
    body.style.overflow = isOpen ? 'hidden' : '';
  }

  navToggle?.addEventListener('click', () => toggleNav());

  navMenu?.addEventListener('click', (event) => {
    if (event.target.closest('a')) {
      toggleNav(false);
    }
  });

  const desktopMedia = window.matchMedia('(min-width: 768px)');
  desktopMedia.addEventListener('change', (event) => {
    if (event.matches) {
      toggleNav(false);
    }
  });

  document.addEventListener('click', (event) => {
    const submenuToggle = event.target.closest('[data-submenu-toggle]');
    if (submenuToggle) {
      const expanded = submenuToggle.getAttribute('aria-expanded') === 'true';
      submenuToggle.setAttribute('aria-expanded', String(!expanded));
      const submenu = submenuToggle.closest('.has-submenu')?.querySelector('[data-submenu]');
      submenu?.classList.toggle('is-open', !expanded);
    }

    const toastTrigger = event.target.closest('[data-toast-trigger]');
    if (toastTrigger) {
      event.preventDefault();
      showToast();
    }

    const toastDismiss = event.target.closest('[data-toast-dismiss]');
    if (toastDismiss) {
      event.preventDefault();
      hideToast();
    }

    const modalOpen = event.target.closest('[data-modal-open]');
    if (modalOpen) {
      event.preventDefault();
      openModal(modalOpen.dataset.modalOpen);
    }

    const modalClose = event.target.closest('[data-modal-close]');
    if (modalClose) {
      event.preventDefault();
      closeModal();
    }

    const modalOverlay = document.querySelector('[data-modal]');
    if (modalOverlay && modalOverlay.classList.contains('is-visible')) {
      if (event.target === modalOverlay) {
        closeModal();
      }
    }
  });

  function getToast() {
    return document.querySelector('[data-toast]');
  }

  function showToast() {
    const toast = getToast();
    if (!toast) return;
    toast.classList.add('is-visible');
    if (toast.dataset.timeoutId) {
      clearTimeout(Number(toast.dataset.timeoutId));
    }
    const id = window.setTimeout(() => {
      toast.classList.remove('is-visible');
      toast.dataset.timeoutId = '';
    }, 4000);
    toast.dataset.timeoutId = String(id);
  }

  function hideToast() {
    const toast = getToast();
    if (!toast) return;
    toast.classList.remove('is-visible');
    if (toast.dataset.timeoutId) {
      clearTimeout(Number(toast.dataset.timeoutId));
      toast.dataset.timeoutId = '';
    }
  }

  function getModal() {
    return document.querySelector('[data-modal]');
  }

  function openModal(target) {
    const modal = getModal();
    if (!modal) return;
    const modalId = modal.getAttribute('id');
    if (!modalId || !target || !modalId.endsWith(target)) return;
    modal.classList.add('is-visible');
    const content = modal.querySelector('[data-modal-content]');
    content?.focus();
    body.style.overflow = 'hidden';
  }

  function closeModal() {
    const modal = getModal();
    if (!modal) return;
    modal.classList.remove('is-visible');
    body.style.overflow = '';
  }

  window.addEventListener('keydown', (event) => {
    if (event.key === 'Escape') {
      closeModal();
      hideToast();
    }
  });
})();
