import { test } from 'node:test';
import assert from 'node:assert/strict';
import { validateContact, composeMessage } from '../public/scripts/contact-validation.js';
const valid = { name: 'Pessoa Teste', company: '', phone: '(21) 99069-3346', email: 'teste@example.com', service: 'sites', message: 'Quero conversar sobre um site institucional.' };
test('valida telefone nacional e internacional e empresa opcional', () => {
  assert.deepEqual(validateContact(valid), {});
  assert.deepEqual(validateContact({ ...valid, phone: '+55 21 99069-3346' }), {});
  assert.deepEqual(validateContact({ ...valid, phone: '(21) 3333-4444' }), {});
});
test('rejeita campos vazios, espaços, contato inválido e serviço desconhecido', () => {
  assert.equal(Object.keys(validateContact({})).length, 5);
  const errors = validateContact({ ...valid, name: '  ', phone: 'abc21990693346', email: 'sem-email', service: 'inexistente', message: '  ' });
  assert.deepEqual(Object.keys(errors), ['name', 'phone', 'email', 'service', 'message']);
  assert.ok(validateContact({ ...valid, phone: '00000000000' }).phone);
  assert.ok(validateContact({ ...valid, message: 'x'.repeat(2001) }).message);
});
test('mensagem preserva texto literal e apresenta serviço e empresa opcional', () => {
  const text = composeMessage({ ...valid, message: '<script> & orçamento?' });
  assert.ok(text.includes('Empresa: Não informada'));
  assert.ok(text.includes('Serviço: Site'));
  assert.ok(text.includes('<script> & orçamento?'));
  assert.equal(decodeURIComponent(encodeURIComponent(text)), text);
});
