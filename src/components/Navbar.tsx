import React, { useState } from 'react';
import { Search, Bookmark, Sparkles, Menu, X } from 'lucide-react';
import { CategoryType } from '../types';

interface NavbarProps {
  currentView: string;
  onNavigate: (view: string, category?: CategoryType | 'All') => void;
  savedCount: number;
  onOpenSearch: () => void;
  onOpenRoutineBuilder: () => void;
  activeCategory: string;
}

export const Navbar: React.FC<NavbarProps> = ({
  currentView,
  onNavigate,
  savedCount,
  onOpenSearch,
  onOpenRoutineBuilder,
  activeCategory,
}) => {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  const navLinks = [
    { label: 'Home', view: 'home' },
    { label: 'Skincare', view: 'category', category: 'Skincare' as CategoryType },
    { label: 'Ingredients', view: 'category', category: 'Ingredients' as CategoryType },
    { label: 'Product Reviews', view: 'category', category: 'Product Reviews' as CategoryType },
    { label: 'About', view: 'about' },
  ];

  const handleLinkClick = (link: typeof navLinks[0]) => {
    onNavigate(link.view, link.category);
    setMobileMenuOpen(false);
  };

  return (
    <header className="sticky top-0 z-40 bg-[#FAF8F5]/95 backdrop-blur-md border-b border-black/[0.06]">
      {/* Top Bar strictly adheres to 3-Zone contract: Zone 1 (Brand) - Zone 2 (4-5 Nav Links) - Zone 3 (1 Primary Action) */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 h-18 flex items-center justify-between gap-8">
        
        {/* Zone 1: Single Brand Wordmark in Display Serif */}
        <a
          href="/"
          onClick={(e) => {
            e.preventDefault();
            onNavigate('home');
          }}
          className="text-2xl lg:text-3xl font-serif font-semibold tracking-tight text-neutral-900 hover:text-[#943855] transition-colors whitespace-nowrap shrink-0 cursor-pointer"
          aria-label="The Glow Edit Homepage"
        >
          The Glow Edit
        </a>

        {/* Zone 2: 4-5 Clean Single-Line Text Links (whitespace-nowrap) */}
        <nav className="hidden md:flex items-center gap-7 text-sm font-medium tracking-wide text-neutral-600">
          {navLinks.map((link) => {
            const isActive =
              (link.view === 'home' && currentView === 'home' && activeCategory === 'All') ||
              (link.view === 'about' && currentView === 'about') ||
              (link.view === 'category' && activeCategory === link.category && currentView !== 'about');
            
            const href = link.view === 'category'
              ? `/category/${encodeURIComponent(link.category || '')}`
              : link.view === 'home' ? '/' : `/${link.view}`;

            return (
              <a
                key={link.label}
                href={href}
                onClick={(e) => {
                  e.preventDefault();
                  handleLinkClick(link);
                }}
                className={`transition-colors whitespace-nowrap shrink-0 cursor-pointer py-1 relative ${
                  isActive
                    ? 'text-[#943855] font-semibold'
                    : 'hover:text-neutral-950'
                }`}
              >
                {link.label}
                {isActive && (
                  <span className="absolute bottom-0 left-0 w-full h-[1.5px] bg-[#943855]" />
                )}
              </a>
            );
          })}
        </nav>

        {/* Zone 3: 1 Primary Action + Utility Icons */}
        <div className="flex items-center gap-3 shrink-0">
          {/* Quick Search Trigger */}
          <button
            onClick={onOpenSearch}
            className="p-2 text-neutral-600 hover:text-neutral-900 hover:bg-black/[0.04] rounded-full transition-colors cursor-pointer"
            aria-label="Search articles"
            title="Search articles"
          >
            <Search className="w-4.5 h-4.5" />
          </button>

          {/* Saved Bookmarks */}
          <a
            href="/saved"
            onClick={(e) => {
              e.preventDefault();
              onNavigate('saved');
            }}
            className={`p-2 rounded-full transition-colors relative cursor-pointer ${
              currentView === 'saved'
                ? 'text-[#943855] bg-[#FCECEF]'
                : 'text-neutral-600 hover:text-neutral-900 hover:bg-black/[0.04]'
            }`}
            aria-label={`View reading list (${savedCount} saved)`}
            title="Saved Reading List"
          >
            <Bookmark className="w-4.5 h-4.5" />
            {savedCount > 0 && (
              <span className="absolute -top-1 -right-1 w-4 h-4 rounded-full bg-[#943855] text-white text-[10px] font-semibold flex items-center justify-center tabular-nums">
                {savedCount}
              </span>
            )}
          </a>

          {/* Primary Action Button: Routine Builder */}
          <button
            onClick={onOpenRoutineBuilder}
            className="hidden sm:inline-flex items-center gap-1.5 px-3.5 py-1.5 text-xs font-semibold tracking-wide uppercase text-white bg-[#943855] hover:bg-[#7D2E46] rounded-md transition-colors cursor-pointer shadow-sm whitespace-nowrap shrink-0"
          >
            <Sparkles className="w-3.5 h-3.5" />
            Routine Quiz
          </button>

          {/* Mobile Menu Toggle Button */}
          <button
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            className="md:hidden p-2 text-neutral-600 hover:text-neutral-900 rounded-lg"
            aria-label="Toggle navigation menu"
          >
            {mobileMenuOpen ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
          </button>
        </div>
      </div>

      {/* Mobile Drawer Navigation */}
      {mobileMenuOpen && (
        <div className="md:hidden border-b border-neutral-200 bg-[#FAF8F5] px-6 py-4 space-y-3">
          <nav className="flex flex-col space-y-2">
            {navLinks.map((link) => {
              const href = link.view === 'category'
                ? `/category/${encodeURIComponent(link.category || '')}`
                : link.view === 'home' ? '/' : `/${link.view}`;
              return (
                <a
                  key={link.label}
                  href={href}
                  onClick={(e) => {
                    e.preventDefault();
                    handleLinkClick(link);
                  }}
                  className="text-left py-2 text-base font-medium text-neutral-800 hover:text-[#943855] transition-colors"
                >
                  {link.label}
                </a>
              );
            })}
          </nav>

          <div className="pt-3 border-t border-neutral-200 flex flex-col gap-2">
            <button
              onClick={() => {
                onOpenRoutineBuilder();
                setMobileMenuOpen(false);
              }}
              className="w-full flex items-center justify-center gap-2 py-2.5 text-xs font-semibold uppercase tracking-wider text-white bg-[#943855] rounded-md cursor-pointer"
            >
              <Sparkles className="w-4 h-4" />
              Build My Routine Quiz
            </button>
          </div>
        </div>
      )}
    </header>
  );
};
