import { createContext, useContext, useState, ReactNode } from 'react';

type Language = 'fa' | 'en';

interface LanguageContextType {
  lang: Language;
  toggleLang: () => void;
  t: (fa: string, en: string) => string;
  isRtl: boolean;
}

const LanguageContext = createContext<LanguageContextType | undefined>(undefined);

export function LanguageProvider({ children }: { children: ReactNode }) {
  const [lang, setLang] = useState<Language>('fa');

  const toggleLang = () => {
    const newLang = lang === 'fa' ? 'en' : 'fa';
    setLang(newLang);
    document.documentElement.dir = newLang === 'fa' ? 'rtl' : 'ltr';
    document.documentElement.lang = newLang;
  };

  const t = (fa: string, en: string) => (lang === 'fa' ? fa : en);
  const isRtl = lang === 'fa';

  return (
    <LanguageContext.Provider value={{ lang, toggleLang, t, isRtl }}>
      {children}
    </LanguageContext.Provider>
  );
}

export function useLang() {
  const context = useContext(LanguageContext);
  if (!context) throw new Error('useLang must be used within LanguageProvider');
  return context;
}