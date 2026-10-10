export type NavLink = {
  label: string;
  href: `/#${string}`;
};

export const NAV_LINKS: NavLink[] = [
  { label: "Início", href: "/#inicio" },
  { label: "Experiência", href: "/#experiencia" },
  { label: "Projetos", href: "/#projetos" },
  { label: "Contato", href: "/#contato" },
];
