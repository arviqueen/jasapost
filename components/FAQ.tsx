"use client";

import { useState } from "react";
import type { Dictionary } from "@/messages/id";

export default function FAQ({ dict }: { dict: Dictionary }) {
  const f = dict.faq;
  const [open, setOpen] = useState<number | null>(null);

  return (
    <section id="faq" className="py-24 bg-white">
      <div className="max-w-3xl mx-auto px-6">
        {/* Header */}
        <div className="mb-12">
          <p className="text-xs font-semibold text-violet-600 uppercase tracking-widest mb-3">
            {f.eyebrow}
          </p>
          <h2 className="text-4xl font-bold text-neutral-900">{f.headline}</h2>
        </div>

        {/* Accordion */}
        <div className="divide-y divide-neutral-100">
          {f.items.map((item, i) => (
            <div key={i}>
              <button
                onClick={() => setOpen(open === i ? null : i)}
                className="w-full py-5 flex items-start justify-between gap-4 text-left"
                aria-expanded={open === i}
              >
                <span className="font-medium text-neutral-900 text-sm leading-relaxed">
                  {item.q}
                </span>
                <span
                  className={`flex-shrink-0 w-5 h-5 mt-0.5 text-violet-500 transition-transform duration-200 ${
                    open === i ? "rotate-45" : ""
                  }`}
                >
                  <svg viewBox="0 0 20 20" fill="currentColor">
                    <path d="M10 3a1 1 0 011 1v5h5a1 1 0 110 2h-5v5a1 1 0 11-2 0v-5H4a1 1 0 110-2h5V4a1 1 0 011-1z" />
                  </svg>
                </span>
              </button>

              <div
                className={`overflow-hidden transition-all duration-200 ${
                  open === i ? "max-h-48 pb-5" : "max-h-0"
                }`}
              >
                <p className="text-sm text-neutral-500 leading-relaxed">{item.a}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
