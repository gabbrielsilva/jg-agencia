export const contact = {
  phone: '(21) 99069-3346', whatsapp: 'https://wa.me/5521990693346',
  email: 'assistenciadigitaljg@gmail.com', instagram: 'https://www.instagram.com/assistenciadigitaljg/', handle: '@assistenciadigitaljg'
};
export const services = [
  { name: 'Tráfego Pago', slug: 'trafego-pago', description: 'Campanhas estratégicas para atrair as pessoas certas e gerar mais oportunidades.',
    problem: 'Sua empresa precisa alcançar pessoas com interesse no que oferece, além do alcance orgânico.',
    audience: 'Negócios que querem divulgar serviços, produtos ou campanhas com um investimento planejado em mídia.',
    approach: 'A estratégia parte do objetivo do negócio. Público, mensagem e destino da campanha precisam trabalhar juntos para criar oportunidades de contato.',
    deliverables: ['Planejamento de público e objetivos', 'Estruturação de campanhas e anúncios', 'Acompanhamento e ajustes de campanha'],
    note: 'Investimento em mídia, canais e escopo são definidos na conversa inicial. Não há promessa de resultados fixos.' },
  { name: 'Social Media', slug: 'social-media', description: 'Conteúdo estratégico para fortalecer sua marca e manter uma presença digital consistente.',
    problem: 'Sua marca publica sem uma direção clara ou tem dificuldade para manter uma comunicação consistente.',
    audience: 'Empresas que precisam apresentar seu trabalho, se relacionar com seu público e organizar a presença nas redes sociais.',
    approach: 'O conteúdo precisa representar o negócio e fazer sentido para quem o acompanha. A proposta é organizar temas, linguagem e frequência em torno de objetivos claros.',
    deliverables: ['Direção de conteúdo e linguagem', 'Planejamento editorial', 'Criação de conteúdo conforme o escopo acordado'],
    note: 'Redes, formatos e frequência são definidos de acordo com a necessidade da empresa.' },
  { name: 'Sites', slug: 'sites', description: 'Sites profissionais, rápidos e pensados para apresentar empresas e transformar visitantes em oportunidades.',
    problem: 'Seu negócio precisa de um endereço digital que apresente seus serviços com clareza e facilite o contato.',
    audience: 'Empresas que querem criar ou renovar seu site institucional, com uma experiência adequada ao celular e ao computador.',
    approach: 'A estrutura vem antes do visual: o visitante precisa entender o que a empresa faz, encontrar o que procura e saber como conversar com ela.',
    deliverables: ['Organização das páginas e do conteúdo', 'Layout responsivo e desenvolvimento', 'Estrutura básica de SEO e navegação acessível'],
    note: 'Quantidade de páginas, conteúdo, domínio e hospedagem são alinhados antes do desenvolvimento.' },
  { name: 'Landing Pages', slug: 'landing-pages', description: 'Páginas focadas em campanhas, lançamentos, serviços e geração de leads.',
    problem: 'Sua campanha precisa de uma página com mensagem específica e um próximo passo claro para o visitante.',
    audience: 'Negócios que querem divulgar uma oferta, apresentar um serviço ou apoiar uma campanha com uma página dedicada.',
    approach: 'Uma landing page concentra a comunicação em um objetivo. A mensagem, os argumentos e o contato são organizados para apoiar a campanha.',
    deliverables: ['Estrutura focada no objetivo da campanha', 'Design e desenvolvimento responsivos', 'Chamadas para ação e pontos de contato'],
    note: 'Formulários, integrações e ferramentas de acompanhamento dependem do escopo combinado.' }
];
export const projects = [{ name: 'Fábio Lima Noivos', slug: 'fabio-lima-noivos', service: 'Desenvolvimento de Site', description: 'Projeto de desenvolvimento de site. Informações detalhadas e imagens aguardam confirmação.' }];
export const navigation = [ ['Início', '/'], ['Sobre', '/sobre/'], ['Serviços', '/servicos/'], ['Projetos', '/projetos/'], ['Contato', '/contato/'] ];
export const pages = [
  { path: '/', title: 'JG Agência — Marketing digital para crescer', description: 'Estratégia em tráfego pago, social media, sites e landing pages para transformar presença digital em oportunidades reais.' },
  { path: '/sobre/', title: 'Sobre a JG Agência', heading: 'Estratégia antes de execução.', description: 'Conheça a proposta da JG Agência: entender seu negócio e seus objetivos antes de escolher ferramentas e campanhas.' },
  { path: '/servicos/', title: 'Serviços | JG Agência', heading: 'Soluções para o seu crescimento.', description: 'Tráfego pago, social media, sites e landing pages. Conheça os serviços da JG Agência.' },
  { path: '/projetos/', title: 'Projetos | JG Agência', heading: 'Estratégia que ganha forma.', description: 'Conheça os projetos da JG Agência e o trabalho desenvolvido para cada negócio.' },
  { path: '/contato/', title: 'Contato | JG Agência', heading: 'Vamos conversar sobre seu negócio.', description: 'Converse com a JG Agência sobre marketing digital, tráfego pago, social media e desenvolvimento de sites.' },
  ...services.map(service => ({ path: `/servicos/${service.slug}/`, title: `${service.name} | JG Agência`, heading: service.name, description: service.description })),
  { path: '/projetos/fabio-lima-noivos/', title: 'Fábio Lima Noivos | JG Agência', heading: 'Fábio Lima Noivos', description: 'Projeto em destaque da JG Agência: desenvolvimento de site para Fábio Lima Noivos.' }
];
