import { test } from 'node:test';
import assert from 'node:assert/strict';
import { readFile, stat } from 'node:fs/promises';
import path from 'node:path';
import { pages, services } from '../src/data/site.mjs';
import '../scripts/build.mjs';
test('todas as rotas têm metadados próprios e um único h1', async () => {
  const titles = new Set();
  for (const page of pages) {
    const html = await readFile(path.join('dist', page.path, 'index.html'), 'utf8');
    assert.equal((html.match(/<h1[ >]/g) || []).length, 1, page.path);
    assert.ok(html.includes(`<title>${page.title}</title>`));
    assert.ok(html.includes(`content="${page.description}"`));
    assert.ok(html.includes('lang="pt-BR"'));
    titles.add(page.title);
  }
  assert.equal(titles.size, pages.length);
});
test('links internos e assets existem em todas as páginas', async () => {
  for (const page of pages) {
    const html = await readFile(path.join('dist', page.path, 'index.html'), 'utf8');
    for (const match of html.matchAll(/(?:href|src)="(\/[^\"]*)"/g)) {
      const href = new URL(match[1], 'http://localhost').pathname;
      const target = path.join('dist', href, href.endsWith('/') ? 'index.html' : '');
      assert.ok((await stat(target)).isFile(), `${page.path}: ${href}`);
    }
  }
});
test('projeto único e informações reais pendentes explícitas', async () => {
  const html = await readFile('dist/index.html', 'utf8');
  assert.equal((html.match(/class="project-image"/g) || []).length, 1);
  assert.ok(html.includes('IMAGEM DO PROJETO · PENDENTE'));
  assert.ok(html.includes('aria-controls="menu-principal"'));
  const content = await readFile('dist/projetos/fabio-lima-noivos/index.html', 'utf8');
  assert.ok(content.includes('Conteúdo pendente'));
  assert.ok(!content.includes('<h3>Resultado'));
});
test('contatos oficiais e aviso de formulário sem envio automático', async () => {
  const content = await readFile('dist/contato/index.html', 'utf8');
  assert.ok(content.includes('https://wa.me/5521990693346'));
  assert.ok(content.includes('mailto:assistenciadigitaljg@gmail.com'));
  assert.ok(content.includes('https://www.instagram.com/assistenciadigitaljg/'));
  assert.ok(content.includes('A mensagem ainda não foi enviada.'));
  for (const field of ['name', 'company', 'phone', 'email', 'service', 'message']) assert.ok(content.includes(`for="${field}"`));
});
test('formulário compartilhado funciona na Home e na página Contato', async () => {
  for (const route of ['dist/index.html', 'dist/contato/index.html']) {
    const html = await readFile(route, 'utf8');
    assert.equal((html.match(/id="contact-form"/g) || []).length, 1);
    assert.equal((html.match(/id="contact-confirmation"/g) || []).length, 1);
    assert.ok(html.includes('<script src="/scripts/contact.js" type="module"></script>'));
    const ids = [...html.matchAll(/\bid="([^"]+)"/g)].map(match => match[1]);
    assert.equal(new Set(ids).size, ids.length, route);
  }
});
test('visão geral contém quatro acessos e não repete detalhes dos serviços', async () => {
  const html = await readFile('dist/servicos/index.html', 'utf8');
  assert.equal((html.match(/class="overview-service"/g) || []).length, 4);
  for (const service of services) assert.ok(html.includes(`href="/servicos/${service.slug}/" aria-label="Conhecer serviço: ${service.name}"`));
  assert.ok(!html.includes('id="abordagem"'));
  assert.ok(!html.includes('O que ajuda a resolver'));
  assert.ok(!html.includes('Para quem faz sentido'));
});
test('serviços têm âncora de abordagem e orçamento com seleção correta', async () => {
  for (const service of services) {
    const html = await readFile(`dist/servicos/${service.slug}/index.html`, 'utf8');
    assert.ok(html.includes('href="#abordagem"'));
    assert.ok(html.includes('id="abordagem"'));
    assert.equal((html.match(new RegExp(`href="/contato/\\?servico=${service.slug}"`, 'g')) || []).length, 2);
    assert.ok(html.includes('Imagem ilustrativa · demonstração visual'));
    assert.ok(!html.includes('+278%'));
    assert.ok(!html.includes('Alpha'));
  }
});
