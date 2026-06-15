import Container from "@/app/src/components/ui/Container";

const industries = [
  {
    title: "Fast-growing companies",
    description:
      "Teams scaling faster than their operating model can support, where roles and ownership need definition.",
    image: "bg-[linear-gradient(135deg,#b7d8eb,#244c68)]",
  },
  {
    title: "Product-enabled teams",
    description:
      "Technology and product organizations that need cleaner decision rights between strategy and delivery.",
    image: "bg-[linear-gradient(135deg,#d4e6f1,#697ca8)]",
  },
  {
    title: "Established operations",
    description:
      "Mature organizations replacing informal processes with a repeatable structure for execution.",
    image: "bg-[linear-gradient(135deg,#c6dce8,#0f4051)]",
  },
];

export default function IndustriesSection() {
  return (
    <section className="bg-sky-100 py-24 md:py-32">
      <Container>
        <div className="text-center">
          <p className="text-xs font-semibold uppercase tracking-[0.22em] text-slate">
            Who we help
          </p>
          <h2 className="mt-5 font-serif text-5xl leading-[1.02] text-ink md:text-6xl">
            <span className="block">We work with global</span>
            <span className="block">industries</span>
          </h2>
        </div>

        <div className="mt-14 grid gap-8 md:grid-cols-3">
          {industries.map((industry) => (
            <article key={industry.title}>
              <div
                className={`aspect-[4/3] rounded-lg ${industry.image}`}
                aria-hidden
              />
              <h3 className="mt-5 font-serif text-2xl leading-tight text-ink">
                {industry.title}
              </h3>
              <p className="mt-3 text-sm leading-relaxed text-slate">
                {industry.description}
              </p>
            </article>
          ))}
        </div>
      </Container>
    </section>
  );
}
