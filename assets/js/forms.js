(function () {
  const STORAGE_KEY = 'redeviva-form';
  const messages = {
    nome: 'Informe nome e sobrenome.',
    email: 'Digite um e-mail válido (exemplo@dominio.com).',
    cpf: 'CPF deve conter 11 dígitos.',
    telefone: 'Telefone precisa ter DDD e 9 dígitos.',
    nascimento: 'Informe a data de nascimento.',
    endereco: 'Endereço deve ter ao menos 8 caracteres.',
    cep: 'CEP deve conter 8 dígitos.',
    cidade: 'Informe a cidade.',
    estado: 'Selecione um estado.',
    perfil: 'Escolha um perfil de participação.',
    areas: 'Descreva suas áreas de interesse (mínimo 10 caracteres).'
  };

  function digits(value) {
    return (value || '').replace(/\D/g, '');
  }

  function readStorage() {
    try {
      return JSON.parse(localStorage.getItem(STORAGE_KEY)) || {};
    } catch (error) {
      console.warn('Não foi possível ler o armazenamento local.', error);
      return {};
    }
  }

  function writeStorage(data) {
    try {
      localStorage.setItem(STORAGE_KEY, JSON.stringify(data));
    } catch (error) {
      console.warn('Não foi possível salvar no armazenamento local.', error);
    }
  }

  function clearStorage() {
    try {
      localStorage.removeItem(STORAGE_KEY);
    } catch (error) {
      console.warn('Não foi possível limpar o armazenamento local.', error);
    }
  }

  function saveFieldValue(field) {
    if (!field.name) return;
    const data = readStorage();
    if (field.type === 'checkbox') {
      data[field.name] = field.checked;
    } else {
      data[field.name] = field.value;
    }
    writeStorage(data);
  }

  function hydrateForm(form) {
    const saved = readStorage();
    Object.entries(saved).forEach(([name, value]) => {
      const field = form.elements.namedItem(name);
      if (!field) return;
      if (field.type === 'checkbox') {
        field.checked = Boolean(value);
      } else if (typeof value === 'string') {
        field.value = value;
      }
      const eventName = field.type === 'checkbox' || field.tagName === 'SELECT' ? 'change' : 'input';
      field.dispatchEvent(new Event(eventName, { bubbles: true }));
    });
  }

  function validateField(field) {
    const value = field.value.trim();
    let valid = true;

    switch (field.name) {
      case 'nome':
        valid = value.split(' ').filter(Boolean).length >= 2;
        break;
      case 'email':
        valid = /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(value);
        break;
      case 'cpf':
        valid = digits(value).length === 11;
        break;
      case 'telefone':
        valid = [10, 11].includes(digits(value).length);
        break;
      case 'nascimento':
        valid = Boolean(value);
        break;
      case 'endereco':
        valid = value.length >= 8;
        break;
      case 'cep':
        valid = digits(value).length === 8;
        break;
      case 'cidade':
        valid = value.length > 1;
        break;
      case 'estado':
        valid = value.length === 2;
        break;
      case 'perfil':
        valid = Boolean(value);
        break;
      case 'areas':
        valid = value.length >= 10;
        break;
      default:
        valid = field.checkValidity();
    }

    return { valid, message: valid ? '' : messages[field.name] };
  }

  function setError(field, message) {
    const group = field.closest('.form-group') || field.parentElement;
    if (!group) return;
    group.classList.add('has-error');
    let helper = group.querySelector('.form-error');
    if (!helper) {
      helper = document.createElement('p');
      helper.className = 'form-error';
      group.appendChild(helper);
    }
    helper.textContent = message;
  }

  function clearError(field) {
    const group = field.closest('.form-group') || field.parentElement;
    if (!group) return;
    group.classList.remove('has-error');
    const helper = group.querySelector('.form-error');
    if (helper) helper.remove();
  }

  function attach(form) {
    if (form.dataset.validatorReady) return;
    form.dataset.validatorReady = 'true';

    hydrateForm(form);

    const feedback = document.createElement('div');
    feedback.className = 'form-feedback';
    feedback.setAttribute('aria-live', 'polite');
    form.prepend(feedback);

    const displayFeedback = (message = '') => {
      feedback.textContent = message;
    };

    const handleTyping = (event) => {
      const field = event.target;
      if (!field.name) return;
      const { valid } = validateField(field);
      if (valid) {
        clearError(field);
        displayFeedback('');
      }
      saveFieldValue(field);
    };

    form.addEventListener('input', handleTyping);
    form.addEventListener('change', handleTyping);

    form.addEventListener('submit', (event) => {
      const fields = Array.from(form.querySelectorAll('input, select, textarea'));
      const invalidFields = [];

      fields.forEach((field) => {
        if (!field.name) return;
        const { valid, message } = validateField(field);
        if (!valid) {
          invalidFields.push({ field, message });
          setError(field, message);
        } else {
          clearError(field);
        }
      });

      if (invalidFields.length) {
        event.preventDefault();
        const firstInvalid = invalidFields[0];
        firstInvalid.field.focus();
        displayFeedback('Revise os campos destacados antes de enviar.');
      } else {
        displayFeedback('Tudo certo! Seus dados serão enviados.');
        clearStorage();
      }
    });
  }

  function init(root = document) {
    if (!root) return;
    root.querySelectorAll('[data-validate]').forEach(attach);
  }

  window.FormValidator = { init };
})();
