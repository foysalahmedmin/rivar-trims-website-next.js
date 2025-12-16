
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
    title: "1. Return Policy Overview",
    description: `At Rivar Trims, we are committed to delivering high-quality garment accessories. Due to the custom nature of our products (branded labels, tags, etc.), we generally cannot accept returns for change of mind. However, we stand behind the quality of our manufacturing.`,
  },
  {
    title: "2. Defective or Damaged Goods",
    description: `
      <p>If you receive goods that are defective or do not match the approved sample, you may be eligible for a replacement or refund.</p>
      <ul>
        <li><strong>Inspection Period:</strong> You must inspect the goods within 7 days of delivery.</li>
        <li><strong>Notification:</strong> Report any issues to us in writing, including photos of the defects and a detailed description.</li>
        <li><strong>Verification:</strong> We will review the claim and may request physical samples of the defective items for testing.</li>
      </ul>
    `,
  },
  {
    title: "3. Approved Replacements",
    description: `If a manufacturing defect is confirmed, we will prioritize re-production of the affected items at no additional cost to you. This is our primary method of resolution to ensure your production lines keep moving.`,
  },
  {
    title: "4. Refund Eligibility",
    description: `
      <p>Refunds are considered only if:</p>
      <ul>
        <li>We are unable to re-produce the goods within a reasonable timeframe.</li>
        <li>The defect makes the goods completely unusable for their intended purpose.</li>
      </ul>
      <blockquote>
        <p><strong>Note:</strong> Minor variations within industry standard tolerances for color or size are not considered defects and are not eligible for refunds.</p>
      </blockquote>
    `,
  },
  {
    title: "5. Order Cancellation",
    description: `
      <ul>
        <li><strong>Before Production:</strong> If you cancel an order before production has started, a full refund may be issued, minus any costs incurred for sampling or raw material procurement.</li>
        <li><strong>During Production:</strong> Once bulk production has commenced, orders cannot be cancelled or refunded as the goods are custom-made for your brand.</li>
      </ul>
    `,
  },
  {
    title: "6. Return Shipping",
    description: `If a physical return of defective goods is required by us, Rivar Trims will cover the shipping costs. Do not return goods without prior authorization from our sales team.`,
  },
  {
    title: "7. Contact Us",
    description: `
      <p>For any claims regarding quality or refunds, please contact your account manager directly or email us at info@rivartrims.com.</p>
    `,
  },
  {
     title: "Shipping Policy", // Keeping a section for Shipping if it was previously mixed or relevant, though title is Refund/Return
     description: "Please note that all shipping timelines are estimates. We are not responsible for delays caused by customs clearance or third-party logistics providers."
  }
];

const RefundPolicySection = () => {
  return (
    <section className="bg-muted py-16 md:py-24">
      <div className="container">
        <SectionTitle>
          <Subtitle>Returns & Replacements</Subtitle>
          <Title>Return & Refund Policy</Title>
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

export default RefundPolicySection;
