import { useState, type FormEvent } from "react";
import { Phone, Mail, MapPin, Clock, Send, Loader2, CheckCircle2, AlertCircle, Facebook, Instagram, Twitter } from "lucide-react";
import { useLanguage } from "@/context/LanguageContext";

const bannerBg = "https://images.pexels.com/photos/6812429/pexels-photo-6812429.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2";

export default function Contact() {
  const { t } = useLanguage();
  const [status, setStatus] = useState<"idle" | "submitting" | "success" | "error">("idle");

  const handleSubmit = (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setStatus("submitting");
    setTimeout(() => {
      setStatus("success");
      (e.target as HTMLFormElement).reset();
      setTimeout(() => setStatus("idle"), 5000);
    }, 1200);
  };

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
            <Mail className="w-4 h-4 text-amber-300" />
            <span className="text-sm font-medium text-navy-100">{t.nav.contact}</span>
          </div>
          <h1 className="text-3xl lg:text-4xl font-extrabold mb-2">{t.contact.title}</h1>
          <p className="text-navy-200 max-w-2xl mx-auto leading-relaxed text-sm">{t.contact.subtitle}</p>
        </div>
      </section>

      {/* Contact Content */}
      <section className="section-padding bg-white relative grid-bg-fine">
        <div className="container-max px-4 sm:px-6 lg:px-8 relative">
          <div className="grid lg:grid-cols-2 gap-8">
            {/* Contact Info */}
            <div>
              <div className="flex items-center gap-2 mb-2">
                <div className="w-8 h-1 rounded-full bg-navy-600" />
                <div className="w-3 h-1 rounded-full bg-navy-300" />
              </div>
              <h2 className="text-2xl lg:text-3xl font-extrabold text-navy-900 mb-2">{t.contact.title}</h2>
              <p className="text-sm text-navy-600 leading-relaxed mb-6">{t.contact.subtitle}</p>

              <div className="space-y-3">
                {[
                  { icon: Phone, label: t.contact.phone, value: t.contact.phoneValue, href: `tel:${t.contact.phoneValue}` },
                  { icon: Mail, label: t.contact.email, value: t.contact.emailValue, href: `mailto:${t.contact.emailValue}` },
                  { icon: MapPin, label: t.contact.address, value: t.contact.addressValue },
                  { icon: Clock, label: t.contact.hours, value: t.contact.hoursValue },
                ].map((item, i) => (
                  <div
                    key={i}
                    className="flex items-start gap-3 p-4 rounded-xl bg-navy-50/50 border border-navy-50 hover:bg-navy-50 transition-colors animate-fade-in-up"
                    style={{ animationDelay: `${i * 0.08}s` }}
                  >
                    <div className="w-10 h-10 rounded-lg bg-navy-700 flex items-center justify-center shrink-0">
                      <item.icon className="w-4 h-4 text-white" />
                    </div>
                    <div>
                      <h4 className="text-xs font-semibold text-navy-500 uppercase tracking-wider mb-0.5">{item.label}</h4>
                      {item.href ? (
                        <a href={item.href} className="text-navy-900 font-medium hover:text-navy-600 transition-colors text-sm">
                          {item.value}
                        </a>
                      ) : (
                        <p className="text-navy-900 font-medium text-sm">{item.value}</p>
                      )}
                    </div>
                  </div>
                ))}
              </div>

              {/* Social */}
              <div className="mt-6">
                <h4 className="text-sm font-semibold text-navy-700 mb-2">{t.contact.followUs}</h4>
                <div className="flex gap-2.5">
                  {[Facebook, Instagram, Twitter].map((Icon, i) => (
                    <a
                      key={i}
                      href="#"
                      className="w-10 h-10 rounded-xl bg-navy-50 hover:bg-navy-700 flex items-center justify-center transition-all duration-300 hover:-translate-y-1 group"
                    >
                      <Icon className="w-4 h-4 text-navy-700 group-hover:text-white transition-colors" />
                    </a>
                  ))}
                </div>
              </div>
            </div>

            {/* Contact Form */}
            <div className="bg-white rounded-3xl shadow-2xl shadow-navy-900/15 border border-navy-100 p-6">
              <div className="flex items-center gap-3 mb-5">
                <div className="w-10 h-10 rounded-xl bg-navy-700 flex items-center justify-center">
                  <Send className="w-5 h-5 text-white" />
                </div>
                <h3 className="text-lg font-bold text-navy-900">{t.contact.formTitle}</h3>
              </div>

              {status === "success" && (
                <div className="flex items-center gap-2 p-3 rounded-xl bg-green-50 text-green-700 text-sm mb-4 animate-scale-in">
                  <CheckCircle2 className="w-5 h-5 shrink-0" />
                  <span>Message sent! We'll get back to you soon.</span>
                </div>
              )}
              {status === "error" && (
                <div className="flex items-center gap-2 p-3 rounded-xl bg-red-50 text-red-700 text-sm mb-4 animate-scale-in">
                  <AlertCircle className="w-5 h-5 shrink-0" />
                  <span>Something went wrong. Please try again.</span>
                </div>
              )}

              <form onSubmit={handleSubmit} className="space-y-3.5">
                <div>
                  <label className="text-sm font-medium text-navy-800 mb-1 block">{t.contact.name}</label>
                  <input type="text" required className="w-full px-4 py-2.5 rounded-xl border border-navy-200 bg-navy-50/30 text-navy-900 focus:ring-2 focus:ring-navy-500 focus:border-navy-500 outline-none transition-all text-sm" />
                </div>
                <div>
                  <label className="text-sm font-medium text-navy-800 mb-1 block">{t.contact.emailLabel}</label>
                  <input type="email" required className="w-full px-4 py-2.5 rounded-xl border border-navy-200 bg-navy-50/30 text-navy-900 focus:ring-2 focus:ring-navy-500 focus:border-navy-500 outline-none transition-all text-sm" />
                </div>
                <div>
                  <label className="text-sm font-medium text-navy-800 mb-1 block">{t.contact.message}</label>
                  <textarea rows={4} required className="w-full px-4 py-2.5 rounded-xl border border-navy-200 bg-navy-50/30 text-navy-900 focus:ring-2 focus:ring-navy-500 focus:border-navy-500 outline-none transition-all text-sm resize-none" />
                </div>
                <button type="submit" disabled={status === "submitting"} className="w-full btn-primary flex items-center justify-center gap-2 disabled:opacity-60">
                  {status === "submitting" ? (
                    <><Loader2 className="w-4 h-4 animate-spin" />Sending...</>
                  ) : (
                    <><Send className="w-4 h-4" />{t.contact.send}</>
                  )}
                </button>
              </form>
            </div>
          </div>
        </div>
      </section>

      {/* Map placeholder */}
      <section className="pb-12">
        <div className="container-max px-4 sm:px-6 lg:px-8">
          <div className="rounded-3xl overflow-hidden shadow-xl shadow-navy-900/10 border border-navy-100 h-64 bg-navy-50 flex items-center justify-center grid-bg">
            <div className="text-center">
              <MapPin className="w-10 h-10 text-navy-300 mx-auto mb-2" />
              <p className="text-navy-500 font-medium text-sm">{t.contact.addressValue}</p>
              <a
                href={`https://maps.google.com/?q=${encodeURIComponent(t.contact.addressValue)}`}
                target="_blank"
                rel="noopener noreferrer"
                className="text-sm text-navy-600 hover:text-navy-800 font-semibold mt-2 inline-block"
              >
                View on Google Maps
              </a>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
