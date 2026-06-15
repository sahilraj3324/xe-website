import Link from "next/link";
import Container from "@/app/src/components/ui/Container";
import Newsletter from "@/app/src/pages/blog-page/Newsletter";

export default function NotFound() {
  return (
    <>
      <section className="bg-[#d3eefb] pb-32 pt-56 text-center md:pb-48 md:pt-72">
        <Container>
          <p className="text-sm font-semibold uppercase tracking-[0.08em] text-ink">
            <span aria-hidden>{"* "}</span>
            404
          </p>
          <h1 className="mt-5 font-serif text-5xl leading-tight text-ink md:text-6xl">
            Page not found
          </h1>
          <p className="mx-auto mt-7 max-w-2xl text-base leading-relaxed text-ink">
            The page you were looking could not be found. Please return to the
            home page.
          </p>
          <Link
            href="/"
            className="mt-9 inline-flex h-14 items-center justify-center rounded-md bg-[#075985] px-8 text-base font-medium text-white transition-colors hover:bg-navy-900"
          >
            Back to home
          </Link>
        </Container>
      </section>
      <Newsletter />
    </>
  );
}
