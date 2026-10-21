/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import React, { useState, useEffect } from 'react';
import { ARTICLES, CATEGORIES } from './data/articles';
import { Article, CategoryType } from './types';
import { Navbar } from './components/Navbar';
import { Hero } from './components/Hero';
import { ArticleCard } from './components/ArticleCard';
import { ArticleDetail } from './components/ArticleDetail';
import { CategoryFilterBar } from './components/CategoryFilterBar';
import { SearchModal } from './components/SearchModal';
import { RoutineBuilderModal } from './components/RoutineBuilderModal';
import { AboutSection } from './components/AboutSection';
import { SavedArticlesView } from './components/SavedArticlesView';
import { NotFoundPage } from './components/NotFoundPage';
import { Footer } from './components/Footer';
import { Sparkles, ArrowRight, BookOpen, Layers, CheckCircle2 } from 'lucide-react';

export default function App() {
  const [currentView, setCurrentView] = useState<'home' | 'article' | 'category' | 'about' | 'saved' | '484'>('home');
  const [selectedArticle, setSelectedArticle] = useState<Article | null>(null);
  const [activeCategory, setActiveCategory] = useState<CategoryType | 'All'>('All');
  const [savedArticleIds, setSavedArticleIds] = useState<string[]>(() => {
    try {
      const stored = localStorage.getItem('glow_edit_saved_articles');
      return stored ? JSON.parse(stored) : [];
    } catch {
      return [];
    }
  });

  const [isSearchOpen, setIsSearchOpen] = useState(false);
  const [isRoutineBuilderOpen, setIsRoutineBuilderOpen] = useState(false);
  const [toastMessage, setToastMessage] = useState<string | null>(null);

  // Sync saved to localStorage
  useEffect(() => {
    try {
      localStorage.setItem('glow_edit_saved_articles', JSON.stringify(savedArticleIds));
    } catch {
      // ignore
    }
  }, [savedArticleIds]);

  // Handle URL hash and pathname changes for deep linking, 301 redirects, and browser back/forward
  useEffect(() => {
    const handleLocationChange = () => {
      // 301 Permanent Redirect emulation for /old-home -> /
      if (window.location.pathname === '/old-home' || window.location.hash === '#old-home') {
        window.history.replaceState(null, '', '/');
        setCurrentView('home');
        setSelectedArticle(null);
        setActiveCategory('All');
        return;
      }

      const hash = window.location.hash.replace('#', '').trim();
      const pathname = window.location.pathname;

      // Friendly 484 / 404 page routing
      if (hash === '484' || hash === '404' || pathname === '/484' || pathname === '/404') {
        setCurrentView('484');
        setSelectedArticle(null);
        return;
      }

      if (!hash || hash === 'home' || (pathname === '/' && !hash)) {
        setCurrentView('home');
        setSelectedArticle(null);
        setActiveCategory('All');
        return;
      }

      if (hash.startsWith('article/')) {
        const slug = hash.replace('article/', '');
        const found = ARTICLES.find((a) => a.slug === slug || a.id === slug);
        if (found) {
          setSelectedArticle(found);
          setCurrentView('article');
        } else {
          // If article not found, show friendly custom 484 page
          setCurrentView('484');
          setSelectedArticle(null);
        }
        return;
      }

      if (pathname.startsWith('/article/')) {
        const slug = pathname.replace('/article/', '');
        const found = ARTICLES.find((a) => a.slug === slug || a.id === slug);
        if (found) {
          setSelectedArticle(found);
          setCurrentView('article');
        } else {
          setCurrentView('484');
          setSelectedArticle(null);
        }
        return;
      }

      if (hash.startsWith('category/')) {
        const cat = decodeURIComponent(hash.replace('category/', '')) as CategoryType | 'All';
        const exists = CATEGORIES.some((c) => c.id === cat) || cat === 'All';
        if (exists) {
          setActiveCategory(cat);
          setCurrentView('category');
          setSelectedArticle(null);
        } else {
          setCurrentView('484');
          setSelectedArticle(null);
        }
        return;
      }

      if (pathname.startsWith('/category/')) {
        const cat = decodeURIComponent(pathname.replace('/category/', '')) as CategoryType | 'All';
        const exists = CATEGORIES.some((c) => c.id === cat) || cat === 'All';
        if (exists) {
          setActiveCategory(cat);
          setCurrentView('category');
          setSelectedArticle(null);
        } else {
          setCurrentView('484');
          setSelectedArticle(null);
        }
        return;
      }

      if (hash === 'about' || pathname === '/about') {
        setCurrentView('about');
        setSelectedArticle(null);
        return;
      }

      if (hash === 'saved' || pathname === '/saved') {
        setCurrentView('saved');
        setSelectedArticle(null);
        return;
      }

      // Any unrecognized route renders friendly 484 page
      setCurrentView('484');
      setSelectedArticle(null);
    };

    handleLocationChange();
    window.addEventListener('hashchange', handleLocationChange);
    window.addEventListener('popstate', handleLocationChange);
    return () => {
      window.removeEventListener('hashchange', handleLocationChange);
      window.removeEventListener('popstate', handleLocationChange);
    };
  }, []);

  // Dynamic SEO Page Title, Meta Description, Self-Referencing Canonical Tag & JSON-LD
  useEffect(() => {
    let title = 'The Glow Edit - Modern Skincare & Beauty Journal';
    let description = 'A clean, modern beauty and skincare blog for Gen Z and young adults. Science-backed routines, ingredient guides, acne care, and affordable student skincare.';
    
    if (currentView === 'article' && selectedArticle) {
      title = `${selectedArticle.title} | The Glow Edit`;
      description = selectedArticle.summary;
    } else if (currentView === 'category') {
      title = `${activeCategory} Skincare Articles | The Glow Edit`;
      const catObj = CATEGORIES.find((c) => c.id === activeCategory);
      if (catObj) description = catObj.description;
    } else if (currentView === 'about') {
      title = 'About The Glow Edit | Modern Skincare & Beauty Journal';
      description = 'Our mission, evidence-based cosmetic chemistry standards, and editorial team bios at The Glow Edit.';
    } else if (currentView === 'saved') {
      title = 'My Saved Reading List | The Glow Edit';
      description = 'View your saved skincare articles, routines, and ingredient guides.';
    } else if (currentView === '484') {
      title = '484: Page Not Found | The Glow Edit';
      description = 'The skincare guide or routine page you requested could not be found. Explore our beginner routines, ingredient guides, and acne care solutions.';
    }

    document.title = title;
    
    const metaDesc = document.querySelector('meta[name="description"]');
    if (metaDesc) metaDesc.setAttribute('content', description);

    const ogTitle = document.querySelector('meta[property="og:title"]');
    if (ogTitle) ogTitle.setAttribute('content', title);

    const ogDesc = document.querySelector('meta[property="og:description"]');
    if (ogDesc) ogDesc.setAttribute('content', description);

    // Self-referencing canonical tag on every page
    let canonical = document.querySelector('link[rel="canonical"]') as HTMLLinkElement | null;
    if (!canonical) {
      canonical = document.createElement('link');
      canonical.rel = 'canonical';
      document.head.appendChild(canonical);
    }
    canonical.href = window.location.href;

    // Update JSON-LD structured data dynamically for search engine bots
    let schemaScript = document.getElementById('json-ld-schema') as HTMLScriptElement | null;
    if (!schemaScript) {
      schemaScript = document.createElement('script');
      schemaScript.id = 'json-ld-schema';
      schemaScript.type = 'application/ld+json';
      document.head.appendChild(schemaScript);
    }

    if (currentView === 'article' && selectedArticle) {
      schemaScript.textContent = JSON.stringify({
        '@context': 'https://schema.org',
        '@type': 'BlogPosting',
        'headline': selectedArticle.title,
        'description': selectedArticle.summary,
        'datePublished': selectedArticle.date,
        'author': {
          '@type': 'Person',
          'name': selectedArticle.author.name,
          'jobTitle': selectedArticle.author.role,
        },
        'publisher': {
          '@type': 'Organization',
          'name': 'The Glow Edit',
          'url': window.location.origin,
        },
        'articleSection': selectedArticle.category,
        'keywords': selectedArticle.tags.join(', ')
      });
    } else {
      schemaScript.textContent = JSON.stringify({
        '@context': 'https://schema.org',
        '@type': 'Blog',
        'name': 'The Glow Edit',
        'description': 'A clean, modern beauty and skincare blog for Gen Z and young adults.',
        'url': window.location.origin,
        'publisher': {
          '@type': 'Organization',
          'name': 'The Glow Edit'
        }
      });
    }
  }, [currentView, selectedArticle, activeCategory]);

  const showToast = (msg: string) => {
    setToastMessage(msg);
    setTimeout(() => setToastMessage(null), 3000);
  };

  const navigateTo = (view: string, category?: CategoryType | 'All') => {
    if (view === 'home') {
      window.location.hash = 'home';
      setCurrentView('home');
      setSelectedArticle(null);
      setActiveCategory('All');
    } else if (view === 'category' && category) {
      window.location.hash = `category/${encodeURIComponent(category)}`;
      setActiveCategory(category);
      setCurrentView('category');
      setSelectedArticle(null);
    } else if (view === 'about') {
      window.location.hash = 'about';
      setCurrentView('about');
      setSelectedArticle(null);
    } else if (view === 'saved') {
      window.location.hash = 'saved';
      setCurrentView('saved');
      setSelectedArticle(null);
    } else if (view === '484' || view === '404') {
      window.location.hash = '484';
      setCurrentView('484');
      setSelectedArticle(null);
    }
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  const handleSelectArticle = (article: Article) => {
    setSelectedArticle(article);
    setCurrentView('article');
    window.location.hash = `article/${article.slug}`;
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  const handleToggleSave = (e: React.MouseEvent, article: Article) => {
    e.stopPropagation();
    setSavedArticleIds((prev) => {
      const isAlreadySaved = prev.includes(article.id);
      if (isAlreadySaved) {
        showToast(`Removed from your reading list.`);
        return prev.filter((id) => id !== article.id);
      } else {
        showToast(`Saved to your reading list.`);
        return [...prev, article.id];
      }
    });
  };

  const handleClearSaved = () => {
    setSavedArticleIds([]);
    showToast('Reading list cleared.');
  };

  // Filter articles based on active category
  const filteredArticles = activeCategory === 'All'
    ? ARTICLES
    : ARTICLES.filter((a) => a.category === activeCategory);

  const featuredArticle = ARTICLES.find((a) => a.id === 'beginner-skincare-routine') || ARTICLES[0];
  const trendingArticles = ARTICLES.filter((a) => a.trending && a.id !== featuredArticle.id).slice(0, 3);
  const savedArticles = ARTICLES.filter((a) => savedArticleIds.includes(a.id));

  return (
    <div className="min-h-screen bg-[#FAF8F5] text-neutral-900 font-sans antialiased selection:bg-[#F8D7E0] selection:text-[#5C1D30]">
      
      {/* Toast Notification */}
      {toastMessage && (
        <div className="fixed bottom-6 right-6 z-50 px-4 py-2.5 rounded-lg bg-neutral-900 text-white text-xs font-medium shadow-lg flex items-center gap-2 animate-in fade-in slide-in-from-bottom-2 duration-200">
          <CheckCircle2 className="w-4 h-4 text-emerald-400" />
          <span>{toastMessage}</span>
        </div>
      )}

      {/* Top Bar Navigation (3-Zone strict contract) */}
      <Navbar
        currentView={currentView}
        onNavigate={navigateTo}
        savedCount={savedArticleIds.length}
        onOpenSearch={() => setIsSearchOpen(true)}
        onOpenRoutineBuilder={() => setIsRoutineBuilderOpen(true)}
        activeCategory={activeCategory}
      />

      {/* Main Content Router */}
      {currentView === 'article' && selectedArticle ? (
        <ArticleDetail
          article={selectedArticle}
          allArticles={ARTICLES}
          onBack={() => navigateTo('home')}
          onSelectArticle={handleSelectArticle}
          onNavigateCategory={(cat) => navigateTo('category', cat)}
          isSaved={savedArticleIds.includes(selectedArticle.id)}
          onToggleSave={handleToggleSave}
        />
      ) : currentView === 'saved' ? (
        <SavedArticlesView
          savedArticles={savedArticles}
          onSelectArticle={handleSelectArticle}
          onToggleSave={handleToggleSave}
          onClearAll={handleClearSaved}
          onBackToHome={() => navigateTo('home')}
        />
      ) : currentView === 'about' ? (
        <AboutSection
          onOpenRoutineBuilder={() => setIsRoutineBuilderOpen(true)}
          onExploreArticles={() => navigateTo('home')}
        />
      ) : currentView === '484' ? (
        <NotFoundPage
          onNavigateHome={() => navigateTo('home')}
          onNavigateCategory={(cat) => navigateTo('category', cat)}
          onNavigateAbout={() => navigateTo('about')}
          onNavigateSaved={() => navigateTo('saved')}
          onOpenSearch={() => setIsSearchOpen(true)}
          onOpenRoutineBuilder={() => setIsRoutineBuilderOpen(true)}
        />
      ) : (
        /* Home & Category Listing Views */
        <main>
          {/* Show Hero only on default Home view with 'All' filter */}
          {currentView === 'home' && activeCategory === 'All' && (
            <Hero
              featuredArticle={featuredArticle}
              onSelectArticle={handleSelectArticle}
              onOpenRoutineBuilder={() => setIsRoutineBuilderOpen(true)}
            />
          )}

          {/* Interactive Category Filter Bar */}
          <CategoryFilterBar
            activeCategory={activeCategory}
            onSelectCategory={(cat) => {
              setActiveCategory(cat);
              if (cat === 'All') {
                window.location.hash = 'home';
                setCurrentView('home');
              } else {
                window.location.hash = `category/${encodeURIComponent(cat)}`;
                setCurrentView('category');
              }
            }}
          />

          {/* Category View Header (if a specific category is chosen) */}
          {activeCategory !== 'All' && (
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-8 pb-4">
              <div className="flex items-center justify-between border-b border-black/[0.06] pb-4">
                <div>
                  <span className="text-xs uppercase tracking-widest text-[#943855] font-semibold">Category Archive</span>
                  <h1 className="text-3xl font-serif font-medium text-neutral-900 mt-1">{activeCategory}</h1>
                  <p className="text-xs text-neutral-500 mt-1">
                    {CATEGORIES.find((c) => c.id === activeCategory)?.description}
                  </p>
                </div>
                <button
                  onClick={() => {
                    setActiveCategory('All');
                    setCurrentView('home');
                    window.location.hash = 'home';
                  }}
                  className="text-xs text-neutral-500 hover:text-neutral-900 transition-colors"
                >
                  View All Topics
                </button>
              </div>
            </div>
          )}

          {/* Main Content Layout */}
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-10">
            
            {/* If on default home, show 3-Tier Salience (Lead Story already in Hero, now Secondary Features & Main Grid) */}
            {currentView === 'home' && activeCategory === 'All' && (
              <>
                {/* Secondary Featured Section: Trending Articles */}
                <section className="mb-14">
                  <div className="flex items-center justify-between mb-6 border-b border-black/[0.06] pb-3">
                    <div>
                      <span className="text-xs uppercase tracking-widest text-[#943855] font-semibold">Must-Read Science</span>
                      <h2 className="text-2xl font-serif font-medium text-neutral-900">Trending Editorials</h2>
                    </div>
                    <span className="text-xs text-neutral-400">Curated weekly by cosmetic chemists</span>
                  </div>

                  <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                    {trendingArticles.map((article) => (
                      <ArticleCard
                        key={article.id}
                        article={article}
                        onSelect={handleSelectArticle}
                        isSaved={savedArticleIds.includes(article.id)}
                        onToggleSave={handleToggleSave}
                      />
                    ))}
                  </div>
                </section>

                {/* Interactive Collegiate Routine Matcher Callout Banner */}
                <section className="mb-16 p-8 rounded-2xl bg-gradient-to-r from-[#FCECEF] via-[#FAF8F5] to-[#F3EBFA] border border-black/[0.06] flex flex-col md:flex-row items-center justify-between gap-6 shadow-xs">
                  <div className="max-w-xl">
                    <span className="inline-flex items-center gap-1.5 text-xs uppercase tracking-widest font-semibold text-[#943855] mb-2">
                      <Sparkles className="w-3.5 h-3.5" />
                      Student Skincare Concierge
                    </span>
                    <h3 className="text-2xl sm:text-3xl font-serif font-medium text-neutral-900 leading-snug">
                      Overwhelmed by TikTok routines? Find your personalized 3-step ritual.
                    </h3>
                    <p className="text-xs sm:text-sm text-neutral-600 mt-2 leading-relaxed">
                      Answer three quick questions about your skin type, breakouts, and monthly budget. Get a custom, non-comedogenic regimen starting at under $25 total.
                    </p>
                  </div>

                  <button
                    onClick={() => setIsRoutineBuilderOpen(true)}
                    className="inline-flex items-center gap-2 px-6 py-3 text-xs font-semibold uppercase tracking-wider text-white bg-[#943855] hover:bg-[#7D2E46] rounded-md transition-colors cursor-pointer shadow-sm shrink-0"
                  >
                    Take The Routine Quiz <ArrowRight className="w-3.5 h-3.5" />
                  </button>
                </section>
              </>
            )}

            {/* Complete Articles Grid (All 10 Articles Accessible) */}
            <section className="mb-16">
              <div className="flex items-center justify-between mb-8 border-b border-black/[0.06] pb-3">
                <div>
                  <span className="text-xs uppercase tracking-widest text-[#943855] font-semibold">The Complete Collection</span>
                  <h2 className="text-2xl sm:text-3xl font-serif font-medium text-neutral-900 mt-1">
                    {activeCategory === 'All' ? 'Latest Skincare Articles' : `${activeCategory} Articles`}
                  </h2>
                </div>
                <span className="text-xs text-neutral-500 tabular-nums">
                  Showing {filteredArticles.length} guides
                </span>
              </div>

              {filteredArticles.length === 0 ? (
                <div className="text-center py-16 text-neutral-500 text-sm">
                  No articles found in this category.
                </div>
              ) : (
                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
                  {filteredArticles.map((article) => (
                    <ArticleCard
                      key={article.id}
                      article={article}
                      onSelect={handleSelectArticle}
                      isSaved={savedArticleIds.includes(article.id)}
                      onToggleSave={handleToggleSave}
                    />
                  ))}
                </div>
              )}
            </section>

            {/* Embedded About Section on Home */}
            {currentView === 'home' && activeCategory === 'All' && (
              <AboutSection
                onOpenRoutineBuilder={() => setIsRoutineBuilderOpen(true)}
              />
            )}

          </div>
        </main>
      )}

      {/* Interactive Modals */}
      <SearchModal
        isOpen={isSearchOpen}
        onClose={() => setIsSearchOpen(false)}
        articles={ARTICLES}
        onSelectArticle={handleSelectArticle}
      />

      <RoutineBuilderModal
        isOpen={isRoutineBuilderOpen}
        onClose={() => setIsRoutineBuilderOpen(false)}
        articles={ARTICLES}
        onSelectArticle={handleSelectArticle}
      />

      {/* Global Footer */}
      <Footer
        onNavigate={navigateTo}
        onOpenRoutineBuilder={() => setIsRoutineBuilderOpen(true)}
      />

    </div>
  );
}
