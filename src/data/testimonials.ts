export type Testimonial = {
  name: string;
  role: string;
  company: string;
  quote: string;
  rating: number;
};

export const testimonials: Testimonial[] = [
  {
    name: "Maria Oliveira",
    role: "Tech Lead",
    company: "SoluçõesTech",
    quote:
      "O Anderson entregou uma API robusta e bem documentada, com foco em segurança e boas práticas. O código é limpo e fácil de manter.",
    rating: 5,
  },
  {
    name: "Carlos Souza",
    role: "CTO",
    company: "InovaLab",
    quote:
      "Trabalhar com o Anderson foi excelente. Ele entende profundamente de Java, Spring Boot e bancos de dados, sempre entregando prazo e qualidade.",
    rating: 5,
  },
  {
    name: "Fernanda Lima",
    role: "Product Owner",
    company: "FintechStart",
    quote:
      "A carteira digital desenvolvida pelo Anderson impressiona pela integridade dos dados e pelo cuidado com transações financeiras.",
    rating: 5,
  },
];