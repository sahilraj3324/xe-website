import Container from "@/app/src/components/ui/Container";

const features = [
  {
    title: "Accountability mapping",
    description:
      "Clarify ownership across teams, functions, and leadership layers so decisions move faster.",
  },
  {
    title: "Alignment workshops",
    description:
      "Bring leaders into focused sessions that uncover friction and agree the operating rhythm.",
  },
  {
    title: "Operating model design",
    description:
      "Translate strategy into roles, rituals, workflows, and decision rights your team can use.",
  },
  {
    title: "Alignment playbook",
    description:
      "Leave with a practical document that keeps hiring, planning, and accountability consistent.",
  },
];

function LineIcon({ index }: { index: number }) {
  const paths = [
    "M4 12h16M12 4v16M7 7l10 10M17 7 7 17",
    "M5 8h14M5 16h14M8 5v14M16 5v14",
    "M4 18 9 7l5 8 3-5 3 8M5 18h15",
    "M5 6h14v12H5zM8 10h8M8 14h5",
  ];

  return (
    <svg
      viewBox="0 0 24 24"
      className="h-7 w-7 text-navy-900"
      fill="none"
      aria-hidden
    >
      <path
        d={paths[index]}
        stroke="currentColor"
        strokeWidth="1.25"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  );
}

export default function FeatureGrid() {
  return (
    <section className="bg-sky-200 py-24 md:py-32">
      <Container>
        <h2 className="font-serif text-5xl leading-none text-ink md:text-6xl">
          What&apos;s Qupər?
        </h2>

        <div className="mt-14 grid border-t border-ink/20 md:grid-cols-4">
          {features.map((feature, index) => (
            <article
              key={feature.title}
              className="border-b border-ink/15 py-8 md:border-b-0 md:border-r md:border-ink/15 md:px-6 md:first:pl-0 md:last:border-r-0 md:last:pr-0"
            >
              <LineIcon index={index} />
              <h3 className="mt-8 font-serif text-2xl leading-tight text-ink">
                {feature.title}
              </h3>
              <p className="mt-4 text-sm leading-relaxed text-slate">
                {feature.description}
              </p>
            </article>
          ))}
        </div>
      </Container>
    </section>
  );
}
