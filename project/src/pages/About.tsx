import { Award, Clock, Users, ShieldCheck, HeartPulse, Wallet, Stethoscope, Target, Eye, HeartHandshake, GraduationCap } from "lucide-react";
import { useLanguage } from "@/context/LanguageContext";

const clinicImages = [
  "https://images.pexels.com/photos/4269268/pexels-photo-4269268.jpeg?auto=compress&cs=tinysrgb&w=800&h=600&dpr=2",
  "https://images.pexels.com/photos/6809639/pexels-photo-6809639.jpeg?auto=compress&cs=tinysrgb&w=800&h=600&dpr=2",
  "https://images.pexels.com/photos/6812463/pexels-photo-6812463.jpeg?auto=compress&cs=tinysrgb&w=800&h=600&dpr=2",
  "https://images.pexels.com/photos/6502543/pexels-photo-6502543.jpeg?auto=compress&cs=tinysrgb&w=800&h=600&dpr=2",
];

const doctor1Image = "https://images.pexels.com/photos/5355864/pexels-photo-5355864.jpeg?auto=compress&cs=tinysrgb&w=600&h=750&dpr=2";
const doctor2Image = "https://images.pexels.com/photos/6812464/pexels-photo-6812464.jpeg?auto=compress&cs=tinysrgb&w=600&h=750&dpr=2";

