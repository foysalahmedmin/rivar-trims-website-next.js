
import {
    Description,
    SectionTitle,
    Subtitle,
    Title,
} from "@/components/ui/SectionTitle";

type TSection = {
  title: string;
  description: string; // HTML string
};

const sections: TSection[] = [
  {
    title: "1. Policy Overview",
    description: `Rivar Trims complies with all international industrial standards regarding data protection. This policy outlines how we handle information collected from our clients, suppliers, and website visitors.`,
  },
  {
    title: "2. Information We Collect",
    description: `
      <p>We collect information necessary to process your orders and inquiries, including:</p>
      <ul>
        <li>Company details (Name, Address, Registration Number)</li>
        <li>Contact person details (Name, Email, Phone Number)</li>
        <li>Order specifications (Designs, Artwork, Tech Packs)</li>
        <li>Shipping and billing information</li>
      </ul>
    `,
  },
  {
    title: "3. Use of Your Information",
    description: `
      <p>Your information is used for the following purposes:</p>
      <ul>
        <li>Processing sample requests and bulk orders</li>
        <li>Creating quotations and invoices</li>
        <li>Arranging potential shipping and logistics</li>
        <li>Communicating production updates</li>
        <li>Legal and regulatory compliance</li>
      </ul>
    `,
  },
  {
    title: "4. Protection of Designs & IP",
    description: `We understand the sensitivity of pre-release fashion designs. All artwork, tech packs, and samples submitted to us are treated as strictly confidential. We do not share your designs with third parties without your explicit consent.`,
  },
  {
    title: "5. Data Security",
    description: `We implement appropriate technical and organizational measures to protect your data against unauthorized access, alteration, or destruction. Our internal systems are secured and access is restricted to authorized personnel only.`,
  },
  {
    title: "6. Sharing of Information",
    description: `
      <p>We do not sell your personal data. We may share necessary details with:</p>
      <ul>
        <li>Logistics partners (for shipping goods)</li>
        <li>Payment processors (for banking transactions)</li>
        <li>Government authorities (customs and tax compliance)</li>
      </ul>
    `,
  },
  {
    title: "7. Cookies",
    description: `Our website uses standard cookies to enhance user experience and analyze traffic. You can choose to disable cookies through your browser settings, though this may affect site functionality.`,
  },
  {
    title: "8. Your Rights",
    description: `
      <p>You have the right to request access to the personal data we hold about you and to ask for corrections if it is inaccurate. Please contact our administrative team for any such requests.</p>
    `,
  },
  {
    title: "9. Updates to Policy",
    description: `We reserve the right to modify this privacy policy at any time. Changes will be posted on this page with an updated revision date.`,
  },
  {
    title: "10. Contact Us",
    description: `For any privacy-related concerns, please contact us at info@rivartrims.com or visit our office in Dhaka, Bangladesh.`,
  },
];

const PrivacyPolicySection = () => {
  return (
    <section className="py-16 md:py-24">
      <div className="container">
        <SectionTitle>
          <Subtitle>Privacy</Subtitle>
          <Title>Privacy Policy</Title>
          <Description>
            <ul className="flex flex-col flex-wrap gap-x-2 md:flex-row md:items-center">
              <li>
                <strong>Company: </strong>Rivar Trims Limited
              </li>
              <li>
                <strong>Location: </strong>Dhaka, Bangladesh
              </li>
              <li>
                <strong>Website: </strong>
                <a href="https://rivartrims.com/" target="_blank">
                  https://rivartrims.com/
                </a>
              </li>
            </ul>
          </Description>
        </SectionTitle>
        <div className="space-y-8 md:space-y-12">
          {sections?.map((section, index) => (
            <div key={index} className="space-y-2">
              <h3 className="text-3xl">{section?.title}</h3>
              <div className="w-full">
                <div className="prose prose-headings:font-normal dark:prose-invert w-full max-w-none">
                  <div
                    className="text-foreground font-sans"
                    dangerouslySetInnerHTML={{
                      __html: section?.description || "",
                    }}
                  />
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default PrivacyPolicySection;
