import { Star, BadgeCheck } from "lucide-react";
import { useLanguage } from "@/context/LanguageContext";
import ReviewsSection from "@/components/ReviewsSection";

const bannerBg = "https://images.pexels.com/photos/6502295/pexels-photo-6502295.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2";

export default function Reviews() {
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
            <Star className="w-4 h-4 text-amber-300 fill-amber-300" />
            <span className="text-sm font-medium text-navy-100">{t.nav.reviews}</span>
          </div>
          <h1 className="text-3xl lg:text-4xl font-extrabold mb-2">{t.reviews.title}</h1>
          <p className="text-navy-200 max-w-2xl mx-auto leading-relaxed text-sm">{t.reviews.subtitle}</p>
          <div className="flex items-center justify-center gap-3 mt-4">
            <div className="flex gap-1">
              {[1, 2, 3, 4, 5].map((s) => (
                <Star key={s} className="w-5 h-5 fill-amber-400 text-amber-400" />
              ))}
            </div>
            <span className="text-xl font-extrabold text-white">4.9</span>
            <span className="px-3 py-1 rounded-full bg-blue-500/20 text-blue-200 text-xs font-semibold flex items-center gap-1">
              <BadgeCheck className="w-3.5 h-3.5" />
              {t.reviews.verifiedByGoogle}
            </span>
          </div>
        </div>
      </section>

      {/* Reviews Content */}
      <section className="section-padding bg-navy-50/50 relative grid-bg">
        <div className="container-max px-4 sm:px-6 lg:px-8 relative">
          <ReviewsSection />
        </div>
      </section>
    </div>
  );
}
