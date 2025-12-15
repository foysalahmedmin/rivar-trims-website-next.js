import { faqs } from "@/assets/data/faqs";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/Accordion";
import { Description, SectionTitle, Title } from "@/components/ui/SectionTitle";

const FAQs = () => {
  return (
    <div className="space-y-6">
      <SectionTitle>
        <Title>Frequently asked questions</Title>
        <Description>
          These sets of questionnaires and answers by experts can help get a
          better understanding of our general remodeling services, timeline &
          process.
        </Description>
      </SectionTitle>
      <div>
        <Accordion type="single" collapsible className="w-full">
          {faqs?.map((faq) => (
            <AccordionItem key={faq._id} value={faq._id}>
              <AccordionTrigger value={faq._id}>
                <span className="text-xl">{faq?.question}</span>
              </AccordionTrigger>
              <AccordionContent value={faq._id}>
                <div className="prose prose-headings:font-normal dark:prose-invert">
                  <article
                    className="text-foreground"
                    dangerouslySetInnerHTML={{ __html: faq.answer }}
                  />
                </div>
              </AccordionContent>
            </AccordionItem>
          ))}
        </Accordion>
      </div>
    </div>
  );
};

export default FAQs;
