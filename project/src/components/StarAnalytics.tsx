import { Star, TrendingUp, Users, ThumbsUp, MessageCircle, BarChart3 } from "lucide-react";
import { useLanguage } from "@/context/LanguageContext";

const ratingData = [
  { stars: 5, count: 24, percent: 80 },
  { stars: 4, count: 4, percent: 13 },
  { stars: 3, count: 1, percent: 4 },
  { stars: 2, count: 1, percent: 3 },
  { stars: 1, count: 0, percent: 0 },
];

const monthlyTrend = [2.8, 3.1, 3.5, 3.8, 4.0, 4.2, 4.5, 4.6, 4.7, 4.8, 4.9, 4.9];
const months = ["J", "F", "M", "A", "M", "J", "J", "A", "S", "O", "N", "D"];

const serviceRatings = [
  { name: "Root Canal", score: 5.0, count: 8 },
  { name: "Teeth Whitening", score: 4.9, count: 6 },
  { name: "Braces", score: 4.8, count: 5 },
  { name: "Fillings", score: 4.9, count: 4 },
  { name: "Scaling", score: 4.7, count: 4 },
  { name: "Gap Closure", score: 4.8, count: 3 },
];

export default function StarAnalytics() {
  const { t } = useLanguage();

  return (
    <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
      {/* Rating Distribution */}
      <div className="bg-white rounded-2xl border border-navy-100 shadow-lg shadow-navy-900/5 p-6">
        <div className="flex items-center gap-2 mb-5">
          <BarChart3 className="w-5 h-5 text-navy-600" />
          <h3 className="font-bold text-navy-900 text-sm uppercase tracking-wide">
            {t.reviews.ratingDistribution}
          </h3>
        </div>
        <div className="space-y-3">
          {ratingData.map((row) => (
            <div key={row.stars} className="flex items-center gap-3 group">
              <div className="flex items-center gap-1 w-16 shrink-0">
                <span className="text-sm font-medium text-navy-700">{row.stars}</span>
                <Star className="w-3.5 h-3.5 fill-amber-400 text-amber-400" />
              </div>
              <div className="flex-1 h-2.5 rounded-full bg-navy-50 overflow-hidden">
                <div
                  className="h-full rounded-full bg-gradient-to-r from-navy-500 to-navy-700 transition-all duration-1000 ease-out group-hover:from-navy-600 group-hover:to-navy-800"
                  style={{ width: `${row.percent}%` }}
                />
              </div>
              <span className="text-sm text-navy-500 w-8 text-right font-medium">
                {row.count}
              </span>
            </div>
          ))}
        </div>
        <div className="mt-5 pt-5 border-t border-navy-50 flex items-baseline gap-2">
          <span className="text-4xl font-extrabold text-navy-900">4.9</span>
          <div className="flex flex-col">
            <div className="flex gap-0.5">
              {[1, 2, 3, 4, 5].map((s) => (
                <Star key={s} className="w-4 h-4 fill-amber-400 text-amber-400" />
              ))}
            </div>
            <span className="text-xs text-navy-500 mt-0.5">{t.reviews.basedOn}</span>
          </div>
        </div>
      </div>

      {/* Monthly Trend Chart */}
      <div className="bg-white rounded-2xl border border-navy-100 shadow-lg shadow-navy-900/5 p-6">
        <div className="flex items-center gap-2 mb-5">
          <TrendingUp className="w-5 h-5 text-navy-600" />
          <h3 className="font-bold text-navy-900 text-sm uppercase tracking-wide">
            Rating Trend
          </h3>
        </div>
        <div className="flex items-end justify-between h-40 gap-1.5 mb-3">
          {monthlyTrend.map((val, i) => (
            <div key={i} className="flex-1 flex flex-col items-center gap-1 group">
              <div className="relative w-full flex justify-center" style={{ height: `${(val - 2.5) * 25 + 20}%` }}>
                <div
                  className="w-full max-w-[18px] rounded-t-md bg-gradient-to-t from-navy-200 to-navy-600 group-hover:from-navy-300 group-hover:to-navy-700 transition-all duration-300 relative"
                  style={{ height: "100%" }}
                >
                  <span className="absolute -top-5 left-1/2 -translate-x-1/2 text-[9px] font-bold text-navy-700 opacity-0 group-hover:opacity-100 transition-opacity whitespace-nowrap">
                    {val}
                  </span>
                </div>
              </div>
            </div>
          ))}
        </div>
        <div className="flex justify-between">
          {months.map((m, i) => (
            <span key={i} className="text-[10px] text-navy-400 font-medium w-4 text-center">
              {m}
            </span>
          ))}
        </div>
        <div className="mt-4 pt-4 border-t border-navy-50 flex items-center justify-between">
          <span className="text-xs text-navy-500">12-month average</span>
          <span className="text-lg font-bold text-navy-700">4.3 → 4.9</span>
        </div>
      </div>

      {/* Key Metrics */}
      <div className="grid grid-cols-2 gap-4">
        <MetricCard
          icon={Users}
          label={t.reviews.totalReviews}
          value="30"
          color="navy"
        />
        <MetricCard
          icon={Star}
          label={t.reviews.averageRating}
          value="4.9"
          color="amber"
        />
        <MetricCard
          icon={ThumbsUp}
          label={t.reviews.recommend}
          value="97%"
          color="green"
        />
        <MetricCard
          icon={MessageCircle}
          label={t.reviews.responseRate}
          value="100%"
          color="navy"
        />
      </div>

      {/* Service Performance */}
      <div className="lg:col-span-3 bg-white rounded-2xl border border-navy-100 shadow-lg shadow-navy-900/5 p-6">
        <div className="flex items-center gap-2 mb-5">
          <BarChart3 className="w-5 h-5 text-navy-600" />
          <h3 className="font-bold text-navy-900 text-sm uppercase tracking-wide">
            Service Performance
          </h3>
        </div>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
          {serviceRatings.map((svc) => (
            <div key={svc.name} className="p-4 rounded-xl bg-navy-50/50 border border-navy-50 hover:bg-navy-50 transition-colors">
              <div className="flex items-center justify-between mb-2">
                <span className="text-sm font-semibold text-navy-800">{svc.name}</span>
                <span className="text-sm font-bold text-navy-600">{svc.score}</span>
              </div>
              <div className="flex gap-0.5 mb-2">
                {[1, 2, 3, 4, 5].map((s) => (
                  <Star
                    key={s}
                    className={`w-3.5 h-3.5 ${s <= Math.round(svc.score) ? "fill-amber-400 text-amber-400" : "text-navy-200"}`}
                  />
                ))}
              </div>
              <div className="flex items-center justify-between text-xs text-navy-400">
                <span>{svc.count} reviews</span>
                <div className="flex-1 mx-3 h-1 rounded-full bg-navy-100 overflow-hidden">
                  <div
                    className="h-full rounded-full bg-navy-500"
                    style={{ width: `${(svc.score / 5) * 100}%` }}
                  />
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}

function MetricCard({
  icon: Icon,
  label,
  value,
  color,
}: {
  icon: typeof Star;
  label: string;
  value: string;
  color: "navy" | "amber" | "green";
}) {
  const colorMap = {
    navy: "bg-navy-50 text-navy-600",
    amber: "bg-amber-50 text-amber-600",
    green: "bg-green-50 text-green-600",
  };
  return (
    <div className="bg-white rounded-2xl border border-navy-100 shadow-lg shadow-navy-900/5 p-5 flex flex-col gap-2 hover:shadow-xl transition-shadow">
      <div className={`w-10 h-10 rounded-xl flex items-center justify-center ${colorMap[color]}`}>
        <Icon className="w-5 h-5" />
      </div>
      <span className="text-2xl font-extrabold text-navy-900">{value}</span>
      <span className="text-xs text-navy-500 font-medium">{label}</span>
    </div>
  );
}
