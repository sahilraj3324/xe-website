import Container from "@/app/src/components/ui/Container";
import Button from "@/app/src/components/ui/Button";
import Eyebrow from "@/app/src/components/ui/Eyebrow";
import ImagePlaceholder from "@/app/src/components/ui/ImagePlaceholder";
import { site } from "@/app/src/lib/content";

export default function WhyXequalto() {
  const { eyebrow, title, body, cta } = site.why;
  return (
    <section className="bg-sky-100 py-12 md:py-16">
      <Container>
        <div className="grid items-start gap-10 md:grid-cols-2 md:gap-14">
          <ImagePlaceholder
            label="Why XEqualTo"
            className="aspect-[4/5] w-full md:aspect-[4/5]"
          />

          <div className="md:pt-6">
            <Eyebrow tone="dark">{eyebrow}</Eyebrow>
            <h2 className="mt-5 font-serif text-3xl leading-tight text-ink md:text-4xl">
              {title}
            </h2>
            <p className="mt-32 max-w-md text-sm leading-relaxed text-slate md:text-base">
              {body}
            </p>
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
