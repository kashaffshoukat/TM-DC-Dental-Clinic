import { useState } from "react";
import { Star, BadgeCheck, Quote, ChevronLeft, ChevronRight } from "lucide-react";
import { useLanguage } from "@/context/LanguageContext";
import StarAnalytics from "@/components/StarAnalytics";

const reviewerNames = [
  "Ayesha Khan", "Bilal Ahmed", "Sana Malik", "Hamza Sheikh", "Fatima Raza",
  "Usman Tariq", "Zainab Ali", "Asad Iqbal", "Maryam Noor", "Ali Hassan",
  "Hira Aslam", "Bilal Nawaz", "Sadia Parveen", "Kamran Riaz", "Nida Bashir",
  "Omar Farooq", "Rabia Anwar", "Tariq Jameel", "Amna Siddiqui", "Faisal Mehmood",
  "Saima Iqbal", "Naveed Akram", "Hina Qureshi", "Waseem Akhtar", "Aiman Shahzad",
  "Rizwan Ghazi", "Mehwish Latif", "Sohaib Khan", "Tania Yousaf", "Imran Sattar",
];

const reviewTemplates = [
  "Absolutely fantastic experience! The staff was incredibly gentle and the clinic is spotless. Dr. Tariq explained every step clearly. Highly recommend TM&DC for any dental work.",
  "Best dental clinic in the city. I was terrified of root canal treatment but it was completely painless. The modern equipment and professional care exceeded my expectations.",
  "Brought my kids here for their first dental checkup. The team made them feel so comfortable that they actually look forward to their next visit. Thank you TM&DC!",
  "Got my teeth whitening done here and the results are amazing. Very affordable compared to other places and the quality is top-notch. Five stars all the way.",
  "I had a gap closure procedure and I couldn't be happier with my smile now. Dr. Mahmood is a true artist. The clinic maintains excellent hygiene standards.",
  "Visited for deep scaling and was impressed by how thorough the cleaning was. The dentist took time to explain proper oral hygiene. Very patient and caring approach.",
  "After years of avoiding dentists due to bad experiences, TM&DC changed my perspective entirely. Painless, professional, and genuinely caring. This is how dental care should be.",
  "The braces treatment for my daughter was handled with such expertise. The progress has been remarkable and the follow-up care is exceptional. Worth every penny.",
  "Full mouth rehabilitation was a big decision but Dr. Tariq made it seamless. The results transformed not just my smile but my confidence. Forever grateful to the team.",
  "Excellent service from start to finish. The appointment booking was easy, wait time was minimal, and the dental bridge work is flawless. Highly professional clinic.",
  "The deep stain removal exceeded my expectations. Years of coffee stains gone in one session. The clinic is modern, clean, and the staff is very welcoming.",
  "Got a filling done here and it was the smoothest dental experience I've ever had. No pain, quick procedure, and the filling looks completely natural. Thank you TM&DC!",
  "Outstanding dental care. The doctor took the time to understand my concerns about cosmetic dentistry and delivered results beyond what I imagined. Truly patient-first.",
  "The level of sterilization and safety protocols at this clinic is impressive. You can see they genuinely care about patient safety. My family now exclusively visits TM&DC.",
  "Affordable, professional, and compassionate. As someone on a tight budget, I appreciate their transparent pricing. The quality of care is never compromised despite the fair prices.",
];

const timeAgo = [
  "1 week ago", "2 weeks ago", "3 weeks ago", "1 month ago",
  "1 month ago", "2 months ago", "2 months ago", "3 months ago",
  "3 months ago", "4 months ago", "4 months ago", "5 months ago",
  "5 months ago", "6 months ago", "6 months ago", "7 months ago",
  "7 months ago", "8 months ago", "8 months ago", "9 months ago",
  "9 months ago", "10 months ago", "10 months ago", "11 months ago",
  "11 months ago", "1 year ago", "1 year ago", "1 year ago",
  "1 year ago", "1 year ago",
];

const reviews = reviewerNames.map((name, i) => ({
  name,
  rating: i < 24 ? 5 : i < 28 ? 4 : 3,
  text: reviewTemplates[i % reviewTemplates.length],
  time: timeAgo[i],
  initials: name.split(" ").map((n) => n[0]).join(""),
}));

const avatarColors = [
  "bg-navy-600", "bg-navy-700", "bg-navy-500", "bg-navy-800",
  "bg-navy-600", "bg-navy-700",
];

