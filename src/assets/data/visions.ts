import type { LucideIcon } from "lucide-react";
import { CheckCircle, Leaf, ShieldCheck } from "lucide-react";

export type TPoints = {
  thumbnail: string;
  list: {
    _id: string;
    title: string;
    description: string;
    links?: {
      text?: string;
      url?: string;
    }[];
  }[];
};

export type TValues = {
  _id: string;
  title: string;
  description: string;
  icon: LucideIcon;
  link: string;
};

export const points: TPoints = {
  thumbnail: "/images/(visions-page)/points.png",
  list: [
    {
      _id: "vp-1",
      title: "We envision the future of digital transformation",
      description:
        "As architects of digital evolution, we integrate cutting-edge technologies with strategic business insights to revolutionize how organizations operate and engage. Our comprehensive approach combines AI-driven automation, cloud-native architectures, and data-centric solutions to future-proof businesses against technological disruption. We specialize in transforming legacy systems into agile digital ecosystems that anticipate market shifts, enhance customer experiences, and create sustainable competitive advantages in an increasingly digital-first economy.",
    },
    {
      _id: "vp-2",
      title: "Driven by Innovation",
      description:
        "Innovation is the cornerstone of our DNA - we maintain dedicated R&D teams that continuously explore emerging technologies like quantum computing, blockchain, and generative AI. Our innovation framework includes quarterly technology foresight workshops, partnerships with leading tech universities, and a 15% R&D budget allocation. This commitment enables us to pioneer solutions such as self-optimizing marketing algorithms, predictive maintenance systems, and adaptive UX frameworks that consistently deliver 30-50% efficiency gains for our clients while solving previously intractable business challenges.",
    },
    {
      _id: "vp-3",
      title: "Adaptive & Strategic",
      description:
        "We employ a proprietary Digital Alignment Framework™ that meticulously maps business objectives to technical solutions through four-phase methodology: discovery, blueprinting, implementation, and evolution. For each engagement, we assemble cross-functional squads combining industry specialists, solution architects, and domain experts who co-create strategies addressing specific pain points. Whether modernizing legacy banking infrastructure, creating omnichannel retail experiences, or building IoT-enabled supply chains, our tailored approach ensures solutions scale with growth while maintaining 99.9% system uptime and delivering measurable ROI within 6-12 months.",
    },
    {
      _id: "vp-4",
      title: "Client-Centric Approach",
      description:
        "Our partnership model transcends traditional vendor relationships through embedded collaboration - we assign dedicated success managers who function as extensions of your leadership team. This includes quarterly business reviews, transparent progress dashboards, and co-innovation workshops. We implement a continuous feedback loop incorporating stakeholder input at every development sprint, ensuring solutions evolve with your business needs. This approach has resulted in 95% client retention and 4.8/5 satisfaction scores over 5+ years, with many relationships evolving into multi-year strategic partnerships.",
    },
    {
      _id: "vp-5",
      title: "End-to-End Solutions",
      description:
        "From initial concept validation to ongoing optimization, we provide comprehensive lifecycle management through our integrated service pillars: Digital Strategy, Experience Design, Technology Implementation, and Growth Enablement. Our full-spectrum capabilities include market research, UX prototyping, full-stack development, DevOps automation, performance marketing, and AI-powered analytics. This holistic approach eliminates integration headaches while ensuring seamless interoperability between systems - reducing implementation timelines by 40% and providing single-point accountability for all digital initiatives.",
    },
    {
      _id: "vp-6",
      title: "Scalable & Secure Systems",
      description:
        "We engineer solutions with enterprise-grade resilience using military-grade encryption, zero-trust architectures, and compliance-by-design principles. Our scalability framework incorporates auto-scaling cloud infrastructure, microservices architecture, and load-optimized databases capable of handling 1000% traffic spikes. All solutions undergo rigorous security testing including OWASP compliance checks, penetration testing, and SOC 2 audits. For regulated industries, we implement specialized frameworks like HIPAA for healthcare and PCI DSS for fintech, ensuring systems grow securely from startup to enterprise scale while maintaining 99.995% availability SLAs.",
    },
  ],
};

export const values: TValues[] = [
  {
    _id: "safety",
    title: "Safety",
    description:
      "We prioritize the security and reliability of all our digital solutions, ensuring your data and systems remain protected at every stage of development and deployment.",
    icon: ShieldCheck,
    link: "/projects/",
  },
  {
    _id: "sustainability",
    title: "Sustainability",
    description:
      "Our approach integrates sustainable technology practices that minimize environmental impact while maximizing efficiency and long-term value for your business.",
    icon: Leaf,
    link: "/projects/",
  },
  {
    _id: "quality",
    title: "Quality",
    description:
      "We commit to delivering high-quality digital products and services by following industry best practices, rigorous testing, and continuous improvement to exceed client expectations.",
    icon: CheckCircle,
    link: "/projects/",
  },
];
