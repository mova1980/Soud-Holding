import { Phone, Mail, MapPin } from 'lucide-react';
import { useLang } from '@/contexts/LanguageContext';

export default function Footer() {
  const { t } = useLang();

  const divisions = [
    t('موسسه حقوقی سعود رزاقی', 'Saud Razaghi Law Firm'),
    t('قطعات اسپرت خودرو', 'Sport Car Parts'),
    t('گروه ساخت و ساز ساختمانی', 'Construction Group'),
    t('مرکز نرم‌افزاری تحلیل اطلاعات', 'Data Analytics Software Center'),
  ];

  const quickLinks = [
    { label: t('درباره ما', 'About Us'), href: '#hero' },
    { label: t('خدمات حقوقی', 'Legal Services'), href: '#legal' },
    { label: t('قطعات خودرو', 'Auto Parts'), href: '#autoparts' },
    { label: t('پروژه‌های ساختمانی', 'Construction'), href: '#construction' },
    { label: t('فناوری اطلاعات', 'Technology'), href: '#data' },
  ];

  return (
    <footer id="footer" className="relative bg-navy-dark border-t border-gold/8">
      <div className="absolute top-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-gold/30 to-transparent" />

      <div className="max-w-7xl mx-auto px-6 lg:px-8 py-16 md:py-20">
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-10">
          {/* Brand */}
          <div className="lg:col-span-1">
            <div className="flex items-center gap-3 mb-6">
              <div className="relative shrink-0">
                <div
                  aria-hidden="true"
                  className="logo-halo absolute inset-0 -m-3 rounded-full bg-gold/25 blur-[22px]"
                />
                <img
                  src="https://mgx-backend-cdn.metadl.com/generate/images/715272/2026-07-16/sse3r4ycai2a/logo-saud-holding-main.png"
                  alt="Saud Holding"
                  className="logo-radiant relative w-16 h-16 object-contain"
                />
              </div>
              <span className="font-display text-xl font-bold text-gold-gradient tracking-wide">
                {t('هولدینگ سعود', 'Saud Holding')}
              </span>
            </div>
            <p className="font-body text-base text-muted-foreground leading-relaxed mb-6">
              {t(
                'گروهی چندشاخه با تعهد به کیفیت و نوآوری در تمامی حوزه‌های فعالیت',
                'A diversified group committed to quality and innovation across all fields of activity'
              )}
            </p>
            <div className="flex items-center gap-2">
              <div className="h-px flex-1 bg-gradient-to-l from-gold/20 to-transparent" />
              <div className="w-2 h-2 rotate-45 border border-gold/30" />
            </div>
          </div>

          {/* Divisions */}
          <div>
            <h3 className="font-display text-lg font-semibold text-gold mb-6 tracking-wide">
              {t('مجموعه‌ها', 'Divisions')}
            </h3>
            <ul className="space-y-3">
              {divisions.map((div, i) => (
                <li key={i}>
                  <span className="font-body text-base text-muted-foreground hover:text-gold transition-colors duration-300 cursor-pointer">
                    {div}
                  </span>
                </li>
              ))}
            </ul>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="font-display text-lg font-semibold text-gold mb-6 tracking-wide">
              {t('دسترسی سریع', 'Quick Links')}
            </h3>
            <ul className="space-y-3">
              {quickLinks.map((link) => (
                <li key={link.label}>
                  <a
                    href={link.href}
                    className="font-body text-base text-muted-foreground hover:text-gold transition-colors duration-300"
                  >
                    {link.label}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h3 className="font-display text-lg font-semibold text-gold mb-6 tracking-wide">
              {t('ارتباط با ما', 'Contact Us')}
            </h3>
            <ul className="space-y-4">
              <li className="flex items-center gap-3">
                <div className="w-9 h-9 rounded-lg bg-gold/8 flex items-center justify-center shrink-0">
                  <Phone className="w-4 h-4 text-gold" />
                </div>
                <span className="font-body text-base text-muted-foreground" dir="ltr">
                  +98 21 1234 5678
                </span>
              </li>
              <li className="flex items-center gap-3">
                <div className="w-9 h-9 rounded-lg bg-gold/8 flex items-center justify-center shrink-0">
                  <Mail className="w-4 h-4 text-gold" />
                </div>
                <span className="font-body text-base text-muted-foreground">
                  info@saud-holding.com
                </span>
              </li>
              <li className="flex items-start gap-3">
                <div className="w-9 h-9 rounded-lg bg-gold/8 flex items-center justify-center shrink-0">
                  <MapPin className="w-4 h-4 text-gold" />
                </div>
                <span className="font-body text-base text-muted-foreground leading-relaxed">
                  {t('کرج، عظیمیه، برج سعود', 'Karaj, Azimiyeh, Saud Tower')}
                </span>
              </li>
            </ul>
          </div>
        </div>

        {/* Bottom bar */}
        <div className="mt-16 pt-8 border-t border-gold/8">
          <div className="flex flex-col md:flex-row items-center justify-between gap-4">
            <p className="font-body text-base text-muted-foreground">
              {t(
                '© ۱۴۰۵ هولدینگ سعود. تمامی حقوق محفوظ است.',
                '© 2026 Saud Holding. All rights reserved.'
              )}
            </p>
            <div className="flex items-center gap-6">
              <span className="font-body text-base text-muted-foreground hover:text-gold transition-colors cursor-pointer">
                {t('حریم خصوصی', 'Privacy Policy')}
              </span>
              <span className="font-body text-base text-muted-foreground hover:text-gold transition-colors cursor-pointer">
                {t('شرایط استفاده', 'Terms of Service')}
              </span>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}