import type { Dictionary } from "@/messages/id";
import Link from "next/link";

interface NavbarProps {
  dict: Dictionary;
  locale: string;
}

export default function Navbar({ dict, locale }: NavbarProps) {
  const otherLocale = locale === "id" ? "en" : "id";
  const nav = dict.nav;
  const footer = dict.footer;

  return (
    <header className="fixed top-0 left-0 right-0 z-50 bg-white/80 backdrop-blur-md border-b border-neutral-100">
      <div className="max-w-6xl mx-auto px-6 h-16 flex items-center justify-between">
        <Link href={`/${locale}`} className="font-bold text-lg tracking-tight text-neutral-900">
          jasapost<span className="text-violet-600">.com</span>
        </Link>

        <nav className="hidden md:flex items-center gap-8">
          {[
            { label: nav.clipper, href: "#clipper", highlight: true },
            { label: nav.services, href: "#services" },
            { label: nav.pricing, href: "#pricing" },
            { label: nav.process, href: "#process" },
            { label: nav.team, href: "#team" },
            { label: nav.faq, href: "#faq" },
          ].map((item) => (
            <a
              key={item.href}
              href={item.href}
              className={`text-sm transition-colors ${
                "highlight" in item && item.highlight
                  ? "text-violet-600 font-semibold hover:text-violet-700"
                  : "text-neutral-500 hover:text-neutral-900"
              }`}
            >
              {item.label}
            </a>
          ))}
        </nav>

        <div className="flex items-center gap-3">
          <Link
            href={`/${otherLocale}`}
            className="text-xs text-neutral-400 hover:text-neutral-700 transition-colors font-medium"
          >
            {footer.langSwitch}
          </Link>
          <a
            href="#contact"
            className="hidden md:inline-flex items-center px-4 py-2 bg-violet-600 text-white text-sm font-medium rounded-lg hover:bg-violet-700 transition-colors"
          >
            {nav.cta}
          </a>
        </div>
      </div>
    </header>
  );
}
