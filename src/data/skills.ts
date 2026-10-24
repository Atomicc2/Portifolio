export type Skill = {
  name: string;
  level: number; // 0 a 100
  category: "backend" | "frontend" | "database" | "tools";
};

export const skills: Skill[] = [
  // Backend
  { name: "Java", level: 90, category: "backend" },
  { name: "Spring Boot", level: 85, category: "backend" },
  { name: "Spring Security", level: 80, category: "backend" },
  { name: "Spring Data JPA", level: 80, category: "backend" },
  { name: "Hibernate", level: 75, category: "backend" },
  { name: "APIs REST", level: 85, category: "backend" },
  { name: "Python", level: 70, category: "backend" },
  { name: "C", level: 70, category: "backend" },
  { name: "C++", level: 75, category: "backend" },

  // Frontend
  { name: "TypeScript", level: 85, category: "frontend" },
  { name: "JavaScript", level: 85, category: "frontend" },
  { name: "React", level: 80, category: "frontend" },
  { name: "Angular", level: 75, category: "frontend" },
  { name: "Tailwind CSS", level: 85, category: "frontend" },
  { name: "HTML", level: 90, category: "frontend" },
  { name: "CSS", level: 85, category: "frontend" },

  // Banco de dados
  { name: "PostgreSQL", level: 85, category: "database" },
  { name: "MySQL", level: 75, category: "database" },
  { name: "SQL", level: 90, category: "database" },

  // Ferramentas
  { name: "Git", level: 85, category: "tools" },
  { name: "GitHub", level: 85, category: "tools" },
  { name: "Maven", level: 80, category: "tools" },
  { name: "Docker", level: 70, category: "tools" },
  { name: "Docker Compose", level: 65, category: "tools" },
  { name: "AWS (EC2, S3, RDS)", level: 60, category: "tools" },
  { name: "Linux", level: 60, category: "tools" },
  { name: "Postman", level: 70, category: "tools" },
];

export const skillCategories = [
  { key: "backend", label: "Backend", icon: "database" },
  { key: "frontend", label: "Frontend", icon: "monitor" },
  { key: "database", label: "Banco de dados", icon: "hard-drive" },
  { key: "tools", label: "Ferramentas", icon: "code" },
] as const;

export const certifications = [
  { name: "Java (Básico e Intermediário)", issuer: "Loiane Gronner", year: "2025" },
  { name: "Spring Boot e Estrutura de Dados", issuer: "Loiane Gronner", year: "2025" },
  { name: "Angular 21", issuer: "Loiane Gronner", year: "2025" },
  { name: "CS50x: Introduction to Computer Science", issuer: "Harvard University", year: "2025" },
];