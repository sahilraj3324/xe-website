import Container from "@/app/src/components/ui/Container";

const metrics = [
  {
    value: "73%",
    label: "Reduction in projects delivered over budget",
  },
  {
    value: "4 weeks",
    label: "Average reduction in project delivery time",
  },
  {
    value: "100%",
    label: "Of staff reported clearer ownership",
  },
];

export default function MetricsBand() {
  return (
    <section className="case-study-metrics bg-[#a9d0ea] py-8 md:py-10">
      <Container>
        <div className="grid gap-8 md:grid-cols-3">
          {metrics.map((metric) => (
            <div key={metric.label}>
              <p className="font-serif text-3xl leading-none text-ink">
                {metric.value}
              </p>
              <p className="mt-4 text-[10px] font-semibold uppercase tracking-[0.08em] text-ink">
                {metric.label}
              </p>
            </div>
          ))}
        </div>
      </Container>
    </section>
  );
}
