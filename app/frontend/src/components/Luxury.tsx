import {
  createContext,
  useCallback,
  useContext,
  useEffect,
  useRef,
  useState,
} from 'react';
import type { ReactNode } from 'react';
import { useNavigate } from 'react-router-dom';
import { ArrowLeft, ArrowRight } from 'lucide-react';
import { useLang } from '@/contexts/LanguageContext';

const LOGO_URL =
  'https://mgx-backend-cdn.metadl.com/generate/images/715272/2026-07-16/sse3r4ycai2a/logo-saud-holding-main.png';

/* ==========================================================================
   Luxury page transition
   A black & gold curtain blooms over the viewport, the route swaps behind it,
   then the curtain fades away to reveal the new page.
   ========================================================================== */

interface TransitionContextValue {
  /** Play the transition, then navigate. Supports a `#section` hash. */
  go: (path: string) => void;
}

const TransitionContext = createContext<TransitionContextValue | undefined>(undefined);

/** Moment the curtain fully covers the viewport. */
const CURTAIN_CLOSED_MS = 620;
/** Moment the curtain has completely faded away. */
const CURTAIN_OPEN_MS = 900;

export function TransitionProvider({ children }: { children: ReactNode }) {
  const navigate = useNavigate();
  const [active, setActive] = useState(false);
  const timers = useRef<number[]>([]);

  const clearTimers = () => {
    timers.current.forEach((id) => window.clearTimeout(id));
    timers.current = [];
  };

  useEffect(() => clearTimers, []);

  const go = useCallback(
    (path: string) => {
      clearTimers();
      setActive(true);

      const [pathname, hash] = path.split('#');

      timers.current.push(
        window.setTimeout(() => {
          navigate(hash ? { pathname, hash: `#${hash}` } : { pathname });

          // Wait for the new tree to mount, then position the viewport while
          // the curtain still hides the page — the reveal feels seamless.
          if (!hash) {
            window.scrollTo({ top: 0, behavior: 'auto' });
            return;
          }

          const startedAt = Date.now();
          const scrollWhenReady = () => {
            const target = document.getElementById(hash);
            if (target) {
              target.scrollIntoView({ behavior: 'auto', block: 'start' });
            } else if (Date.now() - startedAt < 1600) {
              window.requestAnimationFrame(scrollWhenReady);
            }
          };
          window.requestAnimationFrame(scrollWhenReady);
        }, CURTAIN_CLOSED_MS),
        window.setTimeout(() => setActive(false), CURTAIN_OPEN_MS),
      );
    },
    [navigate],
  );

  return (
    <TransitionContext.Provider value={{ go }}>
      {children}

      <div className={`transition-overlay ${active ? 'is-active' : ''}`} aria-hidden={!active}>
        <div className="transition-overlay__glow" />
        <div className="transition-overlay__ring transition-overlay__ring--a" />
        <div className="transition-overlay__ring transition-overlay__ring--b" />
        <img src={LOGO_URL} alt="" className="transition-overlay__logo" />
        <div className="transition-overlay__line" />
      </div>
    </TransitionContext.Provider>
  );
}

export function useLuxuryNavigate() {
  const context = useContext(TransitionContext);
  if (!context) throw new Error('useLuxuryNavigate must be used within TransitionProvider');
  return context;
}

/* ==========================================================================
   LuxCard — the interactive card used for the second layer
   ========================================================================== */

interface LuxCardProps {
  /** Division slug the card opens. */
  slug: string;
  children: ReactNode;
  className?: string;
  /** Stagger delay for the scroll reveal. */
  delay?: number;
  /** Accessible name for screen readers. */
  label?: string;
}

export function LuxCard({ slug, children, className = '', delay = 0, label }: LuxCardProps) {
  const { t, isRtl } = useLang();
  const { go } = useLuxuryNavigate();

  const open = () => go(`/divisions/${slug}`);

  return (
    <div
      role="button"
      tabIndex={0}
      aria-label={label}
      onClick={open}
      onKeyDown={(event) => {
        if (event.key === 'Enter' || event.key === ' ') {
          event.preventDefault();
          open();
        }
      }}
      style={{ transitionDelay: `${delay}ms` }}
      className={`reveal glass-card lux-card group rounded-xl transition-all duration-500 hover:translate-y-[-4px] focus:outline-none focus-visible:ring-2 focus-visible:ring-gold/60 ${className}`}
    >
      <span
        aria-hidden="true"
        className="lux-card__corner right-2 top-2 rounded-tr-lg border-r border-t"
      />
      <span
        aria-hidden="true"
        className="lux-card__corner bottom-2 left-2 rounded-bl-lg border-b border-l"
      />

      {children}

      <span className="lux-card__cta mt-4 flex items-center gap-2 font-body text-sm font-semibold text-gold">
        {t('مشاهده جزئیات کامل', 'View Full Details')}
        {isRtl ? <ArrowLeft className="h-4 w-4" /> : <ArrowRight className="h-4 w-4" />}
      </span>
    </div>
  );
}

/* ==========================================================================
   DivisionCta — explicit route into a division detail page
   ========================================================================== */

export function DivisionCta({ slug, className = '' }: { slug: string; className?: string }) {
  const { t, isRtl } = useLang();
  const { go } = useLuxuryNavigate();

  return (
    <button
      type="button"
      onClick={() => go(`/divisions/${slug}`)}
      className={`inline-flex cursor-pointer items-center gap-2 rounded-lg border border-gold/25 bg-gold/5 px-5 py-2.5 font-body text-sm font-medium text-gold transition-all duration-300 hover:border-gold/60 hover:bg-gold/10 hover:shadow-lg hover:shadow-gold/10 ${className}`}
    >
      {t('مشاهده صفحه کامل مجموعه', 'View Full Division Page')}
      {isRtl ? <ArrowLeft className="h-4 w-4" /> : <ArrowRight className="h-4 w-4" />}
    </button>
  );
}
