import Container from "@/app/src/components/ui/Container";

export default function ContactHero() {
  return (
    <section className="bg-[#d3eefb] pb-20 pt-36 text-center md:pb-24 md:pt-44">
      <Container>
        <p className="text-xs font-medium uppercase tracking-[0.08em] text-ink">
          <span aria-hidden>{"* "}</span>
          Contact
        </p>
        <h1 className="mx-auto mt-5 max-w-4xl font-serif text-6xl leading-[1.02] text-ink md:text-7xl">
          Let&apos;s talk about your next stage of growth
        </h1>
      </Container>
    </section>
  );
}
