import TermsAndConditionsSection from "@/components/(common)/(terms-and-conditions-page)/TermsAndConditionsSection";
import FollowUpSection from "@/components/sections/FollowUpSection";

export const metadata = {
  title: "Terms and Conditions | Rivar Trims",
  description:
    "Rivar Trims | Official terms and conditions governing the purchase of garment accessories and trims. Please read carefully before placing an order.",
};

const TermsAndConditionsPage = () => {
  return (
    <main>
      <TermsAndConditionsSection />
      <FollowUpSection />
    </main>
  );
};

export default TermsAndConditionsPage;
