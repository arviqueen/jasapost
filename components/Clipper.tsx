import type { Dictionary } from "@/messages/id";
import { WA_NUMBER } from "@/messages/id";

export default function Clipper({ dict }: { dict: Dictionary }) {
  const c = dict.clipper;

  const waUrl = (plan: string) =>
    `https://wa.me/${WA_NUMBER}?text=Halo%2C%20saya%20tertarik%20dengan%20layanan%20Clipper%20paket%20${encodeURIComponent(plan)}`;

  const ctaUrl = `https://wa.me/${WA_NUMBER}?text=Halo%2C%20saya%20ingin%20mencoba%20layanan%20Video%20Clipper%20jasapost.com`;

  return (
    <section id="clipper" className="bg-neutral-950 py-24 relative overflow-hidden">
      {/* Background grid */}
      <div
        className="absolute inset-0 opacity-[0.04]"
        style={{
          backgroundImage:
            "linear-gradient(rgba(139,92,246,0.8) 1px, transparent 1px), linear-gradient(90deg, rgba(139,92,246,0.8) 1px, transparent 1px)",
          backgroundSize: "48px 48px",
        }}
      />
      {/* Glow */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[400px] bg-violet-600/10 rounded-full blur-3xl pointer-events-none" />

      <div className="relative max-w-6xl mx-auto px-6">

        {/* Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <div className="inline-flex items-center gap-2 px-3 py-1.5 bg-violet-500/20 border border-violet-500/30 rounded-full mb-6">
            <span className="w-1.5 h-1.5 bg-violet-400 rounded-full animate-pulse" />
            <span className="text-xs font-semibold text-violet-300 tracking-widest uppercase">
              {c.badge}
            </span>
          </div>
          <p className="text-xs font-semibold text-violet-400 uppercase tracking-widest mb-3">
            {c.eyebrow}
          </p>
          <h2 className="text-4xl lg:text-5xl font-bold text-white mb-5 leading-tight">
            {c.headline}
          </h2>
          <p className="text-lg text-neutral-400 leading-relaxed">{c.subheadline}</p>
        </div>

        {/* How it works */}
        <div className="mb-20">
          <p className="text-center text-xs font-semibold text-neutral-500 uppercase tracking-widest mb-8">
            {c.howTitle}
          </p>
          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-4">
            {c.steps.map((step, i) => (
              <div key={i} className="relative bg-white/5 border border-white/10 rounded-2xl p-5 group hover:border-violet-500/40 hover:bg-violet-500/5 transition-all">
                {/* Connector */}
                {i < c.steps.length - 1 && (
                  <div className="hidden lg:block absolute top-8 -right-4 w-8 h-px bg-gradient-to-r from-violet-500/40 to-transparent z-10" />
                )}
                <div className="text-3xl mb-4">{step.icon}</div>
                <div className="text-xs font-bold text-violet-400 uppercase tracking-wider mb-1">
                  {String(i + 1).padStart(2, "0")}
                </div>
                <h4 className="font-semibold text-white mb-2 text-sm">{step.label}</h4>
                <p className="text-xs text-neutral-500 leading-relaxed">{step.desc}</p>
              </div>
            ))}
          </div>
        </div>

        {/* Features + CTA row */}
        <div className="grid lg:grid-cols-2 gap-12 items-center mb-20">
          <div>
            <p className="text-xs font-semibold text-neutral-500 uppercase tracking-widest mb-5">
              Yang kami kerjakan
            </p>
            <ul className="space-y-3">
              {c.features.map((f) => (
                <li key={f} className="flex items-center gap-3">
                  <div className="w-5 h-5 bg-violet-500/20 rounded-md flex items-center justify-center flex-shrink-0">
                    <svg className="w-3 h-3 text-violet-400" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={3}>
                      <path strokeLinecap="round" strokeLinejoin="round" d="M5 13l4 4L19 7" />
                    </svg>
                  </div>
                  <span className="text-sm text-neutral-300">{f}</span>
                </li>
              ))}
            </ul>
          </div>

          <div className="bg-gradient-to-br from-violet-600/20 to-violet-900/20 border border-violet-500/20 rounded-2xl p-8 text-center">
            <div className="text-5xl mb-4">✂️</div>
            <p className="text-white font-bold text-xl mb-2">Kirim video Anda sekarang</p>
            <p className="text-neutral-400 text-sm mb-6">
              Klip pertama siap dalam 1–2 hari kerja
            </p>
            <a
              href={ctaUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 px-6 py-3.5 bg-violet-600 hover:bg-violet-500 text-white font-semibold rounded-xl transition-all active:scale-95 shadow-lg shadow-violet-900/40"
            >
              <svg className="w-5 h-5" viewBox="0 0 24 24" fill="currentColor">
                <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347z" />
                <path d="M12 0C5.373 0 0 5.373 0 12c0 2.136.563 4.14 1.544 5.874L0 24l6.283-1.506A11.945 11.945 0 0012 24c6.627 0 12-5.373 12-12S18.627 0 12 0zm0 21.818a9.818 9.818 0 01-5.019-1.38l-.36-.213-3.729.893.937-3.625-.234-.372A9.818 9.818 0 112 12c0 5.42 4.398 9.818 9.818 9.818z" />
              </svg>
              {c.cta}
            </a>
            <p className="text-neutral-600 text-xs mt-3">{c.ctaSub}</p>
          </div>
        </div>

        {/* Proposal / Amplification Strategy */}
        <div className="mb-20 bg-neutral-900/50 border border-white/5 rounded-3xl p-8 lg:p-12 relative overflow-hidden">
          {/* Subtle glow inside the card */}
          <div className="absolute top-0 right-0 w-64 h-64 bg-violet-600/10 rounded-full blur-3xl pointer-events-none" />
          
          <div className="relative text-center max-w-2xl mx-auto mb-12">
            <h3 className="text-2xl lg:text-3xl font-bold text-white mb-4">
              {c.proposal.title}
            </h3>
            <p className="text-neutral-400 leading-relaxed text-sm lg:text-base">
              <strong className="text-violet-400 block mb-1">{c.proposal.objective.title}</strong>
              {c.proposal.objective.desc}
            </p>
          </div>

          <div className="relative grid lg:grid-cols-2 gap-12 mb-12">
            {/* Why */}
            <div>
              <h4 className="text-lg font-bold text-white mb-6 flex items-center gap-3">
                <div className="w-8 h-8 rounded-full bg-violet-500/20 text-violet-400 flex items-center justify-center text-sm">?</div>
                {c.proposal.why.title}
              </h4>
              <ul className="space-y-6">
                {c.proposal.why.points.map((p, i) => (
                  <li key={i}>
                    <h5 className="font-semibold text-neutral-200 text-sm mb-1">{p.title}</h5>
                    <p className="text-sm text-neutral-500 leading-relaxed">{p.desc}</p>
                  </li>
                ))}
              </ul>
            </div>

            {/* Scope */}
            <div>
              <h4 className="text-lg font-bold text-white mb-6 flex items-center gap-3">
                <div className="w-8 h-8 rounded-full bg-violet-500/20 text-violet-400 flex items-center justify-center text-sm">✓</div>
                {c.proposal.scope.title}
              </h4>
              <ul className="space-y-6">
                {c.proposal.scope.points.map((p, i) => (
                  <li key={i}>
                    <h5 className="font-semibold text-neutral-200 text-sm mb-1">{p.title}</h5>
                    <p className="text-sm text-neutral-500 leading-relaxed">{p.desc}</p>
                  </li>
                ))}
              </ul>
            </div>
          </div>

          {/* Tip */}
          <div className="relative bg-gradient-to-r from-violet-900/20 to-neutral-900/20 border border-violet-500/20 rounded-2xl p-6 text-center max-w-3xl mx-auto">
            <h4 className="font-bold text-violet-300 text-sm mb-2">{c.proposal.tip.title}</h4>
            <p className="text-violet-100/80 text-sm italic leading-relaxed">
              {c.proposal.tip.desc}
            </p>
          </div>
        </div>

        {/* Clipper Pricing */}
        <div>
          <p className="text-center text-xs font-semibold text-neutral-500 uppercase tracking-widest mb-10">
            {c.pricingTitle}
          </p>
          <div className="grid md:grid-cols-3 gap-5 items-stretch">
            {c.plans.map((plan) => (
              <div
                key={plan.name}
                className={`relative rounded-2xl p-7 flex flex-col border transition-all ${
                  plan.highlighted
                    ? "bg-violet-600 border-violet-500 shadow-2xl shadow-violet-900/50 scale-[1.02]"
                    : "bg-white/5 border-white/10 hover:border-violet-500/30"
                }`}
              >
                {plan.highlighted && (
                  <div className="absolute -top-3.5 left-1/2 -translate-x-1/2">
                    <span className="bg-amber-400 text-amber-900 text-xs font-bold px-3 py-1 rounded-full whitespace-nowrap">
                      Paling Diminati
                    </span>
                  </div>
                )}

                <div className="mb-5">
                  <h3 className={`font-bold mb-1 ${plan.highlighted ? "text-white" : "text-neutral-100"}`}>
                    {plan.name}
                  </h3>
                  <p className={`text-xs mb-4 ${plan.highlighted ? "text-violet-200" : "text-neutral-500"}`}>
                    {plan.description}
                  </p>
                  <div className="flex items-end gap-1">
                    <span className={`text-3xl font-bold ${plan.highlighted ? "text-white" : "text-white"}`}>
                      {plan.price}
                    </span>
                    <span className={`text-xs mb-1 ${plan.highlighted ? "text-violet-200" : "text-neutral-500"}`}>
                      {plan.unit}
                    </span>
                  </div>
                </div>

                <ul className="flex flex-col gap-2.5 flex-1 mb-6">
                  {plan.features.map((f) => (
                    <li key={f} className="flex items-start gap-2 text-xs">
                      <svg
                        className={`w-3.5 h-3.5 mt-0.5 flex-shrink-0 ${plan.highlighted ? "text-violet-200" : "text-violet-500"}`}
                        fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2.5}
                      >
                        <path strokeLinecap="round" strokeLinejoin="round" d="M5 13l4 4L19 7" />
                      </svg>
                      <span className={plan.highlighted ? "text-violet-100" : "text-neutral-400"}>{f}</span>
                    </li>
                  ))}
                </ul>

                <a
                  href={waUrl(plan.name)}
                  target="_blank"
                  rel="noopener noreferrer"
                  className={`w-full py-2.5 rounded-xl text-sm font-semibold text-center transition-all active:scale-95 ${
                    plan.highlighted
                      ? "bg-white text-violet-700 hover:bg-violet-50"
                      : "bg-violet-600/20 text-violet-300 border border-violet-600/30 hover:bg-violet-600/30"
                  }`}
                >
                  {plan.cta}
                </a>
              </div>
            ))}
          </div>
          <p className="text-center text-xs text-neutral-600 mt-8">
            {c.pricingNote}
            <a href="#contact" className="text-violet-500 hover:text-violet-400 transition-colors font-medium">
              {c.pricingNoteLink}
            </a>
          </p>
        </div>
      </div>
    </section>
  );
}
