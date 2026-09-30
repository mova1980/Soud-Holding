import SectionWrapper from './SectionWrapper';
import { Scale, Shield, FileText, Users } from 'lucide-react';
import { useLang } from '@/contexts/LanguageContext';
import { LuxCard, DivisionCta, useLuxuryNavigate } from './Luxury';

const LOGO_URL = 'https://mgx-backend-cdn.metadl.com/generate/images/715272/2026-07-16/sse3swicaiyq/logo-legal-division.png';

export default function LegalSection({ imageUrl }: { imageUrl: string }) {
  const { t } = useLang();
  const { go } = useLuxuryNavigate();

  const services = [
    {
      icon: Scale,
      title: t('دعاوی حقوقی و کیفری', 'Civil & Criminal Litigation'),
      description: t(
        'پیگیری و دفاع از حقوق موکلین در تمامی مراجع قضایی کشور',
        'Pursuing and defending clients\' rights in all judicial authorities'
      ),
    },
    {
      icon: Shield,
      title: t('مشاوره تخصصی', 'Expert Consultation'),
      description: t(
        'ارائه مشاوره حقوقی تخصصی در حوزه‌های تجاری، ملکی و خانواده',
        'Specialized legal consulting in commercial, property, and family law'
      ),
    },
    {
      icon: FileText,
      title: t('تنظیم قراردادها', 'Contract Drafting'),
      description: t(
        'تنظیم و بررسی قراردادهای تجاری، بین‌المللی و سرمایه‌گذاری',
        'Drafting and reviewing commercial, international, and investment contracts'
      ),
    },
    {
      icon: Users,
      title: t('داوری و میانجیگری', 'Arbitration & Mediation'),
      description: t(
        'حل و فصل اختلافات تجاری از طریق داوری حرفه‌ای',
        'Resolving commercial disputes through professional arbitration'
      ),
    },
  ];

  return (
    <SectionWrapper id="legal">
      <div className="absolute top-0 left-0 w-full h-px bg-gradient-to-r from-transparent via-gold/20 to-transparent" />
      <div className="absolute -top-40 -right-40 w-80 h-80 bg-gold/2 rounded-full blur-[120px]" />

      <div className="max-w-7xl mx-auto px-6 lg:px-8">
        {/* Section header */}
        <div className="text-center mb-16 reveal">
          <img src={LOGO_URL} alt="" className="w-16 h-16 object-contain mx-auto mb-4 opacity-80" />
          <div className="inline-flex items-center gap-3 mb-4">
            <div className="h-px w-8 bg-gold/40" />
            <span className="text-gold/80 font-body text-sm tracking-wider uppercase">
              {t('خدمات حقوقی', 'Legal Services')}
            </span>
            <div className="h-px w-8 bg-gold/40" />
          </div>
          <h2 className="font-display text-4xl md:text-5xl lg:text-6xl font-bold text-gold-gradient mb-4 tracking-wide">
            {t('موسسه حقوقی سعود رزاقی', 'Saud Razaghi Law Firm')}
          </h2>
          <p className="font-body text-xl text-muted-foreground max-w-2xl mx-auto">
            {t(
              'ارائه خدمات حقوقی نوین با تکیه بر دانش روز و تجربه‌ای درخشان در عرصه وکالت',
              'Delivering modern legal services backed by cutting-edge knowledge and distinguished experience'
            )}
          </p>
          <div className="mt-8 flex justify-center">
            <DivisionCta slug="legal" />
          </div>
        </div>

        {/* Content grid */}
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Image */}
          <div className="reveal order-2 lg:order-1">
            <div
              role="button"
              tabIndex={0}
              onClick={() => go('/divisions/legal')}
              onKeyDown={(event) => {
                if (event.key === 'Enter' || event.key === ' ') {
                  event.preventDefault();
                  go('/divisions/legal');
                }
              }}
              className="lux-card group cursor-pointer rounded-2xl"
            >
              <img
                src={imageUrl}
                alt={t('موسسه حقوقی سعود رزاقی', 'Saud Razaghi Law Firm')}
                className="w-full h-[400px] object-cover transition-transform duration-700 group-hover:scale-105"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-navy-dark/90 via-transparent to-transparent" />
              <div className="absolute bottom-6 right-6 left-6">
                <div className="glass-card rounded-xl p-4">
                  <p className="font-display text-gold text-lg font-semibold">
                    {t('+۲۰ سال تجربه', '20+ Years of Experience')}
                  </p>
                  <p className="font-body text-base text-foreground/80">
                    {t('در خدمت عدالت و حقوق شهروندان', 'Serving justice and citizens\' rights')}
                  </p>
                </div>
              </div>
              <div className="absolute top-0 right-0 w-20 h-20 border-t-2 border-r-2 border-gold/30 rounded-tr-2xl" />
              <div className="absolute bottom-0 left-0 w-20 h-20 border-b-2 border-l-2 border-gold/30 rounded-bl-2xl" />
            </div>
          </div>

          {/* Services grid */}
          <div className="order-1 lg:order-2 grid sm:grid-cols-2 gap-4">
            {services.map((service, index) => (
              <LuxCard
                key={index}
                slug="legal"
                delay={index * 100}
                className="p-6"
                label={service.title}
              >
                <div className="w-12 h-12 rounded-lg bg-gold/8 flex items-center justify-center mb-4 group-hover:bg-gold/15 transition-colors duration-300">
                  <service.icon className="w-6 h-6 text-gold" />
                </div>
                <h3 className="font-display text-base font-semibold text-foreground mb-2">
                  {service.title}
                </h3>
                <p className="font-body text-base text-muted-foreground leading-relaxed">
                  {service.description}
                </p>
              </LuxCard>
            ))}
          </div>
        </div>
      </div>
    </SectionWrapper>
  );
}