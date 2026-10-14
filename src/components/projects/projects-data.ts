export type ProjectStack = "VTEX IO" | "FastStore" | "Wake" | "Shopify";

export type Project = {
  title: string;
  description: string;
  href?: string;
  image?: string;
  stack?: ProjectStack;
};

export type ProjectCategory = {
  id: string;
  subtitle: string;
  title: string;
  projects: Project[];
};

export const PROJECT_CATEGORIES: ProjectCategory[] = [
  {
    id: "institucionais",
    subtitle: "Presença digital",
    title: "Sites Institucionais",
    projects: [
      {
        title: "Hummanos",
        description:
          "Site institucional da Empresa Especializada em Recrutamento & Seleção e Desenvolvimento de Lideranças",
        href: "https://www.hummanos.com.br/",
      },
      {
        title: "Ruah Epis",
        description:
          "Site institucional da Ruah EPI's, no mercado de Equipamentos de Proteção e Segurança Individual (Epi's), desde 2017",
        href: "https://www.ruahepis.com.br/",
      },
      {
        title: "Imperium Engenharia",
        description:
          "Site institucional de Regularização ambiental para quem não pode parar a operação.",
        href: "https://imperiumengenharia.com.br/",
      },
      {
        title: "Udisafe",
        description:
          "Site institucional dos Treinamentos de Segurança do Trabalho",
        href: "https://www.udisafe.com.br/",
      },
    ],
  },
  {
    id: "lojas",
    subtitle: "E-commerce",
    title: "Lojas Desenvolvidas em Equipe",
    projects: [
      {
        title: "Aniemeyer",
        description:
          "Loja de roupas femininas bastante customizada, com integração com Master Data e melhorias de performance.",
        href: "https://loja.aniemeyer.com.br/",
        image: "/assets/projects/capa-aniemeyer.png",
        stack: "FastStore",
      },
      {
        title: "Loja do Galo",
        description:
          "Loja do time de futebol Galo, com customizações de tema e melhorias de conversão.",
        href: "https://www.lojadogalo.com.br/",
        image: "/assets/projects/capa-galo.png",
        stack: "VTEX IO",
      },
      {
        title: "Yogini",
        description:
          "A Yogini é a 1ª marca de moda brasileira inspirada no Yoga. 100% produzida no Brasil. ",
        href: "https://www.yogini.com.br/",
        image: "/assets/projects/capa-yogini.png",
        stack: "VTEX IO",
      },
      {
        title: "Loungerie",
        description:
          "Uma marca de moda que acompanha a mulher em diferentes momentos, estilos e ocasiões.",
        href: "https://www.loungerie.com.br/",
        image: "/assets/projects/loungerie.png",
        stack: "FastStore",
      },
      {
        title: "Wiler",
        description:
          "Maior referência em tecidos para estofados, cortinas e decoração no Brasil.",
        href: "https://www.wiler.com.br/",
        image: "/assets/projects/capa-wiler.png",
        stack: "VTEX IO",
      },
      {
        title: "Integralmédica",
        description:
          "Uma das maiores lojas de suplementos do Brasil, com customizações de tema e melhorias de conversão.",
        href: "https://www.integralmedica.com.br/",
        image: "/assets/projects/capa-integralmedica.png",
        stack: "Shopify",
      },
      {
        title: "Casas Pedro",
        description:
          "Loja especializada em alimentos, temperos, grãos e produtos a granel, com foco em ingredientes para culinária. ",
        image: "/assets/projects/capa-casaspedro.png",
        stack: "FastStore",
      },
    ],
  },
  {
    id: "pessoais",
    subtitle: "Estudos e experimentos",
    title: "Projetos Pessoais",
    projects: [
      {
        title: "Mfinance",
        description:
          "Dashboard de controle financeiro com gráficos interativos e autenticação de usuários, aqui você controla todos os seus gastos e receitas de forma simples e intuitiva.",
        href: "https://finance-jota.vercel.app/login",
        image: "/assets/projects/capa-dash.png",
      },
      {
        title: "Dra. Amanda Torrigo",
        description:
          "Site institucional da Dra. Amanda Torrigo, fisioterapeuta especializada em saúde da mulher, com informações sobre seus serviços e contato.",
        href: "https://amandatorrigo.vercel.app/",
        image: "/assets/projects/capa-fisio.png",
      },
      {
        title: "DOGGY",
        description:
          "Landing page de petshop com animações, formulário de contato e integração com WhatsApp.",
        href: "https://landingpage-ecru-gamma.vercel.app/",
        image: "/assets/projects/capa-doggy.png",
      },
      {
        title: "Site Base",
        description:
          "Um tema base para sites institucionais, com layout moderno, animações suaves e otimização para Core Web Vitals.",
        image: "/assets/projects/capa-sitebase.jpg",
      },
      {
        title: "Projeto Pessoal 4",
        description:
          "Ferramenta utilitária feita para estudar novos padrões de React e TypeScript.",
      },
    ],
  },
];
