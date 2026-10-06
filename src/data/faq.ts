import type { FaqItem, JourneyStep, Principle } from "./types";

export const journeySteps: JourneyStep[] = [
  {
    id: "consultation",
    number: "01",
    title: "Consultation",
    description: "A conversation first — goals, history, and what matters to you.",
    details: [
      "We listen to your concerns without rushing toward treatment.",
      "Medical and dental history are reviewed carefully.",
      "You leave with clarity on possible next steps.",
    ],
  },
  {
    id: "assessment",
    number: "02",
    title: "Clinical Assessment",
    description: "A thorough examination of teeth, gums, bite, and aesthetics.",
    details: [
      "Soft and hard tissues are assessed systematically.",
      "Findings are explained in plain language.",
      "Photographs and records support shared understanding.",
    ],
  },
  {
    id: "diagnostics",
    number: "03",
    title: "Digital Diagnostics",
    description: "Imaging and scans used only when they improve decision-making.",
    details: [
      "Digital radiographs or 3D imaging when indicated.",
      "Intraoral scanning for precise records.",
      "Results discussed before any commitment to treatment.",
    ],
  },
  {
    id: "plan",
    number: "04",
    title: "Personalized Plan",
    description: "Options presented with timing, sequencing, and honest expectations.",
    details: [
      "Conservative paths are considered alongside comprehensive ones.",
      "You retain control over pace and priorities.",
      "Written summaries available when helpful.",
    ],
  },
  {
    id: "treatment",
    number: "05",
    title: "Treatment",
    description: "Calm, precise care with comfort and communication throughout.",
    details: [
      "Each visit begins with a clear outline of what will happen.",
      "Comfort measures are discussed in advance.",
      "You may pause and ask questions at any time.",
    ],
  },
  {
    id: "followup",
    number: "06",
    title: "Follow-up & Prevention",
    description: "Protection of results through review and long-term oral health.",
    details: [
      "Healing and adaptation are monitored.",
      "Maintenance intervals are tailored to you.",
      "Prevention remains part of the relationship.",
    ],
  },
];

export const principles: Principle[] = [
  {
    id: "personalized",
    title: "Personalized Care",
    description:
      "No two smiles — or lives — are identical. Plans are shaped around your biology, your calendar, and your definition of a successful result.",
  },
  {
    id: "precision",
    title: "Clinical Precision",
    description:
      "Diagnosis precedes action. Digital tools and careful technique reduce uncertainty so treatment can be deliberate rather than reactive.",
  },
  {
    id: "natural",
    title: "Natural Results",
    description:
      "The best work rarely announces itself. Form, colour, and function are refined until the outcome feels quietly right.",
  },
  {
    id: "longevity",
    title: "Long-Term Health",
    description:
      "Aesthetics without biology do not last. Every recommendation considers gum health, bite harmony, and future maintenance.",
  },
];

export const faqItems: FaqItem[] = [
  {
    id: "f1",
    category: "Appointments",
    question: "How do I book a consultation?",
    answer:
      "Use the Book Consultation flow on this site or call the practice. We will confirm a time that suits you and share what to bring.",
  },
  {
    id: "f2",
    category: "Appointments",
    question: "What should I expect at my first visit?",
    answer:
      "A calm conversation about your goals, a clinical assessment, and — where helpful — digital records. You will leave with a clearer picture of options, not pressure to decide immediately.",
  },
  {
    id: "f3",
    category: "Appointments",
    question: "Do you offer virtual consultations?",
    answer:
      "Yes. You may begin with a virtual consultation to describe your concerns and optionally share photos. It is not a diagnosis and does not replace an in-person examination.",
  },
  {
    id: "f4",
    category: "Treatments",
    question: "How are treatment plans decided?",
    answer:
      "After assessment and any indicated diagnostics, options are discussed with benefits, limitations, and sequencing. You choose the path that fits your priorities.",
  },
  {
    id: "f5",
    category: "Treatments",
    question: "How long does treatment usually take?",
    answer:
      "It depends on complexity. Whitening may take days; veneers a few weeks; implants several months. Timelines are outlined before you begin.",
  },
  {
    id: "f6",
    category: "Cosmetic Dentistry",
    question: "Will my smile look natural?",
    answer:
      "Natural outcomes are a core aim. Shade, shape, and proportion are planned against your facial features rather than a generic ideal.",
  },
  {
    id: "f7",
    category: "Cosmetic Dentistry",
    question: "Are veneers always necessary for smile improvement?",
    answer:
      "No. Whitening, bonding, or orthodontic referral may be more appropriate. Veneers are recommended only when they are the right tool.",
  },
  {
    id: "f8",
    category: "Implants",
    question: "Am I a candidate for dental implants?",
    answer:
      "Candidacy depends on bone, gum health, medical history, and goals. Imaging and examination determine suitability — not online questionnaires.",
  },
  {
    id: "f9",
    category: "Implants",
    question: "Do implants feel like natural teeth?",
    answer:
      "Once restored, implants are designed to feel secure for speaking and chewing. Emergence and shade are refined so they blend with surrounding teeth.",
  },
  {
    id: "f10",
    category: "Payment",
    question: "How does payment work?",
    answer:
      "Fees and staging are explained before treatment. Configure your practice’s payment policies in the data layer when ready; contact the practice for current arrangements.",
  },
  {
    id: "f11",
    category: "Payment",
    question: "Do you accept insurance?",
    answer:
      "Insurance participation varies by practice and plan. Please contact the office with your provider details so we can advise accurately.",
  },
  {
    id: "f12",
    category: "Dental Anxiety",
    question: "I am anxious about dental visits. Can you help?",
    answer:
      "Yes. We prioritise clear explanations, patient control, and a calm environment. Tell us what helps — pacing, signals to pause, or detailed walkthroughs.",
  },
  {
    id: "f13",
    category: "Dental Anxiety",
    question: "Will I be able to stop treatment if I feel overwhelmed?",
    answer:
      "You remain in control. Agree a pause signal before treatment begins; we will stop and regroup whenever you need.",
  },
  {
    id: "f14",
    category: "Aftercare",
    question: "What aftercare should I expect?",
    answer:
      "Specific guidance is given after each procedure. Generally: follow oral hygiene advice, attend reviews, and contact us if something feels unexpected.",
  },
  {
    id: "f15",
    category: "Aftercare",
    question: "How do I maintain aesthetic results?",
    answer:
      "Maintenance intervals, night-guard use when indicated, and careful whitening or staining habits all protect outcomes. We will tailor advice to your case.",
  },
];

export const faqCategories = [
  "Appointments",
  "Treatments",
  "Cosmetic Dentistry",
  "Implants",
  "Payment",
  "Dental Anxiety",
  "Aftercare",
] as const;
