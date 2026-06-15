import Link from "next/link";

// Wordmark: bold, slightly-stretched "X" + "equalTo" (sans-serif).
export default function Brand({
  variant = "nav",
}: {
  variant?: "nav" | "footer";
}) {
  const size = variant === "footer" ? "text-xl" : "text-lg";
  return (
    <Link
      href="/"
      aria-label="XEqualTo home"
      className={`inline-flex items-center font-sans leading-none tracking-[-0.045em] text-white ${size}`}
    >
      <span className="-mr-px inline-block font-extrabold [transform:scaleX(1.12)]">
        X
      </span>
      <span className="font-bold">equalTo</span>
    </Link>
  );
}
