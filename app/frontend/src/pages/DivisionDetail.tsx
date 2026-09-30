import { Navigate, useParams } from 'react-router-dom';
import {
  ArrowRight,
  ArrowLeft,
  Phone,
  Mail,
  MapPin,
  Clock,
  ChevronLeft,
} from 'lucide-react';
import { BarChart3, Layers, Sparkles, Target } from 'lucide-react';
import { useLang } from '@/contexts/LanguageContext';
import { useLuxuryNavigate } from '@/components/Luxury';
import { divisions, getDivision } from '@/data/divisions';

export default function DivisionDetail() {
  const { slug = '' } = useParams<{ slug: string }>();
  const { t, isRtl } = useLang();
  const { go } = useLuxuryNavigate();
  const division = getDivision(slug);

  if (!division) return <Navigate to="/" replace />;

  const BackIcon = isRtl ? ArrowRight : ArrowLeft;
  const ForwardIcon = isRtl ? ArrowLeft : ArrowRight;

  const siblings = divisions.filter((item) => item.slug !== division.slug);

  return (
    <div id="division-detail" className="min-h-screen bg-navy-dark">
      {/* Ambient gold light */}
      <div className="pointer-events-none absolute left-1/2 top-0 h-[420px] w-[420px] -translate-x-1/2 rounded-full bg-gold/5 blur-[140px]" />

      {/* Local header */}
      <header className="fixed inset-x-0 top-0 z-50 border-b border-gold/10 bg-navy-dark/90 backdrop-blur-xl">
        <div className="mx-auto flex h-20 max-w-7xl items-center justify-between px-6 lg:px-8">
          <button
            type="button"
            onClick={() => go(`/#${division.sectionId}`)}
            className="flex cursor-pointer items-center gap-3"
          >
            <div className="relative shrink-0">
              <div
                aria-hidden="true"
                className="logo-halo absolute inset-0 -m-2 rounded-full bg-gold/30 blur-[18px]"
              />
              <img
                src="https://mgx-backend-cdn.metadl.com/generate/images/715272/2026-07-16/sse3r4ycai2a/logo-saud-holding-main.png"
                alt="Saud Holding"
                className="logo-radiant relative h-12 w-12 object-contain"
              />
            </div>
            <span className="font-display hidden text-lg font-bold text-gold-gradient sm:block">
              {t('هولدینگ سعود', 'Saud Holding')}
            </span>
          </button>

          <button
            type="button"
            onClick={() => go('/')}
            className="flex cursor-pointer items-center gap-2 rounded-lg border border-gold/20 px-4 py-2 font-body text-sm font-medium text-gold/80 transition-all duration-300 hover:border-gold/50 hover:bg-gold/5 hover:text-gold"
          >
            <BackIcon className="h-4 w-4" />
            {t('بازگشت به صفحه اصلی', 'Back to Home')}
          </button>
        </div>
      </header>

      <main className="relative pt-20">
        {/* ========================= BREADCRUMB ========================= */}
        <nav
          aria-label={t('مسیر صفحه', 'Breadcrumb')}
          className="border-b border-gold/10 bg-navy-dark/70"
        >
          <div className="mx-auto flex max-w-7xl flex-wrap items-center gap-2 px-6 py-4 font-body text-base lg:px-8">
            <button
              type="button"
              onClick={() => go('/')}
              className="cursor-pointer text-foreground/70 transition-colors duration-300 hover:text-gold"
            >
              {t('هولدینگ سعود', 'Saud Holding')}
            </button>
            <ForwardIcon className="h-4 w-4 text-gold/50" />
            <button
              type="button"
              onClick={() => go(`/#${division.sectionId}`)}
              className="cursor-pointer text-foreground/70 transition-colors duration-300 hover:text-gold"
            >
              {t('مجموعه‌ها', 'Divisions')}
            </button>
            <ForwardIcon className="h-4 w-4 text-gold/50" />
            <span className="font-semibold text-gold">{t(division.nameFa, division.nameEn)}</span>
          </div>
        </nav>

        {/* ============================ HERO ============================ */}
        <section className="relative overflow-hidden">
          <div className="relative h-[380px] w-full md:h-[460px]">
            <img
              src={division.image}
              alt={t(division.nameFa, division.nameEn)}
              className="detail-hero-image h-full w-full object-cover"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-navy-dark via-navy-dark/70 to-navy-dark/40" />

            <div className="absolute inset-0 flex items-center">
              <div className="mx-auto w-full max-w-7xl px-6 lg:px-8">
                <div className="detail-rise max-w-3xl">
                  <div className="mb-5 flex items-center gap-4">
                    <div className="relative shrink-0">
                      <div
                        aria-hidden="true"
                        className="logo-halo absolute inset-0 -m-3 rounded-full bg-gold/25 blur-[24px]"
                      />
                      <img
                        src={division.logo}
                        alt=""
                        className="logo-radiant logo-float relative h-20 w-20 object-contain"
                      />
                    </div>
                    <span className="font-body text-base tracking-wider text-gold">
                      {t(division.eyebrowFa, division.eyebrowEn)}
                    </span>
                  </div>

                  <h1 className="font-display mb-4 text-4xl font-extrabold leading-tight text-gold-gradient md:text-5xl lg:text-6xl">
                    {t(division.nameFa, division.nameEn)}
                  </h1>
                  <p className="font-body mb-6 text-lg text-foreground/70 md:text-xl">
                    {t(division.taglineFa, division.taglineEn)}
                  </p>
                  <p className="font-body max-w-2xl text-base leading-loose text-foreground/80 md:text-lg">
                    {t(division.introFa, division.introEn)}
                  </p>
                </div>
              </div>
            </div>

            <div className="absolute bottom-0 left-0 h-24 w-24 border-b-2 border-l-2 border-gold/25 rounded-bl-2xl" />
            <div className="absolute bottom-0 right-0 h-24 w-24 border-b-2 border-r-2 border-gold/25 rounded-br-2xl" />
          </div>
        </section>

        {/* ============================ STATS ============================ */}
        <section className="mx-auto max-w-7xl px-6 py-12 lg:px-8">
          <div className="mb-8 flex items-center gap-3">
            <BarChart3 className="h-5 w-5 text-gold" />
            <h2 className="font-display text-2xl font-bold text-gold-gradient md:text-3xl">
              {t('آمار و دستاوردهای مجموعه', 'Division at a Glance')}
            </h2>
          </div>
          <div className="grid grid-cols-2 gap-4 lg:grid-cols-4">
            {division.stats.map((stat, index) => (
              <div
                key={stat.labelEn}
                className="detail-rise glass-card rounded-xl p-6 text-center transition-all duration-500 hover:translate-y-[-4px]"
                style={{ animationDelay: `${index * 90}ms` }}
              >
                <p className="font-display mb-1 text-3xl font-bold text-gold">
                  {t(stat.valueFa, stat.valueEn)}
                </p>
                <p className="font-body text-base font-medium text-foreground/80">
                  {t(stat.labelFa, stat.labelEn)}
                </p>
              </div>
            ))}
          </div>
        </section>

        <div className="gold-line mx-auto max-w-4xl" />

        {/* ======================= FULL DESCRIPTION ======================= */}
        <section className="mx-auto max-w-7xl px-6 py-16 lg:px-8 md:py-20">
          <div className="mb-10 flex items-center gap-3">
            <Sparkles className="h-5 w-5 text-gold" />
            <h2 className="font-display text-2xl font-bold text-gold-gradient md:text-3xl">
              {t('معرفی کامل مجموعه', 'About the Division')}
            </h2>
          </div>

          <div className="detail-rise glass-card space-y-6 rounded-2xl p-8 md:p-10">
            {division.descriptionFa.map((_, index) => (
              <p
                key={index}
                className="font-body text-base leading-loose text-foreground/75 md:text-[17px]"
              >
                {t(division.descriptionFa[index], division.descriptionEn[index])}
              </p>
            ))}
          </div>
        </section>

        <div className="gold-line mx-auto max-w-4xl" />

        {/* ========================= SERVICES ========================= */}
        <section className="bg-navy-dark/60 py-16 md:py-20">
          <div className="mx-auto max-w-7xl px-6 lg:px-8">
            <div className="mb-12 text-center">
              <div className="mb-4 inline-flex items-center gap-3">
                <div className="h-px w-8 bg-gold/40" />
                <span className="font-body text-base tracking-wider text-gold">
                  {t('خدمات و حوزه‌های تخصصی', 'Services & Areas of Expertise')}
                </span>
                <div className="h-px w-8 bg-gold/40" />
              </div>
              <h2 className="font-display text-3xl font-bold text-gold-gradient md:text-4xl">
                {t('آنچه ارائه می‌دهیم', 'What We Deliver')}
              </h2>
            </div>

            <div className="grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
              {division.services.map((service, index) => (
                <article
                  key={service.titleEn}
                  className="detail-rise glass-card group rounded-xl p-7 transition-all duration-500 hover:translate-y-[-4px]"
                  style={{ animationDelay: `${index * 80}ms` }}
                >
                  <div className="mb-5 flex h-12 w-12 items-center justify-center rounded-lg bg-gold/8 transition-colors duration-300 group-hover:bg-gold/15">
                    <service.icon className="h-6 w-6 text-gold" />
                  </div>
                  <h3 className="font-display mb-2 text-lg font-semibold text-foreground transition-colors duration-300 group-hover:text-gold">
                    {t(service.titleFa, service.titleEn)}
                  </h3>
                  <p className="font-body text-base leading-relaxed text-foreground/80">
                    {t(service.descFa, service.descEn)}
                  </p>
                </article>
              ))}
            </div>
          </div>
        </section>

        <div className="gold-line mx-auto max-w-4xl" />

        {/* ======================== ADVANTAGES ======================== */}
        <section className="mx-auto max-w-7xl px-6 py-16 lg:px-8 md:py-20">
          <div className="mb-10 flex items-center gap-3">
            <Target className="h-5 w-5 text-gold" />
            <h2 className="font-display text-2xl font-bold text-gold-gradient md:text-3xl">
              {t('مزیت‌های همکاری با ما', 'Why Work With Us')}
            </h2>
          </div>

          <div className="grid gap-4 md:grid-cols-2">
            {division.advantages.map((advantage, index) => (
              <div
                key={advantage.textEn}
                className="detail-rise glass-card flex items-start gap-4 rounded-xl p-6"
                style={{ animationDelay: `${index * 70}ms` }}
              >
                <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-lg bg-gold/8">
                  <advantage.icon className="h-5 w-5 text-gold" />
                </div>
                <p className="font-body text-base leading-relaxed text-foreground/85">
                  {t(advantage.textFa, advantage.textEn)}
                </p>
              </div>
            ))}
          </div>
        </section>

        <div className="gold-line mx-auto max-w-4xl" />

        {/* ========================== CONTACT ========================== */}
        <section className="bg-navy-dark/60 py-16 md:py-20">
          <div className="mx-auto max-w-7xl px-6 lg:px-8">
            <div className="mb-10 flex items-center gap-3">
              <BarChart3 className="h-5 w-5 text-gold" />
              <h2 className="font-display text-2xl font-bold text-gold-gradient md:text-3xl">
                {t('اطلاعات تماس این مجموعه', 'Division Contact Information')}
              </h2>
            </div>

            <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-4">
              <a
                href={`tel:${division.contact.phone.replace(/\s/g, '')}`}
                className="glass-card detail-rise flex items-center gap-4 rounded-xl p-6 transition-all duration-300 hover:border-gold/40"
              >
                <div className="flex h-11 w-11 shrink-0 items-center justify-center rounded-lg bg-gold/8">
                  <Phone className="h-5 w-5 text-gold" />
                </div>
                <div>
                  <p className="font-body mb-1 text-base text-foreground/70">
                    {t('تلفن تماس', 'Phone')}
                  </p>
                  <p className="font-body text-base font-medium text-foreground" dir="ltr">
                    {division.contact.phone}
                  </p>
                </div>
              </a>

              <a
                href={`mailto:${division.contact.email}`}
                className="glass-card detail-rise flex items-center gap-4 rounded-xl p-6 transition-all duration-300 hover:border-gold/40"
              >
                <div className="flex h-11 w-11 shrink-0 items-center justify-center rounded-lg bg-gold/8">
                  <Mail className="h-5 w-5 text-gold" />
                </div>
                <div className="min-w-0">
                  <p className="font-body mb-1 text-base text-foreground/70">
                    {t('پست الکترونیک', 'Email')}
                  </p>
                  <p className="font-body truncate text-base font-medium text-foreground" dir="ltr">
                    {division.contact.email}
                  </p>
                </div>
              </a>

              <div className="glass-card detail-rise flex items-center gap-4 rounded-xl p-6">
                <div className="flex h-11 w-11 shrink-0 items-center justify-center rounded-lg bg-gold/8">
                  <MapPin className="h-5 w-5 text-gold" />
                </div>
                <div>
                  <p className="font-body mb-1 text-base text-foreground/70">
                    {t('نشانی دفتر', 'Office Address')}
                  </p>
                  <p className="font-body text-base leading-relaxed text-foreground">
                    {t(division.contact.addressFa, division.contact.addressEn)}
                  </p>
                </div>
              </div>

              <div className="glass-card detail-rise flex items-center gap-4 rounded-xl p-6">
                <div className="flex h-11 w-11 shrink-0 items-center justify-center rounded-lg bg-gold/8">
                  <Clock className="h-5 w-5 text-gold" />
                </div>
                <div>
                  <p className="font-body mb-1 text-base text-foreground/70">
                    {t('ساعات کاری', 'Working Hours')}
                  </p>
                  <p className="font-body text-base leading-relaxed text-foreground">
                    {t(division.contact.hoursFa, division.contact.hoursEn)}
                  </p>
                </div>
              </div>
            </div>
          </div>
        </section>

        <div className="gold-line mx-auto max-w-4xl" />

        {/* ====================== OTHER DIVISIONS ====================== */}
        <section className="mx-auto max-w-7xl px-6 py-16 lg:px-8 md:py-20">
          <div className="mb-4 flex items-center gap-3">
            <Layers className="h-5 w-5 text-gold" />
            <h2 className="font-display text-2xl font-bold text-gold-gradient md:text-3xl">
              {t('سایر مجموعه‌های هولدینگ سعود', 'Other Saud Holding Divisions')}
            </h2>
          </div>
          <p className="font-body mb-10 max-w-3xl text-base leading-relaxed text-foreground/75">
            {t(
              'این بخش فقط پیوندهای راهنما به سایر مجموعه‌های گروه است؛ خدمات تخصصی این صفحه در بخش‌های «آنچه ارائه می‌دهیم»، «مزیت‌های همکاری با ما» و «اطلاعات تماس این مجموعه» معرفی شده است.',
              'This section only provides quick links to the other divisions of the group; the services covered on this page are listed in "What We Deliver", "Why Work With Us" and "Division Contact Information".'
            )}
          </p>

          <div className="grid gap-4 sm:grid-cols-3">
            {siblings.map((item, index) => (
              <button
                key={item.slug}
                type="button"
                onClick={() => go(`/divisions/${item.slug}`)}
                className="glass-card detail-rise lux-card group cursor-pointer rounded-xl p-6 text-start transition-all duration-500 hover:translate-y-[-4px]"
                style={{ animationDelay: `${index * 90}ms` }}
              >
                <img
                  src={item.logo}
                  alt=""
                  className="mb-4 h-14 w-14 object-contain opacity-80 transition-opacity duration-300 group-hover:opacity-100"
                />
                <h3 className="font-display mb-2 text-base font-semibold text-foreground transition-colors duration-300 group-hover:text-gold">
                  {t(item.nameFa, item.nameEn)}
                </h3>
                <p className="font-body mb-4 text-base leading-relaxed text-foreground/75">
                  {t(item.taglineFa, item.taglineEn)}
                </p>
                <span className="lux-card__cta flex items-center gap-2 font-body text-base font-semibold text-gold">
                  {t('مشاهده این مجموعه', 'View This Division')}
                  <ForwardIcon className="h-5 w-5" />
                </span>
              </button>
            ))}
          </div>
        </section>

        {/* ========================= BACK HOME ========================= */}
        <section className="px-6 pb-20 lg:px-8">
          <div className="mx-auto max-w-3xl text-center">
            <button
              type="button"
              onClick={() => go('/')}
              className="glass-card group inline-flex cursor-pointer items-center gap-3 rounded-xl px-8 py-4 font-body text-base font-semibold text-gold transition-all duration-500 hover:translate-y-[-3px] hover:border-gold/50 hover:shadow-lg hover:shadow-gold/10"
            >
              <BackIcon className="h-5 w-5 transition-transform duration-300 group-hover:-translate-x-1" />
              {t('بازگشت به صفحه اصلی', 'Back to Home')}
            </button>
            <p className="font-body mt-6 text-base text-muted-foreground">
              {t(
                'کرج، عظیمیه، برج سعود — هولدینگ سعود',
                'Karaj, Azimiyeh, Saud Tower — Saud Holding'
              )}
            </p>
          </div>
        </section>
      </main>

      {/* Floating back-to-top style navigation */}
      <button
        type="button"
        onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}
        aria-label={t('بازگشت به بالای صفحه', 'Back to top')}
        className="fixed bottom-6 left-6 z-40 flex h-11 w-11 cursor-pointer items-center justify-center rounded-full border border-gold/25 bg-navy-dark/85 text-gold backdrop-blur-md transition-all duration-300 hover:border-gold/60"
      >
        <ChevronLeft className="h-5 w-5 rotate-90" />
      </button>
    </div>
  );
}
