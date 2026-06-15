import Link from "next/link";

const benefits = [
  "30-minute call with a senior consultant",
  "Honest assessment of your situation",
  "No obligation, no sales pressure",
  "Clear next steps regardless of outcome",
];

function CheckIcon() {
  return (
    <svg viewBox="0 0 16 16" className="h-3.5 w-3.5" fill="none" aria-hidden>
      <path
        d="m3 8.2 3 3L13 4.8"
        stroke="currentColor"
        strokeWidth="1.4"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  );
}

function Field({
  label,
  type = "text",
  className = "",
}: {
  label: string;
  type?: string;
  className?: string;
}) {
  return (
    <label className={`block ${className}`}>
      <span className="text-[10px] font-medium uppercase tracking-[0.08em] text-ink">
        {label}
      </span>
      <input
        type={type}
        className="mt-2 h-12 w-full rounded-md border border-navy-600/25 bg-transparent px-4 text-sm text-ink outline-none transition-colors placeholder:text-slate/45 focus:border-navy-700"
      />
    </label>
  );
}

export default function ContactFormSection() {
  return (
    <section className="bg-[#d3eefb] pb-24 md:pb-32">
      <div className="mx-auto grid w-full max-w-[1080px] gap-14 px-6 md:grid-cols-[0.8fr_1.2fr] md:px-8">
        <div className="flex flex-col justify-between gap-16">
          <div>
            <h2 className="font-serif text-4xl leading-[1.05] text-ink md:text-5xl">
              <span className="block">Book your free</span>
              <span className="block">discovery call</span>
            </h2>
            <p className="mt-5 max-w-sm text-sm leading-relaxed text-ink">
              Tell us a little about where you are and what you&apos;re working
              through. We&apos;ll be in touch within 48 hours to schedule a
              discovery call.
            </p>
          </div>

          <ul className="space-y-4 text-sm text-ink">
            {benefits.map((benefit) => (
              <li key={benefit} className="flex items-center gap-3">
                <span className="text-slate">
                  <CheckIcon />
                </span>
                <span>{benefit}</span>
              </li>
            ))}
          </ul>
        </div>

        <form className="grid gap-5">
          <Field label="Name" />
          <Field label="Email" type="email" />
          <div className="grid gap-5 md:grid-cols-2">
            <Field label="Organization" />
            <Field label="Title" />
          </div>
          <label className="block">
            <span className="text-[10px] font-medium uppercase tracking-[0.08em] text-ink">
              Details
            </span>
            <textarea
              rows={7}
              placeholder="Tell us what's slowing your business down"
              className="mt-2 w-full resize-none rounded-md border border-navy-600/25 bg-transparent px-4 py-4 text-sm text-ink outline-none transition-colors placeholder:text-slate/45 focus:border-navy-700"
            />
          </label>
          <button
            type="submit"
            className="h-12 rounded-md bg-[#075985] text-base font-medium text-white transition-colors hover:bg-navy-900"
          >
            Submit
          </button>
          <p className="text-center text-xs text-ink">
            By submitting the form, you agree to our{" "}
            <Link href="/privacy" className="underline underline-offset-2">
              privacy policy
            </Link>
            .
          </p>
        </form>
      </div>
    </section>
  );
}
