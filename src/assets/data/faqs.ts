export type TFaq = {
  _id: string;
  question: string;
  answer: string;
};

export const faqs: TFaq[] = [
  {
    _id: "faq1",
    question: "What is your Minimum Order Quantity (MOQ)?",
    answer:
      "Our MOQ varies by product type. Generally, for woven labels and hang tags, the MOQ is 1,000 pieces. However, we are flexible and can support smaller sampling runs for startups and boutique brands.",
  },
  {
    _id: "faq2",
    question: "Do you offer eco-friendly or sustainable materials?",
    answer:
      "Yes! Sustainability is a core part of our business. We offer labels made from 100% recycled polyester (rPET), organic cotton tapes, FSC-certified paper for tags, and biodegradable polybags. We are Oeko-Tex Standard 100 certified.",
  },
  {
    _id: "faq3",
    question: "What is your standard lead time for production?",
    answer:
      "Sampling usually takes 3-5 business days. Bulk production typically takes 7-12 business days after sample approval, depending on the order volume and complexity. We also offer rush services for urgent deadlines.",
  },
  {
    _id: "faq4",
    question: "Can you help with artwork and design?",
    answer:
      "Absolutely. Our fast and creative in-house design team can assist you in refining your logo or creating technical layouts for your trims. Just share your concept or brand guidelines, and we'll handle the rest.",
  },
  {
    _id: "faq5",
    question: "Do you ship internationally?",
    answer:
      "Yes, we supply to garment factories and brands globally. We have reliable logistics partners to ensure your goods arrive safely and on time, whether your factory is in Bangladesh, Vietnam, or Europe.",
  },
];
