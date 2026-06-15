// Small uppercase label with a leading dot, e.g. "• POWERED BY AI".
export default function Eyebrow({
  children,
  tone = "light",
  className = "",
}: {
  children: React.ReactNode;
  tone?: "light" | "dark"; // tone of the surface it sits on
  className?: string;
}) {
  const color = tone === "light" ? "text-mist" : "text-slate";
  return (
    <span
      className={`inline-flex items-center gap-2 text-xs font-medium uppercase tracking-[0.18em] ${color} ${className}`}
    >
      <span className="text-[0.6em]">●</span>
      {children}
    </span>
  );
}
