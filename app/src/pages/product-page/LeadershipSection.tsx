import Button from "@/app/src/components/ui/Button";
import Container from "@/app/src/components/ui/Container";
import ImagePlaceholder from "@/app/src/components/ui/ImagePlaceholder";

const bullets = [
  "A shared definition of success across leadership.",
  "Clear ownership for decisions, reporting, and delivery.",
  "A practical rhythm your teams can maintain after rollout.",
];

export default function LeadershipSection() {
  return (
    <section className="bg-navy-900 py-24 text-white md:py-32">
      <Container>
        <div className="grid items-center gap-12 md:grid-cols-[1fr_0.9fr] md:gap-16">
          <ImagePlaceholder
            label="Leadership alignment"
            rounded="rounded-none"
            className="quper-office-notch min-h-[420px] w-full shadow-[0_30px_90px_rgba(0,0,0,0.22)]"
          />

          <div>
            <p className="text-xs font-semibold uppercase tracking-[0.22em] text-white/65">
              Leadership alignment
            </p>
            <h2 className="mt-6 font-serif text-5xl leading-[1.02] md:text-6xl">
              <span className="block">A leadership team</span>
              <span className="block">pointed in the same</span>
              <span className="block">direction</span>
            </h2>

            <ul className="mt-9 space-y-4 text-sm leading-relaxed text-white/75">
              {bullets.map((bullet) => (
                <li key={bullet} className="flex gap-3">
                  <span className="mt-2 h-px w-6 shrink-0 bg-white/50" />
                  <span>{bullet}</span>
                </li>
              ))}
            </ul>

            <div className="mt-9">
              <Button href="/contact" variant="dark">
                Book a call
              </Button>
            </div>
          </div>
        </div>
      </Container>
    </section>
  );
}
