import { useState, type FormEvent } from "react";
import { Calendar, User, Phone, Mail, Stethoscope, Clock, MessageSquare, CheckCircle2, Loader2, AlertCircle } from "lucide-react";
import { useLanguage } from "@/context/LanguageContext";
import { supabase } from "@/lib/supabase";

export default function AppointmentForm({ compact = false }: { compact?: boolean }) {
  const { t } = useLanguage();
  const [status, setStatus] = useState<"idle" | "submitting" | "success" | "error">("idle");

  const timeSlots = [
    "9:00 AM", "10:00 AM", "11:00 AM", "12:00 PM",
    "2:00 PM", "3:00 PM", "4:00 PM", "5:00 PM",
    "6:00 PM", "7:00 PM", "8:00 PM",
  ];

  const handleSubmit = async (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setStatus("submitting");

    const formData = new FormData(e.currentTarget);
    const data = {
      name: formData.get("name") as string,
      phone: formData.get("phone") as string,
      email: formData.get("email") as string || null,
      service: formData.get("service") as string,
      preferred_date: formData.get("date") as string,
      preferred_time: formData.get("time") as string,
      message: formData.get("message") as string || null,
    };

    try {
      const { error } = await supabase.from("appointments").insert(data);
      if (error) throw error;
      setStatus("success");
      (e.target as HTMLFormElement).reset();
      setTimeout(() => setStatus("idle"), 6000);
    } catch {
      setStatus("error");
      setTimeout(() => setStatus("idle"), 6000);
    }
  };

  const today = new Date().toISOString().split("T")[0];

  return (
    <div className={`bg-white rounded-3xl shadow-2xl shadow-navy-900/20 border border-navy-100 overflow-hidden ${compact ? "" : "ring-1 ring-navy-100"}`}>
      {/* Header */}
      <div className="hero-gradient px-6 py-5 text-white">
        <div className="flex items-center gap-3">
          <div className="w-11 h-11 rounded-xl bg-white/15 flex items-center justify-center">
            <Calendar className="w-6 h-6" />
          </div>
          <div>
            <h3 className="text-lg font-bold">{t.appointment.title}</h3>
            <p className="text-navy-200 text-xs">{t.appointment.subtitle}</p>
          </div>
        </div>
      </div>

      {/* Form */}
      <form onSubmit={handleSubmit} className="p-6 space-y-4">
        {/* Status messages */}
        {status === "success" && (
          <div className="flex items-center gap-2 p-3 rounded-xl bg-green-50 text-green-700 text-sm animate-scale-in">
            <CheckCircle2 className="w-5 h-5 shrink-0" />
            <span>{t.appointment.success}</span>
          </div>
        )}
        {status === "error" && (
          <div className="flex items-center gap-2 p-3 rounded-xl bg-red-50 text-red-700 text-sm animate-scale-in">
            <AlertCircle className="w-5 h-5 shrink-0" />
            <span>{t.appointment.error}</span>
          </div>
        )}

        <Field icon={User} name="name" label={t.appointment.name} type="text" required />
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
          <Field icon={Phone} name="phone" label={t.appointment.phone} type="tel" required />
          <Field icon={Mail} name="email" label={t.appointment.email} type="email" />
        </div>

        {/* Service select */}
        <div>
          <label className="text-sm font-medium text-navy-800 mb-1.5 block">
            {t.appointment.service}
          </label>
          <div className="relative">
            <Stethoscope className="absolute left-3 top-1/2 -translate-y-1/2 w-5 h-5 text-navy-400 pointer-events-none" />
            <select
              name="service"
              required
              defaultValue=""
              className="w-full pl-11 pr-4 py-3 rounded-xl border border-navy-200 bg-navy-50/30 text-navy-900 focus:ring-2 focus:ring-navy-500 focus:border-navy-500 outline-none transition-all appearance-none text-sm"
            >
              <option value="" disabled>{t.appointment.selectService}</option>
              {t.services.items.map((item, i) => (
                <option key={i} value={item.name}>{item.name}</option>
              ))}
            </select>
          </div>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
          <div>
            <label className="text-sm font-medium text-navy-800 mb-1.5 block">
              {t.appointment.date}
            </label>
            <div className="relative">
              <Calendar className="absolute left-3 top-1/2 -translate-y-1/2 w-5 h-5 text-navy-400 pointer-events-none" />
              <input
                type="date"
                name="date"
                required
                min={today}
                className="w-full pl-11 pr-4 py-3 rounded-xl border border-navy-200 bg-navy-50/30 text-navy-900 focus:ring-2 focus:ring-navy-500 focus:border-navy-500 outline-none transition-all text-sm"
              />
            </div>
          </div>
          <div>
            <label className="text-sm font-medium text-navy-800 mb-1.5 block">
              {t.appointment.time}
            </label>
            <div className="relative">
              <Clock className="absolute left-3 top-1/2 -translate-y-1/2 w-5 h-5 text-navy-400 pointer-events-none" />
              <select
                name="time"
                required
                defaultValue=""
                className="w-full pl-11 pr-4 py-3 rounded-xl border border-navy-200 bg-navy-50/30 text-navy-900 focus:ring-2 focus:ring-navy-500 focus:border-navy-500 outline-none transition-all appearance-none text-sm"
              >
                <option value="" disabled>{t.appointment.selectTime}</option>
                {timeSlots.map((slot) => (
                  <option key={slot} value={slot}>{slot}</option>
                ))}
              </select>
            </div>
          </div>
        </div>

        {/* Message */}
        <div>
          <label className="text-sm font-medium text-navy-800 mb-1.5 block">
            {t.appointment.message}
          </label>
          <div className="relative">
            <MessageSquare className="absolute left-3 top-3.5 w-5 h-5 text-navy-400 pointer-events-none" />
            <textarea
              name="message"
              rows={2}
              className="w-full pl-11 pr-4 py-3 rounded-xl border border-navy-200 bg-navy-50/30 text-navy-900 focus:ring-2 focus:ring-navy-500 focus:border-navy-500 outline-none transition-all text-sm resize-none"
            />
          </div>
        </div>

        <button
          type="submit"
          disabled={status === "submitting"}
          className="w-full btn-primary flex items-center justify-center gap-2 disabled:opacity-60"
        >
          {status === "submitting" ? (
            <>
              <Loader2 className="w-5 h-5 animate-spin" />
              {t.appointment.submitting}
            </>
          ) : (
            <>
              <Calendar className="w-5 h-5" />
              {t.appointment.submit}
            </>
          )}
        </button>
      </form>
    </div>
  );
}

function Field({
  icon: Icon,
  name,
  label,
  type,
  required,
}: {
  icon: typeof User;
  name: string;
  label: string;
  type: string;
  required?: boolean;
}) {
  return (
    <div>
      <label className="text-sm font-medium text-navy-800 mb-1.5 block">
        {label}
      </label>
      <div className="relative">
        <Icon className="absolute left-3 top-1/2 -translate-y-1/2 w-5 h-5 text-navy-400 pointer-events-none" />
        <input
          type={type}
          name={name}
          required={required}
          className="w-full pl-11 pr-4 py-3 rounded-xl border border-navy-200 bg-navy-50/30 text-navy-900 focus:ring-2 focus:ring-navy-500 focus:border-navy-500 outline-none transition-all text-sm"
        />
      </div>
    </div>
  );
}
