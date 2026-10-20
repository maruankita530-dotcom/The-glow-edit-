import React, { useState, useEffect, useRef } from 'react';
import { Search, X, ArrowRight, Clock } from 'lucide-react';
import { Article } from '../types';

interface SearchModalProps {
  isOpen: boolean;
  onClose: () => void;
  articles: Article[];
  onSelectArticle: (article: Article) => void;
}

export const SearchModal: React.FC<SearchModalProps> = ({
  isOpen,
  onClose,
  articles,
  onSelectArticle,
}) => {
  const [query, setQuery] = useState('');
  const inputRef = useRef<HTMLInputElement>(null);

  useEffect(() => {
    if (isOpen) {
      setTimeout(() => inputRef.current?.focus(), 50);
    } else {
      setQuery('');
    }
  }, [isOpen]);

  if (!isOpen) return null;

  const filteredArticles = query.trim()
    ? articles.filter((a) => {
        const q = query.toLowerCase();
        return (
          a.title.toLowerCase().includes(q) ||
          a.subtitle.toLowerCase().includes(q) ||
          a.summary.toLowerCase().includes(q) ||
          a.category.toLowerCase().includes(q) ||
          a.tags.some((t) => t.toLowerCase().includes(q))
        );
      })
    : articles.slice(0, 4);

  return (
    <div className="fixed inset-0 z-50 bg-black/50 backdrop-blur-xs flex items-start justify-center pt-20 p-4">
      <div className="relative w-full max-w-2xl bg-white rounded-2xl border border-black/[0.1] shadow-2xl overflow-hidden animate-in fade-in duration-150">
        
        {/* Search Input Bar */}
        <div className="flex items-center gap-3 px-5 py-4 border-b border-black/[0.08] bg-[#FAF8F5]">
          <Search className="w-5 h-5 text-neutral-400 shrink-0" />
          <input
            ref={inputRef}
            type="text"
            value={query}
            onChange={(e) => setQuery(e.target.value)}
            placeholder="Search by ingredient, routine, acne, sunscreen..."
            className="w-full text-sm font-sans text-neutral-900 placeholder:text-neutral-400 bg-transparent focus:outline-hidden"
          />
          {query && (
            <button
              onClick={() => setQuery('')}
              className="text-xs text-neutral-400 hover:text-neutral-700 p-1"
            >
              Clear
            </button>
          )}
          <button
            onClick={onClose}
            className="p-1.5 text-neutral-400 hover:text-neutral-700 rounded-full hover:bg-black/[0.04]"
          >
            <X className="w-5 h-5" />
          </button>
        </div>

        {/* Quick Suggestion Pills */}
        <div className="px-5 py-2.5 bg-black/[0.015] border-b border-black/[0.04] flex items-center gap-2 overflow-x-auto text-xs text-neutral-500">
          <span className="text-[11px] text-neutral-400 uppercase tracking-wider shrink-0">Popular:</span>
          {['Niacinamide', 'Sunscreen', 'BHA', 'Student Routine', 'Moisturiser'].map((term) => (
            <button
              key={term}
              onClick={() => setQuery(term)}
              className="px-2 py-0.5 rounded-full bg-white border border-black/[0.06] text-neutral-700 hover:text-[#943855] hover:border-[#943855]/40 transition-colors shrink-0 text-[11px]"
            >
              {term}
            </button>
          ))}
        </div>

        {/* Search Results */}
        <div className="max-h-[60vh] overflow-y-auto divide-y divide-black/[0.04] p-2">
          {filteredArticles.length === 0 ? (
            <div className="py-12 text-center text-neutral-500 text-sm">
              <p>No skincare articles found matching "{query}"</p>
              <p className="text-xs text-neutral-400 mt-1">Try searching for ingredients like "Ceramides", "Hyaluronic", or "Acne"</p>
            </div>
          ) : (
            filteredArticles.map((article) => (
              <div
                key={article.id}
                onClick={() => {
                  onSelectArticle(article);
                  onClose();
                }}
                className="group flex items-start gap-4 p-3 rounded-xl hover:bg-[#FAF8F5] transition-colors cursor-pointer"
              >
                <div className="w-16 h-16 rounded-lg overflow-hidden shrink-0 bg-[#F5EFEB] border border-black/[0.06]">
                  <img
                    src={article.image}
                    alt={article.altText}
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform"
                    referrerPolicy="no-referrer"
                  />
                </div>
                <div className="flex-1 min-w-0">
                  <div className="flex items-center gap-2 text-[11px] text-neutral-500 mb-0.5">
                    <span className="font-semibold text-[#943855]">{article.category}</span>
                    <span aria-hidden="true">·</span>
                    <span className="flex items-center gap-1">
                      <Clock className="w-3 h-3" />
                      {article.readTime}
                    </span>
                  </div>
                  <h4 className="font-serif text-base font-medium text-neutral-900 group-hover:text-[#943855] transition-colors leading-snug line-clamp-1">
                    {article.title}
                  </h4>
                  <p className="text-xs text-neutral-500 line-clamp-1 mt-0.5">
                    {article.summary}
                  </p>
                </div>
                <ArrowRight className="w-4 h-4 text-neutral-400 group-hover:text-[#943855] group-hover:translate-x-1 transition-all shrink-0 self-center" />
              </div>
            ))
          )}
        </div>

        {/* Modal Footer */}
        <div className="px-5 py-3 border-t border-black/[0.06] bg-[#FAF8F5] text-right text-[11px] text-neutral-400">
          Showing {filteredArticles.length} of {articles.length} curated skincare articles
        </div>

      </div>
    </div>
  );
};
