import React from 'react';
import { ShieldCheck, HeartHandshake, Sparkles, Award, ArrowRight } from 'lucide-react';
import { aboutImg } from '../data/articles';

interface AboutSectionProps {
  onOpenRoutineBuilder?: () => void;
  onExploreArticles?: () => void;
}

export const AboutSection: React.FC<AboutSectionProps> = ({
  onOpenRoutineBuilder,
  onExploreArticles,
}) => {
  return (
    <section className="bg-[#FAF8F5] py-16 sm:py-24 border-t border-black/[0.06]">
      <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Curatorial Header */}
        <div className="text-center max-w-2xl mx-auto mb-16">
          <div className="inline-flex items-center gap-1.5 text-xs uppercase tracking-widest font-semibold text-[#943855] mb-2">
            <Sparkles className="w-3.5 h-3.5" />
            About The Publication
          </div>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-serif font-medium text-neutral-900 tracking-tight leading-tight">
            The Glow Edit
          </h2>
          <p className="mt-4 text-base sm:text-lg text-neutral-600 font-sans font-light leading-relaxed">
            A modern, independent skincare journal dedicated to Gen Z students and young adults. We translate cosmetic chemistry into affordable, gentle, and biologically sound daily routines.
          </p>
        </div>

        {/* 2-Column Story Split */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-10 items-center mb-16">
          <div className="aspect-[4/3] rounded-2xl overflow-hidden border border-black/[0.06] bg-[#F5EFEB] shadow-xs">
            <img
              src={aboutImg}
              alt="The Glow Edit Curated Skincare Studio and Editorial Vanity"
              className="w-full h-full object-cover"
              referrerPolicy="no-referrer"
            />
          </div>

          <div className="space-y-4 text-sm sm:text-base text-neutral-700 leading-relaxed font-sans">
            <h3 className="text-2xl font-serif font-medium text-neutral-900">
              Why We Started The Glow Edit
            </h3>
            <p>
              Between TikTok trends urging teens to apply 12 active serums and luxury beauty houses charging $180 for standard petroleum jelly blends, modern skincare has become both overwhelming and financially predatory.
            </p>
            <p>
              We believe great skin is not a luxury privilege reserved for high salaries. Your skin’s biological barrier thrives on three simple foundations: gentle cleansing, lipid barrier hydration, and broad-spectrum photoprotection.
            </p>
            <p>
              Our guides are written and reviewed by cosmetic chemists and dermatology residents who inspect raw ingredient decks—not marketing hype. Every recommended product is scrutinized for chemical safety, real price-to-performance, and non-comedogenic comfort.
            </p>
          </div>
        </div>

        {/* Our Core Guiding Principles (Anti-Slop Grid) */}
        <div className="grid grid-cols-1 sm:grid-cols-3 gap-6 mb-16">
          <div className="p-6 rounded-xl bg-white border border-black/[0.06] shadow-2xs">
            <div className="w-10 h-10 rounded-full bg-[#FCECEF] text-[#943855] flex items-center justify-center mb-4">
              <ShieldCheck className="w-5 h-5" />
            </div>
            <h4 className="font-serif text-lg font-medium text-neutral-900 mb-2">
              Barrier Preservation First
            </h4>
            <p className="text-xs text-neutral-600 leading-relaxed">
              We never promote harsh walnut scrubs, 30% peeling solutions for beginners, or stripping alcohol astringents. A calm moisture barrier is non-negotiable.
            </p>
          </div>

          <div className="p-6 rounded-xl bg-white border border-black/[0.06] shadow-2xs">
            <div className="w-10 h-10 rounded-full bg-[#F3EBFA] text-[#7B47B8] flex items-center justify-center mb-4">
              <Sparkles className="w-5 h-5" />
            </div>
            <h4 className="font-serif text-lg font-medium text-neutral-900 mb-2">
              Collegiate Budget Reality
            </h4>
            <p className="text-xs text-neutral-600 leading-relaxed">
              Students shouldn't have to choose between groceries and healthy skin. We spotlight drugstore staples, multi-use products, and jumbo economy sizes.
            </p>
          </div>

          <div className="p-6 rounded-xl bg-white border border-black/[0.06] shadow-2xs">
            <div className="w-10 h-10 rounded-full bg-[#EBF5ED] text-[#2F7341] flex items-center justify-center mb-4">
              <Award className="w-5 h-5" />
            </div>
            <h4 className="font-serif text-lg font-medium text-neutral-900 mb-2">
              No Sponsored Quid Pro Quo
            </h4>
            <p className="text-xs text-neutral-600 leading-relaxed">
              We never accept paid endorsements to give biased five-star reviews. If a viral product causes pilling or contains sensitizing fragrance, we say so.
            </p>
          </div>
        </div>

        {/* Editorial Masthead / Contributors */}
        <div className="p-8 rounded-2xl bg-[#F5EFEB] border border-black/[0.06] mb-16">
          <h3 className="text-xs uppercase tracking-widest font-semibold text-neutral-500 mb-6 text-center">
            The Editorial Masthead
          </h3>

          <div className="grid grid-cols-1 sm:grid-cols-2 gap-8">
            <div className="flex items-start gap-4">
              <img
                src="https://images.unsplash.com/photo-1534528741775-53994a69daeb?auto=format&fit=crop&w=200&q=80"
                alt="Camille Laurent"
                className="w-14 h-14 rounded-full object-cover shrink-0"
              />
              <div>
                <h4 className="font-serif text-lg font-medium text-neutral-900">Camille Laurent</h4>
                <p className="text-xs font-medium text-[#943855] mb-1">Editor-in-Chief &amp; Cosmetic Chemist</p>
                <p className="text-xs text-neutral-600 leading-relaxed">
                  Trained in cosmetic formulation science in Lyon. Camille specializes in emulsion chemistry, molecular stability, and debunking viral TikTok beauty myths.
                </p>
              </div>
            </div>

            <div className="flex items-start gap-4">
              <img
                src="https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?auto=format&fit=crop&w=200&q=80"
                alt="Dr. Maya Lin"
                className="w-14 h-14 rounded-full object-cover shrink-0"
              />
              <div>
                <h4 className="font-serif text-lg font-medium text-neutral-900">Dr. Maya Lin</h4>
                <p className="text-xs font-medium text-[#943855] mb-1">Dermatology Contributor</p>
                <p className="text-xs text-neutral-600 leading-relaxed">
                  Clinical dermatology resident focusing on young adult acne vulgaris, barrier restoration, and post-inflammatory hyperpigmentation.
                </p>
              </div>
            </div>
          </div>
        </div>

        {/* Strict Medical Disclaimer Notice */}
        <div className="p-6 rounded-xl bg-white border border-black/[0.08] text-xs text-neutral-600 leading-relaxed">
          <h4 className="font-semibold text-neutral-900 uppercase tracking-wider text-[11px] mb-2 flex items-center gap-1.5">
            <ShieldCheck className="w-4 h-4 text-[#943855]" />
            Dermatological &amp; Educational Disclaimer
          </h4>
          <p>
            The content published on <strong>The Glow Edit</strong> is designed solely for informational and educational purposes. It does not constitute medical advice, diagnosis, or personalized dermatological treatment. Individual skin chemistry, allergies, and moisture barriers vary considerably. Always perform a 24-hour patch test before introducing new topical products. For persistent inflammatory acne, cystic lesions, or severe skin conditions, please consult a board-certified dermatologist or medical professional.
          </p>
        </div>

        {/* Quick Action Navigation */}
        <div className="mt-12 text-center flex flex-wrap items-center justify-center gap-4">
          {onExploreArticles && (
            <button
              onClick={onExploreArticles}
              className="inline-flex items-center gap-2 px-5 py-2.5 text-xs font-semibold uppercase tracking-wider text-white bg-neutral-900 hover:bg-[#943855] rounded-md transition-colors cursor-pointer"
            >
              Explore All 10 Guides <ArrowRight className="w-3.5 h-3.5" />
            </button>
          )}

          {onOpenRoutineBuilder && (
            <button
              onClick={onOpenRoutineBuilder}
              className="inline-flex items-center gap-2 px-5 py-2.5 text-xs font-semibold uppercase tracking-wider text-[#943855] bg-[#FCECEF] hover:bg-[#F9D5DF] rounded-md transition-colors cursor-pointer"
            >
              <Sparkles className="w-3.5 h-3.5" /> Take Routine Quiz
            </button>
          )}
        </div>

      </div>
    </section>
  );
};
