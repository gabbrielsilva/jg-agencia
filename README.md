# JG Agência — site institucional

Site institucional estático, sem dependências externas. Home, Sobre, Serviços, quatro páginas individuais de serviço, Projetos, case Fábio Lima Noivos e Contato. Contatos oficiais disponíveis no footer e na página Contato.

Visual atualizado conforme a segunda referência fornecida: hero fotográfico escuro, dourado, cards de serviços, Sobre com fotografia, case, processo, diferenciais e formulário na Home. As imagens de notebook e mesa são ilustrações geradas para o site, não fotografias do escritório da JG nem de projetos reais. JPEGs locais otimizados; imagem do bloco Sobre com lazy loading. `public/styles/brand.css` concentra a nova identidade e os layouts da Home. O formulário é compartilhado entre Home e Contato em `src/components/contact-form.mjs`.

## Área de serviços

Sobre, visão geral de Serviços, Projetos, case e Contato usam a direção visual escura em `public/styles/institutional.css`, com detalhes dourados e superfícies em grafite. Sobre e Serviços seguem as referências fornecidas, com luz dourada discreta e divisórias; Projetos e Contato mantêm aberturas fotográficas. O formulário de Contato mantém um painel claro para leitura. Essa folha é carregada apenas nessas páginas; Home e páginas individuais de serviços mantêm seus estilos próprios.

`/servicos/` é uma visão resumida com quatro acessos. As páginas `/servicos/trafego-pago/`, `/servicos/social-media/`, `/servicos/sites/` e `/servicos/landing-pages/` têm hero próprio, quatro blocos de entregas, processo em quatro etapas, público indicado e orçamento com serviço pré-selecionado no Contato. A âncora `#abordagem` leva ao processo. As imagens são demonstrativas e identificadas, sem métricas de clientes. Somente Sites apresenta o projeto informado Fábio Lima Noivos, com imagens e detalhes pendentes; nenhum case adicional foi inventado.

Conteúdo individual em `src/data/service-pages.mjs`, componentes em `src/components/service-sections.mjs` e estilos isolados em `public/styles/services.css` (carregados apenas nas rotas de serviços). Escopos específicos são alinhados antes da contratação. As rotas também respondem localmente sem barra final.

## Executar

Requer Node.js 20 ou superior.

```sh
node scripts/serve.mjs
```

Abra http://127.0.0.1:4173. Depois de alterar o código, reinicie o servidor para gerar as páginas novamente.

```sh
node scripts/build.mjs
node --test tests/*.test.mjs
```

Os scripts equivalentes `npm run dev`, `npm run build` e `npm test` também estão disponíveis em ambientes com npm funcional. O resultado estático fica em `dist/`; hospedagem futura deve servir diretórios com `index.html` e utilizar `404.html` para caminhos inexistentes.

## Organização

- `src/components/`: documento, header e footer compartilhados.
- `src/pages/`: páginas institucionais e páginas de serviços e projetos.
- `src/data/`: serviços, menu, rotas e metadados.
- `public/`: estilos, navegação mobile e assets.
- `scripts/`: geração estática e servidor local.
- `tests/`: integridade de rotas, links e metadados; validação e composição de mensagens.

## Formulário

Nome, WhatsApp, e-mail, serviço e mensagem são obrigatórios; empresa é opcional. Há validação acessível por campo, inclusive de telefone com DDD. O formulário não chama APIs, não armazena dados e não afirma que uma mensagem foi enviada. Após validar, apresenta links com o texto preparado para WhatsApp ou e-mail; o visitante confirma o envio no aplicativo escolhido. Links são gerados apenas após a validação, e removidos ao voltar à edição. Sem JavaScript, os canais diretos continuam disponíveis.

O serviço é pré-selecionado quando o visitante vem de uma página de serviço. Um envio automático exigirá uma etapa futura de integração.

## Pendências reais

Fornecer imagem real e informações do case Fábio Lima Noivos, identidade definitiva e dados institucionais (história/equipe). O bloco visual do case é um placeholder tipográfico explícito, não uma reprodução do site do cliente. A seção Resultado só deverá ser adicionada com dados reais. Descrições de serviço são propostas institucionais a revisar; entregas específicas dependem do escopo acordado. `og:url`, canonical e sitemap dependem do domínio oficial. Nenhum resultado, métrica ou dado empresarial foi inventado. Publicação ainda não realizada; servidor local para revisão.
