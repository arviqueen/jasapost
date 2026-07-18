import type { Dictionary } from "@/messages/id";
import Image from "next/image";

export default function Team({ dict }: { dict: Dictionary }) {
  const t = dict.team;

  // Color pairs for avatar backgrounds [bg, text]
  const colors = [
    ["bg-violet-100", "text-violet-700"],
    ["bg-amber-100", "text-amber-700"],
    ["bg-emerald-100", "text-emerald-700"],
    ["bg-rose-100", "text-rose-700"],
  ];

  return (
    <section id="team" className="py-24 bg-white">
      <div className="max-w-6xl mx-auto px-6">
        {/* Header */}
        <div className="text-center max-w-2xl mx-auto mb-16">
          <p className="text-xs font-semibold text-violet-600 uppercase tracking-widest mb-3">
            {t.eyebrow}
          </p>
          <h2 className="text-4xl font-bold text-neutral-900 mb-4">{t.headline}</h2>
          <p className="text-neutral-500">{t.subheadline}</p>
        </div>

        {/* Team grid */}
        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {t.members.map((member, i) => {
            const [bg, text] = colors[i % colors.length];
            return (
              <div
                key={member.name}
                className="group bg-white border border-neutral-100 rounded-2xl p-6 text-center hover:border-violet-200 hover:shadow-lg hover:shadow-violet-50 transition-all"
              >
                {/* Avatar */}
                <div
                  className={`w-16 h-16 rounded-2xl ${bg} flex items-center justify-center mx-auto mb-4 group-hover:scale-105 transition-transform overflow-hidden`}
                >
                  {/* @ts-ignore */}
                  {member.image ? (
                    <Image
                      /* @ts-ignore */
                      src={member.image}
                      alt={member.name}
                      width={64}
                      height={64}
                      className="w-full h-full object-cover"
                    />
                  ) : (
                    <span className={`text-xl font-bold ${text}`}>{member.initial}</span>
                  )}
                </div>

                {/* Name & Role */}
                <h3 className="font-semibold text-neutral-900 text-base">{member.name}</h3>
                <div className="flex items-center justify-center gap-1.5 mt-1 mb-3">
                  <span className="text-sm text-violet-600 font-medium">{member.role}</span>
                  {member.tag && (
                    <>
                      <span className="text-neutral-300">·</span>
                      <span className="text-xs bg-violet-50 text-violet-600 px-2 py-0.5 rounded-full font-medium">
                        {member.tag}
                      </span>
                    </>
                  )}
                </div>

                {/* Description */}
                <p className="text-xs text-neutral-500 leading-relaxed">{member.description}</p>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
