export type Project = {
  title: string;
  description: string;
  href: string;
  image?: string;
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
          "Empresa Especializada em Recrutamento & Seleção e Desenvolvimento de Lideranças",
        href: "https://www.hummanos.com.br/",
      },
      {
        title: "Site Institucional 2",
        description:
          "Landing page com animações suaves e formulário integrado para captação de leads.",
        href: "https://example.com",
      },
      {
        title: "Site Institucional 3",
        description:
          "Site multipáginas com conteúdo gerenciável e otimização para Core Web Vitals.",
        href: "https://example.com",
      },
      {
        title: "Site Institucional 4",
        description:
          "Página de apresentação de serviços com layout moderno e totalmente acessível.",
        href: "https://example.com",
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
      },
      {
        title: "Loja do Gallo",
        description:
          "Loja do time de futebol Gallo, com customizações de tema e melhorias de conversão.",
        href: "https://www.lojadogalo.com.br/",
        image: "/assets/projects/capa-lojadogallo.png",
      },
      {
        title: "Yogini",
        description:
          "A Yogini é a 1ª marca de moda brasileira inspirada no Yoga. 100% produzida no Brasil. ",
        href: "https://www.yogini.com.br/",
        image: "/assets/projects/capa-yogini.png",
      },
      {
        title: "Integralmédica",
        description:
          "Uma das maiores lojas de suplementos do Brasil, com customizações de tema e melhorias de conversão.",
        href: "www.integralmedica.com.br",
        image: "/assets/projects/capa-integralmedica.png",
      },
      {
        title: "Casas Pedro",
        description:
          "Loja especializada em alimentos, temperos, grãos e produtos a granel, com foco em ingredientes para culinária. ",
        href: "https://example.com",
        image: "/assets/projects/capa-casaspedro.png",
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
          "Este portfólio, feito com Next.js, TypeScript, Tailwind CSS e shadcn/ui.Dashboard de controle financeiro com gráficos interativos e autenticação de usuários.",
        href: "https://finance-jota.vercel.app/login",
        image: "/assets/projects/capa-dash.png",
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
        href: "https://example.com",
        image: "/assets/projects/capa-sitebase.jpg",
      },
      {
        title: "Projeto Pessoal 4",
        description:
          "Ferramenta utilitária feita para estudar novos padrões de React e TypeScript.",
        href: "https://example.com",
      },
    ],
  },
];
