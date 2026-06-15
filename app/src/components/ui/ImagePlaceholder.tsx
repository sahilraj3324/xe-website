// Neutral image placeholder (no network). Swap for next/image + real photos
// in public/images/ later — keep the same wrapper sizing classes.
export default function ImagePlaceholder({
  label,
  className = "",
  rounded = "rounded-lg",
}: {
  label: string;
  className?: string;
  rounded?: string;
}) {
  return (
    <div
      className={`relative flex items-end overflow-hidden ${rounded} bg-gradient-to-br from-navy-700 via-navy-800 to-navy-950 ${className}`}
    >
      <div
        aria-hidden
        className="absolute inset-0 opacity-30 [background-image:repeating-linear-gradient(90deg,transparent_0,transparent_10px,rgba(255,255,255,0.08)_11px)]"
      />
      <span className="relative m-3 rounded bg-black/25 px-2 py-1 text-[10px] font-medium uppercase tracking-wide text-white/70">
        {label}
      </span>
    </div>
  );
}
