import type { Dictionary } from "@/messages/id";

export default function Process({ dict }: { dict: Dictionary }) {
  const p = dict.process;

  return (
    <section id="process" className="py-24 bg-neutral-50">
      <div className="max-w-6xl mx-auto px-6">
        {/* Header */}
        <div className="max-w-2xl mb-16">
          <p className="text-xs font-semibold text-violet-600 uppercase tracking-widest mb-3">
            {p.eyebrow}
          </p>
          <h2 className="text-4xl font-bold text-neutral-900">{p.headline}</h2>
        </div>

        {/* Steps */}
        <div className="grid md:grid-cols-3 gap-8">
          {p.steps.map((step, i) => (
            <div key={step.number} className="relative">
              {/* Connector line */}
              {i < p.steps.length - 1 && (
                <div className="hidden md:block absolute top-8 left-full w-full h-px bg-violet-100 -translate-y-px z-0" />
              )}

              <div className="relative z-10">
                <div className="inline-flex items-center justify-center w-16 h-16 rounded-2xl bg-white border-2 border-violet-100 mb-6">
                  <span className="text-2xl font-bold text-violet-300">{step.number}</span>
                </div>
                <h3 className="font-semibold text-neutral-900 text-lg mb-3">{step.title}</h3>
                <p className="text-neutral-500 leading-relaxed text-sm">{step.description}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
