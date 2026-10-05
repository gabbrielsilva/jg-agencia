export function intro(label, heading, description) {
  return `<section class="container page-intro"><p class="eyebrow">${label}</p><h1>${heading}</h1><p class="intro-description">${description}</p></section>`;
}
export function cta(heading = 'Vamos pensar no próximo passo?') {
  return `<section class="final-cta"><div class="container cta-inner"><div><p class="eyebrow">FALE COM A JG</p><h2>${heading}</h2><p>Conte sobre seu negócio e o que você quer alcançar. A estratégia começa com essa conversa.</p></div><a class="button button-light" href="/contato/">Fale com a gente</a></div></section>`;
}
export function projectImage() {
  return '<div class="project-image" role="img" aria-label="Espaço reservado para a imagem real do site Fábio Lima Noivos. Imagem ainda não fornecida."><span class="placeholder-label">IMAGEM DO PROJETO · PENDENTE</span><span class="project-placeholder-title">Fábio Lima<br><em>Noivos</em></span><span class="placeholder-note">A imagem real do site será adicionada aqui.</span></div>';
}
