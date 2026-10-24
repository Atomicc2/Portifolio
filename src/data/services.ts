export type Service = {
  name: string;
  description: string;
  icon: "code" | "monitor" | "database" | "hard-drive";
};

export const services: Service[] = [
  {
    name: "Desenvolvimento Web",
    description:
      "Criação de aplicações web modernas com foco em performance, escalabilidade e boas práticas de código.",
    icon: "code",
  },
  {
    name: "Frontend Development",
    description:
      "Interfaces responsivas e interativas com React, Next.js, TypeScript e Tailwind CSS.",
    icon: "monitor",
  },
  {
    name: "Backend Development",
    description:
      "REST APIs e serviços server-side robustos com Java, Spring Boot, Node.js e bancos de dados relacionais.",
    icon: "database",
  },
  {
    name: "Database Design",
    description:
      "Arquitetura de banco de dados e otimização para aplicações de alta performance.",
    icon: "hard-drive",
  },
];