import { createContext, useContext, useState, useEffect, type ReactNode } from 'react';
import translations, { type Lang } from '../i18n/translations';

/* ── Types ── */
interface LanguageContextValue {
  lang: Lang;
  toggleLang: () => void;
  t: typeof translations['es'];
}

/* ── Context ── */
const LanguageContext = createContext<LanguageContextValue | null>(null);

/* ── Provider ── */
export function LanguageProvider({ children }: { children: ReactNode }) {
  const [lang, setLang] = useState<Lang>(() => {
    const saved = localStorage.getItem('portfolio-lang');
    return saved === 'en' ? 'en' : 'es';
  });

  useEffect(() => {
    localStorage.setItem('portfolio-lang', lang);
    document.documentElement.lang = lang;
  }, [lang]);

  const toggleLang = () => setLang((l) => (l === 'es' ? 'en' : 'es'));

  return (
    <LanguageContext.Provider value={{ lang, toggleLang, t: translations[lang] }}>
      {children}
    </LanguageContext.Provider>
  );
}

/* ── Hooks ── */
export function useTranslation() {
  const ctx = useContext(LanguageContext);
  if (!ctx) throw new Error('useTranslation must be used inside LanguageProvider');
  return ctx.t;
}

export function useLanguage() {
  const ctx = useContext(LanguageContext);
  if (!ctx) throw new Error('useLanguage must be used inside LanguageProvider');
  return { lang: ctx.lang, toggleLang: ctx.toggleLang };
}
