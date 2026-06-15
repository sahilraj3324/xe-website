import Container from "@/app/src/components/ui/Container";
import ServiceCard from "@/app/src/components/ui/ServiceCard";
import { services, site } from "@/app/src/lib/content";

export default function Services() {
  return (
    <section className="bg-sky-100 py-20 md:py-28">
      <Container>
        <h2 className="max-w-xl font-serif text-3xl leading-tight text-ink md:text-4xl">
          {site.services.title.map((line) => (
            <span key={line} className="block">
              {line}
            </span>
          ))}
        </h2>

        <div className="mt-12 grid gap-8 md:grid-cols-3">
          {services.map((service) => (
            <ServiceCard key={service.title} {...service} />
          ))}
        </div>
      </Container>
    </section>
  );
}
