import React from 'react';
import { Home, Search, Sparkles, BookOpen, Layers, Heart, ArrowRight, ShieldCheck, Compass } from 'lucide-react';
import { CategoryType } from '../types';

interface NotFoundPageProps {
  onNavigateHome: () => void;
  onNavigateCategory: (category: CategoryType) => void;
  onNavigateAbout: () => void;
  onNavigateSaved: () => void;
  onOpenSearch: () => void;
  onOpenRoutineBuilder: () => void;
}

export const NotFoundPage: React.FC<NotFoundPageProps> = ({
  onNavigateHome,
  onNavigateCategory,
  onNavigateAbout,
  onNavigateSaved,
  onOpenSearch,
  onOpenRoutineBuilder,
}) => {
  return (
    <div className="min-h-[80vh] bg-[#FAF8F5] py-12 sm:py-20 px-4 sm:px-6 lg:px-8 flex flex-col justify-center">
      <div className="max-w-3xl mx-auto text-center">
        
        {/* Aesthetic Badge */}
        <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-[#FCECEF] text-[#943855] text-xs font-semibold uppercase tracking-wider mb-6">
          <Sparkles className="w-3.5 h-3.5" />
          <span>Error 484 / 404 · Routine Interrupted</span>
        </div>

        {/* Big Stylized Header */}
        <h1 className="font-serif text-5xl sm:text-7xl font-light text-neutral-900 tracking-tight mb-4">
          484 <span className="font-script text-4xl sm:text-6xl text-[#943855] ml-2">Lost in routine</span>
        </h1>

        <p className="text-base sm:text-lg text-neutral-600 max-w-xl mx-auto leading-relaxed mb-8">
          It looks like this page was rinsed off during a double cleanse. Don&apos;t worry—your moisture barrier is completely safe! Let&apos;s get your skincare journey back on track.
        </p>

        {/* Action Buttons */}
        <div className="flex flex-wrap items-center justify-center gap-3 mb-14">
          <button
            onClick={onNavigateHome}
            className="inline-flex items-center gap-2 px-6 py-3 text-xs font-semibold uppercase tracking-wider text-white bg-neutral-900 hover:bg-[#943855] rounded-md transition-colors shadow-xs cursor-pointer"
          >
            <Home className="w-4 h-4" />
            Back to Homepage
          </button>
          <button
            onClick={onOpenSearch}
            className="inline-flex items-center gap-2 px-5 py-3 text-xs font-medium tracking-wide text-neutral-800 bg-white hover:bg-neutral-50 rounded-md transition-colors border border-black/[0.08] shadow-xs cursor-pointer"
          >
            <Search className="w-4 h-4 text-[#943855]" />
            Search Skincare Guides
          </button>
          <button
            onClick={onOpenRoutineBuilder}
            className="inline-flex items-center gap-2 px-5 py-3 text-xs font-medium tracking-wide text-neutral-800 bg-[#FCECEF] hover:bg-[#f8dde4] rounded-md transition-colors border border-[#e8c0cb] text-[#943855] cursor-pointer"
          >
            <Sparkles className="w-4 h-4" />
            Find Your Routine
          </button>
        </div>

        {/* Directory of Main Pages */}
        <div className="bg-white rounded-2xl border border-black/[0.06] p-6 sm:p-8 text-left shadow-xs">
          <div className="flex items-center gap-2 mb-6 pb-4 border-b border-black/[0.06]">
            <Compass className="w-4 h-4 text-[#943855]" />
            <h2 className="font-serif text-lg font-medium text-neutral-900">
              Explore Main Editorial Sections &amp; Popular Guides
            </h2>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4">
            
            {/* Link 1: All Articles */}
            <button
              onClick={onNavigateHome}
              className="group p-4 rounded-xl border border-black/[0.04] bg-[#FAF8F5] hover:bg-[#FCECEF]/40 hover:border-[#943855]/20 transition-all text-left cursor-pointer"
            >
              <div className="flex items-center justify-between mb-1.5">
                <span className="font-medium text-sm text-neutral-900 group-hover:text-[#943855] transition-colors">
                  All 10 Articles
                </span>
                <ArrowRight className="w-3.5 h-3.5 text-neutral-400 group-hover:text-[#943855] transition-transform group-hover:translate-x-0.5" />
              </div>
              <p className="text-xs text-neutral-500">
                Browse our complete evidence-based skincare directory.
              </p>
            </button>

            {/* Link 2: Skincare Category */}
            <button
              onClick={() => onNavigateCategory('Skincare')}
              className="group p-4 rounded-xl border border-black/[0.04] bg-[#FAF8F5] hover:bg-[#FCECEF]/40 hover:border-[#943855]/20 transition-all text-left cursor-pointer"
            >
              <div className="flex items-center justify-between mb-1.5">
                <span className="font-medium text-sm text-neutral-900 group-hover:text-[#943855] transition-colors">
                  Beginner Skincare
                </span>
                <ArrowRight className="w-3.5 h-3.5 text-neutral-400 group-hover:text-[#943855] transition-transform group-hover:translate-x-0.5" />
              </div>
              <p className="text-xs text-neutral-500">
                Foundational 3-step rituals, layering orders &amp; barrier care.
              </p>
            </button>

            {/* Link 3: Ingredients */}
            <button
              onClick={() => onNavigateCategory('Ingredients')}
              className="group p-4 rounded-xl border border-black/[0.04] bg-[#FAF8F5] hover:bg-[#FCECEF]/40 hover:border-[#943855]/20 transition-all text-left cursor-pointer"
            >
              <div className="flex items-center justify-between mb-1.5">
                <span className="font-medium text-sm text-neutral-900 group-hover:text-[#943855] transition-colors">
                  Ingredient Guides
                </span>
                <ArrowRight className="w-3.5 h-3.5 text-neutral-400 group-hover:text-[#943855] transition-transform group-hover:translate-x-0.5" />
              </div>
              <p className="text-xs text-neutral-500">
                Niacinamide, BHA salicylic acid, and hyaluronic acid science.
              </p>
            </button>

            {/* Link 4: Acne Care */}
            <button
              onClick={() => onNavigateCategory('Acne Care')}
              className="group p-4 rounded-xl border border-black/[0.04] bg-[#FAF8F5] hover:bg-[#FCECEF]/40 hover:border-[#943855]/20 transition-all text-left cursor-pointer"
            >
              <div className="flex items-center justify-between mb-1.5">
                <span className="font-medium text-sm text-neutral-900 group-hover:text-[#943855] transition-colors">
                  Acne Care Solutions
                </span>
                <ArrowRight className="w-3.5 h-3.5 text-neutral-400 group-hover:text-[#943855] transition-transform group-hover:translate-x-0.5" />
              </div>
              <p className="text-xs text-neutral-500">
                Calming inflamed breakouts and clearing congested pores.
              </p>
            </button>

            {/* Link 5: Product Reviews */}
            <button
              onClick={() => onNavigateCategory('Product Reviews')}
              className="group p-4 rounded-xl border border-black/[0.04] bg-[#FAF8F5] hover:bg-[#FCECEF]/40 hover:border-[#943855]/20 transition-all text-left cursor-pointer"
            >
              <div className="flex items-center justify-between mb-1.5">
                <span className="font-medium text-sm text-neutral-900 group-hover:text-[#943855] transition-colors">
                  Product Reviews &amp; SPF
                </span>
                <ArrowRight className="w-3.5 h-3.5 text-neutral-400 group-hover:text-[#943855] transition-transform group-hover:translate-x-0.5" />
              </div>
              <p className="text-xs text-neutral-500">
                Objective breakdowns of sunscreens and daily moisturisers.
              </p>
            </button>

            {/* Link 6: Student Routines */}
            <button
              onClick={() => onNavigateCategory('Student Routines')}
              className="group p-4 rounded-xl border border-black/[0.04] bg-[#FAF8F5] hover:bg-[#FCECEF]/40 hover:border-[#943855]/20 transition-all text-left cursor-pointer"
            >
              <div className="flex items-center justify-between mb-1.5">
                <span className="font-medium text-sm text-neutral-900 group-hover:text-[#943855] transition-colors">
                  Student Budget Skincare
                </span>
                <ArrowRight className="w-3.5 h-3.5 text-neutral-400 group-hover:text-[#943855] transition-transform group-hover:translate-x-0.5" />
              </div>
              <p className="text-xs text-neutral-500">
                Effective campus-friendly routines built for under $30.
              </p>
            </button>

            {/* Link 7: About Page */}
            <button
              onClick={onNavigateAbout}
              className="group p-4 rounded-xl border border-black/[0.04] bg-[#FAF8F5] hover:bg-[#FCECEF]/40 hover:border-[#943855]/20 transition-all text-left cursor-pointer"
            >
              <div className="flex items-center justify-between mb-1.5">
                <span className="font-medium text-sm text-neutral-900 group-hover:text-[#943855] transition-colors">
                  About The Glow Edit
                </span>
                <ArrowRight className="w-3.5 h-3.5 text-neutral-400 group-hover:text-[#943855] transition-transform group-hover:translate-x-0.5" />
              </div>
              <p className="text-xs text-neutral-500">
                Meet our cosmetic chemists and read our editorial mission.
              </p>
            </button>

            {/* Link 8: Saved Reading List */}
            <button
              onClick={onNavigateSaved}
              className="group p-4 rounded-xl border border-black/[0.04] bg-[#FAF8F5] hover:bg-[#FCECEF]/40 hover:border-[#943855]/20 transition-all text-left cursor-pointer"
            >
              <div className="flex items-center justify-between mb-1.5">
                <span className="font-medium text-sm text-neutral-900 group-hover:text-[#943855] transition-colors">
                  Saved Reading List
                </span>
                <ArrowRight className="w-3.5 h-3.5 text-neutral-400 group-hover:text-[#943855] transition-transform group-hover:translate-x-0.5" />
              </div>
              <p className="text-xs text-neutral-500">
                Quickly return to your bookmarked guides and cheat sheets.
              </p>
            </button>

            {/* Link 9: Philosophy / Mission */}
            <div className="p-4 rounded-xl border border-[#e8c0cb] bg-[#FCECEF]/30 text-left flex flex-col justify-center">
              <span className="text-[11px] font-semibold uppercase tracking-wider text-[#943855] mb-1 flex items-center gap-1">
                <ShieldCheck className="w-3.5 h-3.5" /> 100% Evidence-Backed
              </span>
              <p className="text-xs text-neutral-600">
                No sponsored claims, no viral misinformation. Just peer-reviewed skincare science.
              </p>
            </div>

          </div>
        </div>

      </div>
    </div>
  );
};
