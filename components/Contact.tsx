import type { Dictionary } from "@/messages/id";
import { WA_NUMBER } from "@/messages/id";

export default function Contact({ dict }: { dict: Dictionary }) {
  const c = dict.contact;
  const waUrl = `https://wa.me/${WA_NUMBER}?text=Halo%2C%20saya%20ingin%20konsultasi%20gratis%20tentang%20jasa%20sosial%20media.`;

  return (
    <section id="contact" className="py-24 bg-violet-600 relative overflow-hidden">
      {/* Decorative circles */}
      <div className="absolute top-0 right-0 w-96 h-96 bg-violet-500 rounded-full -translate-y-1/2 translate-x-1/2 opacity-50" />
      <div className="absolute bottom-0 left-0 w-64 h-64 bg-violet-700 rounded-full translate-y-1/2 -translate-x-1/4 opacity-50" />

      <div className="relative max-w-6xl mx-auto px-6">
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          {/* Left — CTA */}
          <div className="text-center lg:text-left">
            <p className="text-xs font-semibold text-violet-300 uppercase tracking-widest mb-4">
              {c.eyebrow}
            </p>
            <h2 className="text-4xl font-bold text-white mb-5">{c.headline}</h2>
            <p className="text-violet-200 text-lg mb-10 max-w-xl">{c.subheadline}</p>

            <div className="flex flex-col sm:flex-row items-center lg:items-start gap-4">
              <a
                href={waUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2.5 px-7 py-4 bg-white text-violet-700 font-semibold rounded-xl hover:bg-violet-50 active:scale-95 transition-all shadow-lg shadow-violet-900/20"
              >
                <svg className="w-5 h-5" viewBox="0 0 24 24" fill="currentColor">
                  <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347z" />
                  <path d="M12 0C5.373 0 0 5.373 0 12c0 2.136.563 4.14 1.544 5.874L0 24l6.283-1.506A11.945 11.945 0 0012 24c6.627 0 12-5.373 12-12S18.627 0 12 0zm0 21.818a9.818 9.818 0 01-5.019-1.38l-.36-.213-3.729.893.937-3.625-.234-.372A9.818 9.818 0 112 12c0 5.42 4.398 9.818 9.818 9.818z" />
                </svg>
                {c.cta}
              </a>

              <div className="text-violet-200 text-sm text-center lg:text-left">
                {c.email}{" "}
                <a
                  href={`mailto:${c.emailAddress}`}
                  className="text-white font-medium underline underline-offset-2 hover:no-underline"
                >
                  {c.emailAddress}
                </a>
              </div>
            </div>
          </div>

          {/* Right — Info card */}
          <div className="bg-white/10 backdrop-blur-sm rounded-2xl p-8 border border-white/20">
            {/* Phone */}
            <div className="flex items-start gap-4 mb-6">
              <div className="w-10 h-10 bg-white/15 rounded-xl flex items-center justify-center flex-shrink-0">
                <svg className="w-5 h-5 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.8}>
                  <path strokeLinecap="round" strokeLinejoin="round" d="M2.25 6.75c0 8.284 6.716 15 15 15h2.25a2.25 2.25 0 002.25-2.25v-1.372c0-.516-.351-.966-.852-1.091l-4.423-1.106c-.44-.11-.902.055-1.173.417l-.97 1.293c-.282.376-.769.542-1.21.38a12.035 12.035 0 01-7.143-7.143c-.162-.441.004-.928.38-1.21l1.293-.97c.363-.271.527-.734.417-1.173L6.963 3.102a1.125 1.125 0 00-1.091-.852H4.5A2.25 2.25 0 002.25 4.5v2.25z" />
                </svg>
              </div>
              <div>
                <p className="text-violet-200 text-xs font-medium uppercase tracking-wide mb-1">WhatsApp / Telepon</p>
                <a
                  href={`tel:${c.phone.replace(/-/g, "")}`}
                  className="text-white font-semibold text-lg hover:underline"
                >
                  {c.phone}
                </a>
              </div>
            </div>

            {/* Email */}
            <div className="flex items-start gap-4 mb-6">
              <div className="w-10 h-10 bg-white/15 rounded-xl flex items-center justify-center flex-shrink-0">
                <svg className="w-5 h-5 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.8}>
                  <path strokeLinecap="round" strokeLinejoin="round" d="M21.75 6.75v10.5a2.25 2.25 0 01-2.25 2.25h-15a2.25 2.25 0 01-2.25-2.25V6.75m19.5 0A2.25 2.25 0 0019.5 4.5h-15a2.25 2.25 0 00-2.25 2.25m19.5 0v.243a2.25 2.25 0 01-1.07 1.916l-7.5 4.615a2.25 2.25 0 01-2.36 0L3.32 8.91a2.25 2.25 0 01-1.07-1.916V6.75" />
                </svg>
              </div>
              <div>
                <p className="text-violet-200 text-xs font-medium uppercase tracking-wide mb-1">Email</p>
                <a
                  href={`mailto:${c.emailAddress}`}
                  className="text-white font-semibold hover:underline"
                >
                  {c.emailAddress}
                </a>
              </div>
            </div>

            {/* Address */}
            <div className="flex items-start gap-4 pt-6 border-t border-white/10">
              <div className="w-10 h-10 bg-white/15 rounded-xl flex items-center justify-center flex-shrink-0">
                <svg className="w-5 h-5 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.8}>
                  <path strokeLinecap="round" strokeLinejoin="round" d="M15 10.5a3 3 0 11-6 0 3 3 0 016 0z" />
                  <path strokeLinecap="round" strokeLinejoin="round" d="M19.5 10.5c0 7.142-7.5 11.25-7.5 11.25S4.5 17.642 4.5 10.5a7.5 7.5 0 1115 0z" />
                </svg>
              </div>
              <div>
                <p className="text-violet-200 text-xs font-medium uppercase tracking-wide mb-1">
                  {c.addressLabel}
                </p>
                <address className="not-italic text-white text-sm leading-relaxed">
                  {c.address.street}<br />
                  {c.address.city}<br />
                  {c.address.province}, {c.address.country}
                </address>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
