import { useEffect, useRef, useState } from 'react';
import { useLang } from '@/contexts/LanguageContext';

const heroImages = [
  'https://mgx-backend-cdn.metadl.com/generate/images/715272/2026-07-16/sse3xeacaiyq/hero-bg-city-skyline-night.png',
  'https://mgx-backend-cdn.metadl.com/generate/images/715272/2026-07-16/sse3xraaaizq/hero-bg-liquid-gold-abstract.png',
  'https://mgx-backend-cdn.metadl.com/generate/images/715272/2026-07-16/sse3x5ycaiza/hero-bg-black-gold-marble.png',
];

const LOGO_URL =
  'https://mgx-backend-cdn.metadl.com/generate/images/715272/2026-07-16/sse3r4ycai2a/logo-saud-holding-main.png';

/**
 * Renders a title with a word-by-word cinematic reveal.
 * Persian is a cursive script, so we split by WORD (never by letter)
 * to keep letter joining intact.
 */
function AnimatedWordmark({ text }: { text: string }) {
  const words = text.split(' ').filter(Boolean);

  return (
    <span className="relative inline-block">
      {/* Breathing gold aura behind the wordmark */}
      <span
        aria-hidden="true"
        className="hero-wordmark-aura absolute inset-0 -z-10 blur-[60px] bg-gold/30 rounded-full"
      />

      {/* The wordmark itself */}
      <span className="relative inline-block overflow-hidden">
        {words.map((word, index) => (
          <span
            key={`${word}-${index}`}
            className="hero-word hero-wordmark"
            style={{ animationDelay: `${400 + index * 220}ms` }}
          >
            {word}
            {index < words.length - 1 && '\u00A0'}
          </span>
        ))}

        {/* Specular light bar gliding over the title */}
        <span
          aria-hidden="true"
          className="hero-light-glide pointer-events-none absolute inset-y-0 -inset-x-1/4 w-1/2"
        />
      </span>
    </span>
  );
}

