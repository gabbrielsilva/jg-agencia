import { validateContact, composeMessage, serviceLabels } from './contact-validation.js';
const form = document.querySelector('#contact-form');
const confirmation = document.querySelector('#contact-confirmation');
const summary = document.querySelector('#form-errors');
form.hidden = false;
form.noValidate = true;
const selection = new URLSearchParams(location.search).get('servico');
if (Object.hasOwn(serviceLabels, selection)) form.elements.service.value = selection;
function showError(key, message) {
  const field = form.elements[key];
  document.querySelector(`#${key}-error`).textContent = message || '';
  if (message) field.setAttribute('aria-invalid', 'true');
  else field.removeAttribute('aria-invalid');
}
form.addEventListener('submit', event => {
  event.preventDefault();
  const values = Object.fromEntries(new FormData(form));
  const errors = validateContact(values);
  ['name', 'company', 'phone', 'email', 'service', 'message'].forEach(key => showError(key, errors[key]));
  const keys = Object.keys(errors);
  if (keys.length) {
    summary.textContent = 'Revise os campos indicados antes de continuar.';
    form.elements[keys[0]].focus();
    return;
  }
  summary.textContent = '';
  const message = composeMessage(values);
  document.querySelector('#send-whatsapp').href = `${form.dataset.whatsapp}?text=${encodeURIComponent(message)}`;
  document.querySelector('#send-email').href = `mailto:${form.dataset.email}?subject=${encodeURIComponent('Contato pelo site — ' + serviceLabels[values.service])}&body=${encodeURIComponent(message)}`;
  form.hidden = true;
  confirmation.hidden = false;
  confirmation.focus();
});
form.addEventListener('input', event => {
  if (event.target.name) {
    showError(event.target.name, '');
    summary.textContent = '';
  }
});
document.querySelector('#edit-message').addEventListener('click', () => {
  confirmation.hidden = true;
  form.hidden = false;
  document.querySelector('#send-whatsapp').removeAttribute('href');
  document.querySelector('#send-email').removeAttribute('href');
  form.elements.name.focus();
});
