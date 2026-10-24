import type { Testimonial } from "../data/testimonials";

const stars = (rating: number) =>
  Array.from({ length: 5 }, (_, i) => (
    <svg
      key={i}
      className={`h-4 w-4 ${i < rating ? "text-accent" : "text-line"}`}
      fill="currentColor"
      viewBox="0 0 20 20"
      aria-hidden="true"
    >
      <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 0 0 .95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 0 0-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 0 0-1.175 0l-2.8 2.034c-.785.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 0 0-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 0 0 .951-.69l1.07-3.292z" />
    </svg>
  ));

export default function TestimonialCard({ testimonial }: { testimonial: Testimonial }) {
  return (
    <article className="rounded-xl border border-line bg-surface p-6">
      <div className="flex items-start gap-3 mb-4">
        <div className="flex items-center gap-1">
          {stars(testimonial.rating)}
        </div>
      </div>
      <p className="text-ink/90 leading-relaxed mb-4">
        "{testimonial.quote}"
      </p>
      <div className="flex items-center gap-3">
        <div className="flex flex-col">
          <span className="font-display font-bold text-ink">{testimonial.name}</span>
          <span className="text-sm text-muted">{testimonial.role}</span>
        </div>
        <span className="text-xs text-muted">{testimonial.company}</span>
      </div>
    </article>
  );
}