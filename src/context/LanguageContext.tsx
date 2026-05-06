import { createContext, useContext, useState, useEffect, type ReactNode } from 'react';
import translations, { type Lang } from '../i18n/translations';

/* ── Types ── */
// Both 'es' and 'en' share the same shape — only literal string values differ.
// We use 'es' as the canonical shape and cast at runtime.
export type TranslationSet = typeof translations['es'];

interface LanguageContextValue {
  lang: Lang;
  toggleLang: () => void;
  t: TranslationSet;
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
    <LanguageContext.Provider value={{ lang, toggleLang, t: translations[lang] as unknown as TranslationSet }}>
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