export default function HeroSection() {
  const { t } = useLang();
  const canvasRef = useRef<HTMLCanvasElement>(null);
  const [currentSlide, setCurrentSlide] = useState(0);

  // Background slideshow timer
  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentSlide((prev) => (prev + 1) % heroImages.length);
    }, 5000);
    return () => clearInterval(interval);
  }, []);

  // Gold particle field
  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;

    const ctx = canvas.getContext('2d');
    if (!ctx) return;

    let animationId: number;
    let particles: Array<{
      x: number;
      y: number;
      size: number;
      speedX: number;
      speedY: number;
      opacity: number;
      pulse: number;
    }> = [];

    const resize = () => {
      canvas.width = window.innerWidth;
      canvas.height = window.innerHeight;
    };

    const createParticles = () => {
      particles = [];
      const count = Math.floor((canvas.width * canvas.height) / 18000);
      for (let i = 0; i < count; i++) {
        particles.push({
          x: Math.random() * canvas.width,
          y: Math.random() * canvas.height,
          size: Math.random() * 1.5 + 0.3,
          speedX: (Math.random() - 0.5) * 0.2,
          speedY: (Math.random() - 0.5) * 0.2,
          opacity: Math.random() * 0.4 + 0.1,
          pulse: Math.random() * Math.PI * 2,
        });
      }
    };

    const animate = () => {
      ctx.clearRect(0, 0, canvas.width, canvas.height);

      particles.forEach((p) => {
        p.x += p.speedX;
        p.y += p.speedY;
        p.pulse += 0.015;

        if (p.x < 0) p.x = canvas.width;
        if (p.x > canvas.width) p.x = 0;
        if (p.y < 0) p.y = canvas.height;
        if (p.y > canvas.height) p.y = 0;

        const currentOpacity = p.opacity * (0.5 + 0.5 * Math.sin(p.pulse));

        ctx.beginPath();
        ctx.arc(p.x, p.y, p.size, 0, Math.PI * 2);
        ctx.fillStyle = `rgba(184, 134, 11, ${currentOpacity})`;
        ctx.fill();
      });

      for (let i = 0; i < particles.length; i++) {
        for (let j = i + 1; j < particles.length; j++) {
          const dx = particles[i].x - particles[j].x;
          const dy = particles[i].y - particles[j].y;
          const distance = Math.sqrt(dx * dx + dy * dy);

          if (distance < 100) {
            ctx.beginPath();
            ctx.moveTo(particles[i].x, particles[i].y);
            ctx.lineTo(particles[j].x, particles[j].y);
            ctx.strokeStyle = `rgba(184, 134, 11, ${0.06 * (1 - distance / 100)})`;
            ctx.lineWidth = 0.4;
            ctx.stroke();
          }
        }
      }

      animationId = requestAnimationFrame(animate);
    };

    resize();
    createParticles();
    animate();

    const handleResize = () => {
      resize();
      createParticles();
    };

    window.addEventListener('resize', handleResize);

    return () => {
      cancelAnimationFrame(animationId);
      window.removeEventListener('resize', handleResize);
    };
  }, []);

  return (
    <section
      id="hero"
      className="relative min-h-screen flex items-center justify-center overflow-hidden py-24"
    >
      {/* Background slideshow */}
      <div className="absolute inset-0">
        {heroImages.map((img, index) => (
          <div
            key={img}
            className={`absolute inset-0 transition-opacity ease-in-out ${
              index === currentSlide ? 'opacity-100' : 'opacity-0'
            }`}
            style={{ transitionDuration: '2000ms' }}
          >
            <img src={img} alt="" className="w-full h-full object-cover scale-105" />
          </div>
        ))}
        <div className="absolute inset-0 bg-black/72" />
        <div className="absolute inset-0 bg-gradient-to-b from-navy-dark/70 via-transparent to-navy-dark" />
      </div>

      {/* Radial glow */}
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-gold/5 rounded-full blur-[150px]" />
      </div>

      {/* Particle canvas */}
      <canvas ref={canvasRef} className="absolute inset-0 pointer-events-none z-10" />

      {/* Decorative rings */}
      <div className="absolute top-20 left-10 w-32 h-32 border border-gold/8 rounded-full animate-rotate-slow" />
      <div
        className="absolute bottom-20 right-10 w-48 h-48 border border-gold/5 rounded-full animate-rotate-slow"
        style={{ animationDirection: 'reverse' }}
      />

      {/* Content */}
      <div className="relative z-20 text-center px-6 max-w-5xl mx-auto">
        {/* Logo — enlarged with radiant glow */}
        <div
          className="flex justify-center mb-10 hero-enter"
          style={{ animationDelay: '150ms', animationFillMode: 'forwards' }}
        >
          <div className="relative logo-float">
            {/* Soft breathing halo */}
            <div
              aria-hidden="true"
              className="logo-halo absolute inset-0 -m-10 rounded-full bg-gold/25 blur-[55px]"
            />
            {/* Expanding light rings */}
            <div
              aria-hidden="true"
              className="logo-ring absolute inset-0 -m-4 rounded-full border border-gold/40"
            />
            <div
              aria-hidden="true"
              className="logo-ring-delayed absolute inset-0 -m-4 rounded-full border border-gold/30"
            />
            <img
              src={LOGO_URL}
              alt={t('نشان هولدینگ سعود', 'Saud Holding emblem')}
              className="logo-radiant relative w-44 h-44 sm:w-52 sm:h-52 md:w-64 md:h-64 object-contain"
            />
          </div>
        </div>

        {/* Top ornament */}
        <div
          className="flex items-center justify-center gap-4 mb-7 hero-enter"
          style={{ animationDelay: '320ms', animationFillMode: 'forwards' }}
        >
          <div className="h-px w-16 bg-gradient-to-l from-gold to-transparent" />
          <div className="w-2.5 h-2.5 rotate-45 border border-gold/60" />
          <div className="h-px w-16 bg-gradient-to-r from-gold to-transparent" />
        </div>

        {/* Animated wordmark */}
        <h1 className="text-6xl sm:text-7xl md:text-8xl lg:text-[7.5rem] font-black mb-7 leading-[1.2] pb-2">
          <AnimatedWordmark text={t('هولدینگ سعود', 'Saud Holding')} />
        </h1>

        {/* Subtitle */}
        <p
          className="text-2xl sm:text-3xl md:text-4xl text-foreground font-semibold mb-5 hero-enter"
          style={{ animationDelay: '1100ms', animationFillMode: 'forwards' }}
        >
          {t('تعالی در تنوع، تعهد در کیفیت', 'Excellence in Diversity, Commitment to Quality')}
        </p>

        {/* Description */}
        <p
          className="text-lg sm:text-xl md:text-2xl text-foreground/80 max-w-3xl mx-auto mb-12 hero-enter leading-relaxed"
          style={{ animationDelay: '1300ms', animationFillMode: 'forwards' }}
        >
          {t(
            'گروهی چندشاخه با حضور فعال در عرصه‌های حقوقی، خودرو، ساختمان و فناوری اطلاعات',
            'A diversified group with active presence in legal services, automotive, construction, and information technology'
          )}
        </p>

        {/* CTA buttons */}
        <div
          className="flex flex-col sm:flex-row items-center justify-center gap-4 hero-enter"
          style={{ animationDelay: '1500ms', animationFillMode: 'forwards' }}
        >
          <button
            onClick={() => document.getElementById('legal')?.scrollIntoView({ behavior: 'smooth' })}
            className="px-9 py-4 text-lg bg-gradient-to-l from-gold-light to-gold-dark text-navy-dark font-bold rounded-lg hover:shadow-xl hover:shadow-gold/25 transition-all duration-300 cursor-pointer"
          >
            {t('کشف مجموعه‌ها', 'Explore Divisions')}
          </button>
          <button
            onClick={() => document.getElementById('footer')?.scrollIntoView({ behavior: 'smooth' })}
            className="px-9 py-4 text-lg border border-gold/50 text-gold-light font-semibold rounded-lg hover:bg-gold/10 hover:border-gold transition-all duration-300 cursor-pointer"
          >
            {t('ارتباط با ما', 'Get in Touch')}
          </button>
        </div>

        {/* Slide indicators */}
        <div
          className="mt-14 flex items-center justify-center gap-2 hero-enter"
          style={{ animationDelay: '1700ms', animationFillMode: 'forwards' }}
        >
          {heroImages.map((img, index) => (
            <button
              key={img}
              onClick={() => setCurrentSlide(index)}
              aria-label={t(`تصویر ${index + 1}`, `Slide ${index + 1}`)}
              className={`h-2 rounded-full transition-all duration-500 cursor-pointer ${
                index === currentSlide ? 'bg-gold w-7' : 'bg-gold/30 w-2 hover:bg-gold/60'
              }`}
            />
          ))}
        </div>
      </div>
    </section>
  );
}