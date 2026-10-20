import React, { useState, useEffect } from 'react';
import { 
  ArrowLeft, 
  Bookmark, 
  BookmarkCheck, 
  Share2, 
  Check, 
  Heart, 
  HelpCircle,
  MessageCircle,
  Clock,
  Sparkles,
  ChevronDown,
  ChevronUp,
  Tag
} from 'lucide-react';
import { Article, UserComment } from '../types';

interface ArticleDetailProps {
  article: Article;
  allArticles: Article[];
  onBack: () => void;
  onSelectArticle: (article: Article) => void;
  onNavigateCategory?: (category: Article['category']) => void;
  isSaved: boolean;
  onToggleSave: (e: React.MouseEvent, article: Article) => void;
}

export const ArticleDetail: React.FC<ArticleDetailProps> = ({
  article,
  allArticles,
  onBack,
  onSelectArticle,
  onNavigateCategory,
  isSaved,
  onToggleSave,
}) => {
  const [mainImgError, setMainImgError] = useState(false);
  const [scrollProgress, setScrollProgress] = useState(0);
  const [copied, setCopied] = useState(false);
  const [helpfulVotes, setHelpfulVotes] = useState(42);
  const [hasVoted, setHasVoted] = useState(false);
  const [openFaqIndex, setOpenFaqIndex] = useState<number | null>(0);
  const [fontSizeLarge, setFontSizeLarge] = useState(false);

  // Comments state
  const [comments, setComments] = useState<UserComment[]>([
    {
      id: 'c1',
      articleId: article.id,
      author: 'Sophia K. (Dorm Life)',
      date: '2 days ago',
      text: 'This cleared up so much confusion! I was using both BHA and Retinol on the same evening and my barrier was crying. Stripped back to just cleanser and moisturiser for a week and the stinging stopped completely.',
    },
    {
      id: 'c2',
      articleId: article.id,
      author: 'Liam Chen',
      date: 'Yesterday',
      text: 'The student budget breakdown was so appreciated. Most YouTube dermatologists recommend $70 creams that college students simply cannot afford.',
    }
  ]);
  const [newCommentName, setNewCommentName] = useState('');
  const [newCommentText, setNewCommentText] = useState('');
  const [commentSuccess, setCommentSuccess] = useState(false);

  // Track scroll depth
  useEffect(() => {
    const handleScroll = () => {
      const totalScroll = document.documentElement.scrollTop;
      const windowHeight = document.documentElement.scrollHeight - document.documentElement.clientHeight;
      if (windowHeight > 0) {
        setScrollProgress(Math.min(100, Math.max(0, (totalScroll / windowHeight) * 100)));
      }
    };

    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  // Handle Share click
  const handleShare = () => {
    navigator.clipboard?.writeText(window.location.href);
    setCopied(true);
    setTimeout(() => setCopied(false), 2500);
  };

  // Handle Vote
  const handleVote = () => {
    if (!hasVoted) {
      setHelpfulVotes((v) => v + 1);
      setHasVoted(true);
    }
  };

  // Handle Add Comment
  const handleAddComment = (e: React.FormEvent) => {
    e.preventDefault();
    if (!newCommentText.trim()) return;

    const newComment: UserComment = {
      id: `c_${Date.now()}`,
      articleId: article.id,
      author: newCommentName.trim() || 'Fellow Skincare Reader',
      date: 'Just now',
      text: newCommentText.trim(),
    };

    setComments((prev) => [newComment, ...prev]);
    setNewCommentName('');
    setNewCommentText('');
    setCommentSuccess(true);
    setTimeout(() => setCommentSuccess(false), 4000);
  };

  // Related articles (filter out current article)
  const relatedArticles = allArticles
    .filter((a) => a.id !== article.id && (a.category === article.category || a.tags.some((t) => article.tags.includes(t))))
    .slice(0, 3);

  return (
    <div className="bg-[#FAF8F5] min-h-screen pb-20">
      
      {/* Reading Progress Indicator */}
      <div 
        className="fixed top-0 left-0 h-1 bg-[#943855] z-50 transition-all duration-150"
        style={{ width: `${scrollProgress}%` }}
        role="progressbar"
        aria-valuenow={Math.round(scrollProgress)}
        aria-valuemin={0}
        aria-valuemax={100}
      />

      {/* Breadcrumb & Navigation Sub-Bar */}
      <div className="border-b border-black/[0.06] bg-[#FAF8F5]/80 backdrop-blur-xs">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-3.5 flex items-center justify-between gap-4 text-xs text-neutral-500">
          
          <div className="flex items-center gap-2 overflow-hidden text-ellipsis whitespace-nowrap">
            <a
              href="#home"
              onClick={(e) => {
                e.preventDefault();
                onBack();
              }}
              className="inline-flex items-center gap-1.5 font-medium text-neutral-700 hover:text-[#943855] transition-colors cursor-pointer"
            >
              <ArrowLeft className="w-3.5 h-3.5" />
              <span>Home</span>
            </a>
            <span aria-hidden="true" className="text-neutral-300">/</span>
            <a
              href={`#category/${encodeURIComponent(article.category)}`}
              onClick={(e) => {
                e.preventDefault();
                if (onNavigateCategory) {
                  onNavigateCategory(article.category);
                } else {
                  window.location.hash = `category/${encodeURIComponent(article.category)}`;
                }
              }}
              className="font-medium text-[#943855] hover:underline transition-all cursor-pointer"
            >
              {article.category}
            </a>
            <span aria-hidden="true" className="text-neutral-300 hidden sm:inline">/</span>
            <span className="truncate hidden sm:inline text-neutral-600">{article.title}</span>
          </div>

          <div className="flex items-center gap-3 shrink-0">
            {/* Font Size Toggle */}
            <button
              onClick={() => setFontSizeLarge(!fontSizeLarge)}
              className="px-2 py-1 text-[11px] font-medium border border-black/[0.08] rounded hover:bg-black/[0.03] transition-colors cursor-pointer"
              title="Toggle reading font size"
            >
              {fontSizeLarge ? 'Aa Normal' : 'Aa Large'}
            </button>

            {/* Share */}
            <button
              onClick={handleShare}
              className="inline-flex items-center gap-1 text-neutral-600 hover:text-neutral-900 transition-colors p-1 cursor-pointer"
              title="Share article link"
            >
              {copied ? <Check className="w-4 h-4 text-emerald-600" /> : <Share2 className="w-4 h-4" />}
              <span className="text-[11px] hidden sm:inline">{copied ? 'Link Copied!' : 'Share'}</span>
            </button>

            {/* Bookmark */}
            <button
              onClick={(e) => onToggleSave(e, article)}
              className="inline-flex items-center gap-1 text-neutral-600 hover:text-[#943855] transition-colors p-1 cursor-pointer"
              title={isSaved ? 'Remove from saved' : 'Save article'}
            >
              {isSaved ? (
                <BookmarkCheck className="w-4 h-4 text-[#943855]" />
              ) : (
                <Bookmark className="w-4 h-4" />
              )}
              <span className="text-[11px] hidden sm:inline">{isSaved ? 'Saved' : 'Save'}</span>
            </button>
          </div>

        </div>
      </div>

      {/* Main Article Header */}
      <header className="max-w-4xl mx-auto px-4 sm:px-6 pt-10 pb-8 text-center">
        {/* Zero-Pill Unboxed Metadata */}
        <div className="inline-flex items-center gap-2 text-xs text-neutral-500 uppercase tracking-widest font-medium mb-4">
          <a
            href={`#category/${encodeURIComponent(article.category)}`}
            onClick={(e) => {
              e.preventDefault();
              if (onNavigateCategory) onNavigateCategory(article.category);
              else window.location.hash = `category/${encodeURIComponent(article.category)}`;
            }}
            className="text-[#943855] hover:underline"
          >
            {article.category}
          </a>
          <span aria-hidden="true">·</span>
          <span>{article.date}</span>
          <span aria-hidden="true">·</span>
          <span className="inline-flex items-center gap-1">
            <Clock className="w-3.5 h-3.5 inline text-neutral-400" />
            {article.readTime}
          </span>
        </div>

        <h1 className="text-3xl sm:text-4xl lg:text-5xl font-serif font-medium tracking-tight text-neutral-900 leading-[1.14] mb-5 text-balance">
          {article.title}
        </h1>

        <p className="text-lg sm:text-xl text-neutral-600 font-sans leading-relaxed max-w-2xl mx-auto mb-8 font-light">
          {article.subtitle}
        </p>

        {/* Curatorial Byline */}
        <div className="inline-flex items-center gap-3 py-2 px-4 rounded-full bg-black/[0.02] border border-black/[0.04]">
          <div className="w-9 h-9 rounded-full bg-[#FCECEF] text-[#943855] text-xs font-semibold flex items-center justify-center shrink-0">
            {article.author.name.charAt(0)}
          </div>
          <div className="text-left text-xs">
            <p className="font-semibold text-neutral-900">{article.author.name}</p>
            <p className="text-neutral-500 text-[11px]">{article.author.role}</p>
          </div>
        </div>
      </header>

      {/* Full-Bleed Article Visual Presentation */}
      <div className="max-w-5xl mx-auto px-4 sm:px-6 mb-12">
        <figure className="rounded-2xl overflow-hidden border border-black/[0.06] bg-[#F5EFEB] shadow-xs">
          <div className="aspect-[16/9] w-full bg-[#F5EFEB]">
            {mainImgError ? (
              <div className="w-full h-full bg-[#FCECEF] flex flex-col items-center justify-center text-[#943855] p-8 text-center">
                <span className="font-serif text-2xl font-semibold mb-2">The Glow Edit</span>
                <span className="text-sm text-neutral-600">{article.title}</span>
              </div>
            ) : (
              <img
                src={article.image}
                alt={article.altText}
                onError={() => setMainImgError(true)}
                className="w-full h-full object-cover"
                referrerPolicy="no-referrer"
              />
            )}
          </div>
          <figcaption className="p-3 text-center text-xs font-serif text-neutral-500 italic bg-white border-t border-black/[0.04]">
            {article.caption}
          </figcaption>
        </figure>
      </div>

      {/* 2-Column Asymmetric Reading Grid */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 items-start">
          
          {/* Main Reading Column (Constrained to max-w-prose / 65-75ch) */}
          <main className="lg:col-span-8 lg:max-w-2xl">
            
            {/* Key Takeaways Card */}
            {article.keyTakeaways && (
              <div className="mb-10 p-6 rounded-xl bg-[#FBF9F5] border border-black/[0.08] shadow-2xs">
                <div className="flex items-center gap-2 mb-3 text-xs uppercase tracking-wider font-semibold text-[#943855]">
                  <Sparkles className="w-3.5 h-3.5" />
                  Key Clinical Takeaways
                </div>
                <ul className="space-y-2.5 text-sm text-neutral-700 leading-relaxed">
                  {article.keyTakeaways.map((point, idx) => (
                    <li key={idx} className="flex items-start gap-2.5">
                      <span className="w-1.5 h-1.5 rounded-full bg-[#943855] mt-2 shrink-0" />
                      <span>{point}</span>
                    </li>
                  ))}
                </ul>
              </div>
            )}

            {/* Sections Flow */}
            <div className={`space-y-10 font-sans text-neutral-800 leading-relaxed ${fontSizeLarge ? 'text-lg' : 'text-base'}`}>
              {article.sections.map((section, sIdx) => (
                <section key={section.id} id={section.id} className="scroll-mt-24">
                  <h2 className="text-2xl sm:text-3xl font-serif font-medium text-neutral-900 tracking-tight mb-4">
                    {section.heading}
                  </h2>

                  {/* Section Paragraphs (first paragraph gets drop cap on first section) */}
                  <div className="space-y-4">
                    {section.paragraphs.map((p, pIdx) => (
                      <p 
                        key={pIdx} 
                        className={sIdx === 0 && pIdx === 0 ? 'editorial-drop-cap' : ''}
                      >
                        {p}
                      </p>
                    ))}
                  </div>

                  {/* Scientific Callout Box (Subtle hairline border, NO thick left accent border per anti-slop rules) */}
                  {section.callout && (
                    <div className="my-6 p-5 rounded-lg border border-black/[0.08] bg-[#FDF5F6]">
                      <div className="flex items-center gap-2 text-xs font-semibold uppercase tracking-wider text-[#943855] mb-2">
                        <Sparkles className="w-3.5 h-3.5" />
                        {section.callout.title}
                      </div>
                      <p className="text-sm text-neutral-700 italic">
                        "{section.callout.text}"
                      </p>
                    </div>
                  )}

                  {/* List Items if any */}
                  {section.listItems && (
                    <div className="my-5 p-4 rounded-lg bg-black/[0.02] border border-black/[0.06]">
                      <ul className="space-y-2 text-sm text-neutral-700">
                        {section.listItems.map((item, lIdx) => (
                          <li key={lIdx} className="flex items-start gap-2">
                            <span className="text-[#943855] font-bold">›</span>
                            <span>{item}</span>
                          </li>
                        ))}
                      </ul>
                    </div>
                  )}

                  {/* Comparison Table if present */}
                  {section.tableData && (
                    <div className="my-6 overflow-x-auto rounded-lg border border-black/[0.08]">
                      <table className="w-full text-left text-xs sm:text-sm">
                        <thead className="bg-[#F5EFEB] border-b border-black/[0.08] font-medium text-neutral-800">
                          <tr>
                            {section.tableData.headers.map((h, hIdx) => (
                              <th key={hIdx} className="px-4 py-3">{h}</th>
                            ))}
                          </tr>
                        </thead>
                        <tbody className="divide-y divide-black/[0.06] bg-white">
                          {section.tableData.rows.map((row, rIdx) => (
                            <tr key={rIdx} className="hover:bg-black/[0.015]">
                              {row.map((cell, cIdx) => (
                                <td key={cIdx} className={`px-4 py-3 text-neutral-700 ${cIdx === 0 ? 'font-medium text-neutral-900' : ''}`}>
                                  {cell}
                                </td>
                              ))}
                            </tr>
                          ))}
                        </tbody>
                      </table>
                    </div>
                  )}
                </section>
              ))}
            </div>

            {/* Do's and Don'ts Checklist */}
            {article.dosAndDonts && (
              <div className="mt-12 pt-8 border-t border-black/[0.08]">
                <h3 className="text-2xl font-serif font-medium text-neutral-900 mb-6">
                  The Fast Do’s &amp; Don’ts Checklist
                </h3>
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  {/* Dos */}
                  <div className="p-5 rounded-xl border border-emerald-200 bg-emerald-50/40">
                    <h4 className="text-xs uppercase tracking-wider font-semibold text-emerald-800 mb-3 flex items-center gap-1.5">
                      <Check className="w-4 h-4 text-emerald-600" />
                      Recommended Practices
                    </h4>
                    <ul className="space-y-2 text-xs sm:text-sm text-neutral-700">
                      {article.dosAndDonts.dos.map((doItem, idx) => (
                        <li key={idx} className="flex items-start gap-2">
                          <span className="text-emerald-600 font-bold">✓</span>
                          <span>{doItem}</span>
                        </li>
                      ))}
                    </ul>
                  </div>

                  {/* Donts */}
                  <div className="p-5 rounded-xl border border-rose-200 bg-rose-50/40">
                    <h4 className="text-xs uppercase tracking-wider font-semibold text-rose-800 mb-3 flex items-center gap-1.5">
                      <span className="font-bold text-rose-600">✕</span>
                      Pitfalls to Avoid
                    </h4>
                    <ul className="space-y-2 text-xs sm:text-sm text-neutral-700">
                      {article.dosAndDonts.donts.map((dontItem, idx) => (
                        <li key={idx} className="flex items-start gap-2">
                          <span className="text-rose-600 font-bold">✕</span>
                          <span>{dontItem}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>
              </div>
            )}

            {/* Recommended Products Grid */}
            {article.recommendedPicks && article.recommendedPicks.length > 0 && (
              <div className="mt-12 pt-8 border-t border-black/[0.08]">
                <div className="flex items-center justify-between mb-6">
                  <div>
                    <h3 className="text-2xl font-serif font-medium text-neutral-900">
                      Derm-Approved Student Picks
                    </h3>
                    <p className="text-xs text-neutral-500 mt-1">
                      Tested formulations accessible at standard campus drugstores.
                    </p>
                  </div>
                </div>

                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  {article.recommendedPicks.map((product, pIdx) => (
                    <div
                      key={pIdx}
                      className="p-4 rounded-xl border border-black/[0.08] bg-white hover:border-black/[0.14] transition-all"
                    >
                      <div className="flex items-center justify-between text-xs text-neutral-500 mb-1">
                        <span className="font-medium text-[#943855]">{product.role}</span>
                        <span className="font-medium text-neutral-900 tabular-nums">{product.price}</span>
                      </div>
                      <h4 className="font-serif text-lg font-medium text-neutral-900 mb-1">
                        {product.name}
                      </h4>
                      <p className="text-xs text-neutral-500 mb-2">by {product.brand}</p>
                      
                      <div className="text-xs space-y-1 pt-2 border-t border-black/[0.04]">
                        <p className="text-neutral-600">
                          <span className="font-medium text-neutral-800">Key: </span>
                          {product.keyIngredient}
                        </p>
                        <p className="text-neutral-500 text-[11px]">
                          <span className="font-medium text-neutral-700">Best for: </span>
                          {product.bestFor}
                        </p>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            )}

            {/* Frequently Asked Questions */}
            {article.faq && article.faq.length > 0 && (
              <div className="mt-12 pt-8 border-t border-black/[0.08]">
                <h3 className="text-2xl font-serif font-medium text-neutral-900 mb-4">
                  Frequently Asked Questions
                </h3>
                <div className="divide-y divide-black/[0.08] border-y border-black/[0.08]">
                  {article.faq.map((item, fIdx) => (
                    <div key={fIdx} className="py-4">
                      <button
                        onClick={() => setOpenFaqIndex(openFaqIndex === fIdx ? null : fIdx)}
                        className="w-full flex items-center justify-between text-left text-base font-medium text-neutral-900 hover:text-[#943855] transition-colors cursor-pointer"
                      >
                        <span>{item.question}</span>
                        {openFaqIndex === fIdx ? (
                          <ChevronUp className="w-4 h-4 text-[#943855] shrink-0 ml-2" />
                        ) : (
                          <ChevronDown className="w-4 h-4 text-neutral-400 shrink-0 ml-2" />
                        )}
                      </button>
                      {openFaqIndex === fIdx && (
                        <p className="mt-3 text-sm text-neutral-600 leading-relaxed pr-6">
                          {item.answer}
                        </p>
                      )}
                    </div>
                  ))}
                </div>
              </div>
            )}

            {/* Tags line */}
            <div className="mt-10 pt-6 border-t border-black/[0.08] flex flex-wrap items-center gap-2 text-xs text-neutral-500">
              <span className="inline-flex items-center gap-1 font-medium text-neutral-700">
                <Tag className="w-3.5 h-3.5" /> Filed under:
              </span>
              {article.tags.map((tag) => (
                <span key={tag} className="text-neutral-600 hover:text-[#943855] transition-colors">
                  #{tag}
                </span>
              ))}
            </div>

            {/* Feedback & Reaction Strip */}
            <div className="mt-8 p-6 rounded-xl bg-white border border-black/[0.08] flex flex-col sm:flex-row items-center justify-between gap-4">
              <div>
                <p className="text-sm font-medium text-neutral-900">Was this skincare guide helpful?</p>
                <p className="text-xs text-neutral-500">Join {helpfulVotes} readers who found this guide insightful.</p>
              </div>
              <button
                onClick={handleVote}
                disabled={hasVoted}
                className={`inline-flex items-center gap-2 px-4 py-2 text-xs font-semibold uppercase tracking-wider rounded-md transition-all cursor-pointer ${
                  hasVoted
                    ? 'bg-emerald-50 text-emerald-700 border border-emerald-200'
                    : 'bg-[#FAF8F5] text-neutral-800 hover:bg-[#FCECEF] hover:text-[#943855] border border-black/[0.08]'
                }`}
              >
                <Heart className={`w-4 h-4 ${hasVoted ? 'fill-emerald-600 text-emerald-600' : 'text-[#943855]'}`} />
                {hasVoted ? 'Thank you for voting!' : 'Helpful Guide'}
              </button>
            </div>

            {/* Comments Section */}
            <div className="mt-12 pt-8 border-t border-black/[0.08]">
              <div className="flex items-center justify-between mb-6">
                <h3 className="text-2xl font-serif font-medium text-neutral-900 flex items-center gap-2">
                  <MessageCircle className="w-5 h-5 text-[#943855]" />
                  Community Q&amp;A &amp; Discussion
                </h3>
                <span className="text-xs text-neutral-500 tabular-nums">{comments.length} comments</span>
              </div>

              {/* Add Comment Form */}
              <form onSubmit={handleAddComment} className="mb-8 p-5 rounded-xl bg-white border border-black/[0.08] space-y-3">
                <p className="text-xs font-medium text-neutral-800 uppercase tracking-wider">Leave a thought or ask a skincare question</p>
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                  <input
                    type="text"
                    placeholder="Your Name (or anonymous)"
                    value={newCommentName}
                    onChange={(e) => setNewCommentName(e.target.value)}
                    className="w-full text-xs px-3 py-2 rounded-md border border-black/[0.1] bg-[#FAF8F5] focus:outline-hidden focus:border-[#943855]"
                  />
                </div>
                <textarea
                  rows={3}
                  required
                  placeholder="Share your experience with this ingredient, ask about your current routine..."
                  value={newCommentText}
                  onChange={(e) => setNewCommentText(e.target.value)}
                  className="w-full text-xs px-3 py-2 rounded-md border border-black/[0.1] bg-[#FAF8F5] focus:outline-hidden focus:border-[#943855]"
                />
                <div className="flex items-center justify-between">
                  <span className="text-[11px] text-neutral-400">Be kind &amp; respect individual skin differences.</span>
                  <button
                    type="submit"
                    className="px-4 py-2 text-xs font-semibold uppercase tracking-wider text-white bg-neutral-900 hover:bg-[#943855] rounded-md transition-colors cursor-pointer"
                  >
                    Post Comment
                  </button>
                </div>
                {commentSuccess && (
                  <p className="text-xs text-emerald-600 mt-2 flex items-center gap-1">
                    <Check className="w-3.5 h-3.5" /> Your comment has been added!
                  </p>
                )}
              </form>

              {/* Comments List */}
              <div className="space-y-4">
                {comments.map((comment) => (
                  <div key={comment.id} className="p-4 rounded-lg bg-white border border-black/[0.06] text-xs space-y-1.5">
                    <div className="flex items-center justify-between text-neutral-500">
                      <span className="font-semibold text-neutral-800">{comment.author}</span>
                      <span>{comment.date}</span>
                    </div>
                    <p className="text-neutral-700 leading-relaxed text-sm font-sans">{comment.text}</p>
                  </div>
                ))}
              </div>
            </div>

          </main>

          {/* Right Margin Sidebar (Desktop Only: Table of Contents & Quick Summary) */}
          <aside className="hidden lg:block lg:col-span-4 sticky top-24 space-y-6">
            
            {/* Table of Contents */}
            <div className="p-5 rounded-xl bg-white border border-black/[0.08] shadow-2xs">
              <h4 className="text-xs uppercase tracking-widest font-semibold text-neutral-900 mb-3 border-b border-black/[0.06] pb-2">
                Table of Contents
              </h4>
              <nav className="space-y-2 text-xs text-neutral-600">
                {article.sections.map((section, idx) => (
                  <a
                    key={section.id}
                    href={`#${section.id}`}
                    className="block hover:text-[#943855] hover:translate-x-1 transition-all py-1"
                  >
                    <span className="text-neutral-400 font-mono text-[11px] mr-1.5">0{idx + 1}.</span>
                    {section.heading.replace(/^\d+\.\s*/, '')}
                  </a>
                ))}
              </nav>
            </div>

            {/* Author Profile Card */}
            <div className="p-5 rounded-xl bg-[#FBF9F5] border border-black/[0.08]">
              <div className="flex items-center gap-3 mb-3">
                <img
                  src={article.author.avatar}
                  alt={article.author.name}
                  className="w-12 h-12 rounded-full object-cover"
                />
                <div>
                  <h4 className="font-medium text-sm text-neutral-900">{article.author.name}</h4>
                  <p className="text-xs text-neutral-500">{article.author.role}</p>
                </div>
              </div>
              <p className="text-xs text-neutral-600 leading-relaxed mb-4">
                Dedicated to translating complex peer-reviewed dermatological studies into practical, affordable daily habits for students and young adults.
              </p>
              <div className="pt-3 border-t border-black/[0.06] text-[11px] text-neutral-500">
                Editorial Review Board Certified
              </div>
            </div>

            {/* Quick Consultation Prompt */}
            <div className="p-5 rounded-xl bg-[#FDF5F6] border border-black/[0.08] text-center">
              <HelpCircle className="w-6 h-6 text-[#943855] mx-auto mb-2" />
              <h4 className="font-serif text-lg font-medium text-neutral-900 mb-1">
                Need a Routine Check?
              </h4>
              <p className="text-xs text-neutral-600 mb-4 leading-relaxed">
                Take our 2-minute personalized routine builder quiz to discover your ideal daily ritual.
              </p>
              <button
                onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}
                className="w-full py-2 text-xs font-semibold uppercase tracking-wider text-white bg-[#943855] hover:bg-[#7D2E46] rounded-md transition-colors cursor-pointer"
              >
                Start Quiz
              </button>
            </div>

          </aside>

        </div>
      </div>

      {/* Up Next / Related Articles */}
      {relatedArticles.length > 0 && (
        <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 mt-20 pt-12 border-t border-black/[0.08]">
          <div className="flex items-center justify-between mb-8">
            <div>
              <span className="text-xs uppercase tracking-widest text-neutral-500 font-medium">Continue Reading</span>
              <h3 className="text-2xl sm:text-3xl font-serif font-medium text-neutral-900 mt-1">
                Related Skincare Guides
              </h3>
            </div>
            <a
              href="#home"
              onClick={(e) => {
                e.preventDefault();
                onBack();
              }}
              className="text-xs font-semibold uppercase tracking-wider text-[#943855] hover:text-[#7D2E46] transition-colors cursor-pointer"
            >
              View All Articles →
            </a>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {relatedArticles.map((rel) => (
              <a
                key={rel.id}
                href={`#article/${rel.slug}`}
                onClick={(e) => {
                  if (!e.metaKey && !e.ctrlKey) {
                    e.preventDefault();
                    onSelectArticle(rel);
                    window.scrollTo({ top: 0, behavior: 'smooth' });
                  }
                }}
                className="group p-4 rounded-xl bg-white border border-black/[0.06] hover:border-black/[0.12] transition-all cursor-pointer flex flex-col justify-between block"
              >
                <div>
                  <div className="aspect-[4/3] rounded-lg overflow-hidden bg-[#F5EFEB] mb-3">
                    <img
                      src={rel.image}
                      alt={rel.altText}
                      className="w-full h-full object-cover group-hover:scale-104 transition-transform duration-300"
                      referrerPolicy="no-referrer"
                    />
                  </div>
                  <div className="text-[11px] text-[#943855] font-medium uppercase tracking-wider mb-1">
                    {rel.category} · {rel.readTime}
                  </div>
                  <h4 className="font-serif text-lg font-medium text-neutral-900 group-hover:text-[#943855] transition-colors leading-snug line-clamp-2">
                    {rel.title}
                  </h4>
                </div>
                <p className="text-xs text-neutral-500 line-clamp-2 mt-2">
                  {rel.summary}
                </p>
              </a>
            ))}
          </div>
        </section>
      )}

    </div>
  );
};
