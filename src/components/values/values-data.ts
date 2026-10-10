import type { LucideIcon } from "lucide-react";
import { Eye, Gauge, Heart, Target, UserRound } from "lucide-react";

export type ValueItem = {
  title: string;
  description: string;
  icon: LucideIcon;
  area: string;
};

export const VALUES: ValueItem[] = [
  {
    title: "O que eu faço",
    description:
      "Criar experiências digitais rápidas, acessíveis e bem construídas, que resolvam problemas reais de pessoas e negócios.",
    icon: Target,
    area: "md:[grid-area:1/1/2/7] xl:[grid-area:1/1/2/5]",
  },
  {
    title: "Onde quero chegar",
    description:
      "Ser referência como desenvolvedor que une performance, design e boas práticas, evoluindo continuamente a cada projeto.",
    icon: Eye,
    area: "md:[grid-area:1/7/2/13] xl:[grid-area:2/1/3/5]",
  },
  {
    title: "Como eu trabalho",
    description:
      "Código limpo e legível, acessibilidade como requisito, colaboração com o time, aprendizado contínuo e compromisso com cada entrega.",
    icon: Heart,
    area: "md:[grid-area:2/1/3/7] xl:[grid-area:1/5/3/8]",
  },
  {
    title: "Performance em primeiro lugar",
    description:
      "Carregamento otimizado, atenção aos Core Web Vitals e interfaces que respondem rápido em qualquer dispositivo.",
    icon: Gauge,
    area: "md:[grid-area:2/7/3/13] xl:[grid-area:1/8/2/13]",
  },
  {
    title: "Foco em quem usa",
    description:
      "Responsividade, navegação por teclado e compatibilidade entre navegadores pensadas desde o início, não no final.",
    icon: UserRound,
    area: "md:[grid-area:3/1/4/13] xl:[grid-area:2/8/3/13]",
  },
];
