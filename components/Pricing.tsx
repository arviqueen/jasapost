import type { Dictionary } from "@/messages/id";
import { WA_NUMBER } from "@/messages/id";

export default function Pricing({ dict }: { dict: Dictionary }) {
  const p = dict.pricing;

  return (
    <section id="pricing" className="py-24 bg-white">
      <div className="max-w-6xl mx-auto px-6">
        {/* Header */}
        <div className="text-center max-w-2xl mx-auto mb-16">
          <p className="text-xs font-semibold text-violet-600 uppercase tracking-widest mb-3">
            {p.eyebrow}
          </p>
          <h2 className="text-4xl font-bold text-neutral-900 mb-4">{p.headline}</h2>
          <p className="text-neutral-500">{p.subheadline}</p>
        </div>

        {/* Plans */}
        <div className="grid md:grid-cols-3 gap-6 items-stretch">
          {p.plans.map((plan) => (
            <div
              key={plan.name}
              className={`relative rounded-2xl p-8 flex flex-col ${
                plan.highlighted
                  ? "bg-violet-600 text-white shadow-2xl shadow-violet-200 scale-[1.02]"
                  : "bg-white border border-neutral-200"
              }`}
            >
              {plan.highlighted && (
                <div className="absolute -top-3.5 left-1/2 -translate-x-1/2">
                  <span className="bg-amber-400 text-amber-900 text-xs font-bold px-3 py-1 rounded-full">
                    {p.popularBadge}
                  </span>
                </div>
              )}

              <div className="mb-6">
                <h3
                  className={`font-bold text-lg mb-1 ${
                    plan.highlighted ? "text-white" : "text-neutral-900"
                  }`}
                >
                  {plan.name}
                </h3>
                <p
                  className={`text-sm mb-5 ${
                    plan.highlighted ? "text-violet-200" : "text-neutral-500"
                  }`}
                >
                  {plan.description}
                </p>
                <div className="flex items-end gap-1">
                  <span
                    className={`text-3xl font-bold ${
                      plan.highlighted ? "text-white" : "text-neutral-900"
                    }`}
                  >
                    {plan.price}
                  </span>
                  <span
                    className={`text-sm mb-1 ${
                      plan.highlighted ? "text-violet-200" : "text-neutral-400"
                    }`}
                  >
                    {plan.period}
                  </span>
                </div>
              </div>

              <ul className="flex flex-col gap-3 mb-8 flex-1">
                {plan.features.map((f) => (
                  <li key={f} className="flex items-start gap-2.5 text-sm">
                    <svg
                      className={`w-4 h-4 mt-0.5 flex-shrink-0 ${
                        plan.highlighted ? "text-violet-200" : "text-violet-500"
                      }`}
                      fill="none"
                      viewBox="0 0 24 24"
                      stroke="currentColor"
                      strokeWidth={2.5}
                    >
                      <path strokeLinecap="round" strokeLinejoin="round" d="M5 13l4 4L19 7" />
                    </svg>
                    <span className={plan.highlighted ? "text-violet-100" : "text-neutral-600"}>
                      {f}
                    </span>
                  </li>
                ))}
              </ul>

              <a
                href={`https://wa.me/${WA_NUMBER}?text=Halo%2C%20saya%20tertarik%20dengan%20paket%20${encodeURIComponent(plan.name)}`}
                target="_blank"
                rel="noopener noreferrer"
                className={`w-full py-3 rounded-xl text-sm font-semibold text-center transition-all active:scale-95 ${
                  plan.highlighted
                    ? "bg-white text-violet-700 hover:bg-violet-50"
                    : "bg-violet-600 text-white hover:bg-violet-700"
                }`}
              >
                {plan.cta}
              </a>
            </div>
          ))}
        </div>

        {/* Custom note */}
        <p className="text-center text-sm text-neutral-500 mt-10">
          {p.note}
          <a href="#contact" className="text-violet-600 hover:underline font-medium">
            {p.noteLink}
          </a>
        </p>
      </div>
    </section>
  );
}
