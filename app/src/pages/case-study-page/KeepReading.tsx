import Link from "next/link";
import Container from "@/app/src/components/ui/Container";
import ArrowIcon from "@/app/src/components/ui/ArrowIcon";

const related = [
  {
    category: "Logistics",
    title: "Reducing operational costs by 28% without cutting staff",
    image: "bg-[linear-gradient(135deg,#d8f0df,#8bbfbd_45%,#315968)]",
  },
  {
    category: "Distribution",
    title: "Scaling from $30M to $80M without adding headcount",
    image: "bg-[linear-gradient(135deg,#5b94b4,#d99665_52%,#733d2a)]",
  },
  {
    category: "Professional services",
    title: "Rebuilding project delivery for a 200-person firm from the ground up",
    image: "bg-[linear-gradient(135deg,#eef8ff,#6aa3e8_48%,#f2c17b)]",
  },
];

export default function KeepReading() {
  return (
    <section className="bg-[#a9d0ea] py-24 md:py-32">
      <Container>
        <h2 className="font-serif text-5xl leading-none text-ink md:text-6xl">
          Keep reading
        </h2>

        <div className="mt-12 grid gap-9 md:grid-cols-3">
          {related.map((item) => (
            <article key={item.title}>
              <div className={`aspect-[3/2] rounded-md ${item.image}`} />
              <p className="mt-5 text-[10px] font-semibold uppercase tracking-[0.08em] text-ink/75">
                {item.category}
              </p>
              <h3 className="mt-3 font-serif text-2xl leading-snug text-ink">
                {item.title}
              </h3>
              <Link
                href="/case-studies"
                className="mt-6 inline-flex items-center gap-3 text-xs font-semibold text-ink"
              >
                Read case study
                <span className="flex h-5 w-5 items-center justify-center rounded bg-navy-900 text-white">
                  <ArrowIcon className="h-3 w-3" />
                </span>
              </Link>
            </article>
          ))}
        </div>
      </Container>
    </section>
  );
}
