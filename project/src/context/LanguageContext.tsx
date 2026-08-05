import { createContext, useContext, useState, type ReactNode } from "react";
import type { Language } from "@/lib/translations";
import { translations, type TranslationKey } from "@/lib/translations";

interface LanguageContextValue {
  lang: Language;
  setLang: (lang: Language) => void;
  t: TranslationKey;
  isUrdu: boolean;
}

const LanguageContext = createContext<LanguageContextValue | undefined>(undefined);

export function LanguageProvider({ children }: { children: ReactNode }) {
  const [lang, setLang] = useState<Language>("en");
  const isUrdu = lang === "ur";
  const t = translations[lang] as unknown as TranslationKey;

  return (
    <LanguageContext.Provider value={{ lang, setLang, t, isUrdu }}>
      <div dir={isUrdu ? "rtl" : "ltr"} className={isUrdu ? "font-urdu" : ""}>
        {children}
      </div>
    </LanguageContext.Provider>
  );
}

export function useLanguage() {
  const ctx = useContext(LanguageContext);
  if (!ctx) throw new Error("useLanguage must be used within LanguageProvider");
  return ctx;
}
