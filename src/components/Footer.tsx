import React, { useState } from 'react';
import { ArrowRight, Check, Sparkles, ShieldCheck } from 'lucide-react';
import { CategoryType } from '../types';

interface FooterProps {
  onNavigate: (view: string, category?: CategoryType | 'All') => void;
  onOpenRoutineBuilder: () => void;
}

export const Footer: React.FC<FooterProps> = ({
  onNavigate,
  onOpenRoutineBuilder,
}) => {
  const [email, setEmail] = useState('');
  const [subscribed, setSubscribed] = useState(false);

  const handleSubscribe = (e: React.FormEvent) => {
    e.preventDefault();
    if (!email.trim() || !email.includes('@')) return;
    setSubscribed(true);
    setEmail('');
    setTimeout(() => setSubscribed(false), 5000);
  };

  return (
    <footer className="bg-[#1C191A] text-neutral-300 pt-16 pb-12 border-t border-neutral-800">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Main Footer Grid */}
        <div className="grid grid-cols-1 md:grid-cols-12 gap-10 pb-12 border-b border-neutral-800">
          
          {/* Brand & Newsletter Section (Left 6 Cols) */}
          <div className="md:col-span-5 space-y-4">
            <h3 className="text-2xl font-serif font-medium tracking-tight text-white">
              The Glow Edit
            </h3>
            <p className="text-xs text-neutral-400 font-sans leading-relaxed max-w-sm">
              The modern skincare &amp; skin science journal for Gen Z and young adults. Practical routines, cosmetic chemistry, and drugstore economics without the fluff.
            </p>

            {/* Newsletter Box */}
            <div className="pt-2">
              <p className="text-xs font-semibold uppercase tracking-wider text-neutral-300 mb-2">
                The Weekly Glow Digest
              </p>
              <form onSubmit={handleSubscribe} className="flex max-w-sm gap-2">
                <input
                  type="email"
                  required
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  placeholder="Enter your student email..."
                  className="flex-1 px-3 py-2 text-xs rounded-md bg-neutral-900 border border-neutral-700 text-white placeholder:text-neutral-500 focus:outline-hidden focus:border-[#E89FB5]"
                />
                <button
                  type="submit"
                  className="px-4 py-2 text-xs font-semibold uppercase tracking-wider text-white bg-[#943855] hover:bg-[#7D2E46] rounded-md transition-colors cursor-pointer shrink-0"
                >
                  Join
                </button>
              </form>
              {subscribed && (
                <p className="text-xs text-emerald-400 mt-2 flex items-center gap-1.5">
                  <Check className="w-3.5 h-3.5" /> Welcome to The Glow Digest! Check your inbox.
                </p>
              )}
            </div>
          </div>

          {/* Quick Navigation Links (Right 7 Cols) */}
          <div className="md:col-span-7 grid grid-cols-2 sm:grid-cols-3 gap-6 text-xs">
            
            {/* Categories */}
            <div className="space-y-3">
              <h4 className="font-semibold uppercase tracking-widest text-neutral-400 text-[11px]">
                Topics
              </h4>
              <ul className="space-y-2">
                <li>
                  <a
                    href="/category/Skincare"
                    onClick={(e) => {
                      e.preventDefault();
                      onNavigate('category', 'Skincare');
                    }}
                    className="hover:text-white transition-colors cursor-pointer block"
                  >
                    Skincare Basics
                  </a>
                </li>
                <li>
                  <a
                    href="/category/Ingredients"
                    onClick={(e) => {
                      e.preventDefault();
                      onNavigate('category', 'Ingredients');
                    }}
                    className="hover:text-white transition-colors cursor-pointer block"
                  >
                    Ingredient Science
                  </a>
                </li>
                <li>
                  <a
                    href="/category/Acne%20Care"
                    onClick={(e) => {
                      e.preventDefault();
                      onNavigate('category', 'Acne Care');
                    }}
                    className="hover:text-white transition-colors cursor-pointer block"
                  >
                    Acne &amp; Pores
                  </a>
                </li>
                <li>
                  <a
                    href="/category/Product%20Reviews"
                    onClick={(e) => {
                      e.preventDefault();
                      onNavigate('category', 'Product Reviews');
                    }}
                    className="hover:text-white transition-colors cursor-pointer block"
                  >
                    Product Reviews
                  </a>
                </li>
                <li>
                  <a
                    href="/category/Student%20Routines"
                    onClick={(e) => {
                      e.preventDefault();
                      onNavigate('category', 'Student Routines');
                    }}
                    className="hover:text-white transition-colors cursor-pointer block"
                  >
                    Student Routines
                  </a>
                </li>
              </ul>
            </div>

            {/* Guides & Features */}
            <div className="space-y-3">
              <h4 className="font-semibold uppercase tracking-widest text-neutral-400 text-[11px]">
                Features
              </h4>
              <ul className="space-y-2">
                <li>
                  <button
                    onClick={onOpenRoutineBuilder}
                    className="hover:text-white transition-colors cursor-pointer text-[#E89FB5] flex items-center gap-1"
                  >
                    <Sparkles className="w-3 h-3" /> Routine Quiz
                  </button>
                </li>
                <li>
                  <a
                    href="/saved"
                    onClick={(e) => {
                      e.preventDefault();
                      onNavigate('saved');
                    }}
                    className="hover:text-white transition-colors cursor-pointer block"
                  >
                    My Reading List
                  </a>
                </li>
                <li>
                  <a
                    href="/about"
                    onClick={(e) => {
                      e.preventDefault();
                      onNavigate('about');
                    }}
                    className="hover:text-white transition-colors cursor-pointer block"
                  >
                    Editorial Standards
                  </a>
                </li>
                <li>
                  <a
                    href="/484"
                    onClick={(e) => {
                      e.preventDefault();
                      onNavigate('484');
                    }}
                    className="hover:text-white transition-colors cursor-pointer block text-neutral-400"
                  >
                    484 / Help Guide
                  </a>
                </li>
                <li>
                  <a
                    href="#about"
                    onClick={(e) => {
                      e.preventDefault();
                      onNavigate('about');
                    }}
                    className="hover:text-white transition-colors cursor-pointer block"
                  >
                    About Us
                  </a>
                </li>
              </ul>
            </div>

            {/* Ethics & Standards */}
            <div className="space-y-3 col-span-2 sm:col-span-1">
              <h4 className="font-semibold uppercase tracking-widest text-neutral-400 text-[11px]">
                Pillars
              </h4>
              <p className="text-neutral-400 text-[11px] leading-relaxed">
                Peer-reviewed cosmetic chemistry. No viral fearmongering, zero sponsored bias, and genuine student-budget empathy.
              </p>
            </div>

          </div>
        </div>

        {/* Dermatological Disclaimer & Copyright */}
        <div className="pt-8 flex flex-col md:flex-row items-start md:items-center justify-between gap-4 text-[11px] text-neutral-500">
          <p className="max-w-2xl leading-relaxed">
            <strong>Disclaimer:</strong> The Glow Edit does not provide formal medical advice. Articles are prepared for informational &amp; educational purposes only. Always patch-test new products and consult a licensed physician or board-certified dermatologist for chronic acne conditions.
          </p>

          <p className="shrink-0">
            © 2026 The Glow Edit. All rights reserved.
          </p>
        </div>

      </div>
    </footer>
  );
};
