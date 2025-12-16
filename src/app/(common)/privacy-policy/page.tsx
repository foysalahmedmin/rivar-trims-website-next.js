import PrivacyPolicySection from "@/components/(common)/(privacy-policy-page)/PrivacyPolicySection";
import RefundPolicySection from "@/components/(common)/(privacy-policy-page)/RefundPolicySection";
import FollowUpSection from "@/components/sections/FollowUpSection";

export const metadata = {
  title: "Privacy Policy | Rivar Trims",
  description:
    "Rivar Trims | We are committed to protecting your business data and intellectual property. Learn how we handle your information and designs.",
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
