import FollowUpSection from "@/components/sections/FollowUpSection";
import PageHeaderSection from "@/components/sections/PageHeaderSection";
import SplitSection from "@/components/sections/SplitSection";

export const metadata = {
  title: "Pricing | Rivar Trims",
  description:
    "Rivar Trims offers flexible, value-driven pricing tailored to your unique project needs. We prioritize transparency, quality, and results—without locking you into one-size-fits-all packages.",
};

const PricingPage = () => {
  return (
    <main>
      <PageHeaderSection
        subtitle="Pricing"
        title="Flexible, Transparent & Value-Focused"
        description="At Rivar Trims, we don’t believe in one-size-fits-all pricing. Every business is unique, and so are its digital needs. Whether you're launching a startup MVP or scaling a full enterprise platform, our pricing adapts to your goals, scope, and timeline."
        image="/images/(pricing-page)/page-header.png"
      />

      <SplitSection
        title="Flexible Pricing, Tailored for You"
        description={`
<div class="space-y-6">
  <div>
    <h2 class="text-xl font-bold">💸 Pricing That Works Around You</h2>
    <p class="text-lg font-semibold">No Packages. No Guesswork. Just What You Need.</p>
    <p>
      At Rivar Trims, we do pricing differently. Forget bloated packages
      and locked-in rates — we customise every project based on your
      exact goals, scope, and budget.
    </p>
    <p>
      Whether you're a startup with a vision or an established
      business needing smart digital solutions, we shape our services
      around you.
    </p>
  </div>

  <div>
    <h2 class="text-xl font-bold">🧠 Request. Mind Map. Quote.</h2>
    <p class="text-lg font-semibold">Here’s how we work:</p>
    <ol class="list-inside list-decimal space-y-4">
      <li>
        <strong>You Tell Us What You Need</strong><br />
        Fill out our Contact Form — tell us what you’re after, your
        goals, and your budget range.
      </li>
      <li>
        <strong>We Build a Mind Map</strong><br />
        Our team will break it down into a clear project flow —
        step-by-step.
      </li>
      <li>
        <strong>You Get a Tailored Quote</strong><br />
        We match your budget as closely as possible — with honest,
        scalable pricing.
      </li>
    </ol>
  </div>

  <div>
    <h2 class="text-xl font-bold">🧩 Built for Any Budget</h2>
    <p>
      Whether you're building a landing page or launching a full
      digital platform, we’ve got options for:
    </p>
    <ul class="list-inside list-disc space-y-1">
      <li>Limited budgets 💼</li>
      <li>Growth-focused businesses 📈</li>
      <li>Long-term brand scaling 🚀</li>
    </ul>
  </div>

  <div>
    <h2 class="text-xl font-bold">🤝 Pay for What Matters. Not for What You Don’t.</h2>
    <p>
      With Rivar Trims, you’re in control — no surprise fees, no fluff,
      no paying for extras you didn’t ask for.
    </p>
  </div>

  <div>
    <h2 class="text-xl font-bold">Let’s Make It Work — Together</h2>
    <p>
      Your vision deserves a fair price and a smart plan. <br />
      Fill out our Contact Form and we’ll get back with a personalised
      mind map and transparent quote.
    </p>
    <p class="font-semibold">Flexible. Friendly. Future-ready.</p>
  </div>
</div>
`}
        image="https://images.unsplash.com/photo-1563013544-824ae1b704d3?w=600&h=800&fit=crop"
      />

      <FollowUpSection />
    </main>
  );
};

export default PricingPage;
