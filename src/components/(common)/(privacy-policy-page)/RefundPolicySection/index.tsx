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
    title: "1. Our Promise",
    description: `We comply with the <strong>Consumer Guarantees Act 1993 (NZ)</strong> and provide services with reasonable care and skill. If something goes wrong due to our fault, we will work to fix it.`,
  },
  {
    title: "2. Refund Eligibility",
    description: `
      <p>Refunds may be granted in the following situations:</p>
      <ul>
        <li>You were charged in error</li>
        <li>You cancel before service delivery begins</li>
        <li>The service was not delivered as described or agreed</li>
        <li>A service was significantly defective and cannot be resolved within a reasonable timeframe</li>
      </ul>
      <blockquote>
        <p><strong>⚠️ Note</strong>: Refunds are not provided for change of mind, or if you've misused the service or failed to follow requirements.</p>
      </blockquote>
    `,
  },
  {
    title: "3. How to Request a Refund",
    description: `
      <p>To request a refund:</p>
      <ul>
        <li>Email us through the contact form on our website</li>
        <li>Include details: service, date of purchase, issue, and any relevant documentation</li>
        <li>We will investigate and respond within <strong>5 business days</strong></li>
      </ul>
    `,
  },
  {
    title: "4. Cancellation Policy",
    description: `
      <h4>One-off Projects (e.g., website development):</h4>
      <ul>
        <li><strong>Before work starts:</strong> Full refund</li>
        <li><strong>During project:</strong> Refund minus work already completed</li>
        <li><strong>After delivery:</strong> No refund unless agreed issues remain unresolved</li>
      </ul>
      <h4>Subscription Services (e.g., hosting, ongoing support):</h4>
      <ul>
        <li><strong>Monthly plans:</strong> Can be cancelled anytime before the next billing date</li>
        <li><strong>Annual plans:</strong> Can be cancelled with pro-rata refund only if service fails to meet agreed deliverables</li>
      </ul>
    `,
  },
  {
    title: "5. Processing Refunds",
    description: `
      <ul>
        <li>Approved refunds will be processed to the original payment method</li>
        <li>It may take 5–10 business days depending on your bank or provider</li>
      </ul>
    `,
  },
  {
    title: "6. Contact",
    description: `
      <p>All refund or cancellation inquiries must be made through the contact page on 
      <a href="https://rivartrims.com/" target="_blank" style="text-decoration-line:none;color:rgb(66,133,244)">https://rivartrims.com/</a></p>
    `,
  },
];

const RefundPolicySection = () => {
  return (
    <section className="bg-muted py-16 md:py-24">
      <div className="container">
        <SectionTitle>
          <Subtitle>Refund & Cancellation</Subtitle>
          <Title>Refund & Cancellation Policy</Title>
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

export default RefundPolicySection;
