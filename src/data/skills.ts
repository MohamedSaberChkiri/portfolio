import { IconType } from "react-icons";
import { BiLogoMongodb } from "react-icons/bi";
import {
  FaHtml5,
  FaCss3Alt,
  FaPython,
  FaPhp,
  FaReact,
  FaVuejs,
  FaGitAlt,
  FaNodeJs,
} from "react-icons/fa";
import { FaGithub, FaNpm } from "react-icons/fa6";
import { GrMysql } from "react-icons/gr";
import { IoIosSettings } from "react-icons/io";
import { IoLogoJavascript } from "react-icons/io5";
import { RiTailwindCssFill } from "react-icons/ri";
import { SiAxios, SiExpress, SiNextdotjs, SiTypescript } from "react-icons/si";

// Define the Skill interface
export interface Skill {
  name: string;
  level: number;
  icon: IconType;
}

// Define an array of frontend skills
export const Languages: Skill[] = [
  {
    name: "HTML",
    level: 99,
    icon: FaHtml5,
  },
  {
    name: "CSS",
    level: 99,
    icon: FaCss3Alt,
  },
  {
    name: "JavaScript",
    level: 95,
    icon: IoLogoJavascript,
  },
  {
    name: "Typescript",
    level: 94,
    icon: SiTypescript,
  },
  {
    name: "Python",
    level: 80,
    icon: FaPython,
  },
  {
    name: "Php",
    level: 45,
    icon: FaPhp,
  },
];

export const FrameWorks: Skill[] = [
  {
    name: "React",
    level: 92,
    icon: FaReact,
  },
  {
    name: "Next.js",
    level: 90,
    icon: SiNextdotjs,
  },
  {
    name: "Vue.js",
    level: 30,
    icon: FaVuejs,
  },
  {
    name: "Express.js",
    level: 70,
    icon: SiExpress,
  },
  {
    name: "Tainwind CSS",
    level: 97,
    icon: RiTailwindCssFill,
  },
];

export const Databases: Skill[] = [
  {
    name: "MongoDB",
    level: 96,
    icon: BiLogoMongodb,
  },
  {
    name: "MySQL",
    level: 75,
    icon: GrMysql,
  },
];

export const VisionControl: Skill[] = [
  {
    name: "Git",
    level: 94,
    icon: FaGitAlt,
  },
  {
    name: "Github",
    level: 94,
    icon: FaGithub,
  },
];

export const PackageManagers: Skill[] = [
  {
    name: "NPM",
    level: 99,
    icon: FaNpm,
  },
];

export const APIs: Skill[] = [
  {
    name: "RESTful API",
    level: 95,
    icon: IoIosSettings,
  },
  {
    name: "Axios",
    level: 95,
    icon: SiAxios,
  },
];

export const RuntimeEnvironments: Skill[] = [
  {
    name: "Node.js",
    level: 93,
    icon: FaNodeJs,
  },
];
