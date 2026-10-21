import fs from 'fs';
import path from 'path';
import { ARTICLES, CATEGORIES } from '../src/data/articles';

const distDir = path.resolve(process.cwd(), 'dist');
const indexPath = path.join(distDir, 'index.html');

if (!fs.existsSync(indexPath)) {
  console.error('Error: dist/index.html does not exist. Run vite build first.');
  process.exit(1);
}

const template = fs.readFileSync(indexPath, 'utf-8');
const liveBase = 'https://the-glow-edit.vercel.app';

// Helper to write an html file
function writePage(
  targetRelPath: string,
  title: string,
  description: string,
  canonicalUrl: string,
  schema: unknown
) {
  const targetDir = path.join(distDir, targetRelPath);
  fs.mkdirSync(targetDir, { recursive: true });
  const targetFile = path.join(targetDir, 'index.html');

  let html = template;

  // 1. Replace title
  html = html.replace(/<title>.*?<\/title>/s, `<title>${title}</title>`);

  // 2. Replace meta description
  html = html.replace(
    /<meta\s+name="description"\s+content=".*?"\s*\/?>/s,
    `<meta name="description" content="${description}" />`
  );

  // 3. Replace og:title
  html = html.replace(
    /<meta\s+property="og:title"\s+content=".*?"\s*\/?>/s,
    `<meta property="og:title" content="${title}" />`
  );

  // 4. Replace og:description
  html = html.replace(
    /<meta\s+property="og:description"\s+content=".*?"\s*\/?>/s,
    `<meta property="og:description" content="${description}" />`
  );

  // 5. Replace or inject og:url
  if (/<meta\s+property="og:url"/.test(html)) {
    html = html.replace(
      /<meta\s+property="og:url"\s+content=".*?"\s*\/?>/s,
      `<meta property="og:url" content="${canonicalUrl}" />`
    );
  } else {
    html = html.replace(
      /<link\s+rel="canonical"/,
      `<meta property="og:url" content="${canonicalUrl}" />\n    <link rel="canonical"`
    );
  }

  // 6. Replace canonical link
  html = html.replace(
    /<link\s+rel="canonical"\s+href=".*?"\s*\/?>/s,
    `<link rel="canonical" href="${canonicalUrl}" />`
  );

  // 7. Replace JSON-LD schema
  if (schema) {
    const schemaStr = JSON.stringify(schema, null, 2);
    html = html.replace(
      /<script\s+type="application\/ld\+json"\s+id="json-ld-schema">.*?<\/script>/s,
      `<script type="application/ld+json" id="json-ld-schema">\n${schemaStr}\n    </script>`
    );
  }

  fs.writeFileSync(targetFile, html, 'utf-8');
}

// Generate for all 10 articles
for (const article of ARTICLES) {
  const title = article.seoTitle || `${article.title} | The Glow Edit`;
  const description = article.seoDescription || article.summary;
  const canonicalUrl = `${liveBase}/article/${article.slug}`;
  const schema = {
    '@context': 'https://schema.org',
    '@type': 'BlogPosting',
    headline: article.title,
    description: article.seoDescription || article.summary,
    datePublished: article.date,
    author: {
      '@type': 'Person',
      name: article.author.name,
      jobTitle: article.author.role,
    },
    publisher: {
      '@type': 'Organization',
      name: 'The Glow Edit',
      url: liveBase,
    },
    articleSection: article.category,
    keywords: article.tags.join(', '),
    mainEntityOfPage: {
      '@type': 'WebPage',
      '@id': canonicalUrl,
    },
  };

  writePage(`article/${article.slug}`, title, description, canonicalUrl, schema);
}

// Generate for Category pages
const categoryMeta: Record<string, { title: string; desc: string }> = {
  Skincare: {
    title: 'Skincare Articles & Essential Routine Guides | The Glow Edit',
    desc: 'Browse our complete library of evidence-based skincare articles. Master daily routines, barrier repair principles, and healthy skin tips for every budget.',
  },
  Ingredients: {
    title: 'Skincare Ingredients Decoded: Actives & Science | Glow Edit',
    desc: 'Deep-dive into cosmetic chemistry with ingredient breakdowns of niacinamide, hyaluronic acid, ceramides, and BHA to elevate your everyday skincare rituals.',
  },
  'Acne Care': {
    title: 'Acne Care Guides: Clear Blemishes & Pores | The Glow Edit',
    desc: 'Evidence-based acne care articles focused on calming inflammation, unclogging pores with BHA, and healing blemishes without stripping your skin barrier.',
  },
  'Product Reviews': {
    title: 'Skincare Product Reviews & Honest Breakdowns | The Glow Edit',
    desc: 'Unbiased, cosmetic-chemist reviews of sunscreens, barrier creams, and cleansers to help you make informed skincare investments without marketing hype.',
  },
  'Student Routines': {
    title: 'Affordable Student Skincare Guides & Hacks | The Glow Edit',
    desc: 'Discover budget-friendly student skincare routines and campus hacks. Get glowing skin with high-performing drugstore cleansers, creams, and daily SPFs.',
  },
};

for (const cat of CATEGORIES) {
  if (cat.id === 'All') continue;
  const meta = categoryMeta[cat.id] || {
    title: `${cat.name} Skincare Articles | The Glow Edit`,
    desc: `Explore our collection of evidence-based skincare articles and guides on ${cat.name}.`,
  };
  const canonicalUrl = `${liveBase}/category/${encodeURIComponent(cat.id)}`;
  const schema = {
    '@context': 'https://schema.org',
    '@type': 'CollectionPage',
    name: `${cat.name} - The Glow Edit`,
    description: meta.desc,
    url: canonicalUrl,
  };
  writePage(`category/${cat.id}`, meta.title, meta.desc, canonicalUrl, schema);
}

// Generate About page
writePage(
  'about',
  'About The Glow Edit: Evidence-Based Beauty | The Glow Edit',
  'Learn about The Glow Edit editorial board and cosmetic chemistry philosophy. Discover our mission to provide transparent, science-first skincare advice.',
  `${liveBase}/about`,
  {
    '@context': 'https://schema.org',
    '@type': 'AboutPage',
    name: 'About The Glow Edit',
    description: 'Learn about The Glow Edit editorial board and cosmetic chemistry philosophy.',
    url: `${liveBase}/about`,
  }
);

// Generate Saved page
writePage(
  'saved',
  'My Saved Skincare Reading List & Routines | The Glow Edit',
  'Access your personal saved reading list of skincare articles, routine guides, and ingredient breakdowns anytime for quick reference and routine planning.',
  `${liveBase}/saved`,
  null
);

// Generate 484 page
writePage(
  '484',
  '484: Page Not Found – Explore Skincare | The Glow Edit',
  'The skincare guide or routine page you requested was not found. Browse our beginner routines, ingredient guides, and acne care solutions to get back on track.',
  `${liveBase}/484`,
  null
);

console.log('Successfully pre-rendered static HTML files for all articles and routes with self-referencing canonical URLs.');
