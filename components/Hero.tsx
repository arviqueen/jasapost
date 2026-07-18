import type { Dictionary } from "@/messages/id";
import { WA_NUMBER } from "@/messages/id";

export default function Hero({ dict }: { dict: Dictionary }) {
  const h = dict.hero;
  const waUrl = `https://wa.me/${WA_NUMBER}?text=Halo%2C%20saya%20ingin%20konsultasi%20gratis%20tentang%20jasa%20sosial%20media.`;

  return (
    <section className="relative min-h-screen flex items-center pt-16 overflow-hidden bg-white">
      {/* Background decoration */}
      <div className="absolute inset-0 -z-10">
        <div className="absolute top-0 right-0 w-[600px] h-[600px] bg-violet-50 rounded-full -translate-y-1/2 translate-x-1/3" />
        <div className="absolute bottom-0 left-0 w-[400px] h-[400px] bg-violet-50 rounded-full translate-y-1/2 -translate-x-1/3" />
        <div
          className="absolute inset-0 opacity-[0.03]"
          style={{
            backgroundImage:
              "radial-gradient(circle, #6d28d9 1px, transparent 1px)",
            backgroundSize: "32px 32px",
          }}
        />
      </div>

      <div className="max-w-6xl mx-auto px-6 py-24 lg:py-32 w-full">
        <div className="max-w-3xl">
          {/* Eyebrow */}
          <div className="inline-flex items-center gap-2 px-3 py-1.5 bg-violet-50 rounded-full mb-8">
            <span className="w-1.5 h-1.5 bg-violet-500 rounded-full animate-pulse" />
            <span className="text-xs font-semibold text-violet-700 tracking-wide uppercase">
              {h.eyebrow}
            </span>
          </div>

          {/* Headline */}
          <h1 className="text-5xl lg:text-6xl font-bold text-neutral-900 leading-tight mb-6 whitespace-pre-line">
            {h.headline}
          </h1>

          {/* Subheadline */}
          <p className="text-xl text-neutral-500 leading-relaxed mb-10 max-w-2xl">
            {h.subheadline}
          </p>

          {/* CTAs */}
          <div className="flex flex-wrap items-center gap-4">
            <a
              href={waUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 px-6 py-3.5 bg-violet-600 text-white font-semibold rounded-xl hover:bg-violet-700 active:scale-95 transition-all shadow-lg shadow-violet-200"
            >
              <svg className="w-5 h-5" viewBox="0 0 24 24" fill="currentColor">
                <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347z" />
                <path d="M12 0C5.373 0 0 5.373 0 12c0 2.136.563 4.14 1.544 5.874L0 24l6.283-1.506A11.945 11.945 0 0012 24c6.627 0 12-5.373 12-12S18.627 0 12 0zm0 21.818a9.818 9.818 0 01-5.019-1.38l-.36-.213-3.729.893.937-3.625-.234-.372A9.818 9.818 0 112 12c0 5.42 4.398 9.818 9.818 9.818z" />
              </svg>
              {h.cta}
            </a>
            <span className="text-sm text-neutral-400">{h.ctaSub}</span>
          </div>

          {/* Social proof */}
          <div className="mt-16 pt-8 border-t border-neutral-100 flex flex-wrap gap-8">
            {[
              { value: "50+", label: "Klien aktif" },
              { value: "3 Tahun", label: "Pengalaman" },
              { value: "10rb+", label: "Konten dibuat" },
            ].map((stat) => (
              <div key={stat.label}>
                <div className="text-2xl font-bold text-neutral-900">{stat.value}</div>
                <div className="text-sm text-neutral-400 mt-0.5">{stat.label}</div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
