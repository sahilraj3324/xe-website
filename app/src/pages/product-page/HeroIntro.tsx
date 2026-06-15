import Container from "@/app/src/components/ui/Container";

export default function HeroIntro() {
  return (
    <section className="bg-sky-100 pb-24 pt-36 text-center md:pb-32 md:pt-44">
      <Container>
        <p className="text-xs font-semibold uppercase tracking-[0.22em] text-slate">
          Our product
        </p>
        <h1 className="mt-5 font-serif text-6xl leading-[0.95] text-ink md:text-8xl">
          <span className="block">Introducing</span>
          <span className="block">Qupər</span>
        </h1>

        <div className="quper-mockup mx-auto mt-14 max-w-[920px] rounded-[28px] border border-white/70 bg-[#e8e6ff] p-3 text-left shadow-[0_32px_90px_rgba(29,73,115,0.18)]">
          <div className="relative overflow-hidden rounded-[22px] bg-[#d6d7ff] px-5 pb-8 pt-4 md:px-10 md:pb-12 md:pt-7">
            <div className="absolute inset-0 bg-[linear-gradient(135deg,rgba(255,255,255,0.72),rgba(190,215,255,0.2)_42%,rgba(128,149,224,0.22))]" />
            <div className="quper-cloud quper-cloud-a" />
            <div className="quper-cloud quper-cloud-b" />

            <div className="relative flex items-center justify-between rounded-full border border-white/70 bg-white/45 px-4 py-2 text-[10px] font-semibold uppercase tracking-[0.18em] text-[#41536f] backdrop-blur-md">
              <span>XEqualTo</span>
              <div className="hidden gap-5 md:flex">
                <span>Strategy</span>
                <span>Teams</span>
                <span>Insights</span>
              </div>
              <span>Book call</span>
            </div>

            <div className="relative mx-auto mt-14 max-w-2xl text-center">
              <span className="inline-flex rounded-full border border-white/70 bg-white/45 px-3 py-1 text-[10px] font-semibold uppercase tracking-[0.18em] text-[#41536f]">
                Operating clarity
              </span>
              <h2 className="mt-5 font-serif text-4xl leading-[0.98] text-[#1a2743] md:text-6xl">
                Bring every team into focus.
              </h2>
            </div>

            <div className="relative mx-auto mt-10 grid max-w-3xl gap-4 rounded-2xl border border-white/70 bg-white/50 p-4 shadow-[0_24px_70px_rgba(57,80,129,0.16)] backdrop-blur-md md:grid-cols-[1.1fr_0.9fr] md:p-5">
              <div className="min-h-[190px] rounded-xl bg-[linear-gradient(135deg,#506e95,#d6e9f8)]" />
              <div className="flex flex-col justify-between gap-5 rounded-xl bg-[#f8fbff]/75 p-5">
                <div>
                  <p className="text-[10px] font-bold uppercase tracking-[0.18em] text-[#5d6b7d]">
                    90-day engagement
                  </p>
                  <p className="mt-3 font-serif text-3xl leading-tight text-[#1a2743]">
                    A sharper operating model.
                  </p>
                </div>
                <div className="space-y-2">
                  <span className="block h-2 rounded-full bg-[#9ab2ca]" />
                  <span className="block h-2 w-3/4 rounded-full bg-[#c0d2e4]" />
                  <span className="block h-2 w-1/2 rounded-full bg-[#d4e2ee]" />
                </div>
              </div>
            </div>
          </div>
        </div>
      </Container>
    </section>
  );
}
