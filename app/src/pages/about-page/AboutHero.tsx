import Container from "@/app/src/components/ui/Container";
import Eyebrow from "@/app/src/components/ui/Eyebrow";
import ImagePlaceholder from "@/app/src/components/ui/ImagePlaceholder";
import { about } from "@/app/src/lib/content";

export default function AboutHero() {
  return (
    <section className="bg-sky-100 pb-12 pt-36 md:pt-44">
      <Container>
        <Eyebrow tone="dark">{about.eyebrow}</Eyebrow>

        <div className="mt-5 grid gap-6 md:grid-cols-2 md:items-end">
          <h1 className="font-serif text-4xl leading-tight text-ink md:text-6xl">
            {about.title.map((line) => (
              <span key={line} className="block">
                {line}
              </span>
            ))}
          </h1>
          <p className="max-w-md text-sm leading-relaxed text-slate md:justify-self-end md:text-base">
            {about.intro}
          </p>
        </div>

        <ImagePlaceholder
          label="Our team at work"
          rounded="rounded-none"
          className="quper-office-notch mt-10 aspect-[21/9] w-full"
        />
      </Container>
    </section>
  );
}
