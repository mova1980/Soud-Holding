/**
 * Division detail routes.
 *
 * These routes must exist as real static files after `vite build` so a direct
 * refresh (or a shared deep link) resolves without relying on the dev server's
 * SPA history fallback.
 *
 * Keep in sync with the `slug` values defined in `src/data/divisions.ts`.
 */
export const divisionRoutes = [
  '/divisions/legal',
  '/divisions/auto-parts',
  '/divisions/construction',
  '/divisions/data-center',
];
