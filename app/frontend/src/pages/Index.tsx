import { useEffect } from 'react';
import { useLocation } from 'react-router-dom';
import Navigation from '@/components/Navigation';
import HeroSection from '@/components/HeroSection';
import LegalSection from '@/components/LegalSection';
import AutoPartsSection from '@/components/AutoPartsSection';
import ConstructionSection from '@/components/ConstructionSection';
import DataSection from '@/components/DataSection';
import Footer from '@/components/Footer';
import { useLang } from '@/contexts/LanguageContext';

// Image URLs from generated assets
const images = {
  legal: 'https://mgx-backend-cdn.metadl.com/generate/images/715272/2026-07-15/srajinycaiyq/legal-office-luxury.png',
  autoparts: 'https://mgx-backend-cdn.metadl.com/generate/images/715272/2026-07-15/sraji4icaiza/sport-car-parts-showroom.png',
  construction: 'https://mgx-backend-cdn.metadl.com/generate/images/715272/2026-07-15/srajjjacai2q/construction-luxury-building.png',
  data: 'https://mgx-backend-cdn.metadl.com/generate/images/715272/2026-07-15/srajjwacai2a/data-analytics-center.png',
};

export default function Index() {
  const { lang } = useLang();
  const { hash } = useLocation();

  // Returning from a division detail page can carry a #section hash so the
  // visitor lands back exactly where they left off.
  useEffect(() => {
    if (!hash) return;

    const id = hash.replace(/^#/, '');
    let frames = 0;

    const scrollWhenReady = () => {
      const target = document.getElementById(id);
      if (target) {
        target.scrollIntoView({ behavior: 'smooth', block: 'start' });
        return;
      }
      if (frames < 90) {
        frames += 1;
        window.requestAnimationFrame(scrollWhenReady);
      }
    };

    window.requestAnimationFrame(scrollWhenReady);
  }, [hash, lang]);

  return (
    <div className="min-h-screen bg-navy-dark">
      <Navigation />
      <HeroSection />

      {/* Gold separator */}
      <div className="gold-line mx-auto max-w-4xl" />

      <LegalSection imageUrl={images.legal} />

      <div className="gold-line mx-auto max-w-4xl" />

      <AutoPartsSection imageUrl={images.autoparts} />

      <div className="gold-line mx-auto max-w-4xl" />

      <ConstructionSection imageUrl={images.construction} />

      <div className="gold-line mx-auto max-w-4xl" />

      <DataSection imageUrl={images.data} />

      <Footer />
    </div>
  );
}
