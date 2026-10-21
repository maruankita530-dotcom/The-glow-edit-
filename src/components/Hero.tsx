import React from 'react';
import { ArrowRight, Sparkles, BookOpen, ShieldCheck } from 'lucide-react';
import { heroImg } from '../data/articles';
import { Article } from '../types';

interface HeroProps {
  featuredArticle: Article;
  onSelectArticle: (article: Article) => void;
  onOpenRoutineBuilder: () => void;
}

export const Hero: React.FC<HeroProps> = ({
  featuredArticle,
  onSelectArticle,
  onOpenRoutineBuilder,
}) => {
  return (
    <section className="relative border-b border-black/[0.06] bg-[#FAF8F5]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-10 lg:py-14">
        
        {/* Editorial Eyebrow & Brand Masthead */}
        <div className="flex flex-col sm:flex-row sm:items-center justify-between border-b border-black/[0.06] pb-3 mb-6 text-xs uppercase tracking-widest text-neutral-500 font-medium gap-2">
          <div className="flex items-center gap-2">
            <span className="text-[#943855] font-semibold">The Glow Edit</span>
            <span aria-hidden="true">·</span>
            <span>Issue 14 · Fall / Winter 2026 Collection</span>
          </div>
          <span className="hidden sm:inline text-neutral-400">Curated Evidence-Based Skincare</span>
        </div>

        {/* Clear, Descriptive Homepage H1 with Main Keyword & Related Keywords */}
        <header className="mb-10 text-center max-w-3xl mx-auto">
          <p className="text-xs uppercase tracking-[0.22em] text-[#943855] font-semibold mb-2">
            Evidence-Based Cosmetic Science
          </p>
          <h1 className="text-3xl sm:text-4xl lg:text-5xl font-serif font-medium text-neutral-900 tracking-tight leading-[1.14]">
            The Glow Edit: A Modern Skincare Blog
          </h1>
          <p className="text-sm sm:text-base text-neutral-600 mt-3 font-sans max-w-2xl mx-auto font-light leading-relaxed">
            Welcome to our curated skincare blog website—an honest beauty journal packed with science-backed routines, ingredient guides, and expert advice trusted by readers exploring top skincare blogs in India and beyond.
          </p>
        </header>

        {/* 2-Column Balanced Editorial Split Hero */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 items-stretch">
          
          {/* Left Column: Lead Story Narrative */}
          <div className="lg:col-span-5 flex flex-col justify-between py-2">
            <div>
              <div className="flex items-center gap-2 text-xs font-medium text-[#943855] tracking-wide mb-3">
                <span className="uppercase tracking-widest">Featured Story</span>
                <span aria-hidden="true">·</span>
                <span className="text-neutral-500">{featuredArticle.readTime}</span>
              </div>

              <h2 className="text-2xl sm:text-3xl lg:text-4xl font-serif font-medium tracking-tight text-neutral-900 leading-[1.15] mb-5 text-balance">
                <a
                  href={`/article/${featuredArticle.slug}`}
                  onClick={(e) => {
                    if (!e.metaKey && !e.ctrlKey) {
                      e.preventDefault();
                      onSelectArticle(featuredArticle);
                    }
                  }}
                  className="hover:text-[#943855] transition-colors"
                >
                  {featuredArticle.title}
                </a>
              </h2>

              <p className="text-base text-neutral-600 leading-relaxed mb-6 font-sans">
                {featuredArticle.subtitle}
              </p>

              <div className="flex items-center gap-3 text-xs text-neutral-500 mb-8 pb-6 border-b border-black/[0.06]">
                <div className="w-8 h-8 rounded-full bg-[#FCECEF] text-[#943855] text-xs font-semibold flex items-center justify-center shrink-0">
                  {featuredArticle.author.name.charAt(0)}
                </div>
                <div>
                  <p className="font-medium text-neutral-800">{featuredArticle.author.name}</p>
                  <p className="text-[11px] text-neutral-400">{featuredArticle.date}</p>
                </div>
              </div>
            </div>

            {/* Hero CTAs */}
            <div className="flex flex-wrap items-center gap-3">
              <a
                href={`/article/${featuredArticle.slug}`}
                onClick={(e) => {
                  if (!e.metaKey && !e.ctrlKey) {
                    e.preventDefault();
                    onSelectArticle(featuredArticle);
                  }
                }}
                className="inline-flex items-center gap-2 px-5 py-2.5 text-xs font-semibold uppercase tracking-wider text-white bg-neutral-900 hover:bg-[#943855] rounded-md transition-colors cursor-pointer"
              >
                Read Article
                <ArrowRight className="w-3.5 h-3.5" />
              </a>

              <button
                onClick={onOpenRoutineBuilder}
                className="inline-flex items-center gap-2 px-4 py-2.5 text-xs font-medium tracking-wide text-neutral-700 bg-black/[0.03] hover:bg-black/[0.06] rounded-md transition-colors cursor-pointer border border-black/[0.06]"
              >
                <Sparkles className="w-3.5 h-3.5 text-[#943855]" />
                Find My Routine
              </button>
            </div>
          </div>

          {/* Right Column: Hero Visual Asset */}
          <div className="lg:col-span-7">
            <a
              href={`/article/${featuredArticle.slug}`}
              onClick={(e) => {
                if (!e.metaKey && !e.ctrlKey) {
                  e.preventDefault();
                  onSelectArticle(featuredArticle);
                }
              }}
              className="group relative block h-full min-h-[340px] lg:min-h-[440px] rounded-xl overflow-hidden border border-black/[0.06] cursor-pointer shadow-xs bg-[#F5EFEB]"
              aria-label={`Read featured article: ${featuredArticle.title}`}
            >
              <img
                src={heroImg}
                alt="The Glow Edit Skincare Essentials and Editorial Magazine"
                width={1376}
                height={768}
                loading="eager"
                decoding="async"
                className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-103"
                referrerPolicy="no-referrer"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-black/10 to-transparent opacity-80 group-hover:opacity-90 transition-opacity" />

              {/* Ambient Badge on Media */}
              <div className="absolute bottom-5 left-5 right-5 text-white">
                <span className="text-[11px] uppercase tracking-widest text-neutral-200 block mb-1">
                  The Minimalist Skincare Philosophy
                </span>
                <p className="font-serif text-lg sm:text-xl font-normal leading-snug text-neutral-100">
                  Evidence-based regimens crafted for youthful, resilient skin.
                </p>
              </div>
            </a>
          </div>
        </div>

        {/* Operational Utility Ribbon - Curatorial Ethos */}
        <div className="mt-12 pt-6 border-t border-black/[0.06] grid grid-cols-1 sm:grid-cols-3 gap-6 text-neutral-600 text-xs">
          <div className="flex items-center gap-3">
            <div className="w-8 h-8 rounded-full bg-[#FCECEF] text-[#943855] flex items-center justify-center shrink-0">
              <ShieldCheck className="w-4 h-4" />
            </div>
            <div>
              <p className="font-semibold text-neutral-900">Barrier-First Science</p>
              <p className="text-neutral-500 text-[11px]">No harsh stripping acids or extreme 10-step burnout.</p>
            </div>
          </div>

          <div className="flex items-center gap-3">
            <div className="w-8 h-8 rounded-full bg-[#F3EBFA] text-[#7B47B8] flex items-center justify-center shrink-0">
              <Sparkles className="w-4 h-4" />
            </div>
            <div>
              <p className="font-semibold text-neutral-900">Student Budget Focus</p>
              <p className="text-neutral-500 text-[11px]">Full effective routines starting at under $25 total.</p>
            </div>
          </div>

          <div className="flex items-center gap-3">
            <div className="w-8 h-8 rounded-full bg-[#EBF5ED] text-[#2F7341] flex items-center justify-center shrink-0">
              <BookOpen className="w-4 h-4" />
            </div>
            <div>
              <p className="font-semibold text-neutral-900">Zero Commercial Hype</p>
              <p className="text-neutral-500 text-[11px]">Cosmetic chemist breakdowns without sponsored bias.</p>
            </div>
          </div>
        </div>

      </div>
    </section>
  );
};
