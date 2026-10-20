import React from 'react';
import { Bookmark, ArrowLeft, Trash2, ArrowRight } from 'lucide-react';
import { Article } from '../types';
import { ArticleCard } from './ArticleCard';

interface SavedArticlesViewProps {
  savedArticles: Article[];
  onSelectArticle: (article: Article) => void;
  onToggleSave: (e: React.MouseEvent, article: Article) => void;
  onClearAll: () => void;
  onBackToHome: () => void;
}

export const SavedArticlesView: React.FC<SavedArticlesViewProps> = ({
  savedArticles,
  onSelectArticle,
  onToggleSave,
  onClearAll,
  onBackToHome,
}) => {
  return (
    <div className="bg-[#FAF8F5] min-h-screen py-10 sm:py-16">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Navigation Breadcrumb */}
        <div className="mb-8 flex items-center justify-between border-b border-black/[0.06] pb-4">
          <button
            onClick={onBackToHome}
            className="inline-flex items-center gap-1.5 text-xs font-semibold uppercase tracking-wider text-neutral-600 hover:text-[#943855] transition-colors cursor-pointer"
          >
            <ArrowLeft className="w-3.5 h-3.5" /> Back to Articles
          </button>

          {savedArticles.length > 0 && (
            <button
              onClick={onClearAll}
              className="inline-flex items-center gap-1 text-xs text-neutral-400 hover:text-rose-600 transition-colors cursor-pointer"
            >
              <Trash2 className="w-3.5 h-3.5" /> Clear Reading List
            </button>
          )}
        </div>

        {/* View Header */}
        <div className="max-w-2xl mb-12">
          <div className="inline-flex items-center gap-1.5 text-xs uppercase tracking-widest font-semibold text-[#943855] mb-2">
            <Bookmark className="w-3.5 h-3.5" />
            Personal Library
          </div>
          <h1 className="text-3xl sm:text-4xl font-serif font-medium text-neutral-900 tracking-tight">
            Your Saved Reading List
          </h1>
          <p className="mt-2 text-sm text-neutral-600">
            Articles saved to your browser session. Revisit routines, ingredient breakdowns, and product reviews whenever you need them.
          </p>
        </div>

        {/* Saved List or Empty State */}
        {savedArticles.length === 0 ? (
          <div className="text-center py-20 px-4 rounded-2xl border border-dashed border-black/[0.1] bg-white max-w-lg mx-auto">
            <div className="w-12 h-12 rounded-full bg-[#FCECEF] text-[#943855] flex items-center justify-center mx-auto mb-4">
              <Bookmark className="w-6 h-6" />
            </div>
            <h3 className="font-serif text-xl font-medium text-neutral-900 mb-2">
              Your reading list is empty
            </h3>
            <p className="text-xs text-neutral-500 mb-6 max-w-xs mx-auto leading-relaxed">
              Click the bookmark icon on any article card or guide page to save it here for quick reference during your skincare shopping trips.
            </p>
            <button
              onClick={onBackToHome}
              className="inline-flex items-center gap-2 px-5 py-2.5 text-xs font-semibold uppercase tracking-wider text-white bg-neutral-900 hover:bg-[#943855] rounded-md transition-colors cursor-pointer"
            >
              Discover Articles <ArrowRight className="w-3.5 h-3.5" />
            </button>
          </div>
        ) : (
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
            {savedArticles.map((article) => (
              <ArticleCard
                key={article.id}
                article={article}
                onSelect={onSelectArticle}
                isSaved={true}
                onToggleSave={onToggleSave}
              />
            ))}
          </div>
        )}

      </div>
    </div>
  );
};
