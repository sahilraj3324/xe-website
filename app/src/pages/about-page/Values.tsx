import Container from "@/app/src/components/ui/Container";
import { about, values } from "@/app/src/lib/content";

// Simple line icons, one per value (Embedded, Honest, Depth, Longevity).
const icons = [
  // Embedded — crosshair
  "M12 4v4M12 16v4M4 12h4M16 12h4M9 12a3 3 0 1 0 6 0 3 3 0 0 0-6 0",
  // Honest — chat bubble
  "M5 6h14v9H9l-4 3V6Z",
  // Depth — magnifier
  "M10 4a6 6 0 1 0 0 12 6 6 0 0 0 0-12ZM15 15l5 5",
  // Longevity — chart line
  "M4 19V5M4 19h16M7 15l3-4 3 3 4-6",
];

export default function Values() {
  return (
    <section className="bg-sky-100 py-20 md:py-28">
      <Container>
        <h2 className="text-center font-serif text-3xl leading-snug text-ink md:text-4xl">
          {about.valuesTitle.map((line) => (
            <span key={line} className="block">
              {line}
            </span>
          ))}
        </h2>

        <div className="mt-12 grid grid-cols-1 border-t border-ink/15 sm:grid-cols-2 md:grid-cols-4">
          {values.map((value, i) => (
            <div
              key={value.title}
              className="border-ink/15 px-6 py-8 sm:[&:nth-child(even)]:border-l md:border-l md:first:border-l-0 md:[&:nth-child(even)]:border-l"
            >
              <svg
                viewBox="0 0 24 24"
                className="h-6 w-6 text-navy-700"
                fill="none"
                stroke="currentColor"
                strokeWidth="1.4"
                strokeLinecap="round"
                strokeLinejoin="round"
                aria-hidden
              >
                <path d={icons[i]} />
              </svg>
              <h3 className="mt-5 font-serif text-xl text-ink">{value.title}</h3>
              <p className="mt-3 text-sm leading-relaxed text-slate">
                {value.description}
              </p>
            </div>
          ))}
        </div>
      </Container>
    </section>
  );
}
