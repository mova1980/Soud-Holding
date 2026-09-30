import React from 'react';
import { renderToString } from 'react-dom/server';
import { Route, Routes } from 'react-router-dom';
import { StaticRouter } from 'react-router-dom/server';
import { prerender as prerenderBlog } from './blog.js';
import DivisionDetail from '../src/pages/DivisionDetail';
import { LanguageProvider } from '../src/contexts/LanguageContext';
import { TransitionProvider } from '../src/components/Luxury';
import { getDivision } from '../src/data/divisions';

const SITE_NAME_FA = 'هولدینگ سعود';
const SITE_NAME_EN = 'Saud Holding';

function shorten(text, maxLength = 160) {
  const plain = String(text || '')
    .replace(/\s+/g, ' ')
    .trim();

  return plain.length > maxLength ? `${plain.slice(0, maxLength - 1)}…` : plain;
}

/**
 * HTML for a single division detail page.
 *
 * The markup is only a first-paint preview of the real page: React still mounts
 * on the client (no `prerender-static-page` marker), so navigation, language
 * switching and the luxury transition keep working as usual.
 */
function renderDivisionHtml(url) {
  return renderToString(
    React.createElement(
      StaticRouter,
      { location: url },
      React.createElement(
        LanguageProvider,
        null,
        React.createElement(
          TransitionProvider,
          null,
          React.createElement(
            Routes,
            null,
            React.createElement(Route, {
              path: '/divisions/:slug',
              element: React.createElement(DivisionDetail),
            }),
          ),
        ),
      ),
    ),
  );
}

function getDivisionHead(division) {
  const title = `${division.nameFa} | ${SITE_NAME_EN}`;
  const description = shorten(division.introFa);

  return {
    title,
    lang: 'fa',
    elements: new Set([
      {
        type: 'meta',
        props: { name: 'description', content: description },
      },
      {
        type: 'meta',
        props: { name: 'keywords', content: division.nameFa },
      },
      {
        type: 'meta',
        props: { property: 'og:title', content: title },
      },
      {
        type: 'meta',
        props: { property: 'og:description', content: description },
      },
      {
        type: 'meta',
        props: { property: 'og:image', content: division.image },
      },
      {
        type: 'meta',
        props: { property: 'og:type', content: 'website' },
      },
      {
        type: 'meta',
        props: { name: 'twitter:card', content: 'summary_large_image' },
      },
      {
        type: 'meta',
        props: { name: 'twitter:title', content: title },
      },
      {
        type: 'meta',
        props: { name: 'twitter:description', content: description },
      },
      {
        type: 'meta',
        props: { name: 'twitter:image', content: division.image },
      },
    ]),
  };
}

export async function prerender({ url }) {
  // Blog keeps its own self-contained static pipeline (SEO owned by the
  // content team), so delegate those URLs untouched.
  if (url.startsWith('/blog')) {
    return prerenderBlog({ url });
  }

  if (url.startsWith('/divisions/')) {
    const slug = url.replace(/^\/divisions\//, '').replace(/\/+$/, '');
    const division = getDivision(slug);

    if (!division) {
      return { html: '', statusCode: 404 };
    }

    return {
      html: renderDivisionHtml(url),
      head: getDivisionHead(division),
    };
  }

  return { html: renderDivisionHtml(url) };
}
