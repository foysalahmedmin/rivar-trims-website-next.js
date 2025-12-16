
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
    description: `These Terms and Conditions (“Terms”) govern your purchase of products and use of services from Rivar Trims. By placing an order with us, you agree to comply with and be bound by these Terms. If you do not agree, strictly do not proceed with any orders.`,
  },
  {
    title: "2. Definitions",
    description: `
      <ul>
        <li><strong>“Seller”, “We”, “Us”</strong> – Rivar Trims Limited.</li>
        <li><strong>“Buyer”, “Client”</strong> – The entity purchasing goods from us.</li>
        <li><strong>“Goods”</strong> – Garment accessories including but not limited to woven labels, heat transfers, hang tags, and packaging items.</li>
        <li><strong>“Order”</strong> – A confirmed request for the supply of Goods.</li>
      </ul>
    `,
  },
  {
    title: "3. General Conditions",
    description: `
      <p>We operate as a business-to-business (B2B) manufacturer. By placing an order, you confirm that you are purchasing goods for commercial purposes.</p>
      <ul>
        <li>We reserve the right to refuse service to anyone for any reason at any time.</li>
        <li>You understand that your content (excluding credit card information) may be transferred unencrypted and involve transmissions over various networks.</li>
      </ul>
    `,
  },
  {
    title: "4. Quotations and Orders",
    description: `All quotations are valid for 30 days unless otherwise stated. An order is only binding once confirmed in writing by Rivar Trims. We reserve the right to correct any accidental errors in pricing or specifications on quotations and invoices.`,
  },
  {
    title: "5. Pricing and Payment",
    description: `
      <ul>
        <li>Prices are subject to change without notice due to fluctuations in raw material costs or currency exchange rates.</li>
        <li>Payment terms are as agreed in the Proforma Invoice (typically T/T or L/C).</li>
        <li>The Buyer is responsible for all banking charges and applicable taxes/duties in their country.</li>
      </ul>
    `,
  },
  {
    title: "6. Production and Lead Times",
    description: `
      <p>Lead times provided are estimates only and are not guaranteed.</p>
      <ul>
        <li>Sampling: Typically 3-7 business days.</li>
        <li>Bulk Production: Typically 7-15 business days after sample approval.</li>
      </ul>
      <p>We are not liable for delays caused by force majeure events, shipping delays, or customs clearance issues.</p>
    `,
  },
  {
    title: "7. Quality and Tolerances",
    description: `
      <ul>
        <li>We manufacture goods according to the approved samples.</li>
        <li>Due to the nature of textile manufacturing, minor variations in color, size, and weaving texture (within industry standard tolerances) may occur and do not constitute defects.</li>
        <li>Color matching is done based on Pantone (TCX/TPX) standards or physical swatches provided by the client.</li>
      </ul>
    `,
  },
  {
    title: "8. Shipping and Delivery",
    description: `
      <ul>
        <li>Unless otherwise agreed (e.g., FOB, CIF), goods are shipped Ex-Works (EXW) from our factory in Dhaka.</li>
        <li>Risk of loss passes to the Buyer upon delivery to the carrier.</li>
        <li>The Buyer is responsible for ensuring the goods comply with import regulations in the destination country.</li>
      </ul>
    `,
  },
  {
    title: "9. Intellectual Property",
    description: `The Buyer warrants that they hold the necessary intellectual property rights (trademarks, copyrights) for all designs and logos submitted for production. Rivar Trims assumes no liability for IP infringement claims arising from the production of goods as per Buyer's specifications.`,
  },
  {
    title: "10. Inspection and Claims",
    description: `
      <p>The Buyer must inspect the goods upon receipt.</p>
      <ul>
        <li>Any claims for defects or shortages must be made in writing within 7 days of delivery.</li>
        <li>Failure to notify us within this period constitutes acceptance of the goods.</li>
        <li>In case of a valid defect claim, our liability is limited to repairing or replacing the defective goods.</li>
      </ul>
    `,
  },
  {
    title: "11. Confidentiality",
    description: `Both parties agree to keep all proprietary information, including pricing, designs, and technical specifications, confidential and not to disclose it to third parties without consent.`,
  },
  {
    title: "12. Limitation of Liability",
    description: `Rivar Trims shall not be liable for any indirect, incidental, or consequential damages (including loss of profit) arising from the use or inability to use our products. Our total liability shall not exceed the invoice value of the defective goods.`,
  },
  {
    title: "13. Force Majeure",
    description: `We are not liable for failure to perform our obligations due to events beyond our reasonable control, such as natural disasters, strikes, political unrest, or supply chain disruptions.`,
  },
  {
    title: "14. Governing Law",
    description: `These Terms shall be governed by and construed in accordance with the laws of Bangladesh. Any disputes arising shall be subject to the exclusive jurisdiction of the courts in Dhaka.`,
  },
  {
    title: "15. Contact Information",
    description: `Questions about the Terms and Conditions should be sent to us at info@rivartrims.com.`,
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

export default TermsAndConditionsSection;
