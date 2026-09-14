import {
  FaJava,
  FaNodeJs,
  FaGitAlt,
  FaGithub,
  FaLinux,
  FaAws,


} from "react-icons/fa";

import { GrGolang } from "react-icons/gr";

import {
  SiPython,
  SiJavascript,
  SiCplusplus,
  SiSpring,
  SiFastapi,
  SiGin,
  SiReact,
  SiTailwindcss,
  SiMui,
  SiPostgresql,
  SiMysql,
  SiMongodb,
  SiRedis,
  SiDocker,
  SiApachekafka,
  SiJunit5,
  SiPostman,
  SiGooglecloud,
} from "react-icons/si";

const icons = {
  java: FaJava,
  go: GrGolang,
  python: SiPython,
  javascript: SiJavascript,
  sql: SiMysql,
  cpp: SiCplusplus,
  nodejs:FaNodeJs,

  spring: SiSpring,
  fastapi: SiFastapi,
  gin: SiGin,
  react: SiReact,
  tailwind: SiTailwindcss,
  mui: SiMui,

  postgresql: SiPostgresql,
  mysql: SiMysql,
  mongodb: SiMongodb,
  redis: SiRedis,

  docker: SiDocker,
  kafka: SiApachekafka,
  junit: SiJunit5,
  git: FaGitAlt,
  github: FaGithub,
  linux: FaLinux,
  postman: SiPostman,
  aws: FaAws,
  googlecloud: SiGooglecloud,
};

const TechIcon = ({ name, size = 18 }) => {
  const Icon = icons[name];

  if (!Icon) {
    return null;
  }

  return <Icon size={size} />;
};

export default TechIcon;