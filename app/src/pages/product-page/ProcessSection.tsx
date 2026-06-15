import Container from "@/app/src/components/ui/Container";

const steps = [
  {
    title: "Leadership assessment",
    description:
      "Interview leaders, review current operating rituals, and identify the highest-cost accountability gaps.",
    duration: "2-3 hrs",
  },
  {
    title: "Alignment workshops",
    description:
      "Run focused working sessions to align leadership around priorities, decision paths, and friction points.",
    duration: "1-2 weeks",
  },
  {
    title: "Operating model design",
    description:
      "Design the practical structure: roles, ownership, workflows, meeting rhythm, and reporting logic.",
    duration: "2-3 weeks",
  },
  {
    title: "Documentation and rollout",
    description:
      "Package the playbook, launch it with your team, and establish a rhythm for continued adoption.",
    duration: "1 week",
  },
];

export default function ProcessSection() {
  return (
    <section className="bg-navy-700 py-24 text-white md:py-32">
      <Container>
        <div className="grid gap-14 md:grid-cols-[0.85fr_1.15fr] md:gap-20">
          <div>
            <p className="text-xs font-semibold uppercase tracking-[0.22em] text-white/70">
              How it works
            </p>
            <h2 className="mt-6 font-serif text-5xl leading-[1.02] md:text-6xl">
              <span className="block">Structured process</span>
              <span className="block">with clear results</span>
            </h2>
          </div>

          <div className="border-t border-white/25">
            {steps.map((step, index) => (
              <article
                key={step.title}
                className="grid gap-5 border-b border-white/25 py-7 md:grid-cols-[52px_1fr_auto]"
              >
                <span className="font-serif text-3xl text-white/80">
                  {String(index + 1).padStart(2, "0")}
                </span>
                <div>
                  <h3 className="font-serif text-2xl leading-tight">
                    {step.title}
                  </h3>
                  <p className="mt-3 max-w-xl text-sm leading-relaxed text-white/72">
                    {step.description}
                  </p>
                </div>
                <p className="text-sm font-semibold text-white/80 md:pt-2">
                  {step.duration}
                </p>
              </article>
            ))}
          </div>
        </div>
      </Container>
    </section>
  );
}
