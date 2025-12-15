import PrivacyPolicySection from "@/components/(common)/(privacy-policy-page)/PrivacyPolicySection";
import RefundPolicySection from "@/components/(common)/(privacy-policy-page)/RefundPolicySection";
import FollowUpSection from "@/components/sections/FollowUpSection";

export const metadata = {
  title: "Privacy Policy | Rivar Trims",
  description:
    "Rivar Trims | Our privacy policy outlines how we collect, use, and protect your personal information. We're committed to ensuring your privacy and security in our digital world.",
};

const PrivacyPolicyPage = () => {
  return (
    <main>
      <PrivacyPolicySection />
      <RefundPolicySection />
      <FollowUpSection />
    </main>
  );
};

export default PrivacyPolicyPage;
