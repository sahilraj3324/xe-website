import Link from "next/link";
import Container from "@/app/src/components/ui/Container";
import ArrowIcon from "@/app/src/components/ui/ArrowIcon";

const cards = [
  {
    category: "Healthcare",
    title: "Building a scalable onboarding process for a growing healthcare services company",
    imageClass: "case-card-image case-card-healthcare",
  },
  {
    category: "Logistics",
    title: "Reducing operational costs by 28% without cutting staff",
    imageClass: "case-card-image case-card-logistics",
  },
  {
    category: "Distribution",
    title: "Scaling from $30M to $80M without adding headcount",
    imageClass: "case-card-image case-card-distribution",
  },
];

function ReadLink() {
  return (
    <Link
      href="/case-studies/greystone-construction"
      className="mt-7 inline-flex items-center gap-3 text-xs font-bold text-ink"
    >
      Read case study
      <span className="flex h-5 w-5 items-center justify-center rounded bg-[#075985] text-white">
        <ArrowIcon className="h-3 w-3" />
      </span>
    </Link>
  );
}

export default function CaseStudiesGrid() {
  return (
    <section className="bg-[#d3eefb] pb-24 md:pb-28">
      <Container className="max-w-[1080px]">
        <article className="grid overflow-hidden rounded-md bg-[#075985] md:grid-cols-[340px_1fr]">
          <div
            className="min-h-[280px] bg-[linear-gradient(135deg,rgba(0,184,220,0.5),rgba(4,12,28,0.2)),url('/images/case-study.png')] bg-cover bg-center"
            aria-hidden
          />
          <div className="flex min-h-[280px] flex-col justify-between px-8 py-9 text-white md:px-12">
            <div>
              <p className="text-[10px] font-bold uppercase tracking-[0.08em] text-white/85">
                Construction
              </p>
              <h2 className="mt-6 max-w-2xl font-serif text-4xl leading-[1.05] md:text-5xl">
                Eliminating project overruns for a mid-size construction firm
              </h2>
            </div>
            <Link
              href="/case-studies/greystone-construction"
              className="mt-10 inline-flex items-center gap-3 text-xs font-bold text-white"
            >
              Read case study
              <ArrowIcon className="h-3.5 w-3.5" />
            </Link>
          </div>
        </article>

        <div className="mt-24 grid gap-10 md:grid-cols-3">
          {cards.map((card) => (
            <article key={card.title}>
              <div className={card.imageClass} aria-hidden />
              <p className="mt-5 text-[10px] font-bold uppercase tracking-[0.08em] text-ink">
                {card.category}
              </p>
              <h3 className="mt-4 font-serif text-2xl leading-snug text-ink md:text-[28px]">
                {card.title}
              </h3>
              <ReadLink />
            </article>
          ))}
        </div>
      </Container>
    </section>
  );
}
