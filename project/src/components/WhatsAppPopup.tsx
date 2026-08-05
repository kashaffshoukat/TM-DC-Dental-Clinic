import { useState } from "react";
import { MessageCircle, X, Send, ChevronDown } from "lucide-react";
import { useLanguage } from "@/context/LanguageContext";

const WHATSAPP_NUMBER = "923056838555";

export default function WhatsAppPopup() {
  const { t, isUrdu } = useLanguage();
  const [open, setOpen] = useState(false);
  const [message, setMessage] = useState("");

  const sendWhatsApp = (msg?: string) => {
    const text = encodeURIComponent(msg || message || t.whatsapp.defaultMessages[0]);
    window.open(`https://wa.me/${WHATSAPP_NUMBER}?text=${text}`, "_blank");
  };

  return (
    <div className={`fixed bottom-5 ${isUrdu ? "left-5" : "right-5"} z-50 flex flex-col items-end gap-3`}>
      {/* Chat panel */}
      {open && (
        <div className="w-80 max-w-[calc(100vw-2.5rem)] bg-white rounded-2xl shadow-2xl shadow-navy-900/30 border border-navy-100 overflow-hidden animate-slide-up">
          {/* Header */}
          <div className="bg-[#25D366] px-4 py-3.5 flex items-center gap-3">
            <div className="w-10 h-10 rounded-full bg-white/20 flex items-center justify-center">
              <MessageCircle className="w-5 h-5 text-white" />
            </div>
            <div className="flex-1">
              <h3 className="text-white font-bold text-sm">{t.whatsapp.title}</h3>
              <p className="text-white/80 text-xs">{t.whatsapp.subtitle}</p>
            </div>
            <button
              onClick={() => setOpen(false)}
              className="w-8 h-8 rounded-lg hover:bg-white/20 flex items-center justify-center transition-colors"
            >
              <X className="w-4 h-4 text-white" />
            </button>
          </div>

          {/* Body */}
          <div className="p-4 bg-navy-50/40">
            {/* Quick messages */}
            <p className="text-xs font-semibold text-navy-500 uppercase tracking-wider mb-2.5">
              {isUrdu ? "فوری پیغامات" : "Quick Messages"}
            </p>
            <div className="space-y-2 mb-4">
              {t.whatsapp.defaultMessages.map((msg, i) => (
                <button
                  key={i}
                  onClick={() => sendWhatsApp(msg)}
                  className="w-full text-left px-3 py-2.5 rounded-xl bg-white border border-navy-100 text-sm text-navy-700 hover:bg-navy-50 hover:border-navy-200 transition-all duration-200 flex items-center justify-between group"
                >
                  <span className="flex-1">{msg}</span>
                  <Send className="w-3.5 h-3.5 text-navy-400 group-hover:text-navy-600 transition-colors shrink-0 ml-2" />
                </button>
              ))}
            </div>

            {/* Custom message input */}
            <div className="relative">
              <textarea
                value={message}
                onChange={(e) => setMessage(e.target.value)}
                placeholder={t.whatsapp.placeholder}
                rows={2}
                className="w-full px-3 py-2.5 pr-10 rounded-xl border border-navy-200 bg-white text-navy-900 text-sm focus:ring-2 focus:ring-[#25D366] focus:border-[#25D366] outline-none transition-all resize-none"
              />
              <button
                onClick={() => sendWhatsApp()}
                className="absolute bottom-2.5 right-2.5 w-8 h-8 rounded-lg bg-[#25D366] hover:bg-[#1ebd5a] flex items-center justify-center transition-colors"
              >
                <Send className="w-4 h-4 text-white" />
              </button>
            </div>

            <button
              onClick={() => sendWhatsApp()}
              className="w-full mt-3 flex items-center justify-center gap-2 bg-[#25D366] hover:bg-[#1ebd5a] text-white font-semibold py-2.5 rounded-xl transition-colors text-sm"
            >
              <MessageCircle className="w-4 h-4" />
              {t.whatsapp.send}
            </button>
          </div>
        </div>
      )}

      {/* Toggle button */}
      <button
        onClick={() => setOpen(!open)}
        className="relative w-14 h-14 rounded-full bg-[#25D366] hover:bg-[#1ebd5a] shadow-xl shadow-green-600/30 flex items-center justify-center transition-all duration-300 hover:scale-110 animate-pulse-ring"
        title={t.whatsapp.tooltip}
      >
        {open ? (
          <X className="w-6 h-6 text-white" />
        ) : (
          <MessageCircle className="w-7 h-7 text-white" />
        )}
      </button>
    </div>
  );
}
