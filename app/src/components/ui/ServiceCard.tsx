import type { Service } from "@/app/src/lib/content";
import ImagePlaceholder from "./ImagePlaceholder";

export default function ServiceCard({ title, description, imageAlt }: Service) {
  return (
    <article className="flex flex-col">
      <ImagePlaceholder label={title} className="aspect-[4/3] w-full" />
      <h3 className="mt-5 font-serif text-xl text-ink">{title}</h3>
      <div className="mt-3 h-px w-full bg-sky-200" />
      <p className="mt-3 text-sm leading-relaxed text-slate">{description}</p>
      <span className="sr-only">{imageAlt}</span>
    </article>
  );
}
