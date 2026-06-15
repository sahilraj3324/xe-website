const details = [
  ["Customer", "Greystone Construction"],
  ["Industry", "Construction"],
  ["Employees", "110"],
  ["Service", "Organizational Alignment"],
  ["Duration", "90 days"],
];

const sections = [
  {
    title: "Challenge",
    paragraphs: [
      "Greystone Construction had a strong pipeline and a capable team, but project overruns were a persistent problem. The average project came in 18% over budget and two to four weeks late. Leadership had attributed this to the inherent unpredictability of construction work, but when XEqualTo began the engagement, a different picture emerged.",
      "The overruns weren't caused by unpredictability. They were caused by unclear ownership, inconsistent project communication and a lack of structured risk identification early in the project lifecycle.",
    ],
  },
  {
    title: "Approach",
    paragraphs: [
      "XEqualTo's audit focused on the project lifecycle from contract signing through final delivery, mapping decision points, communication flows and ownership transfers at each stage. The findings identified three recurring failure patterns: scope changes that weren't being formally captured and priced, subcontractor coordination that was happening informally and late and project risk that wasn't being identified until it had already become a problem.",
      "XEqualTo then facilitated a series of alignment workshops with Greystone's project leadership team to redesign the project management framework. New protocols were established for scope change management, subcontractor coordination and risk identification. Ownership of each protocol was assigned to named individuals with defined accountability.",
    ],
  },
  {
    title: "Results",
    paragraphs: [
      "In the 12 months following the engagement, the proportion of projects delivered over budget fell by 73%. Average project delivery time shortened by four weeks. In a post-engagement survey, 100% of senior staff reported having clearer ownership of their responsibilities than they had before the engagement, a result that Greystone's leadership cited as the most significant cultural shift the firm had experienced.",
    ],
  },
];

export default function CaseStudyContent() {
  return (
    <section className="bg-[#d3eefb] py-24 md:py-28">
      <div className="mx-auto grid w-full max-w-[1080px] gap-14 px-6 md:grid-cols-[280px_1fr] md:px-8">
        <aside className="h-fit rounded-lg border border-navy-600/35 p-6">
          <dl className="space-y-9">
            {details.map(([label, value]) => (
              <div key={label}>
                <dt className="text-[10px] font-semibold uppercase tracking-[0.08em] text-slate/70">
                  {label}
                </dt>
                <dd className="mt-2 text-sm text-slate">{value}</dd>
              </div>
            ))}
          </dl>
        </aside>

        <article className="max-w-[720px] text-sm leading-relaxed text-ink">
          <p>
            Greystone Construction is a mid-size construction firm with
            approximately 110 employees and a strong project pipeline. Despite
            capable staff and consistent demand, the business had struggled for
            years with project overruns. The average project came in 18% over
            budget and two to four weeks late. Leadership had attributed this to
            the inherent unpredictability of construction work, but the pattern
            was too consistent to be explained by circumstance alone.
          </p>

          {sections.map((section) => (
            <section key={section.title} className="mt-10">
              <h2 className="font-serif text-4xl leading-tight text-ink">
                {section.title}
              </h2>
              <div className="mt-4 space-y-4">
                {section.paragraphs.map((paragraph) => (
                  <p key={paragraph}>{paragraph}</p>
                ))}
              </div>
            </section>
          ))}
        </article>
      </div>
    </section>
  );
}
