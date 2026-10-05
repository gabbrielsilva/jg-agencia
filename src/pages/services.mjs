import { services } from '../data/site.mjs';
import { servicePages } from '../data/service-pages.mjs';
import { intro, projectImage } from '../components/sections.mjs';
import { icon } from '../components/icons.mjs';
import { serviceHero, includedSection, processSection, audienceSection, serviceFinal } from '../components/service-sections.mjs';
export function servicesPage() {
  return `${intro('SERVIÇOS JG', 'A solução para<br>o seu próximo passo.', 'Quatro caminhos para fortalecer sua presença digital. Conheça o serviço que faz sentido para o seu negócio.')}<section class="container services-overview" aria-label="Serviços da JG">${services.map(s => `<article class="overview-service"><span class="icon-box">${icon(servicePages[s.slug].icon)}</span><h2>${s.name}</h2><p>${s.description}</p><a class="button" href="/servicos/${s.slug}/" aria-label="Conhecer serviço: ${s.name}">Conhecer serviço</a></article>`).join('')}</section>`;
}
export function servicePage(service) {
  const profile = servicePages[service.slug];
  const project = service.slug === 'sites' ? `<section class="service-project"><div class="container"><div><p class="eyebrow">PROJETO EM DESTAQUE</p><h2>Fábio Lima Noivos</h2><p>Desenvolvimento de Site</p><p class="project-pending">Imagens e detalhes do projeto aguardam informações reais.</p><a class="button" href="/projetos/fabio-lima-noivos/">Ver case completo</a></div><div>${projectImage()}</div></div></section>` : '';
  return `<div class="service-page service-${profile.theme}">${serviceHero(service, profile)}${includedSection(profile)}${processSection(profile)}${audienceSection(profile)}${project}${serviceFinal(service, profile)}</div>`;
}
