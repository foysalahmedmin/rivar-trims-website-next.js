import {
  Description,
  SectionTitle,
  Subtitle,
  Title,
} from "@/components/ui/SectionTitle";

type TSection = {
  title: string;
  description: string; // HTML String
};

const sections: TSection[] = [
  {
    title: "1. Introduction",
    description: `These Terms and Conditions (“Terms”) govern your access to and use of the Rivar Trims website and services. By accessing this Site, you agree to comply with and be bound by these Terms and all applicable laws and regulations of New Zealand. If you do not agree, do not use our services.`,
  },
  {
    title: "2. Definitions",
    description: `
      <ul>
        <li><strong>“We”, “Us”, “Our”</strong> – Rivar Trims Limited.</li>
        <li><strong>“You”, “User”, “Client”</strong> – Any person or entity using our services.</li>
        <li><strong>“Services”</strong> – Web development, digital solutions, hosting, and related technology services.</li>
        <li><strong>“Site”</strong> – <a href="https://rivartrims.com/" target="_blank" style="text-decoration-line:none;color:rgb(66,133,244)">https://rivartrims.com/</a></li>
      </ul>
    `,
  },
  {
    title: "3. Compliance with New Zealand Law",
    description: `
      <p>We operate in accordance with the laws of New Zealand. These Terms are subject to the following Acts:</p>
      <ul>
        <li><strong>Consumer Guarantees Act 1993 (CGA)</strong></li>
        <li><strong>Fair Trading Act 1986 (FTA)</strong></li>
        <li><strong>Privacy Act 2020</strong></li>
        <li><strong>Unsolicited Electronic Messages Act 2007</strong></li>
        <li><strong>Electronic Transactions Act 2002</strong></li>
      </ul>
      <p>Nothing in these Terms excludes your rights under these laws unless you're using our services for business purposes, in which case certain exclusions apply (see clause 15).</p>
    `,
  },
  {
    title: "4. Eligibility",
    description: `To use our services, you must be at least 18 years of age or have legal consent from a guardian.`,
  },
  {
    title: "5. Account and Security",
    description: `You are responsible for protecting your account credentials and must notify us of any unauthorized access.`,
  },
  {
    title: "6. Use of Services",
    description: `
      <p>You agree not to misuse our services or engage in any unlawful activity, including:</p>
      <ul>
        <li>Misleading or deceptive conduct (FTA)</li>
        <li>Uploading or distributing harmful code or spam (Unsolicited Electronic Messages Act)</li>
        <li>Violating intellectual property rights</li>
      </ul>
    `,
  },
  {
    title: "7. Fees and Payment",
    description: `
      <ul>
        <li>Fees will be clearly stated in your order or service agreement.</li>
        <li>All payments must be made by the due date.</li>
        <li>Late fees may be charged per the NZ High Court judgment rate + 3%.</li>
      </ul>
    `,
  },
  {
    title: "8. Trial Periods",
    description: `Trial access is optional and ends automatically unless a paid service is initiated.`,
  },
  {
    title: "9. Service Levels (Uptime and Maintenance)",
    description: `We aim to maintain 99.9% uptime. Planned maintenance will be communicated in advance.`,
  },
  {
    title: "10. Data Ownership and Retention",
    description: `
      <ul>
        <li>You retain ownership of your content and data.</li>
        <li>Data will be deleted 30 days after cancellation unless required by law.</li>
        <li>We retain anonymised analytics in compliance with the Privacy Act 2020.</li>
      </ul>
    `,
  },
  {
    title: "11. Intellectual Property",
    description: `We retain all rights to the software, content, and materials provided unless stated otherwise in writing.`,
  },
  {
    title: "12. Software Licenses",
    description: `Software provided by us is licensed, not sold. Reverse engineering is strictly prohibited.`,
  },
  {
    title: "13. Acceptable Use Policy",
    description: `
      <p>You may not use our services for:</p>
      <ul>
        <li>Hosting illegal or harmful content</li>
        <li>Engaging in phishing, spamming, or network attacks</li>
        <li>Violating New Zealand’s cybercrime or anti-spam laws</li>
      </ul>
    `,
  },
  {
    title: "14. Confidentiality",
    description: `Both parties agree to keep non-public information confidential unless required by law.`,
  },
  {
    title: "15. Privacy",
    description: `We comply with the <strong>Privacy Act 2020</strong>. Your personal data will be collected, stored, and processed responsibly.<br>By using our services, you agree to the practices described in our [Privacy Policy].`,
  },
  {
    title: "16. Consumer Rights",
    description: `
      <ul>
        <li><strong>For Consumers:</strong> You are protected under the <strong>Consumer Guarantees Act 1993</strong>.</li>
        <li><strong>For Business Clients:</strong> You agree that the CGA does not apply, as permitted under section 43(2).</li>
      </ul>
    `,
  },
  {
    title: "17. Subcontractors and Third Parties",
    description: `We may use verified partners to deliver parts of our services. You agree we are not liable for their independent actions unless otherwise stated.`,
  },
  {
    title: "18. Portfolio and Publicity",
    description: `We may use your business name and logo in our portfolio unless you request otherwise.`,
  },
  {
    title: "19. Export Controls",
    description: `You agree to comply with all New Zealand export control laws. Services may not be used in violation of international sanctions.`,
  },
  {
    title: "20. Indemnity",
    description: `You agree to indemnify Rivar Trims Limited for any loss arising from your breach of these Terms or misuse of the services.`,
  },
  {
    title: "21. Warranties and Disclaimers",
    description: `We will provide services with reasonable care and skill.<br>We do not guarantee uninterrupted service. All services are provided “as is,” subject to applicable consumer protection laws.`,
  },
  {
    title: "22. Limitation of Liability",
    description: `
      <ul>
        <li>Liability is limited to the amount paid by you in the preceding 12 months.</li>
        <li>We are not liable for indirect or consequential losses, subject to the CGA and FTA.</li>
      </ul>
    `,
  },
  {
    title: "23. Termination",
    description: `
      <ul>
        <li>Either party may terminate this agreement at any time, subject to 14 days’ notice.</li>
        <li>We reserve the right to suspend services if you breach these Terms.</li>
      </ul>
    `,
  },
  {
    title: "24. Effects of Termination",
    description: `Upon termination, you must cease using our services and delete all confidential materials.`,
  },
  {
    title: "25. Force Majeure",
    description: `We are not liable for delays or failures caused by events outside our control (e.g. natural disasters, cyberattacks, strikes).`,
  },
  {
    title: "26. Dispute Resolution",
    description: `We encourage direct resolution of disputes. If unresolved, disputes may be submitted to arbitration under the Arbitration Act 1996.`,
  },
  {
    title: "27. Notices",
    description: `Notices must be delivered in writing via email or electronic notification through the Site.`,
  },
  {
    title: "28. Entire Agreement",
    description: `These Terms represent the entire agreement between you and Rivar Trims Limited, superseding any previous terms or understandings.`,
  },
  {
    title: "29. Severability",
    description: `If any part of these Terms is deemed unenforceable, the remaining clauses will remain in effect.`,
  },
];

const TermsAndConditionsSection = () => {
  return (
    <section className="py-16 md:py-24">
      <div className="container">
        <SectionTitle>
          <Subtitle>Terms</Subtitle>
          <Title>Terms and Conditions</Title>
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

export default TermsAndConditionsSection;
