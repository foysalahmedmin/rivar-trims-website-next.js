export type TTestimonial = {
  _id: string;
  name: string;
  designation: string;
  review: string;
  company: string;
  avatar?: string;
};

export const testimonials: TTestimonial[] = [
  {
    _id: "t1",
    name: "Sarah Johnson",
    designation: "Sourcing Manager",
    company: "Nordic Wear",
    review:
      "Rivar Trims has been our go-to partner for sustainable accessories. Their recycled woven labels are top-notch, and they perfectly matched our brand's eco-conscious values.",
  },
  {
    _id: "t2",
    name: "Michael Chen",
    designation: "Production Head",
    company: "Urban Denim Co.",
    review:
      "Reliability is everything in this industry. Rivar Trims delivers on time, every time. Their leather patches added the perfect premium finish to our latest jeans collection.",
  },
  {
    _id: "t3",
    name: "Elena Rodriguez",
    designation: "Lead Designer",
    company: "Luxe Intimates",
    review:
      "We struggled to find heat transfers that were soft enough for our lingerie line until we found Rivar. Their 'soft-touch' transfers are incredible—barely there but crystal clear.",
  },
];
