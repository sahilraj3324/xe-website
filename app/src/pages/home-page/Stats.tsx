import Container from "@/app/src/components/ui/Container";
import StatItem from "@/app/src/components/ui/StatItem";
import { site, stats } from "@/app/src/lib/content";

export default function Stats() {
  return (
    <section className="bg-sky-100 py-20 md:py-28">
      <Container>
        <div className="grid gap-10 md:grid-cols-4">
          <h2 className="font-serif text-2xl leading-snug text-ink md:text-3xl">
            {site.stats.title.map((line) => (
              <span key={line} className="block">
                {line}
              </span>
            ))}
          </h2>

          {stats.map((stat) => (
            <StatItem key={stat.caption} {...stat} />
          ))}
        </div>
      </Container>
    </section>
  );
}
