import Container from "@/app/src/components/ui/Container";

export default function StatementSection() {
  return (
    <section className="bg-sky-100 pb-24 md:pb-32">
      <Container>
        <div className="mx-auto max-w-4xl text-center">
          <p className="text-xs font-semibold uppercase tracking-[0.22em] text-slate">
            Our vision
          </p>
          <p className="mt-7 font-serif text-4xl leading-[1.08] text-ink md:text-5xl">
            A structured engagement that aligns your people, roles and
            accountability structures around a common, highly-efficient
            operating model.
          </p>
        </div>
      </Container>
    </section>
  );
}
