import SectionWrapper from './SectionWrapper';
import { Building2, HardHat, Ruler, Award } from 'lucide-react';
import { useLang } from '@/contexts/LanguageContext';
import { LuxCard, DivisionCta, useLuxuryNavigate } from './Luxury';

const LOGO_URL = 'https://mgx-backend-cdn.metadl.com/generate/images/715272/2026-07-16/sse3wkqcaizq/logo-construction-division.png';

export default function ConstructionSection({ imageUrl }: { imageUrl: string }) {
  const { t } = useLang();
  const { go } = useLuxuryNavigate();

  const projects = [
    { title: t('برج‌های مسکونی لوکس', 'Luxury Residential Towers'), count: t('۱۲ پروژه', '12 Projects') },
    { title: t('مجتمع‌های تجاری', 'Commercial Complexes'), count: t('۸ پروژه', '8 Projects') },
    { title: t('ویلاهای اختصاصی', 'Exclusive Villas'), count: t('۲۵ پروژه', '25 Projects') },
    { title: t('بازسازی و نوسازی', 'Renovation & Restoration'), count: t('۴۰ پروژه', '40 Projects') },
  ];

  const stats = [
    { icon: Building2, value: t('+۸۵', '85+'), label: t('پروژه تکمیل‌شده', 'Completed') },
    { icon: HardHat, value: t('+۲۰۰', '200+'), label: t('نیروی متخصص', 'Experts') },
    { icon: Ruler, value: t('+۵۰۰K', '500K+'), label: t('متر مربع', 'Sq.m Built') },
    { icon: Award, value: t('+۱۵', '15+'), label: t('سال تجربه', 'Years') },
  ];

  return (
    <SectionWrapper id="construction">
      <div className="absolute -top-40 left-1/4 w-80 h-80 bg-gold/2 rounded-full blur-[120px]" />

      <div className="max-w-7xl mx-auto px-6 lg:px-8">
        {/* Section header */}
        <div className="text-center mb-16 reveal">
          <img src={LOGO_URL} alt="" className="w-16 h-16 object-contain mx-auto mb-4 opacity-80" />
          <div className="inline-flex items-center gap-3 mb-4">
            <div className="h-px w-8 bg-gold/40" />
            <span className="text-gold/80 font-body text-sm tracking-wider uppercase">
              {t('عمران و ساختمان', 'Engineering & Construction')}
            </span>
            <div className="h-px w-8 bg-gold/40" />
          </div>
          <h2 className="font-display text-4xl md:text-5xl lg:text-6xl font-bold text-gold-gradient mb-4 tracking-wide">
            {t('گروه ساخت و ساز ساختمانی', 'Construction Group')}
          </h2>
          <p className="font-body text-xl text-muted-foreground max-w-2xl mx-auto">
            {t(
              'ساخت فضاهای زندگی لوکس با بالاترین استانداردهای کیفی و معماری مدرن',
              'Building luxury living spaces with the highest quality standards and modern architecture'
            )}
          </p>
          <div className="mt-8 flex justify-center">
            <DivisionCta slug="construction" />
          </div>
        </div>

        {/* Image full width */}
        <div className="reveal mb-16">
          <div
            role="button"
            tabIndex={0}
            onClick={() => go('/divisions/construction')}
            onKeyDown={(event) => {
              if (event.key === 'Enter' || event.key === ' ') {
                event.preventDefault();
                go('/divisions/construction');
              }
            }}
            className="lux-card group cursor-pointer rounded-2xl"
          >
            <img
              src={imageUrl}
              alt={t('گروه ساخت و ساز ساختمانی', 'Construction Group')}
              className="w-full h-[350px] md:h-[450px] object-cover transition-transform duration-700 group-hover:scale-105"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-navy-dark via-navy-dark/40 to-transparent" />

            {/* Stats overlay */}
            <div className="absolute bottom-0 left-0 right-0 p-6 md:p-10">
              <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
                {stats.map((stat) => (
                  <div key={stat.label} className="glass-card rounded-xl p-4 text-center">
                    <stat.icon className="w-6 h-6 text-gold mx-auto mb-2" />
                    <p className="font-display text-2xl font-bold text-gold">{stat.value}</p>
                    <p className="font-body text-sm text-foreground/85">{stat.label}</p>
                  </div>
                ))}
              </div>
            </div>

            <div className="absolute top-0 right-0 w-24 h-24 border-t-2 border-r-2 border-gold/20 rounded-tr-2xl" />
            <div className="absolute top-0 left-0 w-24 h-24 border-t-2 border-l-2 border-gold/20 rounded-tl-2xl" />
          </div>
        </div>

        {/* Projects list */}
        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-4">
          {projects.map((project, index) => (
            <LuxCard
              key={index}
              slug="construction"
              delay={index * 100}
              className="p-6 text-center"
              label={project.title}
            >
              <h3 className="font-display text-base font-semibold text-foreground mb-2 group-hover:text-gold transition-colors duration-300">
                {project.title}
              </h3>
              <p className="font-body text-base font-semibold text-gold">{project.count}</p>
            </LuxCard>
          ))}
        </div>
      </div>
    </SectionWrapper>
  );
}