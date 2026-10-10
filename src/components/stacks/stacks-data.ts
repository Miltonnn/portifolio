import type { ComponentType } from "react";
import {
  SiAngular,
  SiCss,
  SiDocker,
  SiFigma,
  SiGit,
  SiGithub,
  SiGraphql,
  SiHtml5,
  SiJavascript,
  SiMysql,
  SiNextdotjs,
  SiNodedotjs,
  SiPhp,
  SiPostgresql,
  SiPostman,
  SiReact,
  SiSass,
  SiShopify,
  SiTailwindcss,
  SiTypescript,
  SiVercel,
  SiVtex,
} from "@icons-pack/react-simple-icons";
import { Network, Rocket } from "lucide-react";

export type Stack = {
  name: string;
  icon: ComponentType<{ className?: string; color?: string }>;
  color: string;
};

export const STACKS: Stack[] = [
  { name: "React.js", icon: SiReact, color: "#61DAFB" },
  { name: "Next.js", icon: SiNextdotjs, color: "#FFFFFF" },
  { name: "Angular", icon: SiAngular, color: "#DD0031" },
  { name: "TypeScript", icon: SiTypescript, color: "#3178C6" },
  { name: "Node.js", icon: SiNodedotjs, color: "#5FA04E" },
  { name: "PHP", icon: SiPhp, color: "#777BB4" },
  { name: "PostgreSQL", icon: SiPostgresql, color: "#4169E1" },
  { name: "MySQL", icon: SiMysql, color: "#4479A1" },
  { name: "GraphQL", icon: SiGraphql, color: "#E10098" },
  { name: "REST APIs", icon: Network, color: "#A78BFA" },
  { name: "Postman", icon: SiPostman, color: "#FF6C37" },
  { name: "VTEX IO", icon: SiVtex, color: "#ED125F" },
  { name: "FastStore", icon: Rocket, color: "#ED125F" },
  { name: "Shopify", icon: SiShopify, color: "#7AB55C" },
  { name: "JavaScript", icon: SiJavascript, color: "#F7DF1E" },
  { name: "HTML5", icon: SiHtml5, color: "#E34F26" },
  { name: "CSS", icon: SiCss, color: "#663399" },
  { name: "Tailwind CSS", icon: SiTailwindcss, color: "#06B6D4" },
  { name: "Sass", icon: SiSass, color: "#CC6699" },
  { name: "Git", icon: SiGit, color: "#F03C2E" },
  { name: "GitHub", icon: SiGithub, color: "#FFFFFF" },
  { name: "Figma", icon: SiFigma, color: "#F24E1E" },
  { name: "Docker", icon: SiDocker, color: "#2496ED" },
  { name: "Vercel", icon: SiVercel, color: "#FFFFFF" },
];
