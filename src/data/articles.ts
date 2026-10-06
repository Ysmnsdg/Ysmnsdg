import type { Article } from "./types";
import { fullName } from "./dentist";

export const articles: Article[] = [
  {
    id: "a1",
    slug: "dental-implants-what-should-you-know",
    title: "Dental implants: what should you know?",
    excerpt:
      "A calm overview of how implants work, who they may suit, and what the planning process typically involves.",
    content: [
      "Dental implants replace missing tooth roots with a carefully placed fixture that can support a crown, bridge, or denture. The appeal is stability — a restoration that feels secure during speech and chewing.",
      "Planning matters more than the fixture itself. Bone volume, bite forces, soft-tissue health, and aesthetic goals all shape whether an implant is appropriate and how it should be restored.",
      "Treatment is staged. After assessment and imaging, placement is followed by a healing period, then a provisional or final restoration. Timelines vary; rushing rarely improves outcomes.",
      "This article is educational and does not replace a clinical examination. Suitability can only be determined in person.",
    ],
    category: "Implants",
    author: fullName,
    date: "2026-01-12",
    readingTime: "6 min",
    relatedSlugs: ["how-digital-dentistry-improves-planning", "veneers-vs-bonding"],
    seo: {
      title: "Dental Implants: What Should You Know?",
      description:
        "An educational guide to dental implants, planning, and what patients can expect from the process.",
    },
  },
  {
    id: "a2",
    slug: "veneers-vs-bonding",
    title: "Veneers vs bonding",
    excerpt:
      "When composite bonding is enough — and when ceramic veneers may be the more enduring choice.",
    content: [
      "Composite bonding can refine chips, close small spaces, and adjust shape with minimal intervention. It is often reversible and completed in a single visit.",
      "Porcelain veneers offer greater colour stability and longevity for more comprehensive aesthetic change, with a laboratory-made ceramic surface.",
      "The choice depends on enamel condition, bite, aesthetic ambition, and how much structure you wish to preserve. Neither option is universally “better.”",
      "A thoughtful consultation weighs longevity against conservatism — and chooses the lightest effective path.",
    ],
    category: "Cosmetic",
    author: fullName,
    date: "2026-02-03",
    readingTime: "5 min",
    relatedSlugs: [
      "dental-implants-what-should-you-know",
      "how-professional-whitening-works",
    ],
    seo: {
      title: "Veneers vs Bonding",
      description:
        "A clear comparison of porcelain veneers and composite bonding for smile refinement.",
    },
  },
  {
    id: "a3",
    slug: "how-professional-whitening-works",
    title: "How professional whitening works",
    excerpt:
      "Why supervised whitening differs from at-home kits — and how shade goals are set responsibly.",
    content: [
      "Professional whitening uses controlled concentrations and protocols designed around enamel health and sensitivity management.",
      "Existing restorations do not whiten like natural enamel, so planning accounts for crowns, veneers, and fillings in the smile zone.",
      "Shade goals should be realistic. Overly bright results can look unnatural; a refined baseline often serves patients better long-term.",
      "Sensitivity is discussed before treatment begins, with strategies to keep the experience comfortable.",
    ],
    category: "Cosmetic",
    author: fullName,
    date: "2026-02-20",
    readingTime: "4 min",
    relatedSlugs: ["veneers-vs-bonding", "what-causes-tooth-sensitivity"],
    seo: {
      title: "How Professional Whitening Works",
      description:
        "An educational look at professional teeth whitening, shade planning, and comfort.",
    },
  },
  {
    id: "a4",
    slug: "what-causes-tooth-sensitivity",
    title: "What causes tooth sensitivity?",
    excerpt:
      "Common reasons teeth react to cold or sweetness — and when to seek assessment.",
    content: [
      "Sensitivity often relates to exposed dentine, enamel wear, gum recession, or temporary effects after whitening or restorative work.",
      "Not all sensitivity is harmless. Pain that lingers, wakes you at night, or localises to one tooth deserves clinical review.",
      "At-home care can help mild cases, but persistent symptoms should not be self-diagnosed from articles alone.",
      "Bring a clear history of triggers and timing to your appointment — it helps assessment.",
    ],
    category: "Oral Health",
    author: fullName,
    date: "2026-03-08",
    readingTime: "4 min",
    relatedSlugs: [
      "how-professional-whitening-works",
      "when-should-wisdom-teeth-be-evaluated",
    ],
    seo: {
      title: "What Causes Tooth Sensitivity?",
      description:
        "Educational overview of tooth sensitivity causes and when to seek dental assessment.",
    },
  },
  {
    id: "a5",
    slug: "when-should-wisdom-teeth-be-evaluated",
    title: "When should wisdom teeth be evaluated?",
    excerpt:
      "Signs that third molars need review — without assuming every wisdom tooth must be removed.",
    content: [
      "Wisdom teeth are evaluated based on position, cleaning access, pathology risk, and symptoms — not age alone.",
      "Crowding myths persist; evidence-based decisions rely on examination and imaging when indicated.",
      "Some wisdom teeth remain healthy and functional; others cause recurrent infection or damage adjacent teeth.",
      "A measured assessment prevents both unnecessary surgery and delayed care.",
    ],
    category: "Oral Health",
    author: fullName,
    date: "2026-03-22",
    readingTime: "5 min",
    relatedSlugs: [
      "what-causes-tooth-sensitivity",
      "how-digital-dentistry-improves-planning",
    ],
    seo: {
      title: "When Should Wisdom Teeth Be Evaluated?",
      description:
        "A balanced educational guide to wisdom tooth evaluation and decision-making.",
    },
  },
  {
    id: "a6",
    slug: "how-digital-dentistry-improves-planning",
    title: "How digital dentistry improves treatment planning",
    excerpt:
      "Scanners, imaging, and design tools — explained in patient language.",
    content: [
      "Digital tools help us see more clearly: intraoral scans capture precise surface detail; 3D imaging maps bone when needed; design software supports restorative planning.",
      "Technology does not replace judgment. It informs conversations, improves fit, and reduces uncertainty in complex cases.",
      "Patients benefit through clearer explanations, fewer uncomfortable impressions, and restorations planned with greater accuracy.",
      "Ask which tools are relevant to your case — not every technology is needed for every treatment.",
    ],
    category: "Technology",
    author: fullName,
    date: "2026-04-02",
    readingTime: "5 min",
    relatedSlugs: [
      "dental-implants-what-should-you-know",
      "veneers-vs-bonding",
    ],
    seo: {
      title: "How Digital Dentistry Improves Treatment Planning",
      description:
        "Patient-friendly explanation of digital scanners, imaging, and planning in modern dentistry.",
    },
  },
];

export function getArticleBySlug(slug: string) {
  return articles.find((a) => a.slug === slug);
}

export function getRelatedArticles(slugs: string[]) {
  return articles.filter((a) => slugs.includes(a.slug));
}
