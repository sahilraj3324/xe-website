import Container from "@/app/src/components/ui/Container";

export default function CaseStudiesHero() {
  return (
    <section className="bg-[#d3eefb] pb-16 pt-36 text-center md:pb-20 md:pt-44">
      <Container>
        <p className="text-xs font-bold uppercase tracking-[0.08em] text-ink">
          <span aria-hidden>{"* "}</span>
          Case studies
        </p>
        <h1 className="mx-auto mt-5 max-w-4xl font-serif text-6xl leading-[0.98] text-ink md:text-8xl">
          Results that speak for themselves
        </h1>
      </Container>
    </section>
  );
}
