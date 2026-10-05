import { mkdir, rm, cp, writeFile } from 'node:fs/promises';
import { fileURLToPath } from 'node:url';
import path from 'node:path';
import { pages, services } from '../src/data/site.mjs';
import { document } from '../src/components/layout.mjs';
import { home } from '../src/pages/home.mjs';
import { about } from '../src/pages/about.mjs';
import { servicesPage, servicePage } from '../src/pages/services.mjs';
import { projectsPage, casePage } from '../src/pages/projects.mjs';
import { contactPage } from '../src/pages/contact.mjs';
const renderers = { '/': home, '/sobre/': about, '/servicos/': servicesPage, '/projetos/': projectsPage, '/contato/': contactPage, '/projetos/fabio-lima-noivos/': casePage };
for (const service of services) renderers[`/servicos/${service.slug}/`] = () => servicePage(service);
const root = fileURLToPath(new URL('../', import.meta.url));
const output = path.join(root, 'dist');
await rm(output, { recursive: true, force: true });
await mkdir(output, { recursive: true });
await cp(path.join(root, 'public'), output, { recursive: true });
for (const page of pages) {
  const dir = path.join(output, page.path);
  await mkdir(dir, { recursive: true });
  await writeFile(path.join(dir, 'index.html'), document(page, renderers[page.path]()));
}
await writeFile(path.join(output, '404.html'), document({ path: '/404/', title: 'Página não encontrada | JG Agência', description: 'A página solicitada não foi encontrada.' }, '<section class="container pending-page"><p class="eyebrow">ERRO 404</p><h1>Página não encontrada.</h1><p class="pending-notice">Verifique o endereço ou volte à página inicial.</p><a class="button" href="/">Voltar ao início</a></section>'));
console.log(`Build concluído: ${pages.length} páginas em dist/.`);
