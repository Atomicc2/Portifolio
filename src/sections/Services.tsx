import ServiceCard from "../components/ServiceCard";
import { services } from "../data/services";

export default function Services() {
  return (
    <section id="servicos" className="mx-auto max-w-6xl px-5 py-20">
      <div className="flex flex-col items-center justify-center text-center mb-12">
        <h2 className="font-display text-3xl font-bold">Meus Serviços</h2>
        <p className="mt-4 text-ink/90 max-w-2xl">
          O que posso fazer para ajudar o seu projeto a crescer com
          tecnologia e qualidade.
        </p>
      </div>

      <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
        {services.map((s) => (
          <ServiceCard key={s.name} service={s} />
        ))}
      </div>
    </section>
  );
}