export default function About() {
  const { t } = useLanguage();

  return (
    <div className="pt-20">
      {/* Page Banner */}
      <section
        className="py-12 lg:py-16 relative overflow-hidden"
        style={{
          backgroundImage: `linear-gradient(135deg, rgba(15, 29, 66, 0.93) 0%, rgba(22, 40, 90, 0.88) 100%), url(${clinicImages[0]})`,
          backgroundSize: "cover",
          backgroundPosition: "center",
        }}
      >
        <div className="absolute inset-0 grid-bg-dark opacity-40" />
        <div className="container-max px-4 sm:px-6 lg:px-8 relative text-center text-white">
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-white/10 border border-white/20 mb-3">
            <Stethoscope className="w-4 h-4 text-amber-300" />
            <span className="text-sm font-medium text-navy-100">{t.nav.about}</span>
          </div>
          <h1 className="text-3xl lg:text-4xl font-extrabold mb-2">{t.about.title}</h1>
          <p className="text-navy-200 max-w-2xl mx-auto leading-relaxed text-sm">{t.about.desc1}</p>
        </div>
      </section>

      {/* About Content */}
      <section className="section-padding bg-white relative grid-bg-fine">
        <div className="container-max px-4 sm:px-6 lg:px-8 relative">
          <div className="grid lg:grid-cols-2 gap-8 items-center mb-10">
            <div className="grid grid-cols-2 gap-3">
              {clinicImages.map((img, i) => (
                <div
                  key={i}
                  className={`rounded-2xl overflow-hidden shadow-lg shadow-navy-900/10 animate-scale-in ${i % 2 === 0 ? "mt-0" : "mt-6"}`}
                  style={{ animationDelay: `${i * 0.08}s` }}
                >
                  <img src={img} alt={`Clinic ${i + 1}`} className="w-full h-40 object-cover hover:scale-105 transition-transform duration-500" />
                </div>
              ))}
            </div>
            <div>
              <div className="flex items-center gap-2 mb-2">
                <div className="w-8 h-1 rounded-full bg-navy-600" />
                <div className="w-3 h-1 rounded-full bg-navy-300" />
              </div>
              <h2 className="text-2xl lg:text-3xl font-extrabold text-navy-900 mb-3">{t.about.title}</h2>
              <p className="text-sm text-navy-600 leading-relaxed mb-5">{t.about.desc1}</p>
              <div className="space-y-3">
                {t.about.features.map((feature, i) => {
                  const icons = [Award, Clock, Users];
                  const Icon = icons[i];
                  return (
                    <div key={i} className="flex items-center gap-3 p-3.5 rounded-xl bg-navy-50/50 border border-navy-50 hover:bg-navy-50 transition-colors">
                      <div className="w-10 h-10 rounded-lg bg-navy-700 flex items-center justify-center shrink-0">
                        <Icon className="w-5 h-5 text-white" />
                      </div>
                      <div>
                        <h4 className="font-semibold text-navy-900 text-sm">{feature.title}</h4>
                        <p className="text-xs text-navy-500">{feature.desc}</p>
                      </div>
                    </div>
                  );
                })}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Doctors Section */}
      <section id="doctors" className="section-padding bg-navy-50/50 relative grid-bg scroll-mt-20">
        <div className="container-max px-4 sm:px-6 lg:px-8 relative">
          <div className="text-center max-w-2xl mx-auto mb-8">
            <div className="flex items-center gap-2 mb-2 justify-center">
              <div className="w-8 h-1 rounded-full bg-navy-600" />
              <div className="w-3 h-1 rounded-full bg-navy-300" />
            </div>
            <h2 className="text-2xl lg:text-3xl font-extrabold text-navy-900 mb-2">{t.doctors.title}</h2>
            <p className="text-sm text-navy-600 leading-relaxed">{t.doctors.subtitle}</p>
          </div>

          <div className="grid md:grid-cols-2 gap-6">
            {/* Dr. Maryam */}
            <DoctorCard image={doctor1Image} name={t.doctors.doctor1Name} role={t.doctors.doctor1Role} bio={t.doctors.doctor1Bio} bio2={t.doctors.doctor1Bio2} delay={0} />
            {/* Dr. Hamza */}
            <DoctorCard image={doctor2Image} name={t.doctors.doctor2Name} role={t.doctors.doctor2Role} bio={t.doctors.doctor2Bio} bio2={t.doctors.doctor2Bio2} delay={0.1} />
          </div>

          {/* Shared credentials */}
          <div className="grid sm:grid-cols-3 gap-4 mt-6">
            {[
              { icon: Award, title: t.doctors.exp1Title, desc: t.doctors.exp1Desc },
              { icon: GraduationCap, title: t.doctors.exp2Title, desc: t.doctors.exp2Desc },
              { icon: HeartPulse, title: t.doctors.exp3Title, desc: t.doctors.exp3Desc },
            ].map((item, i) => (
              <div key={i} className="flex items-start gap-3 p-4 rounded-xl bg-white border border-navy-100 animate-fade-in-up" style={{ animationDelay: `${i * 0.1}s` }}>
                <div className="w-10 h-10 rounded-lg bg-navy-50 flex items-center justify-center shrink-0">
                  <item.icon className="w-5 h-5 text-navy-700" />
                </div>
                <div>
                  <h4 className="font-semibold text-navy-900 text-sm mb-0.5">{item.title}</h4>
                  <p className="text-xs text-navy-500 leading-relaxed">{item.desc}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Why Choose Us */}
      <section className="section-padding bg-white relative grid-bg-fine">
        <div className="container-max px-4 sm:px-6 lg:px-8 relative">
          <div className="text-center max-w-2xl mx-auto mb-8">
            <div className="flex items-center gap-2 mb-2 justify-center">
              <div className="w-8 h-1 rounded-full bg-navy-600" />
              <div className="w-3 h-1 rounded-full bg-navy-300" />
            </div>
            <h2 className="text-2xl lg:text-3xl font-extrabold text-navy-900 mb-2">{t.whyChoose.title}</h2>
            <p className="text-sm text-navy-600 leading-relaxed">{t.whyChoose.subtitle}</p>
          </div>
          <div className="grid md:grid-cols-3 gap-5">
            {[
              { icon: ShieldCheck, title: t.whyChoose.f1Title, desc: t.whyChoose.f1Desc },
              { icon: HeartPulse, title: t.whyChoose.f2Title, desc: t.whyChoose.f2Desc },
              { icon: Wallet, title: t.whyChoose.f3Title, desc: t.whyChoose.f3Desc },
            ].map((feature, i) => (
              <div key={i} className="group bg-white rounded-2xl border border-navy-100 p-6 hover:shadow-xl hover:shadow-navy-900/10 hover:-translate-y-1.5 transition-all duration-400">
                <div className="w-12 h-12 rounded-xl bg-navy-50 group-hover:bg-navy-700 flex items-center justify-center mb-4 transition-all duration-400">
                  <feature.icon className="w-6 h-6 text-navy-700 group-hover:text-white transition-colors" />
                </div>
                <h3 className="text-base font-bold text-navy-900 mb-2">{feature.title}</h3>
                <p className="text-sm text-navy-600 leading-relaxed">{feature.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Vision Section */}
      <section id="vision" className="section-padding bg-navy-50/50 relative grid-bg scroll-mt-20">
        <div className="container-max px-4 sm:px-6 lg:px-8 relative">
          <div className="text-center max-w-2xl mx-auto mb-8">
            <div className="flex items-center gap-2 mb-2 justify-center">
              <Eye className="w-6 h-6 text-navy-600" />
            </div>
            <h2 className="text-2xl lg:text-3xl font-extrabold text-navy-900 mb-2">{t.vision.title}</h2>
            <p className="text-sm text-navy-600 leading-relaxed">{t.vision.subtitle}</p>
          </div>
          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-4">
            {t.vision.items.map((item, i) => {
              const icons = [Target, HeartHandshake, Users, HeartPulse, Wallet, Stethoscope];
              const Icon = icons[i] || Target;
              return (
                <div
                  key={i}
                  className="group p-5 rounded-2xl bg-white border border-navy-100 hover:shadow-xl hover:shadow-navy-900/10 hover:-translate-y-1 transition-all duration-300 animate-fade-in-up"
                  style={{ animationDelay: `${i * 0.06}s` }}
                >
                  <div className="w-11 h-11 rounded-xl bg-navy-50 group-hover:bg-navy-700 flex items-center justify-center mb-3 transition-all duration-300">
                    <Icon className="w-5 h-5 text-navy-600 group-hover:text-white transition-colors" />
                  </div>
                  <h3 className="font-bold text-navy-900 text-sm mb-1.5">{item.title}</h3>
                  <p className="text-sm text-navy-600 leading-relaxed">{item.desc}</p>
                </div>
              );
            })}
          </div>
          <div className="mt-8 text-center p-6 rounded-2xl hero-gradient text-white">
            <p className="text-lg font-semibold italic mb-1">"{t.vision.quote}"</p>
            <p className="text-navy-200 text-sm">— {t.vision.quoteAuthor}</p>
          </div>
        </div>
      </section>
    </div>
  );
}

function DoctorCard({
  image,
  name,
  role,
  bio,
  bio2,
  delay,
}: {
  image: string;
  name: string;
  role: string;
  bio: string;
  bio2: string;
  delay: number;
}) {
  return (
    <div
      className="group bg-white rounded-2xl border border-navy-100 overflow-hidden hover:shadow-2xl hover:shadow-navy-900/10 transition-all duration-400 animate-fade-in-up flex flex-col sm:flex-row"
      style={{ animationDelay: `${delay}s` }}
    >
      <div className="sm:w-2/5 relative overflow-hidden shrink-0">
        <img src={image} alt={name} className="w-full h-56 sm:h-full object-cover group-hover:scale-105 transition-transform duration-500" />
        <div className="absolute inset-0 bg-gradient-to-t from-navy-950/30 to-transparent" />
      </div>
      <div className="sm:w-3/5 p-5 flex flex-col justify-center">
        <span className="text-xs font-semibold text-navy-600 uppercase tracking-wider">{role}</span>
        <h3 className="text-xl font-extrabold text-navy-900 mt-1 mb-2">{name}</h3>
        <p className="text-sm text-navy-600 leading-relaxed mb-2">{bio}</p>
        <p className="text-sm text-navy-600 leading-relaxed">{bio2}</p>
      </div>
    </div>
  );
}
