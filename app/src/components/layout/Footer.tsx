import Link from "next/link";
import Container from "@/app/src/components/ui/Container";
import Brand from "@/app/src/components/ui/Brand";
import Button from "@/app/src/components/ui/Button";
import { footerColumns, site } from "@/app/src/lib/content";

export default function Footer() {
  const { title, body, cta } = site.finalCta;

  return (
    // One continuous band: the "Ready to build" CTA and the footer panel
    // share a single ribbed background, as one entity.
    <footer id="contact" className="depth-band-flat">
      <Container className="pt-28 md:pt-36">
        {/* CTA */}
        <div className="max-w-2xl">
          <h2 className="font-serif text-4xl leading-tight text-white md:text-5xl">
            {title.map((line) => (
              <span key={line} className="block">
                {line}
              </span>
            ))}
          </h2>
          <p className="mt-4 max-w-md text-sm leading-relaxed text-mist">
            {body}
          </p>
          <div className="mt-8">
            <Button href="/contact" variant="dark">
              {cta}
            </Button>
          </div>
        </div>

        {/* Footer panel */}
        <div className="footer-panel mb-10 mt-20 rounded-lg px-6 py-10 md:px-12 md:py-14">
          <div className="grid gap-10 md:grid-cols-4">
            <div>
              <Brand variant="footer" />
            </div>

            {footerColumns.map((col) => (
              <div key={col.heading}>
                <h3 className="text-xs font-bold uppercase tracking-[0.05em] text-white/85">
                  {col.heading}
                </h3>
                <ul className="mt-5 flex flex-col gap-3.5 text-sm font-medium text-white/80">
                  {col.links.map((link) => (
                    <li key={link.label}>
                      <Link
                        href={link.href}
                        className="transition-colors hover:text-white"
                      >
                        {link.label}
                      </Link>
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>

          <p className="mt-16 text-center text-xs font-medium text-white/65">
            © {site.name} {site.year}. All rights reserved.
          </p>
        </div>
      </Container>
    </footer>
  );
}
