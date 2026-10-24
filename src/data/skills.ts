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
  { name: "APIs REST", level: 85, category: "backend" },
  { name: "Python", level: 70, category: "backend" },

  // Frontend
  { name: "TypeScript", level: 85, category: "frontend" },
  { name: "React", level: 80, category: "frontend" },
  { name: "Angular", level: 75, category: "frontend" },
  { name: "Tailwind CSS", level: 85, category: "frontend" },

  // Banco de dados
  { name: "PostgreSQL", level: 85, category: "database" },
  { name: "SQL", level: 90, category: "database" },
  { name: "JDBC", level: 75, category: "database" },

  // Ferramentas
  { name: "Git", level: 85, category: "tools" },
  { name: "GitHub", level: 85, category: "tools" },
  { name: "Maven", level: 80, category: "tools" },
  { name: "Docker", level: 70, category: "tools" },
];

export const skillCategories = [
  { key: "backend", label: "Backend", icon: "database" },
  { key: "frontend", label: "Frontend", icon: "monitor" },
  { key: "database", label: "Banco de dados", icon: "hard-drive" },
  { key: "tools", label: "Ferramentas", icon: "code" },
] as const;