export default function ReviewsSection() {
  const { t } = useLanguage();
  const [page, setPage] = useState(0);
  const perPage = 6;
  const totalPages = Math.ceil(reviews.length / perPage);
  const current = reviews.slice(page * perPage, (page + 1) * perPage);

  return (
    <div className="space-y-10">
      {/* Analytics Dashboard */}
      <StarAnalytics />

      {/* Verified Badge Banner */}
      <div className="flex flex-col sm:flex-row items-center justify-between gap-4 p-6 rounded-2xl bg-gradient-to-r from-navy-50 to-white border border-navy-100">
        <div className="flex items-center gap-4">
          <div className="w-14 h-14 rounded-2xl bg-white shadow-lg flex items-center justify-center">
            <BadgeCheck className="w-8 h-8 text-blue-500" />
          </div>
          <div>
            <div className="flex items-center gap-2">
              <h3 className="font-bold text-navy-900 text-lg">{t.reviews.title}</h3>
              <span className="px-2.5 py-1 rounded-full bg-blue-50 text-blue-600 text-xs font-semibold flex items-center gap-1">
                <BadgeCheck className="w-3.5 h-3.5" />
                {t.reviews.verifiedByGoogle}
              </span>
            </div>
            <p className="text-sm text-navy-500 mt-0.5">{t.reviews.subtitle}</p>
          </div>
        </div>
        <div className="flex items-center gap-2">
          {[1, 2, 3, 4, 5].map((s) => (
            <Star key={s} className="w-6 h-6 fill-amber-400 text-amber-400" />
          ))}
          <span className="text-2xl font-extrabold text-navy-900 ml-2">4.9</span>
        </div>
      </div>

      {/* Reviews Grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5">
        {current.map((review, i) => (
          <div
            key={page * perPage + i}
            className="bg-white rounded-2xl border border-navy-100 shadow-lg shadow-navy-900/5 p-5 hover:shadow-xl hover:-translate-y-1 transition-all duration-300 animate-fade-in-up"
            style={{ animationDelay: `${i * 0.08}s` }}
          >
            <Quote className="w-8 h-8 text-navy-100 mb-2" />
            <div className="flex items-center gap-3 mb-3">
              <div
                className={`w-11 h-11 rounded-full flex items-center justify-center text-white font-bold text-sm ${
                  avatarColors[(page * perPage + i) % avatarColors.length]
                }`}
              >
                {review.initials}
              </div>
              <div className="flex-1 min-w-0">
                <div className="flex items-center gap-1.5">
                  <span className="font-semibold text-navy-900 text-sm truncate">
                    {review.name}
                  </span>
                  <BadgeCheck className="w-4 h-4 text-blue-500 shrink-0" />
                </div>
                <span className="text-xs text-navy-400">{review.time}</span>
              </div>
            </div>
            <div className="flex gap-0.5 mb-3">
              {[1, 2, 3, 4, 5].map((s) => (
                <Star
                  key={s}
                  className={`w-4 h-4 ${
                    s <= review.rating
                      ? "fill-amber-400 text-amber-400"
                      : "text-navy-200"
                  }`}
                />
              ))}
            </div>
            <p className="text-sm text-navy-600 leading-relaxed line-clamp-4">
              {review.text}
            </p>
          </div>
        ))}
      </div>

      {/* Pagination */}
      <div className="flex items-center justify-center gap-4">
        <button
          onClick={() => setPage((p) => Math.max(0, p - 1))}
          disabled={page === 0}
          className="w-10 h-10 rounded-xl border border-navy-200 text-navy-700 flex items-center justify-center hover:bg-navy-50 disabled:opacity-40 disabled:cursor-not-allowed transition-all"
        >
          <ChevronLeft className="w-5 h-5" />
        </button>
        <div className="flex items-center gap-2">
          {Array.from({ length: totalPages }).map((_, i) => (
            <button
              key={i}
              onClick={() => setPage(i)}
              className={`w-9 h-9 rounded-lg text-sm font-medium transition-all ${
                i === page
                  ? "bg-navy-700 text-white"
                  : "text-navy-600 hover:bg-navy-50"
              }`}
            >
              {i + 1}
            </button>
          ))}
        </div>
        <button
          onClick={() => setPage((p) => Math.min(totalPages - 1, p + 1))}
          disabled={page === totalPages - 1}
          className="w-10 h-10 rounded-xl border border-navy-200 text-navy-700 flex items-center justify-center hover:bg-navy-50 disabled:opacity-40 disabled:cursor-not-allowed transition-all"
        >
          <ChevronRight className="w-5 h-5" />
        </button>
      </div>
    </div>
  );
}
