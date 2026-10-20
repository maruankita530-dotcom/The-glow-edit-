import React, { useState } from 'react';
import { X, Sparkles, Check, ArrowRight, RotateCcw, Copy, ExternalLink } from 'lucide-react';
import { Article } from '../types';

interface RoutineBuilderModalProps {
  isOpen: boolean;
  onClose: () => void;
  articles: Article[];
  onSelectArticle: (article: Article) => void;
}

export const RoutineBuilderModal: React.FC<RoutineBuilderModalProps> = ({
  isOpen,
  onClose,
  articles,
  onSelectArticle,
}) => {
  const [step, setStep] = useState<1 | 2 | 3 | 4>(1);
  const [skinType, setSkinType] = useState<string>('oily');
  const [concern, setConcern] = useState<string>('acne');
  const [budget, setBudget] = useState<string>('student');
  const [copied, setCopied] = useState(false);

  if (!isOpen) return null;

  // Compute recommended routine based on choices
  const getRoutine = () => {
    if (concern === 'acne') {
      return {
        title: 'Calm & Clarify: Anti-Acne Barrier Regimen',
        totalEstimate: budget === 'student' ? '$23.98' : '$38.48',
        am: [
          { step: 'Cleanse', product: 'Gentle Foaming Water Wash', tip: 'Luke-warm water, 30 seconds' },
          { step: 'Balance', product: 'Niacinamide 2-5% Serum', tip: 'Calms sebum & dims red marks' },
          { step: 'Protect', product: 'Fluid Oil-Free SPF 50+', tip: 'Prevents post-acne marks from browning' }
        ],
        pm: [
          { step: 'Cleanse', product: 'Mild Gel Cleanser', tip: 'Rinses clean without skin tightness' },
          { step: 'Clarify', product: '2% Salicylic Acid (BHA)', tip: '2-3 nights a week inside pore lining' },
          { step: 'Repair', product: 'Oil-Free Hyaluronic Water Gel', tip: 'Replenishes moisture to prevent rebound oil' }
        ],
        recommendedArticleId: 'acne-prone-skincare-routine'
      };
    } else if (concern === 'barrier' || skinType === 'sensitive') {
      return {
        title: 'Barrier Recovery & Redness Relief',
        totalEstimate: budget === 'student' ? '$25.49' : '$42.00',
        am: [
          { step: 'Rinse', product: 'Lukewarm Water Splash (No Cleanser)', tip: 'Preserves overnight natural lipids' },
          { step: 'Soothe', product: 'Centella / Oat Soothing Lotion', tip: 'Reduces vascular reactivity & heat' },
          { step: 'Protect', product: '100% Mineral Zinc Oxide SPF 50', tip: 'Calms and prevents inflammation' }
        ],
        pm: [
          { step: 'Cleanse', product: 'Gentle Non-Foaming Cleanser (Vanicream)', tip: 'Fragrance-free, zero sulfates' },
          { step: 'Moisturize', product: 'Ceramide 3, 6-II Barrier Balm', tip: 'Massage onto damp skin' },
          { step: 'Seal (Optional)', product: 'Light Petrolatum on dry spots', tip: 'Locks in hydration overnight' }
        ],
        recommendedArticleId: 'common-skincare-mistakes'
      };
    } else if (concern === 'hydration' || skinType === 'dry') {
      return {
        title: 'Deep Dew & Barrier Quench Ritual',
        totalEstimate: budget === 'student' ? '$24.50' : '$40.00',
        am: [
          { step: 'Hydrate', product: 'Hydrating Cream Cleanser', tip: 'Never leaves skin squeaky clean' },
          { step: 'Plump', product: 'Hyaluronic Acid Serum on Damp Skin', tip: 'Draws in water molecules' },
          { step: 'Protect', product: 'Dewy Finish Sunscreen Cream SPF 50+', tip: 'Double-duty daily moisture + UV defense' }
        ],
        pm: [
          { step: 'Double Cleanse', product: 'Micellar Water then Hydrating Wash', tip: 'Gently removes day grime' },
          { step: 'Moisturize', product: 'Rich Lipid Cream (Ceramides + Squalane)', tip: 'Replenishes dermal fatty acids' }
        ],
        recommendedArticleId: 'how-to-choose-moisturiser'
      };
    } else {
      // Default: Student Starter Routine
      return {
        title: 'The Collegiate 3-Step Foundation',
        totalEstimate: budget === 'student' ? '$22.00' : '$35.00',
        am: [
          { step: 'Cleanse', product: 'Gentle Daily Cleanser', tip: 'Quick 30-second morning cleanse' },
          { step: 'Hydrate', product: 'Lightweight Daily Lotion', tip: 'Amino acids & glycerin' },
          { step: 'Protect', product: 'Weightless Chemical SPF 50+', tip: 'Zero white cast for classes' }
        ],
        pm: [
          { step: 'Cleanse', product: 'Gentle Daily Cleanser', tip: 'Washes off pollution and sunscreen' },
          { step: 'Moisturize', product: 'Barrier Repair Cream', tip: 'Wake up with balanced, supple skin' }
        ],
        recommendedArticleId: 'affordable-student-skincare-routine'
      };
    }
  };

  const routine = getRoutine();
  const linkedArticle = articles.find((a) => a.id === routine.recommendedArticleId) || articles[0];

  const handleCopyRoutine = () => {
    const text = `The Glow Edit - My Custom Routine:
${routine.title} (Est. ${routine.totalEstimate})

MORNING:
${routine.am.map((i) => `• ${i.step}: ${i.product} (${i.tip})`).join('\n')}

EVENING:
${routine.pm.map((i) => `• ${i.step}: ${i.product} (${i.tip})`).join('\n')}`;

    navigator.clipboard?.writeText(text);
    setCopied(true);
    setTimeout(() => setCopied(false), 2500);
  };

  return (
    <div className="fixed inset-0 z-50 overflow-y-auto bg-black/50 backdrop-blur-xs flex items-center justify-center p-4">
      <div className="relative w-full max-w-xl bg-white rounded-2xl border border-black/[0.1] shadow-2xl p-6 sm:p-8 overflow-hidden animate-in fade-in zoom-in-95 duration-200">
        
        {/* Close Button */}
        <button
          onClick={onClose}
          className="absolute top-4 right-4 p-2 text-neutral-400 hover:text-neutral-700 rounded-full hover:bg-black/[0.04] transition-colors cursor-pointer"
          aria-label="Close modal"
        >
          <X className="w-5 h-5" />
        </button>

        {/* Modal Header */}
        <div className="text-center mb-6">
          <div className="inline-flex items-center gap-1.5 text-xs uppercase tracking-widest font-semibold text-[#943855] mb-1">
            <Sparkles className="w-3.5 h-3.5" />
            Interactive Routine Matcher
          </div>
          <h3 className="font-serif text-2xl sm:text-3xl font-medium text-neutral-900">
            Build Your Tailored Skincare Regimen
          </h3>
          <p className="text-xs text-neutral-500 mt-1">
            Step {step} of 4 — Formulated by cosmetic chemists for real student life.
          </p>
        </div>

        {/* Step 1: Skin Type */}
        {step === 1 && (
          <div className="space-y-4">
            <h4 className="text-sm font-semibold text-neutral-900">What is your primary skin type?</h4>
            <div className="grid grid-cols-2 gap-3 text-xs">
              {[
                { id: 'oily', title: 'Oily', desc: 'Shiny all over, visible pores' },
                { id: 'dry', title: 'Dry', desc: 'Tight, flaky, craves rich cream' },
                { id: 'combination', title: 'Combination', desc: 'Oily T-zone, normal cheeks' },
                { id: 'sensitive', title: 'Sensitive', desc: 'Flushes easily, stings with perfumes' },
              ].map((opt) => (
                <button
                  key={opt.id}
                  onClick={() => setSkinType(opt.id)}
                  className={`p-3.5 rounded-xl border text-left transition-all cursor-pointer ${
                    skinType === opt.id
                      ? 'border-[#943855] bg-[#FDF5F6] text-[#943855]'
                      : 'border-black/[0.08] hover:border-black/[0.2] bg-white text-neutral-800'
                  }`}
                >
                  <p className="font-semibold text-sm mb-0.5">{opt.title}</p>
                  <p className="text-neutral-500 text-[11px]">{opt.desc}</p>
                </button>
              ))}
            </div>
            <div className="pt-4 flex justify-end">
              <button
                onClick={() => setStep(2)}
                className="inline-flex items-center gap-1.5 px-5 py-2 text-xs font-semibold uppercase tracking-wider text-white bg-neutral-900 hover:bg-[#943855] rounded-md transition-colors cursor-pointer"
              >
                Next Step <ArrowRight className="w-3.5 h-3.5" />
              </button>
            </div>
          </div>
        )}

        {/* Step 2: Primary Goal */}
        {step === 2 && (
          <div className="space-y-4">
            <h4 className="text-sm font-semibold text-neutral-900">What is your primary skin goal?</h4>
            <div className="grid grid-cols-2 gap-3 text-xs">
              {[
                { id: 'acne', title: 'Clear Breakouts', desc: 'Pores, blackheads & pimples' },
                { id: 'hydration', title: 'Deep Hydration', desc: 'Parched, dull, flaky skin' },
                { id: 'barrier', title: 'Repair Barrier', desc: 'Stinging, redness & reactivity' },
                { id: 'brighten', title: 'Fade Dark Marks', desc: 'Post-acne marks & uneven tone' },
              ].map((opt) => (
                <button
                  key={opt.id}
                  onClick={() => setConcern(opt.id)}
                  className={`p-3.5 rounded-xl border text-left transition-all cursor-pointer ${
                    concern === opt.id
                      ? 'border-[#943855] bg-[#FDF5F6] text-[#943855]'
                      : 'border-black/[0.08] hover:border-black/[0.2] bg-white text-neutral-800'
                  }`}
                >
                  <p className="font-semibold text-sm mb-0.5">{opt.title}</p>
                  <p className="text-neutral-500 text-[11px]">{opt.desc}</p>
                </button>
              ))}
            </div>
            <div className="pt-4 flex justify-between">
              <button
                onClick={() => setStep(1)}
                className="px-4 py-2 text-xs text-neutral-600 hover:text-neutral-900"
              >
                Back
              </button>
              <button
                onClick={() => setStep(3)}
                className="inline-flex items-center gap-1.5 px-5 py-2 text-xs font-semibold uppercase tracking-wider text-white bg-neutral-900 hover:bg-[#943855] rounded-md transition-colors cursor-pointer"
              >
                Next Step <ArrowRight className="w-3.5 h-3.5" />
              </button>
            </div>
          </div>
        )}

        {/* Step 3: Budget Preference */}
        {step === 3 && (
          <div className="space-y-4">
            <h4 className="text-sm font-semibold text-neutral-900">What is your target monthly budget?</h4>
            <div className="grid grid-cols-2 gap-3 text-xs">
              {[
                { id: 'student', title: 'Student Budget (< $25)', desc: 'CeraVe, The Ordinary, Vanicream' },
                { id: 'flexible', title: 'Flexible Drugstore ($25-$45)', desc: 'La Roche-Posay, Paula’s Choice mini' },
              ].map((opt) => (
                <button
                  key={opt.id}
                  onClick={() => setBudget(opt.id)}
                  className={`p-4 rounded-xl border text-left transition-all cursor-pointer ${
                    budget === opt.id
                      ? 'border-[#943855] bg-[#FDF5F6] text-[#943855]'
                      : 'border-black/[0.08] hover:border-black/[0.2] bg-white text-neutral-800'
                  }`}
                >
                  <p className="font-semibold text-sm mb-0.5">{opt.title}</p>
                  <p className="text-neutral-500 text-[11px]">{opt.desc}</p>
                </button>
              ))}
            </div>
            <div className="pt-4 flex justify-between">
              <button
                onClick={() => setStep(2)}
                className="px-4 py-2 text-xs text-neutral-600 hover:text-neutral-900"
              >
                Back
              </button>
              <button
                onClick={() => setStep(4)}
                className="inline-flex items-center gap-1.5 px-5 py-2 text-xs font-semibold uppercase tracking-wider text-white bg-[#943855] hover:bg-[#7D2E46] rounded-md transition-colors cursor-pointer"
              >
                Generate My Routine ✨
              </button>
            </div>
          </div>
        )}

        {/* Step 4: Tailored Result */}
        {step === 4 && (
          <div className="space-y-5">
            <div className="p-4 rounded-xl bg-[#FDF5F6] border border-black/[0.06]">
              <div className="flex items-center justify-between text-xs text-neutral-600 mb-1">
                <span className="font-semibold uppercase tracking-wider text-[#943855]">Tailored Result</span>
                <span className="font-mono text-neutral-900 font-bold tabular-nums">Est. Total: {routine.totalEstimate}</span>
              </div>
              <h4 className="font-serif text-xl font-medium text-neutral-900">
                {routine.title}
              </h4>
            </div>

            {/* AM & PM Steps */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 text-xs">
              {/* AM */}
              <div className="p-3.5 rounded-lg border border-black/[0.08] bg-[#FAF8F5]">
                <p className="font-semibold uppercase tracking-wider text-neutral-800 mb-2">Morning (AM)</p>
                <div className="space-y-2">
                  {routine.am.map((item, idx) => (
                    <div key={idx} className="pb-2 border-b border-black/[0.04] last:border-0 last:pb-0">
                      <p className="font-medium text-neutral-900">
                        {idx + 1}. {item.step}: <span className="font-normal text-neutral-700">{item.product}</span>
                      </p>
                      <p className="text-[11px] text-neutral-500">{item.tip}</p>
                    </div>
                  ))}
                </div>
              </div>

              {/* PM */}
              <div className="p-3.5 rounded-lg border border-black/[0.08] bg-[#FAF8F5]">
                <p className="font-semibold uppercase tracking-wider text-neutral-800 mb-2">Evening (PM)</p>
                <div className="space-y-2">
                  {routine.pm.map((item, idx) => (
                    <div key={idx} className="pb-2 border-b border-black/[0.04] last:border-0 last:pb-0">
                      <p className="font-medium text-neutral-900">
                        {idx + 1}. {item.step}: <span className="font-normal text-neutral-700">{item.product}</span>
                      </p>
                      <p className="text-[11px] text-neutral-500">{item.tip}</p>
                    </div>
                  ))}
                </div>
              </div>
            </div>

            {/* Recommended In-Depth Guide */}
            <div className="p-3.5 rounded-lg border border-black/[0.08] bg-white flex items-center justify-between gap-3 text-xs">
              <div>
                <p className="text-[11px] uppercase tracking-wider text-neutral-500">Recommended Deep Dive</p>
                <p className="font-serif text-sm font-medium text-neutral-900">{linkedArticle.title}</p>
              </div>
              <button
                onClick={() => {
                  onSelectArticle(linkedArticle);
                  onClose();
                }}
                className="shrink-0 px-3 py-1.5 text-[11px] font-semibold text-[#943855] hover:bg-[#FCECEF] rounded transition-colors inline-flex items-center gap-1 cursor-pointer"
              >
                Read Guide <ExternalLink className="w-3 h-3" />
              </button>
            </div>

            {/* Action Buttons */}
            <div className="pt-2 flex items-center justify-between">
              <button
                onClick={() => setStep(1)}
                className="inline-flex items-center gap-1 text-xs text-neutral-500 hover:text-neutral-800 cursor-pointer"
              >
                <RotateCcw className="w-3.5 h-3.5" /> Retake
              </button>
              
              <button
                onClick={handleCopyRoutine}
                className="inline-flex items-center gap-1.5 px-4 py-2 text-xs font-semibold uppercase tracking-wider text-white bg-neutral-900 hover:bg-[#943855] rounded-md transition-colors cursor-pointer"
              >
                {copied ? <Check className="w-3.5 h-3.5 text-emerald-400" /> : <Copy className="w-3.5 h-3.5" />}
                {copied ? 'Routine Copied!' : 'Copy Routine'}
              </button>
            </div>
          </div>
        )}

      </div>
    </div>
  );
};
