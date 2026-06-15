import Container from "@/app/src/components/ui/Container";

const questions = [
  "How does the 90-day engagement actually work?",
  "Do we need to prepare anything before the engagement starts?",
  "How embedded is the Quper team during an engagement?",
  "What happens after the 90 days are up?",
  "What size of company is Quper best suited for?",
];

export default function ContactFAQ() {
  return (
    <section className="bg-[#d3eefb] pb-24 md:pb-32">
      <Container>
        <div className="text-center">
          <p className="text-xs font-medium uppercase tracking-[0.08em] text-ink">
            <span aria-hidden>{"* "}</span>
            FAQ
          </p>
          <h2 className="mx-auto mt-5 max-w-3xl font-serif text-5xl leading-[1.05] text-ink md:text-6xl">
            Everything you need to know before starting
          </h2>
        </div>

        <div className="mx-auto mt-16 max-w-3xl">
          {questions.map((question) => (
            <button
              key={question}
              type="button"
              className="flex w-full items-center justify-between gap-6 py-5 text-left font-serif text-xl leading-snug text-ink"
            >
              <span>{question}</span>
              <svg
                viewBox="0 0 16 16"
                className="h-4 w-4 shrink-0 text-ink"
                fill="none"
                aria-hidden
              >
                <path
                  d="m4 6 4 4 4-4"
                  stroke="currentColor"
                  strokeWidth="1.4"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                />
              </svg>
            </button>
          ))}
        </div>
      </Container>
    </section>
  );
}
