import { IconType } from "react-icons";
import { BiLogoMongodb } from "react-icons/bi";
import { FaReact, FaNodeJs, FaStripeS } from "react-icons/fa";
import { IoLogoJavascript, IoLogoVercel } from "react-icons/io5";
import { RiTailwindCssFill } from "react-icons/ri";
import {
  SiNextdotjs,
  SiTypescript,
  SiShadcnui,
  SiExpress,
  SiVite,
} from "react-icons/si";

export interface Technos {
  name: string;
  icon: IconType;
}

export const FirstProjectTechnos: Technos[] = [
  {
    name: "Next.js",
    icon: SiNextdotjs,
  },
  {
    name: "TypeScript",
    icon: SiTypescript,
  },
  {
    name: "Material-UI",
    icon: FaReact,
  },
  {
    name: "Shadcn-UI",
    icon: SiShadcnui,
  },
  {
    name: "Tailwind CSS",
    icon: RiTailwindCssFill,
  },
  {
    name: "Node.js",
    icon: FaNodeJs,
  },
  {
    name: "Express.js",
    icon: SiExpress,
  },
  {
    name: "MongoDB",
    icon: BiLogoMongodb,
  },
  {
    name: "Stripe Gateway",
    icon: FaStripeS,
  },
  {
    name: "Vercel",
    icon: IoLogoVercel,
  },
];
export const secondProjectTechnos: Technos[] = [
  {
    name: "React.js",
    icon: FaReact,
  },
  {
    name: "JavaScript",
    icon: IoLogoJavascript,
  },
  {
    name: "Vite",
    icon: SiVite,
  },

  {
    name: "Vercel",
    icon: IoLogoVercel,
  },
];
