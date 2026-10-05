import { icon } from './icons.mjs';
export function serviceHeading(label, title, text) {
  return `<div class="home-section-heading"><div><p class="eyebrow">${label}</p><h2>${title}</h2></div><div class="heading-aside"><p>${text}</p></div></div>`;
}
export function serviceHero(service, profile) {
  return `<section class="service-hero"><img class="service-hero-photo" src="/assets/${profile.image}" alt="" width="1672" height="941" fetchpriority="high"><div class="container service-hero-inner"><div class="service-hero-copy"><p class="eyebrow">${service.name.toUpperCase()}</p><h1>${profile.heading}</h1><p class="service-hero-description">${profile.description}</p><div class="service-hero-actions"><a class="button" href="/contato/?servico=${service.slug}">Solicitar orçamento</a><a class="button button-outline" href="#abordagem">Conheça nossa abordagem</a></div><div class="service-hero-values">${profile.values.map(([symbol, text]) => `<span>${icon(symbol)}${text}</span>`).join('')}</div></div><p class="visual-note">Imagem ilustrativa · demonstração visual</p></div></section>`;
}
export function includedSection(profile) {
  return `<section class="service-included"><div class="container">${serviceHeading('O QUE ESTÁ INCLUÍDO', profile.includedHeading, profile.includedText)}<div class="service-cards">${profile.included.map(([symbol, title, text]) => `<article class="service-card"><span class="icon-box">${icon(symbol)}</span><h3>${title}</h3><p>${text}</p></article>`).join('')}</div></div></section>`;
}
export function processSection(profile) {
  return `<section class="service-process" id="abordagem"><div class="container">${serviceHeading('COMO FUNCIONA', profile.processHeading, profile.processText)}<ol class="service-process-steps">${profile.process.map(([symbol, title, text], i) => `<li><div class="process-symbols"><span class="step-number">0${i + 1}</span>${icon(symbol)}</div><h3>${title}</h3><p>${text}</p></li>`).join('')}</ol></div></section>`;
}
export function audienceSection(profile) {
  const photo = ['traffic', 'social'].includes(profile.theme) ? `<figure class="audience-visual"><img src="/assets/${profile.image}" alt="Imagem demonstrativa de ${profile.theme === 'social' ? 'um smartphone com uma composição de conteúdo para redes sociais' : 'um notebook com visual ilustrativo de campanhas, sem métricas reais'}." width="1672" height="941" loading="lazy"><figcaption>Visual ilustrativo, sem dados de clientes.</figcaption></figure>` : '';
  return `<section class="service-audience"><div class="container">${serviceHeading('PARA QUEM É ESSE SERVIÇO', profile.audienceHeading, profile.audienceText)}<div class="audience-layout ${photo ? 'has-visual' : ''}"><div class="audience-items">${profile.audience.map(([symbol, title, text]) => `<article><span class="icon-box">${icon(symbol)}</span><div><h3>${title}</h3><p>${text}</p></div></article>`).join('')}</div>${photo}</div><p class="service-scope">${profile.note}</p></div></section>`;
}
export function serviceFinal(service, profile) {
  return `<section class="service-final"><div class="container"><div><p class="eyebrow">VAMOS CONVERSAR?</p><h2>${profile.finalHeading}</h2><p>${profile.finalText}</p></div><div class="service-final-actions"><a class="button" href="/contato/?servico=${service.slug}">Solicitar orçamento</a><a class="text-link" href="/servicos/">Ver todos os serviços</a></div></div></section>`;
}
