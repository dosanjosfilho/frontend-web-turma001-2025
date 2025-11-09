(function () {
  const maskers = {
    cpf(value) {
      return value
        .replace(/\D/g, '')
        .slice(0, 11)
        .replace(/(\d{3})(\d)/, '$1.$2')
        .replace(/(\d{3})(\d)/, '$1.$2')
        .replace(/(\d{3})(\d{1,2})$/, '$1-$2');
    },
    phone(value) {
      return value
        .replace(/\D/g, '')
        .slice(0, 11)
        .replace(/(\d{2})(\d)/, '($1) $2')
        .replace(/(\d{4,5})(\d{4})$/, '$1-$2');
    },
    cep(value) {
      return value
        .replace(/\D/g, '')
        .slice(0, 8)
        .replace(/(\d{5})(\d{3})$/, '$1-$2');
    }
  };

  function applyMask(input, type) {
    const mask = maskers[type];
    if (!mask) return;
    if (input.dataset.maskReady) return;
    input.dataset.maskReady = 'true';
    input.addEventListener('input', (event) => {
      const { selectionStart } = event.target;
      const maskedValue = mask(event.target.value);
      event.target.value = maskedValue;
      if (selectionStart != null) {
        event.target.setSelectionRange(selectionStart, selectionStart);
      }
    });
  }

  function init(root = document) {
    if (!root) return;
    root.querySelectorAll('[data-mask]').forEach((input) => {
      applyMask(input, input.dataset.mask);
    });
  }

  window.Masker = { init };
})();
