import { Article } from '../types';

import heroImg from '../assets/images/hero_skincare_editorial_1792500880817.jpg';
import aboutImg from '../assets/images/article_skincare_routine_1792500881675.jpg';
import routineImg from '../assets/images/article_beginner_trio_1792502834313.jpg';
import acneImg from '../assets/images/article_acne_flatlay_1792502834769.jpg';
import niacinamideImg from '../assets/images/article_niacinamide_texture_1792502835520.jpg';
import sunscreenImg from '../assets/images/article_sunscreen_tubes_1792502836839.jpg';
import hyaluronicImg from '../assets/images/article_ha_vs_niacinamide_pair_1792502836371.jpg';
import layeringImg from '../assets/images/article_layering_sequence_1792502865266.jpg';
import salicylicImg from '../assets/images/article_salicylic_texture_1792502866240.jpg';
import moisturizerImg from '../assets/images/article_moisturizer_jars_1792502867522.jpg';
import mistakesImg from '../assets/images/article_mistakes_flatlay_1792502867602.jpg';
import studentImg from '../assets/images/article_student_essentials_1792502867648.jpg';

export { heroImg, aboutImg };

export const ARTICLES: Article[] = [
  {
    id: 'beginner-skincare-routine',
    slug: 'beginners-guide-to-building-a-skincare-routine',
    title: "Beginner's Guide to Building a Skincare Routine",
    subtitle: 'Cut through TikTok noise and strip back your morning and evening rituals to three scientifically sound essentials.',
    category: 'Skincare',
    featured: true,
    trending: true,
    author: {
      name: 'Camille Laurent',
      role: 'Beauty Editor & Cosmetic Chemist',
      avatar: 'https://images.unsplash.com/photo-1534528741775-53994a69daeb?auto=format&fit=crop&w=200&q=80',
    },
    date: 'October 14, 2026',
    readTime: '6 min read',
    image: routineImg,
    altText: 'Minimalist skincare trio with a gentle foaming cleanser pump bottle, nourishing moisturizer jar, and sunscreen tube arranged on a soft blush pink ceramic tray',
    caption: 'Figure 1 — The three core pillars: Gentle cleansing, barrier hydration, and broad-spectrum photoprotection arranged together.',
    summary: 'A minimalist, non-intimidating handbook for anyone bewildered by 10-step rituals. Discover the essential holy trinity: cleanser, moisturiser, and SPF.',
    tags: ['Beginners', 'Daily Routine', 'Barrier Care', 'Basics'],
    keyTakeaways: [
      'You only need three non-negotiables: a gentle cleanser, a barrier-supporting moisturiser, and a broad-spectrum SPF 30+.',
      'Active serums like retinol and exfoliating acids are secondary enhancements, not Day 1 requirements.',
      'Allow your skin barrier at least 4 to 6 weeks to adapt before introducing new active treatments.',
      'Consistency and gentle handling outperform expensive 12-step rituals every single time.'
    ],
    sections: [
      {
        id: 'why-minimalism-wins',
        heading: '1. Why Minimalism Trumps the 10-Step Trend',
        paragraphs: [
          'If your social feed feels like a dizzying carousel of snail mucin, peeling solutions, LED face masks, and multi-tier essence layering, take a deep breath. Somewhere between viral TikTok hauls and algorithmic marketing, the fundamental biology of human skin got lost. Your skin is not an inert canvas waiting to absorb fifteen different active chemicals simultaneously; it is a living, dynamic biological organ equipped with an intricate lipid barrier.',
          'When beginners dive headfirst into elaborate multi-step regimes, the most common clinical outcome is not glass skin—it is contact dermatitis, compromised moisture barriers, and sudden reactive breakouts. Dermatologists frequently treat patients whose chronic redness and breakouts stem entirely from over-cleansing and product overload.',
          'The antidote is radical simplicity. By stripping your morning and evening rituals down to the physiological fundamentals, you give your skin barrier space to breathe, rebalance its microbiome, and retain natural hydration without chronic irritation.'
        ],
        callout: {
          title: 'The Golden Rule of Skin Care',
          text: 'Healthy skin is a marathon of consistency, not a sprint of aggressive exfoliation. Perfect your foundation before chasing viral actives.',
          type: 'science'
        }
      },
      {
        id: 'the-holy-trinity',
        heading: '2. The Holy Trinity: Cleanse, Hydrate, Protect',
        paragraphs: [
          'Every functional, dermatologist-approved skincare regimen rests upon three foundational pillars. If a product does not perform one of these three roles, it is an optional extra rather than an absolute essential.',
          'Pillar One: Gentle Cleansing. In the morning, a lukewarm water rinse or a mild non-foaming hydrating wash is plenty to remove overnight sebum. In the evening, cleansing washes away pollution particles, airborne grime, sunscreen filters, and excess sebum accumulated throughout the day. Never use hot water, and avoid cleansers that leave your cheeks squeaky or tight.',
          'Pillar Two: Barrier Moisturization. Moisturisers replenish natural moisture factors (NMFs) and prevent transepidermal water loss (TEWL). Look for formulas containing humectants like glycerin, emollient ceramides, and light occlusives like squalane.',
          'Pillar Three: Photoprotection. Sunscreen is the undisputed cornerstone of preventative dermatological health. Ultraviolet radiation generates reactive oxygen species that degrade collagen, trigger post-inflammatory hyperpigmentation, and heighten cellular DNA damage. Broad-spectrum SPF 30 or higher applied every morning is your skin’s greatest daily shield.'
        ],
        listItems: [
          'Morning: Gentle Cleanser (optional water rinse) → Lightweight Moisturiser → Broad-Spectrum SPF 30+',
          'Evening: Gentle Cleanser → Hydrating Moisturiser (applied to slightly damp skin)',
          'Weekly (Optional once skin is stable): Mild exfoliant or soothing sheet mask'
        ]
      },
      {
        id: 'knowing-your-skin-type',
        heading: '3. Identifying Your Skin Type Without Fancy Gadgets',
        paragraphs: [
          'Before spending a single dollar on skincare products, you must know your baseline skin type. Many beginners mistreat their skin because they confuse temporary dehydration (a lack of water) with true dry skin (a genetic lack of natural sebum).',
          'Conduct the Bare-Faced Test: Wash your face gently with a mild cleanser, pat dry with a clean towel, and leave your bare skin untouched for 30 minutes without applying any products. Observe how your skin feels and looks:',
          'If your face feels tight, flaky, or rough all over, you lean towards Dry skin. If your forehead, nose, and chin appear shiny while your cheeks remain comfortable or tight, you have Combination skin. If your entire face develops a visible sheen with enlarged pores, you have Oily skin. If you experience stinging, flushing, or heat, your skin is Sensitive.'
        ]
      },
      {
        id: 'patch-testing',
        heading: '4. The Non-Negotiable Art of Patch Testing',
        paragraphs: [
          'Eagerness is the enemy of calm skin. When you acquire a new product, resist the impulse to slather it across both cheeks before bed. An allergic reaction or contact irritation on your entire face can take weeks of intensive barrier repair to calm down.',
          'Always patch test: Dab a coin-sized amount behind your ear or along the jawline. Leave it undisturbed for 24 to 48 hours. If no redness, itching, burning, or sudden bumps emerge, you can safely integrate the product into your routine.'
        ]
      }
    ],
    recommendedPicks: [
      {
        name: 'Hydrating Gentle Cleanser',
        brand: 'CeraVe / Vanicream',
        price: '$12.99',
        role: 'Daily Cleanser',
        keyIngredient: 'Ceramides 1, 3, 6-II & Hyaluronic Acid',
        bestFor: 'All skin types, especially dry and sensitive skin'
      },
      {
        name: 'Natural Moisturizing Factors + HA',
        brand: 'The Ordinary',
        price: '$8.50',
        role: 'Daily Barrier Cream',
        keyIngredient: 'Amino Acids, Dermal Lipids, Urea',
        bestFor: 'Balanced daily hydration without greasy residue'
      },
      {
        name: 'Biore UV Aqua Rich Watery Essence SPF 50+',
        brand: 'Bioré UV',
        price: '$14.00',
        role: 'Daily Photoprotection',
        keyIngredient: 'Micro Defense UV Filters & Royal Jelly Extract',
        bestFor: 'Weightless invisible finish on all skin tones'
      }
    ],
    dosAndDonts: {
      dos: [
        'Apply moisturiser to slightly damp skin to trap vital water molecules.',
        'Use adequate sunscreen—approximately two full finger lengths for face and neck.',
        'Wait 4 weeks before evaluating if a basic routine is working for you.'
      ],
      donts: [
        'Do not scrub with coarse walnut or apricot shell facial scrubs.',
        'Do not buy viral active serums until your basic 3-step routine is consistent for 30 days.',
        'Do not wash your face with scalding hot shower water.'
      ]
    },
    faq: [
      {
        question: 'Should I wash my face with cleanser twice a day?',
        answer: 'Not necessarily. Those with oily or acne-prone skin often benefit from cleansing morning and night. However, if your skin is dry, irritated, or tight, a simple splash of lukewarm water in the morning followed by your moisturiser and SPF is gentler on your barrier.'
      },
      {
        question: 'At what age should young adults start using skincare?',
        answer: 'The foundational habits—washing away sweat and grime, applying a gentle moisturiser, and wearing daily sunscreen—are beneficial from adolescence onward. Prevention through daily UV protection is infinitely easier than treating sun damage later in life.'
      }
    ]
  },
  {
    id: 'acne-prone-skincare-routine',
    slug: 'how-to-build-a-skincare-routine-for-acne-prone-skin',
    title: 'How to Build a Skincare Routine for Acne-Prone Skin',
    subtitle: 'Heal breakouts and calm stubborn inflammation without stripping your moisture barrier into oblivion.',
    category: 'Acne Care',
    featured: true,
    trending: false,
    author: {
      name: 'Dr. Maya Lin',
      role: 'Dermatology Resident & Clinical Contributor',
      avatar: 'https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?auto=format&fit=crop&w=200&q=80',
    },
    date: 'October 12, 2026',
    readTime: '7 min read',
    image: acneImg,
    altText: 'Top-down clean editorial flat lay of gentle acne-care products: botanical balancing toner bottle, calming cica repair gel, fresh eucalyptus leaves, and clean white cotton pads on light neutral stone',
    caption: 'Figure 2 — Calm over combat: Effective acne care requires anti-inflammatory support, not harsh drying alcohol.',
    summary: 'The comprehensive acne guide for students. Learn how to address micro-comedones, balance sebum production, and support cellular turnover gently.',
    tags: ['Acne Care', 'BHA', 'Breakouts', 'Salicylic Acid'],
    keyTakeaways: [
      'Acne is an inflammatory condition; treating it with aggressive stripping cleansers triggers rebound oil production and worsens inflammation.',
      'Salicylic acid (BHA) dissolves lipid buildup inside the pore lining, making it the gold standard for blackheads and congested pores.',
      'Even acne-prone skin requires daily moisturiser; dehydrated skin traps dead skin cells inside pores more easily.',
      'Give anti-acne topicals 8 to 12 weeks of faithful application before switching products.'
    ],
    sections: [
      {
        id: 'the-biology-of-breakouts',
        heading: '1. What Really Triggers Breakouts in Young Adults?',
        paragraphs: [
          'Acne vulgaris is one of the most widespread dermatological concerns affecting teens and young adults between ages 16 and 26. In collegiate settings, heightened cortisol levels from late-night studying, hormonal fluctuations, dietary changes, and irregular sleep patterns create a perfect biological storm.',
          'Under the surface, acne develops through four interconnected steps: hyperkeratinization (dead skin cells failing to shed naturally), excessive sebum production stimulated by androgens, overgrowth of Cutibacterium acnes bacteria inside clogged follicular channels, and localized inflammatory cascades.',
          'Notice that "dirty skin" is nowhere on this list. Scrubbing your skin aggressively does not cure acne; in fact, mechanical friction ruptures fragile pustules beneath the surface, spreading inflammatory cytokines and inducing persistent red marks known as post-inflammatory erythema (PIE).'
        ],
        callout: {
          title: 'Clinical Insight',
          text: 'Over-drying your face with alcohol-based astringents damages the ceramides that seal your skin cells together, allowing opportunistic bacteria to trigger deeper cystic breakouts.',
          type: 'warning'
        }
      },
      {
        id: 'morning-acne-routine',
        heading: '2. The Morning Protocol: Shield and Soothe',
        paragraphs: [
          'The primary mission of your morning routine is calming irritation and preventing ultraviolet radiation from darkening red post-acne marks into stubborn brown pigmentation (PIH).',
          'Step 1: Gentle Cleansing. Use a mild foaming or gel cleanser with a physiological pH (between 5.0 and 5.5). Look for soothing botanical additives like green tea, allantoin, or centella asiatica.',
          'Step 2: Niacinamide (2% to 5%). A lightweight water-based niacinamide serum stabilizes sebum excretion, strengthens barrier integrity, and visibly dims facial redness.',
          'Step 3: Non-Comedogenic Sunscreen. Many young adults avoid sunscreen because they fear thick, greasy white casts that clog pores. Modern fluid or water-gel sunscreens formulated with chemical filters or zinc oxide dry down completely invisible with a comfortable velvet-matte finish.'
        ]
      },
      {
        id: 'evening-acne-routine',
        heading: '3. The Evening Protocol: Unclog and Repair',
        paragraphs: [
          'At night, your skin naturally shifts into cellular repair and regenerative mode. This is the optimal window to apply targeted keratolytic agents.',
          'Double Cleansing: If you wear water-resistant sunscreen or makeup, start with a gentle micellar water or light cleansing oil that rinses cleanly without leaving a greasy film. Follow with your water-based cleanser.',
          'Targeted Treatment (BHA or Retinoid): On alternating nights, apply a 2% salicylic acid solution or an over-the-counter adapalene gel (0.1%). Do not use both on the exact same evening when starting out, as combined keratolysis can overwhelm the skin barrier.',
          'Lightweight Gel-Cream: Conclude with an oil-free, non-comedogenic moisturiser rich in hyaluronic acid, panthenol (vitamin B5), and ceramides.'
        ]
      },
      {
        id: 'purging-vs-breakouts',
        heading: '4. Understanding the Dreaded "Purge"',
        paragraphs: [
          'When you start using pore-clearing actives like salicylic acid or retinoids, your cellular turnover rate speeds up dramatically. Pre-existing micro-comedones lurking beneath the skin surface are rapidly brought to the surface all at once.',
          'This temporary phenomenon—known as purging—typically lasts 4 to 6 weeks. If breakouts emerge in areas where you typically get spots and heal relatively quickly, stay patient and keep moisturizing. However, if you develop red, angry hives or itchy clusters in brand-new areas where you never broke out before, it is likely an allergic reaction or barrier breakdown, and you should discontinue the product.'
        ]
      }
    ],
    recommendedPicks: [
      {
        name: 'Effaclar Medicated Purifying Foaming Gel',
        brand: 'La Roche-Posay',
        price: '$16.99',
        role: 'Clarifying Cleanser',
        keyIngredient: 'Zinc PCA & Salicylic Acid',
        bestFor: 'Oily and acne-prone skin needing gentle pore-clearing'
      },
      {
        name: '2% BHA Liquid Exfoliant',
        brand: "Paula's Choice",
        price: '$14.00 (Travel Size)',
        role: 'Targeted Pore Unclogger',
        keyIngredient: '2% Salicylic Acid & Green Tea Extract',
        bestFor: 'Stubborn blackheads, enlarged pores, and textured skin'
      },
      {
        name: 'Neutrogena Hydro Boost Water Gel',
        brand: 'Neutrogena',
        price: '$15.49',
        role: 'Oil-Free Hydrator',
        keyIngredient: 'Purified Hyaluronic Acid',
        bestFor: 'Lightweight hydration that never clogs pores'
      }
    ],
    dosAndDonts: {
      dos: [
        'Change your pillowcase at least twice a week to avoid bacterial accumulation.',
        'Wipe your phone screen daily with an alcohol wipe.',
        'Use hydrocolloid pimple patches to prevent compulsive skin picking.'
      ],
      donts: [
        'Never squeeze or pop inflamed cysts with bare fingernails.',
        'Avoid applying raw lemon juice, baking soda, or toothpaste onto active blemishes.',
        'Do not skip moisturiser when using acne treatments.'
      ]
    },
    faq: [
      {
        question: 'Can I use pimple patches over my active serums?',
        answer: 'It is best to apply hydrocolloid patches onto clean, dry skin immediately after cleansing. If applied over active acids or retinoids, the occlusion can increase irritation beneath the sticker.'
      },
      {
        question: 'How long until I see clear results?',
        answer: 'Dermatological studies show that topical acne regimens require a minimum of 8 to 12 weeks of continuous use to showcase substantial, visible improvement. Consistency is the secret.'
      }
    ]
  },
  {
    id: 'niacinamide-benefits-guide',
    slug: 'niacinamide-benefits-for-skin-a-beginners-guide',
    title: 'Niacinamide Benefits for Skin: A Beginner’s Guide',
    subtitle: 'Everything you need to know about skincare’s most versatile multitasking vitamin, from pore minimization to redness reduction.',
    category: 'Ingredients',
    featured: false,
    trending: true,
    author: {
      name: 'Camille Laurent',
      role: 'Beauty Editor & Cosmetic Chemist',
      avatar: 'https://images.unsplash.com/photo-1534528741775-53994a69daeb?auto=format&fit=crop&w=200&q=80',
    },
    date: 'October 10, 2026',
    readTime: '5 min read',
    image: niacinamideImg,
    altText: 'Aesthetic frosted glass niacinamide serum bottle with dropper next to a glistening clear serum droplet and fluid gel texture swatch on smooth pink quartz stone',
    caption: 'Figure 3 — Niacinamide (Vitamin B3): A cellular cofactor that fortifies barrier ceramides and calms oxidative stress.',
    summary: 'Discover why dermatologists and cosmetic chemists worship niacinamide. Learn optimal percentage levels, layering synergy, and myths.',
    tags: ['Niacinamide', 'Vitamin B3', 'Pores', 'Brightening'],
    keyTakeaways: [
      'Niacinamide is Vitamin B3, a vital cellular building block that helps skin cells produce barrier lipids and ceramides.',
      'Clinical trials demonstrate optimal effectiveness between 2% and 5%; 10%+ formulas often trigger unnecessary flushing and sensitivity.',
      'It synergizes harmoniously with almost every skincare active, including hyaluronic acid, retinol, and salicylic acid.',
      'Helps regulate excess sebum production while simultaneously fading post-breakout dark marks.'
    ],
    sections: [
      {
        id: 'what-is-niacinamide',
        heading: '1. What is Niacinamide and How Does It Work?',
        paragraphs: [
          'If you had to choose a single ingredient capable of soothing redness, regulating excess oil, bolstering skin barrier resilience, and fading post-inflammatory dark spots, cosmetic chemists would hand you niacinamide. Also known as nicotinamide, it is the physiologically active, water-soluble form of Vitamin B3.',
          'At the cellular level, niacinamide is an essential precursor to two critical coenzymes: NAD+ (nicotinamide adenine dinucleotide) and NADP+. These molecules act as metabolic fuel for your epidermal cells, powering DNA repair enzymes, neutralizing environmental free radicals, and stimulating keratinocyte differentiation.',
          'Unlike temperamental actives like L-ascorbic acid (pure Vitamin C) or tretinoin, niacinamide is remarkably chemically stable. It is insensitive to light and air, making it dependable, long-lasting, and wonderfully friendly for everyday use.'
        ]
      },
      {
        id: 'core-benefits',
        heading: '2. The Four Major Clinical Benefits',
        paragraphs: [
          '1. Strengthens the Lipid Moisture Barrier: Studies published in the British Journal of Dermatology reveal that topical niacinamide stimulates de novo ceramide synthesis. By boosting the natural mortar between your skin cells, it drastically curtails transepidermal water loss and shields against environmental allergens.',
          '2. Regulates Sebum and Refines Pore Appearance: While pores do not possess muscle fibers that open and close like doors, excessive sebum pooling expands pore openings. Niacinamide balances sebaceous gland output, preventing sebum accumulation and allowing pores to snap back to their natural compact geometry.',
          '3. Fades Hyperpigmentation: Unlike tyrosinase inhibitors that stop melanin production, niacinamide works through an ingenious mechanism: it inhibits the transfer of melanosomes (pigment packets) from melanocytes into surrounding keratinocytes by up to 68%. This prevents dark patches from setting into the upper skin layers.',
          '4. Calms Redness and Reactive Flushing: By dampening inflammatory cytokines, it offers notable relief to skin prone to rosacea, acne redness, and seasonal weather sensitivity.'
        ]
      },
      {
        id: 'the-percentage-trap',
        heading: '3. Beware the "Percentage Arms Race"',
        paragraphs: [
          'In recent years, skincare brands have engaged in a race to formulate 10%, 15%, or even 20% niacinamide serums. Many consumers mistakenly assume that higher percentages equal faster, dramatic results. In reality, the gold-standard peer-reviewed clinical data demonstrates peak efficacy at 2% to 5%.',
          'At concentrations above 5%, niacinamide offers diminishing returns while substantially escalating the risk of transient facial flushing, warmth, contact irritation, and tiny rash-like bumps. If you have sensitive skin, look for well-formulated moisturizers containing 2% to 4% niacinamide rather than super-concentrated boosters.'
        ]
      }
    ],
    recommendedPicks: [
      {
        name: 'Great Barrier Relief',
        brand: 'KraveBeauty',
        price: '$28.00',
        role: 'Soothing Barrier Serum',
        keyIngredient: '2% Niacinamide, Tamanu Oil & Ceramides',
        bestFor: 'Compromised, reactive, or over-exfoliated skin'
      },
      {
        name: 'Niacinamide 10% + Zinc 1%',
        brand: 'The Ordinary',
        price: '$6.50',
        role: 'Sebum Balancing Serum',
        keyIngredient: 'Niacinamide & Zinc PCA',
        bestFor: 'Oily T-zones on a strict student budget'
      }
    ],
    dosAndDonts: {
      dos: [
        'Look for products containing 2% to 5% niacinamide for ideal balance.',
        'Feel free to use niacinamide both morning and evening.',
        'Pair it with hyaluronic acid for an ultra-plump, hydrated finish.'
      ],
      donts: [
        'Do not assume stinging is normal; if your serum burns, discontinue use.',
        'Do not buy ultra-high 20% serums if you have reactive or eczema-prone skin.'
      ]
    },
    faq: [
      {
        question: 'Can I use Niacinamide with Vitamin C?',
        answer: 'Yes! An outdated 1960s laboratory study suggested that combining pure ascorbic acid and niacinamide created nicotinic acid (which causes temporary flushing). Modern cosmetic science confirms that in ambient skincare conditions, the two can be layered together safely.'
      }
    ]
  },
  {
    id: 'how-to-choose-sunscreen',
    slug: 'how-to-choose-the-right-sunscreen-for-your-skin',
    title: 'How to Choose the Right Sunscreen for Your Skin',
    subtitle: 'Chemical vs. physical filters, white cast solutions, and finish preferences demystified for everyday wear.',
    category: 'Product Reviews',
    featured: true,
    trending: true,
    author: {
      name: 'Dr. Maya Lin',
      role: 'Dermatology Resident & Clinical Contributor',
      avatar: 'https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?auto=format&fit=crop&w=200&q=80',
    },
    date: 'October 8, 2026',
    readTime: '6 min read',
    image: sunscreenImg,
    altText: 'Modern pastel sunscreen lotion tubes standing with a rich silky white SPF cream swirl swatch on sun-drenched warm neutral linen cloth',
    caption: 'Figure 4 — Modern photoprotection: Fluid, cosmetic-grade filters blend seamlessly without chalky white residue.',
    summary: 'The ultimate sunscreen decoder. Learn how UV index works, the difference between UVA and UVB, and how to find an SPF you will actually enjoy wearing.',
    tags: ['Sunscreen', 'SPF 50', 'Skin Cancer Prevention', 'Anti-Aging'],
    keyTakeaways: [
      'UVB rays cause sunburn; UVA rays penetrate deeply into the dermis causing premature cellular aging and hyperpigmentation.',
      'The best sunscreen in the world is the one you enjoy wearing enough to apply generously every single day.',
      'Chemical filters absorb UV light and release it as negligible heat; mineral filters (zinc oxide) reflect and scatter light.',
      'Always apply a minimum of 1/4 teaspoon (or two finger lengths) for adequate face and neck coverage.'
    ],
    sections: [
      {
        id: 'understanding-uv-spectrum',
        heading: '1. UVA vs. UVB: Why Broad Spectrum is Crucial',
        paragraphs: [
          'Ultraviolet radiation reaches earth in two primary biological wavelengths: UVB (short wavelength, 290–320 nm) and UVA (long wavelength, 320–400 nm). A helpful mnemonic taught in medical schools is: "UVB for Burns, UVA for Aging."',
          'While UVB rays are strongest in the summertime and midday hours, UVA rays remain present with consistent intensity throughout daylight hours all year round. Crucially, UVA rays penetrate through standard window glass and cloud cover, silently breaking down elastin and collagen fibers while activating melanocytes to produce persistent sunspots.',
          'When selecting a sunscreen, always verify that the packaging specifies "Broad Spectrum." In Asian sunscreen formulations, look for the PA rating (PA++++ indicates the highest protection against UVA rays). In European sunscreens, look for the UVA seal inside a circle.'
        ]
      },
      {
        id: 'mineral-vs-chemical',
        heading: '2. Mineral vs. Chemical Filters: The Real Difference',
        paragraphs: [
          'Mineral (Physical) Sunscreens utilize active inorganic mineral compounds—primarily Zinc Oxide and Titanium Dioxide. They are naturally inert, hypoallergenic, and soothing, making them prime candidates for sensitive skin, rosacea sufferers, and post-procedure recovery. However, zinc oxide particles can leave a chalky white cast on medium to deep skin tones.',
          'Chemical (Organic) Sunscreens use carbon-based compounds such as Avobenzone, Homosalate, Tinosorb S, Uvinul A Plus, and Mexoryl SX. These filters absorb UV radiation and convert it harmlessly into heat. Modern chemical filters offer exceptionally lightweight, watery textures that leave zero white cast, layer seamlessly under foundation, and feel completely weightless on the skin.'
        ]
      },
      {
        id: 'matching-spf-to-skin-type',
        heading: '3. Matching Sunscreen Textures to Your Skin Type',
        paragraphs: [
          'For Oily and Acne-Prone Skin: Seek out oil-free, gel-based or fluid milk formulas with a "matte" or "natural velvet" finish. Ingredients like silica or dimethicone help absorb excess sebum throughout university lectures or gym sessions.',
          'For Dry and Dehydrated Skin: Look for cream or lotion sunscreens infused with ceramides, squalane, or glycerin that act as both your daytime moisturizer and sunscreen in a single streamlined step.',
          'For Sensitive Skin: Formulations with 100% zinc oxide or fragrance-free modern Korean/Japanese sunscreens are typically the most comfortable.'
        ]
      }
    ],
    recommendedPicks: [
      {
        name: 'Relief Sun: Rice + Probiotics SPF 50+',
        brand: 'Beauty of Joseon',
        price: '$13.00',
        role: 'Dewy Daily Chemical SPF',
        keyIngredient: '30% Rice Extract & Grain Probiotics',
        bestFor: 'Dry, normal, and combination skin needing glow'
      },
      {
        name: 'Anthelios Clear Skin Dry Touch SPF 60',
        brand: 'La Roche-Posay',
        price: '$19.99',
        role: 'Matte Oil-Absorbing SPF',
        keyIngredient: 'Perlite & Silica Complex',
        bestFor: 'Very oily and shine-prone skin in warm climates'
      }
    ],
    dosAndDonts: {
      dos: [
        'Use the two-finger rule: squeeze two lines of sunscreen along the length of your pointer and middle fingers.',
        'Reapply every 2 hours if spending prolonged time outdoors under direct sun.',
        'Don’t forget your eyelids, hairline, ears, and neck.'
      ],
      donts: [
        'Never rely solely on SPF infused in your makeup foundation (you would need 7x the normal amount for rated protection).',
        'Do not store your sunscreen bottle in a hot car glovebox, which degrades protective filters.'
      ]
    },
    faq: [
      {
        question: 'Do I need sunscreen if I am sitting indoors near a window all day?',
        answer: 'Yes. Standard residential and classroom window panes block UVB rays (which cause sunburns) but allow up to 75% of UVA rays (responsible for collagen breakdown and hyperpigmentation) to pass right through.'
      }
    ]
  },
  {
    id: 'hyaluronic-acid-vs-niacinamide',
    slug: 'hyaluronic-acid-vs-niacinamide-whats-the-difference',
    title: 'Hyaluronic Acid vs Niacinamide: What’s the Difference?',
    subtitle: 'Two skincare powerhouses compared head-to-head on mechanism, skin goals, and how to layer them together.',
    category: 'Ingredients',
    featured: false,
    trending: false,
    author: {
      name: 'Camille Laurent',
      role: 'Beauty Editor & Cosmetic Chemist',
      avatar: 'https://images.unsplash.com/photo-1534528741775-53994a69daeb?auto=format&fit=crop&w=200&q=80',
    },
    date: 'October 5, 2026',
    readTime: '5 min read',
    image: hyaluronicImg,
    altText: 'Two distinct aesthetic skincare serum bottles for hyaluronic acid and niacinamide with clear droplet texture swatches on a soft lavender and blush background',
    caption: 'Figure 5 — Cellular moisture vs. biological regulation: Hyaluronic acid acts as a moisture sponge, while niacinamide functions as a cellular architect.',
    summary: 'Confused between hyaluronic acid and niacinamide? Unpack how each works, which skin concerns they address, and the secret to combining them.',
    tags: ['Hyaluronic Acid', 'Niacinamide', 'Hydration', 'Ingredients Guide'],
    keyTakeaways: [
      'Hyaluronic acid is a humectant that pulls ambient water molecules into the stratum corneum; it does not change cellular behavior.',
      'Niacinamide is a signaling vitamin that boosts ceramide production, reduces sebum, and improves barrier defense.',
      'They do not compete or cancel each other out; in fact, combining them delivers synergistic plumping and barrier repair.',
      'Always apply hyaluronic acid to damp skin and lock it in with an occlusive moisturiser to prevent moisture evaporation.'
    ],
    sections: [
      {
        id: 'molecular-differences',
        heading: '1. Biological Roles: Hydration vs. Regulation',
        paragraphs: [
          'In cosmetic formulation, active ingredients fall into distinct functional categories. Hyaluronic Acid (HA) is a glycosaminoglycan—a large sugar molecule naturally present in human connective tissue and synovial fluid. In topical skincare, it functions strictly as a humectant. Think of HA as a microscopic, biocompatible sponge capable of binding up to 1,000 times its molecular weight in water.',
          'Niacinamide, on the other hand, is a bioactive vitamin. Rather than simply holding water mechanically, it penetrates deeper into epidermal cells to influence metabolic pathways: it triggers lipid synthesis, quiets inflammation, and slows down melanin transfer.',
          'In short: Hyaluronic acid gives your skin water; Niacinamide teaches your skin how to keep that water and stay calm.'
        ]
      },
      {
        id: 'head-to-head-comparison',
        heading: '2. Head-to-Head Comparison Table',
        paragraphs: [
          'To help you understand which ingredient solves your specific skincare dilemma, here is a breakdown of their primary indications:'
        ],
        tableData: {
          headers: ['Attribute', 'Hyaluronic Acid', 'Niacinamide'],
          rows: [
            ['Chemical Nature', 'Large polysaccharide humectant', 'Water-soluble Vitamin B3'],
            ['Primary Benefit', 'Instant surface plumping & hydration', 'Barrier reinforcement & oil balancing'],
            ['Best For', 'Dehydration, dullness, tight feeling', 'Acne, enlarged pores, redness, hyperpigmentation'],
            ['Optimal Concentration', '0.5% – 2.0%', '2.0% – 5.0%'],
            ['How to Apply', 'Must be applied on damp skin', 'Can be applied on damp or dry skin']
          ]
        }
      },
      {
        id: 'layering-synergy',
        heading: '3. Can You Use Them Together? (The Ideal Routine)',
        paragraphs: [
          'A resounding yes! Because both molecules are water-soluble and operate at skin-neutral pH ranges (between 5.0 and 7.0), they coexist harmoniously. Many of the most respected dermatological formulations combine both into a single serum bottle.',
          'If you own two separate bottles, follow the classic thin-to-thick principle: after washing your face and leaving your skin slightly damp, apply your Hyaluronic Acid serum first to draw in water. Immediately follow with your Niacinamide serum to seal and fortify the barrier. Finish with your favorite moisturiser.'
        ]
      }
    ],
    recommendedPicks: [
      {
        name: 'Hyaluronic Acid 2% + B5',
        brand: 'The Ordinary',
        price: '$8.90',
        role: 'Pure Hydration Serum',
        keyIngredient: 'Multi-molecular HA & Panthenol',
        bestFor: 'Dehydrated skin craving instant plumping'
      },
      {
        name: 'Barrier Balance Daily Essence',
        brand: 'Haruharu WONDER',
        price: '$15.00',
        role: 'Hybrid Essence',
        keyIngredient: 'Fermented Black Rice & Niacinamide',
        bestFor: 'All-in-one hydration and brightening'
      }
    ],
    dosAndDonts: {
      dos: [
        'Mist your face with water before smoothing on Hyaluronic Acid.',
        'Seal both serums with a moisturiser containing ceramides or squalane.'
      ],
      donts: [
        'Never apply Hyaluronic Acid onto bone-dry skin in arid or air-conditioned rooms (it can leach moisture from your deeper skin layers).'
      ]
    },
    faq: [
      {
        question: 'Which one should I buy if I only have a budget for one serum?',
        answer: 'If you struggle with oiliness, breakouts, or redness, choose Niacinamide (most moisturisers already contain basic humectants). If your primary issue is parched, flaky, or tight skin, pick Hyaluronic Acid.'
      }
    ]
  },
  {
    id: 'how-to-layer-skincare-order',
    slug: 'how-to-layer-skincare-products-in-the-correct-order',
    title: 'How to Layer Skincare Products in the Correct Order',
    subtitle: 'From watery toners to rich barrier balms: Master the science of molecular weight and viscosity.',
    category: 'Skincare',
    featured: false,
    trending: true,
    author: {
      name: 'Camille Laurent',
      role: 'Beauty Editor & Cosmetic Chemist',
      avatar: 'https://images.unsplash.com/photo-1534528741775-53994a69daeb?auto=format&fit=crop&w=200&q=80',
    },
    date: 'October 3, 2026',
    readTime: '6 min read',
    image: layeringImg,
    altText: 'Skincare products arranged in application order on a warm travertine shelf: gentle cleanser, hydrating essence, active serum dropper, moisturizer cream, and daily sunscreen',
    caption: 'Figure 6 — The viscosity hierarchy: Products must penetrate progressively from the smallest water molecules to the densest occlusive lipids.',
    summary: 'Never wonder whether toner comes before serum again. A foolproof, step-by-step masterclass on morning and nighttime product layering.',
    tags: ['Layering Order', 'Skincare Routine', 'Viscosity', 'Tutorial'],
    keyTakeaways: [
      'The golden rule of cosmetic formulation is: Thinnest consistency to thickest texture (watery liquids first, rich oils/creams last).',
      'Oil-based products repel water-based products; applying an oil before a serum blocks the serum from penetrating.',
      'Sunscreen is always the final step of your morning skincare routine (before makeup).',
      'Allow active treatments 30 to 60 seconds to absorb to minimize product pilling.'
    ],
    sections: [
      {
        id: 'the-science-of-penetration',
        heading: '1. Why Order Matters: The Physics of Absorption',
        paragraphs: [
          'You can purchase the most expensive, clinically proven serum on the planet, but if you apply it on top of a thick occlusive petrolatum balm, its active molecules will simply sit on the surface, evaporate into the air, and wash down the sink.',
          'Cosmetic chemists formulate skincare with specific molecular sizes and vehicle bases. Water-based liquids have low surface tension and penetrate between keratinocytes rapidly. In contrast, heavy lipid creams and plant oils create an occlusive film designed specifically to block moisture from escaping.',
          'If you reverse this sequence by slathering on heavy oils first, you create a waterproof barrier that repels every water-soluble toner, essence, and active serum applied afterward.'
        ]
      },
      {
        id: 'morning-step-by-step',
        heading: '2. The Master Morning Sequence (AM)',
        paragraphs: [
          'Step 1: Cleanser (gentle wash or lukewarm water splash).',
          'Step 2: Hydrating Toner or Essence (press into skin with hands; avoid cotton pads that waste product).',
          'Step 3: Lightweight Serums (Hyaluronic Acid, Niacinamide, or Vitamin C).',
          'Step 4: Eye Cream (optional; pea-sized dab tapped gently around the orbital bone).',
          'Step 5: Daily Moisturiser (replenishes moisture and preps skin).',
          'Step 6: Broad-Spectrum Sunscreen (SPF 30–50+, applied generously as the non-negotiable final layer).'
        ]
      },
      {
        id: 'evening-step-by-step',
        heading: '3. The Master Evening Sequence (PM)',
        paragraphs: [
          'Step 1: First Cleanse (cleansing balm or micellar water to dissolve makeup and SPF).',
          'Step 2: Second Cleanse (water-based gentle gel or cream cleanser).',
          'Step 3: Chemical Exfoliant or Active Treatment (BHA, AHA, or Retinoid—used on designated nights).',
          'Step 4: Hydrating Serum (soothing barrier peptides or panthenol).',
          'Step 5: Night Moisturiser (richer ceramide repair cream).',
          'Step 6: Facial Oil or Barrier Balm (optional "slugging" for extremely dry or chapped areas).'
        ]
      },
      {
        id: 'preventing-pilling',
        heading: '4. How to Prevent Dreaded "Product Pilling"',
        paragraphs: [
          'We have all experienced it: you massage in your moisturiser or sunscreen, and suddenly tiny rubbery balls peel off your face like pencil eraser shavings. This is known as pilling.',
          'Pilling happens when formulas with high concentrations of silicones (like dimethicone), polymers, or carbomers clash with water-based gels, or when products are applied too quickly in succession. The fix: allow 30 to 60 seconds between steps for absorption, use a gentle pressing motion rather than aggressive rubbing, and stick to compatible vehicle bases.'
        ]
      }
    ],
    recommendedPicks: [
      {
        name: 'Oat So Simple Water Cream',
        brand: 'KraveBeauty',
        price: '$28.00',
        role: 'Lightweight Layering Moisturiser',
        keyIngredient: 'Oat Seed Water & Squalane',
        bestFor: 'Layering under sunscreen without pilling'
      },
      {
        name: 'Hydrating Milky Toner',
        brand: 'Laneige / Cosrx',
        price: '$18.00',
        role: 'First Prep Step',
        keyIngredient: 'Ceramides & Centella Asiatica',
        bestFor: 'Boosting absorption of subsequent serums'
      }
    ],
    dosAndDonts: {
      dos: [
        'Apply products from thinnest to thickest consistency.',
        'Wait for active acids to dry before layering soothing creams.',
        'Always end the morning with SPF.'
      ],
      donts: [
        'Do not mix sunscreen directly into your moisturiser (it dilutes the protective SPF film).',
        'Do not apply facial oil before your water-based serum.'
      ]
    },
    faq: [
      {
        question: 'How long do I have to wait between applying each product?',
        answer: 'For everyday humectants and moisturisers, 30 to 45 seconds—just until the surface feels tacky rather than sopping wet—is plenty. When using prescription retinoids or concentrated exfoliating acids, waiting 2 to 3 minutes allows the product to penetrate fully without dilution.'
      }
    ]
  },
  {
    id: 'salicylic-acid-benefits-acne',
    slug: 'salicylic-acid-benefits-for-acne-prone-skin',
    title: 'Salicylic Acid Benefits for Acne-Prone Skin',
    subtitle: 'The lipid-soluble beta hydroxy acid that dives deep into congested pores to dissolve stubborn blackheads.',
    category: 'Acne Care',
    featured: false,
    trending: true,
    author: {
      name: 'Dr. Maya Lin',
      role: 'Dermatology Resident & Clinical Contributor',
      avatar: 'https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?auto=format&fit=crop&w=200&q=80',
    },
    date: 'October 1, 2026',
    readTime: '6 min read',
    image: salicylicImg,
    altText: 'Aesthetic salicylic acid BHA clarifying serum dropper bottle and skincare product texture droplets with organic cotton pads on a clean ceramic dish',
    caption: 'Figure 7 — Beta Hydroxy Acid (BHA): Naturally lipophilic structure allows it to penetrate through oily sebum deep into the pore lining.',
    summary: 'Everything you need to know about BHA. Why it outperforms physical scrubs, how often to use it, and how to avoid the over-exfoliation trap.',
    tags: ['Salicylic Acid', 'BHA', 'Blackheads', 'Acne Care'],
    keyTakeaways: [
      'Salicylic acid is an oil-soluble (lipophilic) beta hydroxy acid that can penetrate sebum plugs inside follicular pores.',
      'Unlike abrasive facial scrubs that create micro-tears in skin, BHA chemical exfoliation dissolves cellular glue gently.',
      'Beginners should start with 1% to 2% salicylic acid no more than 2 to 3 evenings per week.',
      'Derived originally from willow bark, it has inherent anti-inflammatory properties related to aspirin.'
    ],
    sections: [
      {
        id: 'what-makes-bha-unique',
        heading: '1. Why BHA is Different From AHA (Glycolic & Lactic)',
        paragraphs: [
          'To understand why salicylic acid is hailed as the gold standard for blackheads and clogged pores, you must understand lipid solubility. Alpha Hydroxy Acids (AHAs like glycolic and lactic acid) are water-soluble. They perform wonders on the superficial surface of the skin, sloughing away dry dead skin cells and evening out discoloration.',
          'However, because AHAs are water-soluble, they cannot easily penetrate through the oily sebum pooling inside human pore linings. Salicylic Acid is a Beta Hydroxy Acid (BHA). It possesses an aromatic ring structure that makes it lipophilic (oil-loving). It slips directly through sebum, dissolves cellular debris, breaks up compacted keratin, and clears the follicle from the inside out.',
          'Furthermore, because salicylic acid is chemically related to acetylsalicylic acid (aspirin), it possesses inherent anti-inflammatory properties that calm the redness and throbbing discomfort associated with inflamed papules.'
        ]
      },
      {
        id: 'optimal-concentrations',
        heading: '2. Choosing the Right Strength: 0.5% vs. 1% vs. 2%',
        paragraphs: [
          'In over-the-counter skincare, salicylic acid is approved at concentrations between 0.5% and 2.0%:',
          '0.5% – 1.0%: Ideal for daily face washes, sensitive skin types, or teenagers just beginning skincare. Cleansers rinse off after 60 seconds, providing gentle pore-clearing with minimal risk of dryness.',
          '2.0%: The clinically proven strength for leave-on toners, serums, and targeted spot treatments. Delivers noticeable clearing of stubborn blackheads and comedones within 3 to 4 weeks of consistent application.'
        ]
      },
      {
        id: 'frequency-and-pitfalls',
        heading: '3. Frequency Guide: How Often Should You Exfoliate?',
        paragraphs: [
          'The most catastrophic mistake beginners make with salicylic acid is using it twice a day every day right out of the box. Your skin barrier requires time to adjust to increased cell turnover.',
          'Week 1 & 2: Apply your 2% BHA solution only twice a week at night.',
          'Week 3 & 4: If no flaking, stinging, or tightness occurs, increase to three nights a week (e.g., Monday, Wednesday, Friday).',
          'Daily application is rarely necessary and often counterproductive. Always follow BHA treatments with a restorative ceramide moisturiser.'
        ]
      }
    ],
    recommendedPicks: [
      {
        name: 'Skin Perfecting 2% BHA Liquid',
        brand: "Paula's Choice",
        price: '$14.00 (Travel Size)',
        role: 'Leave-On Exfoliant',
        keyIngredient: '2% Salicylic Acid & Methylpropanediol',
        bestFor: 'Blackheads and stubborn congestion'
      },
      {
        name: 'Salicylic Acid 2% Masque',
        brand: 'The Ordinary',
        price: '$13.20',
        role: 'Weekly Clarifying Mask',
        keyIngredient: 'Salicylic Acid, Charcoal & Amazonian Clay',
        bestFor: 'Weekly deep cleanse for oily skin'
      }
    ],
    dosAndDonts: {
      dos: [
        'Apply leave-on BHA to thoroughly dry skin to minimize tingling.',
        'Use sunscreen every morning, as exfoliation exposes fresh epidermal cells.'
      ],
      donts: [
        'Do not combine salicylic acid with prescription retinol in the same evening routine.',
        'Avoid physical scrub brushes or gritty exfoliating beads while using BHA.'
      ]
    },
    faq: [
      {
        question: 'Can salicylic acid help with back acne (bacne) and chest breakouts?',
        answer: 'Yes! A salicylic acid body wash or spray is one of the most effective ways to treat folliculitis and body acne caused by workout sweat and backpack friction.'
      }
    ]
  },
  {
    id: 'how-to-choose-moisturiser',
    slug: 'how-to-choose-a-moisturiser-for-your-skin-type',
    title: 'How to Choose a Moisturiser for Your Skin Type',
    subtitle: 'Gel, lotion, or rich cream? Decode humectants, emollients, and occlusives to find your perfect daily match.',
    category: 'Product Reviews',
    featured: false,
    trending: false,
    author: {
      name: 'Camille Laurent',
      role: 'Beauty Editor & Cosmetic Chemist',
      avatar: 'https://images.unsplash.com/photo-1534528741775-53994a69daeb?auto=format&fit=crop&w=200&q=80',
    },
    date: 'September 28, 2026',
    readTime: '6 min read',
    image: moisturizerImg,
    altText: 'Aesthetic pastel moisturizer cream jars with three distinct texture swatches showing lightweight gel-cream, velvety whipped lotion, and rich restorative barrier cream',
    caption: 'Figure 8 — Texture spectrum: From water-burst gels (left) to velvety emulsions (middle) and rich ceramide lipid balms (right).',
    summary: 'Demystifying the moisturiser aisle. Discover the science behind humectants, emollients, and occlusives, and find your texture match.',
    tags: ['Moisturiser', 'Dry Skin', 'Oily Skin', 'Ceramides', 'Texture Guide'],
    keyTakeaways: [
      'All moisturisers blend three fundamental ingredient classes: humectants (water magnets), emollients (smoothers), and occlusives (sealants).',
      'Oily and acne-prone skin thrives on high-humectant, low-occlusive oil-free gel creams.',
      'Dry skin requires higher ratios of emollients and physiological lipids (ceramides, cholesterol, fatty acids).',
      'Moisturisers should never cause burning or break you out; if they do, investigate fragrance or comedogenic pore-cloggers.'
    ],
    sections: [
      {
        id: 'the-three-moisturiser-classes',
        heading: '1. The Anatomy of a Moisturiser: Humectants, Emollients, Occlusives',
        paragraphs: [
          'Every moisturiser on store shelves, from a $7 drugstore tub to a $300 luxury glass jar, is a carefully measured emulsion of water, oil, and functional emulsifiers. Understanding the three building blocks allows you to read ingredient labels with confidence:',
          '1. Humectants: Hydrophilic compounds like glycerin, hyaluronic acid, sodium PCA, and panthenol. They act like cellular magnets, drawing water into the outer layer of skin from the surrounding air or deeper tissue layers.',
          '2. Emollients: Lipids that fill microscopic gaps between shedding corneocyte skin cells. Ingredients like squalane, jojoba oil, caprylic/capric triglyceride, and ceramides create that silky, supple, soft touch.',
          '3. Occlusives: Heavy hydrophobic agents that form a physical protective barrier on the skin surface to shut down transepidermal water loss. Classic examples include dimethicone, shea butter, beeswax, and petrolatum.'
        ]
      },
      {
        id: 'texture-by-skin-type',
        heading: '2. Which Texture Matches Your Skin Profile?',
        paragraphs: [
          'Gel & Water-Creams: High in water and humectants, almost zero heavy oils. Melts instantly with a cooling, weightless splash. Best for: Oily skin, humid summer weather, acne-prone skin, and anyone who hates the feeling of heavy lotions.',
          'Lotions & Emulsions: Balanced 50/50 ratio of water and light emollients. Leaves skin soft and hydrated with a satin finish. Best for: Normal skin, combination skin (shiny T-zone with balanced cheeks), and daytime wear under makeup.',
          'Rich Creams & Balms: High concentration of occlusives, ceramides, and nourishing plant butters. Velvety, cushiony, and deeply restorative. Best for: Dry, parched skin, mature skin, harsh winter weather, or skin recovering from retinoid irritation.'
        ]
      },
      {
        id: 'key-ingredients-to-hunt',
        heading: '3. Ingredients That Repair the Barrier',
        paragraphs: [
          'Regardless of your skin type, seek out formulations highlighting the "Golden Ratio" of barrier lipids: Ceramides, Cholesterol, and Free Fatty Acids. When these three lipids are delivered in proportions mirroring human skin biology, they speed barrier recovery dramatically.',
          'Also look for soothing additives like Centella Asiatica (Cica), colloidal oatmeal, and beta-glucan to quell daily sensitivity caused by pollution and weather shifts.'
        ]
      }
    ],
    recommendedPicks: [
      {
        name: 'Moisturizing Cream',
        brand: 'CeraVe',
        price: '$16.99',
        role: 'Rich Barrier Cream',
        keyIngredient: '3 Essential Ceramides & MVE Delivery Tech',
        bestFor: 'Dry to very dry skin, body and face'
      },
      {
        name: 'SoonJung 2x Barrier Intensive Cream',
        brand: 'Etude House',
        price: '$16.00',
        role: 'Calming Emulsion',
        keyIngredient: 'Panthenol & Madecassoside',
        bestFor: 'Sensitive, reactive skin and rosacea'
      },
      {
        name: 'Hydro Boost Water Gel (Fragrance Free)',
        brand: 'Neutrogena',
        price: '$15.49',
        role: 'Lightweight Gel',
        keyIngredient: 'Hyaluronic Acid',
        bestFor: 'Oily and acne-prone skin'
      }
    ],
    dosAndDonts: {
      dos: [
        'Always massage moisturiser onto damp skin straight out of the shower.',
        'Choose fragrance-free if your skin is prone to stinging or eczema.',
        'Adjust your moisturiser with the seasons (lighter in summer, richer in winter).'
      ],
      donts: [
        'Do not skip moisturiser if you have oily skin—dehydration prompts your sebaceous glands to produce even more oil.'
      ]
    },
    faq: [
      {
        question: 'Does a more expensive moisturiser deliver better results?',
        answer: 'Cosmetic chemistry shows that inexpensive drugstore moisturisers formulate with the exact same ceramides, glycerin, and squalane found in prestige brands. You are primarily paying for packaging, proprietary fragrance, and marketing prestige.'
      }
    ]
  },
  {
    id: 'common-skincare-mistakes',
    slug: 'common-skincare-mistakes-beginners-should-avoid',
    title: 'Common Skincare Mistakes Beginners Should Avoid',
    subtitle: 'From over-exfoliating your barrier to skipping daily SPF: The seven most frequent pitfalls dermatologists see.',
    category: 'Skincare',
    featured: false,
    trending: true,
    author: {
      name: 'Dr. Maya Lin',
      role: 'Dermatology Resident & Clinical Contributor',
      avatar: 'https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?auto=format&fit=crop&w=200&q=80',
    },
    date: 'September 24, 2026',
    readTime: '7 min read',
    image: mistakesImg,
    altText: 'Editorial skincare flat lay illustrating common routine mistakes with soothing ceramide barrier balms, recovery guide notes, and a fresh calming centella plant',
    caption: 'Figure 9 — Healing over attacking: Over-exfoliation is the leading cause of sudden skin sensitivity in young adults.',
    summary: 'Save your skin barrier from self-sabotage. Discover the seven common blunders that sabotage glow, trigger breakouts, and waste money.',
    tags: ['Skincare Mistakes', 'Skin Barrier', 'Tips', 'Beginners'],
    keyTakeaways: [
      'Over-exfoliating with acids and scrubs is the #1 mistake young adults make, stripping away protective lipids.',
      'Introducing five new products at once makes it impossible to pinpoint which one triggered an allergic reaction or breakout.',
      'Skipping daily sunscreen while using exfoliating acids leaves fresh cells vulnerable to hyperpigmentation and sun damage.',
      'Natural does not inherently mean safer; essential oils and raw citrus juices are potent contact allergens.'
    ],
    sections: [
      {
        id: 'the-over-exfoliation-trap',
        heading: '1. Mistake #1: The Over-Exfoliation Epidemic',
        paragraphs: [
          'If you use a glycolic toner in the morning, an abrasive scrub in the shower, and a salicylic acid pad followed by retinol at night, your skin barrier is in a state of chronic clinical emergency. Signs of an over-exfoliated barrier include an unnaturally tight "plastic-shiny" forehead, stinging when applying plain water or gentle lotion, and sudden clusters of tiny inflamed red bumps.',
          'The Fix: Immediately cease all exfoliating acids, retinoids, and facial brushes for two to three weeks. Focus exclusively on gentle cleansing, soothing humectants, and barrier-repair creams packed with ceramides and colloidal oat.'
        ],
        callout: {
          title: 'Emergency Barrier Reset',
          text: 'If your everyday moisturiser burns when applied, your skin barrier is compromised. Strip your routine down to water rinse, plain vaseline/ceramides, and SPF until tolerance returns.',
          type: 'warning'
        }
      },
      {
        id: 'changing-products-too-fast',
        heading: '2. Mistake #2: Product Hopping Every Two Weeks',
        paragraphs: [
          'Social media moves fast, but human biological cellular turnover does not. The human epidermal skin cycle takes between 28 and 40 days to complete a full renewal cycle. Expecting a dark spot to vanish or cystic breakouts to disappear in ten days is biologically unrealistic.',
          'When you swap serums every fortnight, you never allow any active ingredient sufficient time to deliver clinical efficacy. Furthermore, introducing multiple new products simultaneously makes it impossible to identify which item caused a reaction.'
        ]
      },
      {
        id: 'diy-kitchen-skincare',
        heading: '3. Mistake #3: DIY Kitchen Experiments',
        paragraphs: [
          'Applying lemon juice, cinnamon masks, baking soda scrubs, or undiluted apple cider vinegar directly to facial skin is a recipe for chemical burns and phytophotodermatitis. Lemon juice has an aggressive pH of around 2.0, while baking soda is an alkaline shock at pH 9.0—both disrupt the natural acid mantle (pH 4.7–5.5) that protects your face from pathogens.',
          'Keep your cooking ingredients in the pantry and rely on stabilized, lab-tested cosmetic formulations designed for human epidermal safety.'
        ]
      },
      {
        id: 'skipping-sunscreen-on-cloudy-days',
        heading: '4. Mistake #4: Believing Clouds Block UV Rays',
        paragraphs: [
          'Up to 80% of ultraviolet rays penetrate dense cloud cover and fog. If it is daylight outside, UV rays are actively reaching your skin. Wearing sunscreen only on beach holidays is akin to only brushing your teeth the week before a dental exam.'
        ]
      }
    ],
    recommendedPicks: [
      {
        name: 'Cicaplast Baume B5+',
        brand: 'La Roche-Posay',
        price: '$17.99',
        role: 'Emergency Barrier Rescue Balm',
        keyIngredient: '5% Panthenol, Madecassoside & Tribioma',
        bestFor: 'Soothes stinging, irritated, or over-exfoliated skin'
      },
      {
        name: 'Ultra Facial Advanced Repair Barrier Cream',
        brand: "Kiehl's",
        price: '$25.00 (Mini)',
        role: 'Intensive Barrier Repair',
        keyIngredient: 'Colloidal Oatmeal & Beta-Glucan',
        bestFor: 'Flaking, sensitized, or chapped winter skin'
      }
    ],
    dosAndDonts: {
      dos: [
        'Introduce one single new product at a time, spaced 2 weeks apart.',
        'Patch test new products on your jawline before full-face application.',
        'Trust gradual improvement over overnight miracles.'
      ],
      donts: [
        'Never pick, pop, or scratch active pimples.',
        'Do not wipe your face with dirty bath towels that harbor bathroom humidity bacteria.',
        'Avoid scalding hot water in the shower on your face.'
      ]
    },
    faq: [
      {
        question: 'How do I know if my skin barrier is damaged?',
        answer: 'The clearest sign is stinging or burning when applying a gentle, previously tolerated moisturiser or plain water. Other symptoms include tight, shiny, papery skin, sudden redness, and patchy flaking.'
      }
    ]
  },
  {
    id: 'affordable-student-skincare-routine',
    slug: 'how-to-build-an-affordable-skincare-routine-for-students',
    title: 'How to Build an Affordable Skincare Routine for Students',
    subtitle: 'High-performing skincare on a tight campus budget: Build an entire 3-step routine for under $30.',
    category: 'Student Routines',
    featured: true,
    trending: true,
    author: {
      name: 'Camille Laurent',
      role: 'Beauty Editor & Cosmetic Chemist',
      avatar: 'https://images.unsplash.com/photo-1534528741775-53994a69daeb?auto=format&fit=crop&w=200&q=80',
    },
    date: 'September 20, 2026',
    readTime: '7 min read',
    image: studentImg,
    altText: 'A simple, budget-friendly collection of essential student skincare products arranged in a desk caddy with a college notebook and soft morning window light',
    caption: 'Figure 10 — Campus glow: Smart formulation chemistry beats luxury retail markups every day of the week.',
    summary: 'The broke-student skincare manifesto. Discover reliable drugstore gems, cost-per-ounce math, and a full morning & evening regimen for under $30 total.',
    tags: ['Student Budget', 'Drugstore Skincare', 'Affordable', 'Campus Life'],
    keyTakeaways: [
      'High price tags primarily reflect luxury packaging, celebrity endorsements, and retail margins—not raw chemical efficacy.',
      'A complete, dermatologist-recommended 3-step routine (Cleanser, Moisturiser, Sunscreen) can easily cost under $30 total.',
      'Drugstore brands like CeraVe, Vanicream, The Ordinary, and Cetaphil formulate with gold-standard ceramides and hyaluronic acid.',
      'Buying jumbo economy sizes drastically cuts your cost-per-ounce for daily staples.'
    ],
    sections: [
      {
        id: 'the-luxury-markup-myth',
        heading: '1. The Big Secret Cosmetic Chemists Know',
        paragraphs: [
          'Walk into any high-end beauty department store, and you will see moisturiser jars retailing for $90 to $250. Flip those jars over to inspect the ingredient deck, and you will discover water, glycerin, dimethicone, cetyl alcohol, and a fraction of a percent of plant extracts.',
          'In cosmetic chemistry manufacturing, the raw active ingredients—pure niacinamide powder, pharmaceutical-grade glycerin, and even hyaluronic acid—cost pennies per gram. When you buy a luxury $100 face cream, you are subsidizing heavy glass packaging, prime retail real estate, marketing budgets, and prestige markup.',
          'For students juggling tuition, rent, and textbooks, the good news is undeniable: you do not need to sacrifice efficacy to protect your bank account. In fact, many fragrance-free drugstore classics are clinically superior because they omit sensitizing floral perfumes and irritating essential oils.'
        ]
      },
      {
        id: 'the-sub-30-dollar-routine',
        heading: '2. The Under-$30 Complete Daily Regimen',
        paragraphs: [
          'Here is our tried-and-tested, student-budget master routine that covers all physiological skin needs for less than thirty dollars total:',
          'Step 1: The Cleanser ($9.50 – $11.00): Vanicream Gentle Facial Cleanser or CeraVe Foaming Cleanser. A generous 8oz bottle will easily last 4 to 5 months of twice-daily use. It cleanses thoroughly without stripping your natural lipids.',
          'Step 2: The Moisturiser ($8.50 – $10.00): The Ordinary Natural Moisturizing Factors + HA (100ml) or Cetaphil Daily Hydrating Lotion. Packed with essential amino acids, urea, and ceramides that deliver all-day hydration without greasy residue.',
          'Step 3: The Daily Sunscreen ($9.00 – $13.00): Rohto Skin Aqua Super Moisture Gel SPF 50+ or Trader Joe’s Daily Facial Sunscreen SPF 40. Blends completely invisible, leaves no white cast, and doubles as an effortless makeup primer.'
        ]
      },
      {
        id: 'student-cost-saving-hacks',
        heading: '3. Five Practical Campus Skincare Hacks',
        paragraphs: [
          '1. Buy Economy Sizes: Opt for the 16oz or 1-liter pump bottles of moisturiser and cleanser. The initial cost is marginally higher, but the cost-per-milliliter drops by nearly 50%.',
          '2. Multipurpose Staples: A $5 tube of 100% pure petrolatum (Vaseline or Aquaphor) replaces expensive lip masks, cuticle creams, eyebrow taming gels, and cracked-heel salves.',
          '3. Avoid Single-Use Sheet Masks: While fun for dorm room pampering, a $4 sheet mask is transient hydration that evaporates within hours. Invest that $4 into a leave-on serum that lasts four months.',
          '4. Wash with Your Clean Hands: Forego vibrating silicone sonic cleansing gadgets and disposable makeup wipes. Your clean fingertips are the gentlest tool for your skin barrier.',
          '5. Keep It In Your Caddy: Dorm bathroom humidity can foster bacterial growth on moist products. Keep your bottles sealed and store them in a well-ventilated dorm caddy.'
        ]
      }
    ],
    recommendedPicks: [
      {
        name: 'Gentle Facial Cleanser',
        brand: 'Vanicream',
        price: '$9.99',
        role: 'Daily Cleanser',
        keyIngredient: 'Purified Water, Glycerin & Coco-Glucoside',
        bestFor: 'Sensitive, acne-prone, and allergic skin'
      },
      {
        name: 'Natural Moisturizing Factors + HA',
        brand: 'The Ordinary',
        price: '$8.50',
        role: 'Barrier Cream',
        keyIngredient: '11 Amino Acids, Phospholipids, Urea',
        bestFor: 'Non-greasy all-day barrier comfort'
      },
      {
        name: 'Skin Aqua Super Moisture Gel SPF 50+',
        brand: 'Rohto Mentholatum',
        price: '$11.50',
        role: 'Lightweight Daily SPF',
        keyIngredient: 'Hyaluronic Acid & Modern Japanese UV Filters',
        bestFor: 'Invisible, zero white cast on all skin tones'
      }
    ],
    dosAndDonts: {
      dos: [
        'Calculate cost-per-ounce when comparing two similar products.',
        'Stick with 3 reliable products rather than buying 10 impulse impulse items on sale.',
        'Use drugstore loyalty reward points for skincare restocks.'
      ],
      donts: [
        'Do not buy expensive single-use sheet masks weekly.',
        'Do not assume high price equals clinical effectiveness.'
      ]
    },
    faq: [
      {
        question: 'Are drugstore sunscreens as protective as luxury sunscreens?',
        answer: 'Yes, 100%. All sunscreens sold commercially must adhere to identical government FDA or European photoprotection testing standards. A $10 sunscreen with SPF 50 provides identical UV photon filtration as a $70 luxury counterpart.'
      }
    ]
  }
];

export const CATEGORIES = [
  { id: 'All', name: 'All Articles', count: 10, description: 'Explore our complete editorial collection of skincare science, guides, and reviews.' },
  { id: 'Skincare', name: 'Skincare', count: 3, description: 'Core principles, step-by-step rituals, and moisture barrier preservation.' },
  { id: 'Ingredients', name: 'Ingredients', count: 2, description: 'Deep dives into niacinamide, hyaluronic acid, BHA, ceramides, and vitamins.' },
  { id: 'Acne Care', name: 'Acne Care', count: 2, description: 'Gentle, anti-inflammatory protocols for stubborn breakouts, pores, and congestion.' },
  { id: 'Product Reviews', name: 'Product Reviews', count: 2, description: 'Objective, science-first breakdowns of sunscreens, moisturisers, and formulas.' },
  { id: 'Student Routines', name: 'Student Routines', count: 1, description: 'High-performing skincare on a budget designed for collegiate and young adult life.' }
] as const;
