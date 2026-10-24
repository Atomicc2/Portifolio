import TestimonialCard from "../components/TestimonialCard";
import { testimonials } from "../data/testimonials";

export default function Testimonials() {
  return (
    <section id="depoimentos" className="mx-auto max-w-6xl px-5 py-20">
      <div className="flex flex-col items-center justify-center text-center mb-12">
        <h2 className="font-display text-3xl font-bold">O que Clientes Dizem</h2>
        <p className="mt-4 text-ink/90 max-w-2xl">
          Depoimentos de pessoas que trabalharam comigo em projetos
          de desenvolvimento de software.
        </p>
      </div>

      <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
        {testimonials.map((t) => (
          <TestimonialCard key={t.name} testimonial={t} />
        ))}
      </div>
    </section>
  );
}