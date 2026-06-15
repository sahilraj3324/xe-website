import Container from "@/app/src/components/ui/Container";
import Eyebrow from "@/app/src/components/ui/Eyebrow";
import { blog } from "@/app/src/lib/content";

export default function BlogHero() {
  return (
    <section className="bg-gradient-to-b from-sky-50 to-sky-100 pb-12 pt-36 text-center md:pt-44">
      <Container>
        <Eyebrow tone="dark">{blog.eyebrow}</Eyebrow>
        <h1 className="mt-6 font-serif text-4xl leading-tight text-ink md:text-7xl">
          {blog.title.map((line) => (
            <span key={line} className="block">
              {line}
            </span>
          ))}
        </h1>
      </Container>
    </section>
  );
}
