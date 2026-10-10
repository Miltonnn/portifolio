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
        title: "Site Institucional 1",
        description: "Site institucional responsivo com foco em performance, SEO e conversão de contatos.",
        href: "https://example.com",
      },
      {
        title: "Site Institucional 2",
        description: "Landing page com animações suaves e formulário integrado para captação de leads.",
        href: "https://example.com",
      },
      {
        title: "Site Institucional 3",
        description: "Site multipáginas com conteúdo gerenciável e otimização para Core Web Vitals.",
        href: "https://example.com",
      },
      {
        title: "Site Institucional 4",
        description: "Página de apresentação de serviços com layout moderno e totalmente acessível.",
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
        title: "Loja do Galo",
        description: "E-commerce em VTEX com desenvolvimento de novas funcionalidades e otimizações contínuas.",
        href: "https://example.com",
      },
      {
        title: "Integralmédica",
        description: "Loja de suplementos com foco em performance, SEO e evolução da experiência de compra.",
        href: "https://example.com",
      },
      {
        title: "Loja 3",
        description: "Storefront em FastStore com componentes reutilizáveis e integrações com Master Data.",
        href: "https://example.com",
      },
      {
        title: "Loja 4",
        description: "Loja Shopify com customizações de tema e melhorias de conversão.",
        href: "https://example.com",
      },
    ],
  },
  {
    id: "pessoais",
    subtitle: "Estudos e experimentos",
    title: "Projetos Pessoais",
    projects: [
      {
        title: "Portfólio",
        description: "Este portfólio, feito com Next.js, TypeScript, Tailwind CSS e shadcn/ui.",
        href: "https://example.com",
      },
      {
        title: "Projeto Pessoal 2",
        description: "Aplicação web full stack com autenticação, API REST e banco de dados PostgreSQL.",
        href: "https://example.com",
      },
      {
        title: "Projeto Pessoal 3",
        description: "Dashboard com gráficos, filtros e consumo de API GraphQL.",
        href: "https://example.com",
      },
      {
        title: "Projeto Pessoal 4",
        description: "Ferramenta utilitária feita para estudar novos padrões de React e TypeScript.",
        href: "https://example.com",
      },
    ],
  },
];
