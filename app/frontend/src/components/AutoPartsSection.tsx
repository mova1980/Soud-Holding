import SectionWrapper from './SectionWrapper';
import { Gauge, Wrench, Zap, Trophy } from 'lucide-react';
import { useLang } from '@/contexts/LanguageContext';
import { LuxCard, DivisionCta, useLuxuryNavigate } from './Luxury';

const LOGO_URL = 'https://mgx-backend-cdn.metadl.com/generate/images/715272/2026-07-16/sse3v5ycaiya/logo-autoparts-division.png';

export default function AutoPartsSection({ imageUrl }: { imageUrl: string }) {
  const { t } = useLang();
  const { go } = useLuxuryNavigate();

  const features = [
    { icon: Gauge, value: t('+۵۰۰', '500+'), label: t('محصول', 'Products') },
    { icon: Wrench, value: t('+۱۰۰', '100+'), label: t('تکنسین', 'Technicians') },
    { icon: Zap, value: t('+۳۰', '30+'), label: t('برند جهانی', 'Global Brands') },
    { icon: Trophy, value: t('٪۹۸', '98%'), label: t('رضایتمندی', 'Satisfaction') },
  ];

  return (
    <SectionWrapper id="autoparts" className="bg-navy-dark/60">
      <div className="absolute -bottom-40 -left-40 w-80 h-80 bg-gold/2 rounded-full blur-[120px]" />

      <div className="max-w-7xl mx-auto px-6 lg:px-8">
        {/* Section header */}
        <div className="text-center mb-16 reveal">
          <img src={LOGO_URL} alt="" className="w-16 h-16 object-contain mx-auto mb-4 opacity-80" />
          <div className="inline-flex items-center gap-3 mb-4">
            <div className="h-px w-8 bg-gold/40" />
            <span className="text-gold/80 font-body text-sm tracking-wider uppercase">
              {t('خودرو و اسپرت', 'Automotive & Sport')}
            </span>
            <div className="h-px w-8 bg-gold/40" />
          </div>
          <h2 className="font-display text-4xl md:text-5xl lg:text-6xl font-bold text-gold-gradient mb-4 tracking-wide">
            {t('قطعات اسپرت خودرو', 'Sport Car Parts')}
          </h2>
          <p className="font-body text-xl text-muted-foreground max-w-2xl mx-auto">
            {t(
              'عرضه قطعات اسپرت و تیونینگ از برترین برندهای جهانی برای خودروهای لوکس و اسپرت',
              'Premium sport and tuning parts from world-leading brands for luxury and sport vehicles'
            )}
          </p>
          <div className="mt-8 flex justify-center">
            <DivisionCta slug="auto-parts" />
          </div>
        </div>

        {/* Content */}
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Stats */}
          <div className="grid grid-cols-2 gap-4">
            {features.map((feature, index) => (
              <LuxCard
                key={index}
                slug="auto-parts"
                delay={index * 100}
                className="p-6 text-center"
                label={feature.label}
              >
                <div className="w-14 h-14 rounded-full bg-gold/8 flex items-center justify-center mx-auto mb-4 group-hover:bg-gold/15 group-hover:scale-110 transition-all duration-300">
                  <feature.icon className="w-7 h-7 text-gold" />
                </div>
                <p className="font-display text-3xl font-bold text-gold mb-1">{feature.value}</p>
                <p className="font-body text-base text-foreground/85">{feature.label}</p>
              </LuxCard>
            ))}
          </div>

          {/* Image */}
          <div className="reveal">
            <div
              role="button"
              tabIndex={0}
              onClick={() => go('/divisions/auto-parts')}
              onKeyDown={(event) => {
                if (event.key === 'Enter' || event.key === ' ') {
                  event.preventDefault();
                  go('/divisions/auto-parts');
                }
              }}
              className="lux-card group cursor-pointer rounded-2xl"
            >
              <img
                src={imageUrl}
                alt={t('قطعات اسپرت خودرو', 'Sport Car Parts')}
                className="w-full h-[400px] object-cover transition-transform duration-700 group-hover:scale-105"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-navy-dark/90 via-navy-dark/20 to-transparent" />
              <div className="absolute bottom-6 right-6 left-6">
                <div className="glass-card rounded-xl p-4">
                  <p className="font-display text-gold text-lg font-semibold">
                    {t('نمایندگی رسمی', 'Authorized Dealer')}
                  </p>
                  <p className="font-body text-base text-foreground/80">
                    {t('برندهای اروپایی و آمریکایی', 'European & American Brands')}
                  </p>
                </div>
              </div>
              <div className="absolute top-0 left-0 w-20 h-20 border-t-2 border-l-2 border-gold/30 rounded-tl-2xl" />
              <div className="absolute bottom-0 right-0 w-20 h-20 border-b-2 border-r-2 border-gold/30 rounded-br-2xl" />
            </div>
          </div>
        </div>
      </div>
    </SectionWrapper>
  );
}