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
    title: "1. Purpose",
    description: `This Privacy Policy explains how we collect, use, store, and share your personal information in accordance with the <strong>Privacy Act 2020 (NZ)</strong>.`,
  },
  {
    title: "2. What We Collect",
    description: `
      <p>We may collect the following information:</p>
      <ul>
        <li>Name and contact details (email, phone, etc.)</li>
        <li>Billing and payment details</li>
        <li>Technical data (IP address, browser type, access logs)</li>
        <li>Usage data (pages visited, services used)</li>
        <li>Any content or files you upload to our services</li>
      </ul>
    `,
  },
  {
    title: "3. How We Collect Your Information",
    description: `
      <ul>
        <li>When you fill out forms or create an account</li>
        <li>When you contact us or use our services</li>
        <li>Automatically through cookies and analytics tools</li>
      </ul>
    `,
  },
  {
    title: "4. Why We Collect Your Information",
    description: `
      <ul>
        <li>To provide and improve our services</li>
        <li>To communicate with you (service alerts, updates)</li>
        <li>To process payments and invoices</li>
        <li>For legal compliance (e.g., tax reporting, dispute resolution)</li>
        <li>To prevent fraud or misuse</li>
      </ul>
    `,
  },
  {
    title: "5. Storage and Security",
    description: `We take reasonable steps to protect your personal data from unauthorized access, loss, or misuse. Data is stored on secure servers with limited access controls.`,
  },
  {
    title: "6. Disclosure of Information",
    description: `
      <p>We do not sell your data. We may share information with:</p>
      <ul>
        <li>Trusted service providers (e.g., payment processors, hosting providers)</li>
        <li>Law enforcement or regulators if legally required</li>
        <li>Partners involved in delivering services to you (under confidentiality)</li>
      </ul>
    `,
  },
  {
    title: "7. Cookies & Analytics",
    description: `We use cookies and tracking tools (e.g., Google Analytics) to improve user experience and measure performance. You can disable cookies in your browser settings.`,
  },
  {
    title: "8. Your Rights",
    description: `
      <p>Under the <strong>Privacy Act 2020</strong>, you have the right to:</p>
      <ul>
        <li>Access the personal information we hold about you</li>
        <li>Request correction of your personal information</li>
        <li>Withdraw consent (where applicable)</li>
        <li>Lodge a complaint with the <strong>Privacy Commissioner</strong></li>
      </ul>
      <p>To exercise your rights, please contact us via the website.</p>
    `,
  },
  {
    title: "9. International Transfers",
    description: `Some of your data may be stored or processed overseas (e.g., by global cloud services). We ensure all providers follow reasonable data protection standards.`,
  },
  {
    title: "10. Updates to This Policy",
    description: `We may update this policy from time to time. The latest version will always be posted on our website.`,
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
                <strong>Business Name: </strong>Rivar Trims Limited
              </li>
              <li>
                <strong>NZBN: </strong>9429052881626
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
