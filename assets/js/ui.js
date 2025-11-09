const body = document.body;
const navToggle = document.querySelector('[data-menu-toggle]');
const navMenu = document.querySelector('[data-nav-menu]');
const submenuToggles = document.querySelectorAll('[data-submenu-toggle]');
const toast = document.querySelector('[data-toast]');
const toastTrigger = document.querySelector('[data-toast-trigger]');
const toastDismiss = document.querySelector('[data-toast-dismiss]');
const modal = document.querySelector('[data-modal]');
const modalOpeners = document.querySelectorAll('[data-modal-open]');
const modalCloser = document.querySelector('[data-modal-close]');

function toggleNav() {
  if (!navMenu || !navToggle) return;
  const isOpen = navMenu.classList.toggle('is-open');
  navToggle.setAttribute('aria-expanded', String(isOpen));
  body.style.overflow = isOpen ? 'hidden' : '';
}

navToggle?.addEventListener('click', toggleNav);

navMenu?.querySelectorAll('a').forEach((link) => {
  link.addEventListener('click', () => {
    if (navMenu.classList.contains('is-open')) {
      toggleNav();
    }
  });
});

const desktopMedia = window.matchMedia('(min-width: 768px)');
const handleBreakpointChange = (event) => {
  if (event.matches) {
    navMenu?.classList.remove('is-open');
    navToggle?.setAttribute('aria-expanded', 'false');
    body.style.overflow = '';
  }
};
desktopMedia.addEventListener('change', handleBreakpointChange);

submenuToggles.forEach((button) => {
  button.addEventListener('click', () => {
    const expanded = button.getAttribute('aria-expanded') === 'true';
    button.setAttribute('aria-expanded', String(!expanded));
    const submenu = button.closest('.has-submenu')?.querySelector('[data-submenu]');
    submenu?.classList.toggle('is-open', !expanded);
  });
});

function showToast() {
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

toastTrigger?.addEventListener('click', showToast);

toastDismiss?.addEventListener('click', () => {
  toast?.classList.remove('is-visible');
  if (toast?.dataset.timeoutId) {
    clearTimeout(Number(toast.dataset.timeoutId));
    toast.dataset.timeoutId = '';
  }
});

function openModal(target) {
  if (!modal) return;
  const modalId = modal.getAttribute('id');
  if (!modalId || !target || !modalId.endsWith(target)) return;
  modal.classList.add('is-visible');
  const content = modal.querySelector('[data-modal-content]');
  content?.focus();
  body.style.overflow = 'hidden';
}

function closeModal() {
  if (!modal) return;
  modal.classList.remove('is-visible');
  body.style.overflow = '';
}

modalOpeners.forEach((btn) => {
  btn.addEventListener('click', () => {
    const target = btn.dataset.modalOpen;
    openModal(target);
  });
});

modalCloser?.addEventListener('click', closeModal);

modal?.addEventListener('click', (event) => {
  if (event.target === modal) {
    closeModal();
  }
});

window.addEventListener('keydown', (event) => {
  if (event.key === 'Escape') {
    closeModal();
    toast?.classList.remove('is-visible');
  }
});
