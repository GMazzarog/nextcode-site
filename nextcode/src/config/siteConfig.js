// ============================================================
// CONFIGURAÇÃO CENTRAL DA NEXTCODE
// Edite este arquivo para atualizar dados em todo o site.
// Nenhum dado de contato real foi inventado — substitua os
// placeholders abaixo assim que tiver as informações reais.
// ============================================================

const siteConfig = {
  name: "NextCode",
  slogan: "Seu negócio. Na próxima versão.",

  // -----------------------------------------
  // CONTATO — substitua pelos dados reais
  // -----------------------------------------
  whatsapp: {
    // Apenas números, com DDI + DDD. Ex: "5511999999999"
    number: "SEU_NUMERO_AQUI",
    defaultMessage:
      "Olá! Vim pelo Instagram da NextCode e gostaria de conhecer melhor os serviços.",
  },
  instagram: {
    handle: "@seuinstagram",
    url: "https://instagram.com/seuinstagram",
  },
  email: "seuemail@exemplo.com",
  location: "Mococa/SP + online",

  // -----------------------------------------
  // NAVEGAÇÃO
  // -----------------------------------------
  nav: [
    { label: "Início", href: "#inicio" },
    { label: "Serviços", href: "#servicos" },
    { label: "Processo", href: "#processo" },
    { label: "Projetos", href: "#projetos" },
    { label: "Contato", href: "#contato" },
  ],

  // -----------------------------------------
  // SERVIÇOS
  // -----------------------------------------
  services: [
    {
      number: "01",
      title: "Sites institucionais",
      description:
        "Sites profissionais para apresentar sua empresa, fortalecer sua marca e gerar novas oportunidades.",
    },
    {
      number: "02",
      title: "Landing Pages",
      description:
        "Páginas focadas em campanhas, divulgação de serviços e conversão de visitantes.",
    },
    {
      number: "03",
      title: "Lojas virtuais",
      description:
        "E-commerces modernos para apresentar e vender seus produtos pela internet.",
    },
    {
      number: "04",
      title: "Desenvolvimento personalizado",
      description:
        "Soluções digitais desenvolvidas de acordo com as necessidades específicas do seu negócio.",
    },
  ],

  // -----------------------------------------
  // DIFERENCIAIS ("Por que a NextCode?")
  // -----------------------------------------
  differentials: [
    {
      title: "Sites responsivos",
      description:
        "Uma experiência pensada para funcionar perfeitamente em celular, tablet e computador.",
    },
    {
      title: "Carregamento rápido",
      description:
        "Performance otimizada para proporcionar uma navegação rápida e agradável.",
    },
    {
      title: "Design personalizado",
      description:
        "Cada projeto é construído para representar a identidade e os objetivos do negócio.",
    },
    {
      title: "Suporte próximo",
      description:
        "Você acompanha o projeto e conta com suporte durante as etapas.",
    },
  ],

  // -----------------------------------------
  // PROCESSO
  // -----------------------------------------
  process: [
    {
      number: "01",
      title: "Conversa",
      description: "Entendemos seu negócio, seus objetivos e o que você precisa.",
    },
    {
      number: "02",
      title: "Estratégia e design",
      description:
        "Definimos a estrutura e criamos uma experiência visual alinhada à sua marca.",
    },
    {
      number: "03",
      title: "Desenvolvimento",
      description: "Transformamos o projeto em um site rápido, responsivo e funcional.",
    },
    {
      number: "04",
      title: "Lançamento",
      description: "Colocamos seu novo site no ar e acompanhamos os próximos passos.",
    },
  ],

  // -----------------------------------------
  // PORTFÓLIO — projetos DEMONSTRATIVOS.
  // Substitua por projetos reais quando disponíveis.
  // -----------------------------------------
  projects: [
    {
      name: "Restaurante Sabor & Arte",
      category: "Site institucional",
      description: "Presença digital completa para um restaurante autoral.",
      image: "/projects/sabor-arte.jpg",
      link: null,
    },
    {
      name: "ForteFit",
      category: "Landing Page",
      description: "Página de conversão para captação de novos alunos.",
      image: "/projects/fortefit.jpg",
      link: null,
    },
    {
      name: "Bella Estética",
      category: "Landing Page",
      description: "Landing page para divulgação de procedimentos estéticos.",
      image: "/projects/bella-estetica.jpg",
      link: null,
    },
  ],

  // -----------------------------------------
  // DIFERENCIAIS DA SEÇÃO SOBRE
  // -----------------------------------------
  aboutHighlights: [
    "Design moderno",
    "Sites responsivos",
    "Desenvolvimento personalizado",
    "Atendimento próximo",
  ],
};

export default siteConfig;
