export type ExperienceItem = {
  period: string;
  role: string;
  place: string;
  dates: string;
  highlights: string[];
  tags: string[];
};

export const EXPERIENCES: ExperienceItem[] = [
  {
    period: "2022 — 2024",
    role: "Análise e Desenvolvimento de Sistemas",
    place: "UNICSUL — Universidade Cruzeiro do Sul",
    dates: "2022 — 2024",
    highlights: [
      "Graduação tecnológica com base em lógica de programação, banco de dados, engenharia de software e desenvolvimento web.",
    ],
    tags: ["Formação"],
  },
  {
    period: "2023 — 2026",
    role: "Desenvolvedor Front-end",
    place: "Grupo Ideal Trends",
    dates: "02/2023 — 03/2026",
    highlights: [
      "Desenvolvimento de aplicações web escaláveis e performáticas com React.js, Next.js e TypeScript.",
      "Gerenciamento de estado com Context API, Redux Toolkit e Zustand, além de integração com APIs REST e GraphQL.",
      "Interfaces responsivas e acessíveis com HTML5, CSS3, Sass, Tailwind CSS e Bootstrap, com foco em SEO e performance.",
      "Desenvolvimento back-end com Node.js e PHP: rotas, regras de negócio, arquitetura MVC e integração com banco de dados.",
    ],
    tags: [
      "React.js",
      "Next.js",
      "TypeScript",
      "Redux Toolkit",
      "Zustand",
      "Tailwind CSS",
      "Node.js",
      "PHP",
    ],
  },
  {
    period: "2026 — Hoje",
    role: "Desenvolvedor Front-end",
    place: "Agência Econverse",
    dates: "04/2026 — Atual",
    highlights: [
      "Desenvolvimento, evolução e implantação de soluções para grandes operações de e-commerce com VTEX IO, FastStore, Shopify e Wake Commerce.",
      "Storefronts modernas com React.js, Next.js, TypeScript, GraphQL e Node.js, com componentes reutilizáveis e estado gerenciado com Redux Toolkit, Zustand e Jotai.",
      "Integrações com Master Data e serviços externos, otimização para SEO e Core Web Vitals, e uso de Store Framework e Site Editor.",
      "Atuação em projetos de grande porte como Loja do Galo e Integralmédica.",
    ],
    tags: [
      "VTEX IO",
      "FastStore",
      "Shopify",
      "Wake Commerce",
      "React.js",
      "Next.js",
      "TypeScript",
      "GraphQL",
    ],
  },
];
