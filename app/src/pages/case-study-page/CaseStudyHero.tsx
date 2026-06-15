import Link from "next/link";
import Container from "@/app/src/components/ui/Container";

export default function CaseStudyHero() {
  return (
    <section className="relative overflow-hidden bg-[#090a12] pt-32 text-white md:pt-40">
      <div
        className="absolute inset-0 opacity-75"
        style={{
          backgroundImage:
            "linear-gradient(90deg, rgba(6,7,13,0.9) 0%, rgba(6,7,13,0.48) 48%, rgba(6,7,13,0.28) 100%), url('/images/case-study.png')",
          backgroundSize: "cover",
          backgroundPosition: "center top",
        }}
      />
      <Container className="relative pb-12 md:pb-14">
        <div className="grid min-h-[360px] items-end gap-12 md:grid-cols-[1.2fr_0.8fr]">
          <div>
            <Link
              href="/case-studies"
              className="inline-flex items-center gap-2 text-[10px] font-medium uppercase tracking-[0.08em] text-white/80 transition-colors hover:text-white"
            >
              <span aria-hidden>{"<-"}</span>
              Back to all case studies
            </Link>
            <h1 className="mt-6 max-w-3xl font-serif text-5xl leading-[1.04] text-white md:text-6xl">
              Eliminating project overruns for a mid-size construction firm
            </h1>
          </div>

          <div className="pb-6 md:pb-10">
            <p className="max-w-sm text-sm leading-relaxed text-white/82">
              Greystone Construction was completing projects but rarely on time
              or on budget. The overruns were predictable but nobody had a
              system for preventing them.
            </p>
            <div className="mt-6 flex flex-wrap gap-2">
              <span className="rounded-full bg-white px-2.5 py-1 text-[9px] font-semibold uppercase tracking-[0.08em] text-navy-900">
                Construction
              </span>
              <span className="rounded-full border border-white/30 px-2.5 py-1 text-[9px] font-semibold uppercase tracking-[0.08em] text-white">
                Organizational alignment
              </span>
            </div>
          </div>
        </div>
      </Container>
    </section>
  );
}
