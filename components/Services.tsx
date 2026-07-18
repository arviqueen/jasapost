import type { Dictionary } from "@/messages/id";

export default function Services({ dict }: { dict: Dictionary }) {
  const s = dict.services;

  return (
    <section id="services" className="py-24 bg-neutral-50">
      <div className="max-w-6xl mx-auto px-6">
        {/* Header */}
        <div className="max-w-2xl mb-16">
          <p className="text-xs font-semibold text-violet-600 uppercase tracking-widest mb-3">
            {s.eyebrow}
          </p>
          <h2 className="text-4xl font-bold text-neutral-900">{s.headline}</h2>
        </div>

        {/* Grid */}
        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {s.items.map((item) => (
            <div
              key={item.title}
              className="bg-white rounded-2xl p-6 border border-neutral-100 hover:border-violet-200 hover:shadow-lg hover:shadow-violet-50 transition-all group"
            >
              <div className="w-11 h-11 bg-violet-50 rounded-xl flex items-center justify-center text-xl mb-5 group-hover:bg-violet-100 transition-colors">
                {item.icon}
              </div>
              <h3 className="font-semibold text-neutral-900 mb-2">{item.title}</h3>
              <p className="text-sm text-neutral-500 leading-relaxed">{item.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
