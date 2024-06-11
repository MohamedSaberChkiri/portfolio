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
import {
  SiAxios,
  SiExpress,
 
  SiNextdotjs,
  SiTypescript,
} from "react-icons/si";

// Define the Skill interface
export interface Skill {
  name: string;
  level: "Advanced" | "Good" | "Beginner";
  icon: IconType;
}

// Define an array of frontend skills
export const Languages: Skill[] = [
  {
    name: "HTML",
    level: "Advanced",
    icon: FaHtml5,
  },
  {
    name: "CSS",
    level: "Advanced",
    icon: FaCss3Alt,
  },
  {
    name: "JavaScript",
    level: "Advanced",
    icon: IoLogoJavascript,
  },
  {
    name: "Typescript",
    level: "Advanced",
    icon: SiTypescript,
  },
  {
    name: "Python",
    level: "Advanced",
    icon: FaPython,
  },
  {
    name: "Php",
    level: "Beginner",
    icon: FaPhp,
  },
];

export const FrameWorks: Skill[] = [
  {
    name: "React",
    level: "Advanced",
    icon: FaReact,
  },
  {
    name: "Next.js",
    level: "Advanced",
    icon: SiNextdotjs,
  },
  {
    name: "Vue.js",
    level: "Beginner",
    icon: FaVuejs,
  },
  {
    name: "Express.js",
    level: "Good",
    icon: SiExpress,
  },
  {
    name: "Tainwind CSS",
    level: "Advanced",
    icon: RiTailwindCssFill,
  },
];

export const Databases: Skill[] = [
  {
    name: "MongoDB",
    level: "Good",
    icon: BiLogoMongodb,
  },
  {
    name: "MySQL",
    level: "Good",
    icon: GrMysql,
  },
];

export const VisionControl: Skill[] = [
  {
    name: "Git",
    level: "Advanced",
    icon: FaGitAlt,
  },
  {
    name: "Github",
    level: "Advanced",
    icon: FaGithub,
  },
];

export const PackageManagers: Skill[] = [
  {
    name: "NPM",
    level: "Advanced",
    icon: FaNpm,
  },
];

export const APIs: Skill[] = [
  {
    name: "RESTful API",
    level: "Advanced",
    icon: IoIosSettings,
  },
  {
    name: "Axios",
    level: "Advanced",
    icon: SiAxios,
  },
];

export const RuntimeEnvironments: Skill[] = [
  {
    name: "Node.js",
    level: "Advanced",
    icon: FaNodeJs,
  },
];
