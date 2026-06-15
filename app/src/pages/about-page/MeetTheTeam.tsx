import Container from "@/app/src/components/ui/Container";
import ImagePlaceholder from "@/app/src/components/ui/ImagePlaceholder";
import { about, team } from "@/app/src/lib/content";

export default function MeetTheTeam() {
  return (
    <section className="bg-sky-200 py-20 md:py-28">
      <Container>
        <h2 className="font-serif text-3xl text-ink md:text-4xl">
          {about.teamTitle}
        </h2>

        <div className="mt-12 grid grid-cols-1 gap-x-8 gap-y-10 sm:grid-cols-2 md:grid-cols-3">
          {team.map((member) => (
            <article key={member.name}>
              <ImagePlaceholder
                label={member.name}
                rounded="rounded-none"
                className="aspect-[4/5] w-full"
              />
              <h3 className="mt-4 font-serif text-lg text-ink">
                {member.name}
              </h3>
              <p className="mt-1 text-xs uppercase tracking-wide text-slate">
                {member.role}
              </p>
            </article>
          ))}
        </div>
      </Container>
    </section>
  );
}
