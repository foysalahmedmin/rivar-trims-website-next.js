import ContactForm from "./ContactForm";
import FAQs from "./FAQs";

const FAQSection = () => {
  return (
    <section id="faq" className="bg-muted intersection-fade-in py-16 md:py-24">
      <div className="container">
        <div className="grid grid-cols-1 gap-8 md:grid-cols-2 md:gap-12">
          <FAQs />
          <ContactForm />
        </div>
      </div>
    </section>
  );
};

export default FAQSection;
