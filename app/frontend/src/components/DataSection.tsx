import SectionWrapper from './SectionWrapper';
import { Database, Brain, BarChart3, Lock, Globe, Cpu } from 'lucide-react';
import { useLang } from '@/contexts/LanguageContext';
import { LuxCard, DivisionCta, useLuxuryNavigate } from './Luxury';

const LOGO_URL = 'https://mgx-backend-cdn.metadl.com/generate/images/715272/2026-07-16/sse3wxicaiza/logo-data-division.png';

export default function DataSection({ imageUrl }: { imageUrl: string }) {
  const { t } = useLang();
  const { go } = useLuxuryNavigate();

  const capabilities = [
    {
      icon: Database,
      title: t('حکمرانی داده', 'Data Governance'),
      description: t(
        'طراحی و پیاده‌سازی چارچوب‌های جامع حکمرانی داده سازمانی',
        'Designing and implementing comprehensive organizational data governance frameworks'
      ),
    },
    {
      icon: Brain,
      title: t('هوش مصنوعی', 'Artificial Intelligence'),
      description: t(
        'توسعه مدل‌های یادگیری ماشین و پردازش زبان طبیعی',
        'Developing machine learning models and natural language processing solutions'
      ),
    },
    {
      icon: BarChart3,
      title: t('تحلیل کلان‌داده', 'Big Data Analytics'),
      description: t(
        'پردازش و تحلیل حجم عظیم داده‌ها برای تصمیم‌گیری هوشمند',
        'Processing and analyzing massive data volumes for intelligent decision-making'
      ),
    },
    {
      icon: Lock,
      title: t('امنیت اطلاعات', 'Information Security'),
      description: t(
        'پیاده‌سازی استانداردهای امنیتی و حفاظت از داده‌های حساس',
        'Implementing security standards and protecting sensitive data assets'
      ),
    },
    {
      icon: Globe,
      title: t('سامانه‌های تحت وب', 'Web Platforms'),
      description: t(
        'طراحی و توسعه پلتفرم‌های نرم‌افزاری مقیاس‌پذیر',
        'Designing and developing scalable software platforms'
      ),
    },
    {
      icon: Cpu,
      title: t('اتوماسیون فرآیندها', 'Process Automation'),
      description: t(
        'هوشمندسازی و اتوماسیون فرآیندهای سازمانی',
        'Intelligent automation of organizational processes'
      ),
    },
  ];

  return (
    <SectionWrapper id="data" className="bg-navy-dark/60">
      <div className="absolute -bottom-40 right-1/4 w-80 h-80 bg-gold/2 rounded-full blur-[120px]" />

      <div className="max-w-7xl mx-auto px-6 lg:px-8">
        {/* Section header */}
        <div className="text-center mb-16 reveal">
          <img src={LOGO_URL} alt="" className="w-16 h-16 object-contain mx-auto mb-4 opacity-80" />
          <div className="inline-flex items-center gap-3 mb-4">
            <div className="h-px w-8 bg-gold/40" />
            <span className="text-gold/80 font-body text-sm tracking-wider uppercase">
              {t('فناوری اطلاعات', 'Information Technology')}
            </span>
            <div className="h-px w-8 bg-gold/40" />
          </div>
          <h2 className="font-display text-4xl md:text-5xl lg:text-6xl font-bold text-gold-gradient mb-4 tracking-wide">
            {t('مرکز نرم‌افزاری تحلیل اطلاعات', 'Data Analytics Software Center')}
          </h2>
          <p className="font-body text-xl text-muted-foreground max-w-2xl mx-auto">
            {t(
              'حکمرانی داده‌مبنا و توسعه راهکارهای نرم‌افزاری هوشمند برای سازمان‌های پیشرو',
              'Data-driven governance and intelligent software solutions for leading organizations'
            )}
          </p>
          <div className="mt-8 flex justify-center">
            <DivisionCta slug="data-center" />
          </div>
        </div>

        {/* Image + overlay */}
        <div className="reveal mb-16">
          <div
            role="button"
            tabIndex={0}
            onClick={() => go('/divisions/data-center')}
            onKeyDown={(event) => {
              if (event.key === 'Enter' || event.key === ' ') {
                event.preventDefault();
                go('/divisions/data-center');
              }
            }}
            className="lux-card group cursor-pointer rounded-2xl"
          >
            <img
              src={imageUrl}
              alt={t('مرکز نرم‌افزاری تحلیل اطلاعات', 'Data Analytics Software Center')}
              className="w-full h-[300px] object-cover transition-transform duration-700 group-hover:scale-105"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-navy-dark via-navy-dark/70 to-navy-dark/40" />
            <div className="absolute inset-0 flex items-center justify-center">
              <div className="text-center">
                <p className="font-display text-3xl md:text-4xl font-bold text-gold-gradient mb-2 tracking-wide">
                  {t('حکمرانی داده مبنا', 'Data-Driven Governance')}
                </p>
                <p className="font-body text-foreground/60">
                  {t('تحول دیجیتال سازمانی', 'Organizational Digital Transformation')}
                </p>
              </div>
            </div>
            <div className="absolute inset-0 border-2 border-gold/8 rounded-2xl group-hover:border-gold/20 transition-colors duration-500" />
          </div>
        </div>

        {/* Capabilities grid */}
        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-4">
          {capabilities.map((cap, index) => (
            <LuxCard
              key={index}
              slug="data-center"
              delay={index * 100}
              className="p-6"
              label={cap.title}
            >
              <div className="flex items-start gap-4">
                <div className="w-12 h-12 rounded-lg bg-gold/8 flex items-center justify-center shrink-0 group-hover:bg-gold/15 transition-colors duration-300">
                  <cap.icon className="w-6 h-6 text-gold" />
                </div>
                <div>
                  <h3 className="font-display text-base font-semibold text-foreground mb-1 group-hover:text-gold transition-colors duration-300">
                    {cap.title}
                  </h3>
                  <p className="font-body text-base text-muted-foreground leading-relaxed">
                    {cap.description}
                  </p>
                </div>
              </div>
            </LuxCard>
          ))}
        </div>
      </div>
    </SectionWrapper>
  );
}