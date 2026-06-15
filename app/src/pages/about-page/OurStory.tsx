import Container from "@/app/src/components/ui/Container";
import Button from "@/app/src/components/ui/Button";
import Eyebrow from "@/app/src/components/ui/Eyebrow";
import ImagePlaceholder from "@/app/src/components/ui/ImagePlaceholder";
import { about } from "@/app/src/lib/content";

export default function OurStory() {
  const { eyebrow, title, body, cta } = about.story;
  return (
    <section className="bg-sky-100 py-12 md:py-16">
      <Container>
        <div className="grid items-start gap-10 md:grid-cols-2 md:gap-14">
          <ImagePlaceholder
            label="Our story"
            rounded="rounded-none"
            className="aspect-[4/5] w-full"
          />

          <div className="md:pt-4">
            <Eyebrow tone="dark">{eyebrow}</Eyebrow>
            <h2 className="mt-5 font-serif text-3xl leading-tight text-ink md:text-4xl">
              {title.map((line) => (
                <span key={line} className="block">
                  {line}
                </span>
              ))}
            </h2>
            <div className="mt-6 space-y-4 text-sm leading-relaxed text-slate">
              {body.map((para, i) => (
                <p key={i}>{para}</p>
              ))}
            </div>
            <div className="mt-8">
              <Button href="/services" variant="dark">
                {cta}
              </Button>
            </div>
          </div>
        </div>
      </Container>
    </section>
  );
}
