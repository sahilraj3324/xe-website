import Container from "@/app/src/components/ui/Container";
import Button from "@/app/src/components/ui/Button";
import Eyebrow from "@/app/src/components/ui/Eyebrow";
import { site } from "@/app/src/lib/content";

export default function Hero() {
  const { eyebrow, title, body, cta } = site.hero;
  return (
    <section className="depth-band">
      <Container className="pb-28 pt-36 md:pb-36 md:pt-44">
        <div className="max-w-3xl">
          <Eyebrow tone="light">{eyebrow}</Eyebrow>

          <h1 className="mt-6 font-serif text-5xl leading-[1.05] text-white md:text-7xl">
            {title.map((line) => (
              <span key={line} className="block">
                {line}
              </span>
            ))}
          </h1>

          <p className="mt-44 max-w-md text-sm leading-relaxed text-mist md:text-base">
            {body}
          </p>

          <div className="mt-8">
            <Button href="/contact" variant="light">
              {cta}
            </Button>
          </div>
        </div>
      </Container>
    </section>
  );
}
