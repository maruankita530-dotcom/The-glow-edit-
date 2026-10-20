import React from 'react';
import { CATEGORIES } from '../data/articles';
import { CategoryType } from '../types';

interface CategoryFilterBarProps {
  activeCategory: string;
  onSelectCategory: (category: CategoryType | 'All') => void;
}

export const CategoryFilterBar: React.FC<CategoryFilterBarProps> = ({
  activeCategory,
  onSelectCategory,
}) => {
  return (
    <div className="w-full border-b border-black/[0.06] bg-[#FAF8F5]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-4">
        
        {/* Interactive Segmented Filter Controls */}
        <div className="flex items-center gap-1.5 overflow-x-auto pb-1 sm:pb-0 scrollbar-none">
          {CATEGORIES.map((cat) => {
            const isActive = activeCategory === cat.id;
            return (
              <button
                key={cat.id}
                onClick={() => onSelectCategory(cat.id as CategoryType | 'All')}
                className={`px-3.5 py-1.5 text-xs font-medium rounded-full transition-all whitespace-nowrap shrink-0 cursor-pointer flex items-center gap-1.5 ${
                  isActive
                    ? 'bg-neutral-900 text-white shadow-xs'
                    : 'text-neutral-600 hover:text-neutral-900 hover:bg-black/[0.04]'
                }`}
              >
                <span>{cat.name}</span>
                <span
                  className={`text-[10px] px-1.5 py-0.2 rounded-full tabular-nums ${
                    isActive
                      ? 'bg-white/20 text-white'
                      : 'bg-black/[0.04] text-neutral-500'
                  }`}
                >
                  {cat.count}
                </span>
              </button>
            );
          })}
        </div>

      </div>
    </div>
  );
};
