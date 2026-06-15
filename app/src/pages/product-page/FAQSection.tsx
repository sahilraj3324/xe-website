import Container from "@/app/src/components/ui/Container";

const questions = [
  "How does the 90-day engagement actually work?",
  "Do we need to prepare anything before the engagement starts?",
  "How embedded is the Qupər team during an engagement?",
  "What happens after the 90 days are up?",
  "What size of company is Qupər best suited for?",
];

export default function FAQSection() {
  return (
    <section className="bg-sky-100 py-24 md:py-32">
      <Container>
        <div className="text-center">
          <p className="text-xs font-semibold uppercase tracking-[0.22em] text-slate">
            FAQ
          </p>
          <h2 className="mt-5 font-serif text-5xl leading-[1.02] text-ink md:text-6xl">
            <span className="block">Everything you need to</span>
            <span className="block">know before starting</span>
          </h2>
        </div>

        <div className="mx-auto mt-14 max-w-3xl border-t border-ink/20">
          {questions.map((question) => (
            <button
              key={question}
              type="button"
              className="flex w-full items-center justify-between gap-5 border-b border-ink/20 py-5 text-left text-sm font-medium text-ink"
            >
              <span>{question}</span>
              <svg
                viewBox="0 0 16 16"
                className="h-4 w-4 shrink-0 text-slate"
                fill="none"
                aria-hidden
              >
                <path
                  d="m4 6 4 4 4-4"
                  stroke="currentColor"
                  strokeWidth="1.5"
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
