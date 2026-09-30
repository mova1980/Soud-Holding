import { useState, useEffect } from 'react';
import { useLang } from '@/contexts/LanguageContext';
import { Globe } from 'lucide-react';

export default function Navigation() {
  const { lang, toggleLang, t } = useLang();
  const [scrolled, setScrolled] = useState(false);
  const [activeSection, setActiveSection] = useState('hero');

  const navItems = [
    { id: 'hero', label: t('خانه', 'Home') },
    { id: 'legal', label: t('موسسه حقوقی', 'Legal') },
    { id: 'autoparts', label: t('قطعات اسپرت', 'Auto Parts') },
    { id: 'construction', label: t('ساخت و ساز', 'Construction') },
    { id: 'data', label: t('مرکز نرم‌افزاری', 'Data Center') },
  ];

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50);

      const sections = navItems.map((item) => document.getElementById(item.id));
      const scrollPos = window.scrollY + 200;

      for (let i = sections.length - 1; i >= 0; i--) {
        const section = sections[i];
        if (section && section.offsetTop <= scrollPos) {
          setActiveSection(navItems[i].id);
          break;
        }
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, [lang]);

  const scrollToSection = (id: string) => {
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <nav
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 ${
        scrolled
          ? 'bg-navy-dark/90 backdrop-blur-xl border-b border-gold/8 shadow-lg shadow-black/30'
          : 'bg-transparent'
      }`}
    >
      <div className="max-w-7xl mx-auto px-6 lg:px-8">
        <div className="flex items-center justify-between h-20">
          {/* Logo */}
          <button
            onClick={() => scrollToSection('hero')}
            className="flex items-center gap-3 cursor-pointer group"
          >
            <div className="relative shrink-0">
              <div
                aria-hidden="true"
                className="logo-halo absolute inset-0 -m-2 rounded-full bg-gold/30 blur-[18px]"
              />
              <img
                src="https://mgx-backend-cdn.metadl.com/generate/images/715272/2026-07-16/sse3r4ycai2a/logo-saud-holding-main.png"
                alt="Saud Holding"
                className="logo-radiant relative w-14 h-14 object-contain group-hover:scale-110 transition-transform duration-300"
              />
            </div>
            <span className="font-display text-2xl font-bold text-gold-gradient hidden sm:block tracking-wide">
              {t('هولدینگ سعود', 'Saud Holding')}
            </span>
          </button>

          {/* Nav Links */}
          <div className="hidden md:flex items-center gap-1">
            {navItems.map((item) => (
              <button
                key={item.id}
                onClick={() => scrollToSection(item.id)}
                className={`px-4 py-2 rounded-lg text-base font-body font-semibold transition-all duration-300 cursor-pointer ${
                  activeSection === item.id
                    ? 'text-gold-light bg-gold/12'
                    : 'text-foreground/85 hover:text-gold-light hover:bg-gold/8'
                }`}
              >
                {item.label}
              </button>
            ))}
          </div>

          {/* Language Switch + CTA */}
          <div className="flex items-center gap-3">
            {/* Language Toggle */}
            <button
              onClick={toggleLang}
              className="flex items-center gap-2 px-3 py-2 rounded-lg border border-gold/15 hover:border-gold/40 hover:bg-gold/5 transition-all duration-300 cursor-pointer group"
              aria-label={t('تغییر زبان به انگلیسی', 'Switch to Persian')}
              title={t('تغییر زبان به انگلیسی', 'Switch to Persian')}
            >
              <Globe className="w-5 h-5 text-gold-light group-hover:text-gold transition-colors" />
              <span className="text-base font-body font-semibold text-gold-light group-hover:text-gold transition-colors">
                {lang === 'fa' ? 'English' : 'فارسی'}
              </span>
            </button>

            {/* CTA */}
            <button
              onClick={() => scrollToSection('footer')}
              className="px-6 py-3 bg-gradient-to-l from-gold-light to-gold-dark text-navy-dark font-body font-bold text-base rounded-lg hover:shadow-lg hover:shadow-gold/25 transition-all duration-300 cursor-pointer hidden sm:block"
            >
              {t('تماس با ما', 'Contact Us')}
            </button>
          </div>
        </div>
      </div>
    </nav>
  );
}