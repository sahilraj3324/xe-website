import type { Stat } from "@/app/src/lib/content";

export default function StatItem({ value, caption }: Stat) {
  return (
    <div>
      <p className="font-serif text-4xl text-ink md:text-5xl">{value}</p>
      <p className="mt-2 text-xs font-medium uppercase tracking-wide text-slate">
        {caption}
      </p>
    </div>
  );
}
