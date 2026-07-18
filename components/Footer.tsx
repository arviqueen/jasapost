import type { Dictionary } from "@/messages/id";
import Link from "next/link";

export default function Footer({ dict, locale }: { dict: Dictionary; locale: string }) {
  const f = dict.footer;

  return (
    <footer className="bg-neutral-900 text-neutral-400 py-12">
      <div className="max-w-6xl mx-auto px-6">
        <div className="flex flex-col md:flex-row md:items-center md:justify-between gap-8">
          {/* Brand */}
          <div>
            <Link href={`/${locale}`} className="font-bold text-lg text-white tracking-tight">
              jasapost<span className="text-violet-400">.com</span>
            </Link>
            <p className="text-sm mt-2 text-neutral-500">{f.tagline}</p>
          </div>

          {/* Links */}
          <nav className="flex flex-wrap gap-6">
            {f.links.map((link) => (
              <a
                key={link.label}
                href={link.href}
                className="text-sm hover:text-white transition-colors"
              >
                {link.label}
              </a>
            ))}
            <Link
              href={f.langHref}
              className="text-sm text-violet-400 hover:text-violet-300 transition-colors"
            >
              {f.langSwitch}
            </Link>
          </nav>
        </div>

        <div className="mt-8 pt-8 border-t border-neutral-800">
          <p className="text-xs text-neutral-600">{f.copyright}</p>
        </div>
      </div>
    </footer>
  );
}
