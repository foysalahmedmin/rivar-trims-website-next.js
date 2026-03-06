import ContactSection from "@/components/(common)/(contact-page)/ContactSection";
import FollowUpSection from "@/components/sections/FollowUpSection";
import PageHeaderSection from "@/components/sections/PageHeaderSection";

export const metadata = {
  title: "Contact | Rivar Trims",
  description:
    "Rivar Trims | Contact Us | We'd love to hear from you! Reach out to our team of industry professionals today and let's work together on your garment accessories needs.",
};

const ContactPage = () => {
  return (
    <main>
      <PageHeaderSection
        subtitle="Contact"
        title="We'd love to hear from you"
        description="Rivar Trims Limited is a market leader since 2017, producing world-class RMG accessories. Reach out to us today to start a smooth process for your accessories orders."
      />
      <ContactSection />
      {/* <ProjectApplySection /> */}
      <FollowUpSection />
    </main>
  );
};

export default ContactPage;
