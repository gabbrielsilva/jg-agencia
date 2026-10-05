import { contactForm } from '../components/contact-form.mjs';
import { contact } from '../data/site.mjs';
import { intro } from '../components/sections.mjs';
export function contactPage() {
  return `${intro('CONTATO', 'Vamos conversar<br><em>sobre seu negócio.</em>', 'Conte o que você tem em mente. Vamos entender seu momento e pensar no próximo passo.', 'hero-laptop.jpg')}<section class="container contact-layout"><aside class="contact-channels"><h2>A conversa começa aqui.</h2><p>Você pode falar diretamente com a JG pelos canais abaixo.</p><a href="${contact.whatsapp}" target="_blank" rel="noopener noreferrer"><span>WhatsApp</span><strong>${contact.phone}</strong></a><a class="email-link" href="mailto:${contact.email}"><span>E-mail</span><strong>${contact.email}</strong></a><a href="${contact.instagram}" target="_blank" rel="noopener noreferrer"><span>Instagram</span><strong>${contact.handle}</strong></a></aside><div class="contact-form-area">${contactForm()}</div></section>`;
}
