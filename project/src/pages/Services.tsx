import { Sparkles, ArrowRight, CheckCircle2 } from "lucide-react";
import { Link } from "react-router-dom";
import { useLanguage } from "@/context/LanguageContext";

const serviceImages = [
  "https://images.pexels.com/photos/3845744/pexels-photo-3845744.jpeg?auto=compress&cs=tinysrgb&w=800&h=600&dpr=2",
  "https://images.pexels.com/photos/5622270/pexels-photo-5622270.jpeg?auto=compress&cs=tinysrgb&w=800&h=600&dpr=2",
  "https://images.pexels.com/photos/6627573/pexels-photo-6627573.jpeg?auto=compress&cs=tinysrgb&w=800&h=600&dpr=2",
];

const bannerBg = "https://images.pexels.com/photos/4270969/pexels-photo-4270969.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2";

export default function Services() {
  const { t } = useLanguage();

  return (
    <div className="pt-20">
      {/* Banner */}
      <section
        className="py-12 lg:py-16 relative overflow-hidden"
        style={{
          backgroundImage: `linear-gradient(135deg, rgba(15, 29, 66, 0.93) 0%, rgba(22, 40, 90, 0.88) 100%), url(${bannerBg})`,
          backgroundSize: "cover",
          backgroundPosition: "center",
        }}
      >
        <div className="absolute inset-0 grid-bg-dark opacity-40" />
        <div className="container-max px-4 sm:px-6 lg:px-8 relative text-center text-white">
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-white/10 border border-white/20 mb-3">
            <Sparkles className="w-4 h-4 text-amber-300" />
            <span className="text-sm font-medium text-navy-100">{t.nav.services}</span>
          </div>
          <h1 className="text-3xl lg:text-4xl font-extrabold mb-2">{t.services.title}</h1>
          <p className="text-navy-200 max-w-2xl mx-auto leading-relaxed text-sm">{t.services.subtitle}</p>
        </div>
      </section>

      {/* Services Grid */}
      <section id="all" className="section-padding bg-white relative grid-bg-fine scroll-mt-20">
        <div className="container-max px-4 sm:px-6 lg:px-8 relative">
          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-5">
            {t.services.items.map((service, i) => (
              <div
                key={i}
                className="group bg-white rounded-2xl border border-navy-100 overflow-hidden hover:shadow-2xl hover:shadow-navy-900/10 hover:-translate-y-1.5 transition-all duration-400 animate-fade-in-up"
                style={{ animationDelay: `${i * 0.05}s` }}
              >
                <div className="h-32 overflow-hidden relative">
                  <img
                    src={serviceImages[i % serviceImages.length]}
                    alt={service.name}
                    className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-navy-950/60 to-transparent" />
                  <div className="absolute bottom-2 left-3 right-3 flex items-center gap-2">
                    <div className="w-8 h-8 rounded-lg bg-white/90 flex items-center justify-center">
                      <Sparkles className="w-4 h-4 text-navy-700" />
                    </div>
                    <h3 className="text-white font-bold text-base">{service.name}</h3>
                  </div>
                </div>
                <div className="p-4">
                  <p className="text-sm text-navy-600 leading-relaxed mb-3">{service.desc}</p>
                  <ul className="space-y-1.5 mb-3">
                    {[1, 2].map((item) => (
                      <li key={item} className="flex items-center gap-2 text-xs text-navy-500">
                        <CheckCircle2 className="w-3.5 h-3.5 text-green-500 shrink-0" />
                        <span>
                          {item === 1 ? "Performed with modern equipment" : "Personalized treatment plan"}
                        </span>
                      </li>
                    ))}
                  </ul>
                  <Link
                    to="/#appointment"
                    className="flex items-center gap-1.5 text-sm font-semibold text-navy-700 hover:text-navy-900 transition-colors group/link"
                  >
                    Book this service
                    <ArrowRight className="w-4 h-4 group-hover/link:translate-x-1 transition-transform" />
                  </Link>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="bg-navy-950 py-10 lg:py-14 relative overflow-hidden grid-bg-dark">
        <div className="absolute top-0 right-0 w-64 h-64 rounded-full bg-navy-500/10 blur-3xl" />
        <div className="container-max px-4 sm:px-6 lg:px-8 relative text-center text-white">
          <h2 className="text-2xl lg:text-3xl font-extrabold mb-2">Ready to Transform Your Smile?</h2>
          <p className="text-navy-200 max-w-xl mx-auto mb-5 text-sm leading-relaxed">
            Book your appointment today and experience gentle, professional dental care tailored to your needs.
          </p>
          <Link
            to="/#appointment"
            className="inline-flex items-center gap-2 bg-white text-navy-800 hover:bg-navy-50 font-semibold px-6 py-3 rounded-xl transition-all duration-300 hover:shadow-2xl hover:-translate-y-0.5 text-sm"
          >
            {t.hero.cta}
            <ArrowRight className="w-4 h-4" />
          </Link>
        </div>
      </section>
    </div>
  );
}
