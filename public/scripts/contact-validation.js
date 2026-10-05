export const serviceLabels = { 'trafego-pago': 'Tráfego Pago', 'social-media': 'Social Media', sites: 'Site', 'landing-pages': 'Landing Page', outro: 'Outro' };
export function validateContact(values) {
  const errors = {};
  const name = (values.name || '').trim();
  if (name.length < 2 || name.length > 100) errors.name = 'Informe seu nome, com 2 a 100 caracteres.';
  if ((values.company || '').trim().length > 120) errors.company = 'Use até 120 caracteres para a empresa.';
  const phone = (values.phone || '').trim();
  let digits = phone.replace(/\D/g, '');
  if (digits.startsWith('55') && digits.length > 11) digits = digits.slice(2);
  if (!/^[+\d\s().-]+$/.test(phone) || !/^[1-9]{2}(?:9\d{8}|[2-8]\d{7})$/.test(digits)) errors.phone = 'Informe um telefone válido com DDD, por exemplo (21) 99069-3346.';
  const email = (values.email || '').trim();
  if (email.length > 254 || !/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email)) errors.email = 'Informe um e-mail válido.';
  if (!Object.hasOwn(serviceLabels, values.service)) errors.service = 'Selecione um serviço de interesse.';
  const message = (values.message || '').trim();
  if (message.length < 10 || message.length > 2000) errors.message = 'Escreva uma mensagem com 10 a 2.000 caracteres.';
  return errors;
}
export function composeMessage(values) {
  return ['Olá, JG! Gostaria de conversar sobre um projeto.', '', `Nome: ${values.name.trim()}`, `Empresa: ${values.company.trim() || 'Não informada'}`, `WhatsApp: ${values.phone.trim()}`, `E-mail: ${values.email.trim()}`, `Serviço: ${serviceLabels[values.service]}`, '', values.message.trim()].join('\n');
}
