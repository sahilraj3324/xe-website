import Container from "@/app/src/components/ui/Container";
import { privacy } from "@/app/src/lib/content";

export default function PrivacyHero() {
  return (
    <section className="bg-gradient-to-b from-sky-50 to-sky-100 pb-12 pt-36 text-center md:pt-44">
      <Container>
        <h1 className="font-serif text-5xl text-ink md:text-7xl">
          {privacy.title}
        </h1>
        <p className="mt-5 text-sm text-slate">{privacy.updated}</p>
      </Container>
    </section>
  );
}
