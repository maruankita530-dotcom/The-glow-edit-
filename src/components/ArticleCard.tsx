import React from 'react';
import { Bookmark, BookmarkCheck, ArrowUpRight } from 'lucide-react';
import { Article } from '../types';

interface ArticleCardProps {
  article: Article;
  onSelect: (article: Article) => void;
  isSaved: boolean;
  onToggleSave: (e: React.MouseEvent, article: Article) => void;
  variant?: 'standard' | 'compact' | 'featured';
}

export const ArticleCard: React.FC<ArticleCardProps> = ({
  article,
  onSelect,
  isSaved,
  onToggleSave,
  variant = 'standard',
}) => {
  const [imageError, setImageError] = React.useState(false);

  const handleClick = (e: React.MouseEvent) => {
    // If not a modifier click, prevent default and use client navigation
    if (!e.metaKey && !e.ctrlKey) {
      e.preventDefault();
      onSelect(article);
    }
  };

  if (variant === 'compact') {
    return (
      <article className="group flex items-start gap-4 py-4 border-b border-black/[0.06] hover:bg-black/[0.015] -mx-2 px-2 rounded-lg transition-colors">
        <a
          href={`/article/${article.slug}`}
          onClick={handleClick}
          className="w-20 h-20 sm:w-24 sm:h-24 rounded-lg overflow-hidden shrink-0 border border-black/[0.06] bg-[#F5EFEB] block"
          aria-label={`Read article: ${article.title}`}
        >
          {imageError ? (
            <div className="w-full h-full bg-[#FCECEF] flex items-center justify-center text-[#943855] text-xs font-serif font-semibold">
              The Glow Edit
            </div>
          ) : (
            <img
              src={article.image}
              alt={article.altText}
              width={96}
              height={96}
              loading="lazy"
              decoding="async"
              onError={() => setImageError(true)}
              className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
              referrerPolicy="no-referrer"
            />
          )}
        </a>
        <div className="flex-1 min-w-0">
          {/* Zero-Pill Unboxed Metadata */}
          <div className="flex items-center gap-2 text-xs text-neutral-500 mb-1">
            <span className="font-medium text-[#943855]">{article.category}</span>
            <span aria-hidden="true">·</span>
            <span>{article.readTime}</span>
          </div>
          <h4 className="font-serif text-base sm:text-lg font-medium text-neutral-900 group-hover:text-[#943855] transition-colors line-clamp-2 leading-snug">
            <a href={`/article/${article.slug}`} onClick={handleClick}>
              {article.title}
            </a>
          </h4>
          <p className="text-xs text-neutral-500 mt-1 line-clamp-1">{article.summary}</p>
        </div>
      </article>
    );
  }

  return (
    <article className="group flex flex-col justify-between bg-white rounded-xl border border-black/[0.06] overflow-hidden hover:border-black/[0.12] hover:shadow-md transition-all duration-300">
      <div>
        {/* Image Frame */}
        <div className="relative aspect-[4/3] w-full overflow-hidden bg-[#F5EFEB]">
          <a
            href={`/article/${article.slug}`}
            onClick={handleClick}
            className="block w-full h-full"
            aria-label={`Read article: ${article.title}`}
          >
            {imageError ? (
              <div className="w-full h-full bg-[#FCECEF] flex flex-col items-center justify-center text-[#943855] p-4 text-center">
                <span className="font-serif text-lg font-semibold mb-1">The Glow Edit</span>
                <span className="text-xs text-neutral-500">{article.category}</span>
              </div>
            ) : (
              <img
                src={article.image}
                alt={article.altText}
                width={1200}
                height={896}
                loading="lazy"
                decoding="async"
                onError={() => setImageError(true)}
                className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-104"
                referrerPolicy="no-referrer"
              />
            )}
          </a>

          {/* Bookmark Action */}
          <button
            onClick={(e) => onToggleSave(e, article)}
            className="absolute top-3 right-3 p-2 rounded-full bg-white/90 backdrop-blur-sm text-neutral-700 hover:text-[#943855] hover:bg-white shadow-xs transition-colors cursor-pointer"
            aria-label={isSaved ? 'Remove from reading list' : 'Save to reading list'}
            title={isSaved ? 'Saved' : 'Save article'}
          >
            {isSaved ? (
              <BookmarkCheck className="w-4 h-4 text-[#943855]" />
            ) : (
              <Bookmark className="w-4 h-4" />
            )}
          </button>
        </div>

        {/* Content Body */}
        <div className="p-5 sm:p-6">
          {/* Unboxed Metadata Line with typographic separators */}
          <div className="flex items-center gap-2 text-xs text-neutral-500 mb-2.5">
            <span className="font-medium text-[#943855] uppercase tracking-wider text-[11px]">
              {article.category}
            </span>
            <span aria-hidden="true">·</span>
            <span>{article.readTime}</span>
          </div>

          <h3 className="font-serif text-xl sm:text-2xl font-medium text-neutral-900 group-hover:text-[#943855] transition-colors leading-snug mb-2.5">
            <a href={`/article/${article.slug}`} onClick={handleClick}>
              {article.title}
            </a>
          </h3>

          <p className="text-sm text-neutral-600 line-clamp-3 leading-relaxed mb-4">
            {article.summary}
          </p>
        </div>
      </div>

      {/* Card Footer Byline */}
      <div className="px-5 sm:px-6 pb-5 pt-3 border-t border-black/[0.04] flex items-center justify-between text-xs text-neutral-500">
        <div className="flex items-center gap-2.5">
          <div className="w-6 h-6 rounded-full bg-[#FCECEF] text-[#943855] text-[10px] font-semibold flex items-center justify-center shrink-0">
            {article.author.name.charAt(0)}
          </div>
          <span className="font-medium text-neutral-700">{article.author.name}</span>
        </div>

        <a
          href={`/article/${article.slug}`}
          onClick={handleClick}
          className="inline-flex items-center gap-1 font-medium text-neutral-900 group-hover:text-[#943855] transition-colors cursor-pointer"
        >
          Read <ArrowUpRight className="w-3.5 h-3.5" />
        </a>
      </div>
    </article>
  );
};
