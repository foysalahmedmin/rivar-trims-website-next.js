"use client";

import {
  Description,
  SectionTitle,
  Subtitle,
  Title,
} from "@/components/ui/SectionTitle";
import { CheckCircle2 } from "lucide-react";

const goals = [
  "Customer support & satisfaction.",
  "Always expand the boundaries through new opportunities.",
  "Promote & encourage diversity.",
  "On Time shipment is one of the foremost tasks.",
  "Maintain Business discipline.",
  "Recognition teamwork & self-initiative.",
  "Journey is for 'good' to 'great'.",
  "Continuous improvement through latest technology and innovation.",
];

const GoalsSection = () => {
  return (
    <section className="bg-muted/30 py-16 md:py-24">
      <div className="container">
        <div className="mx-auto max-w-4xl">
          <SectionTitle className="mb-12 text-center">
            <Subtitle>Focus & Direction</Subtitle>
            <Title>Our Goals</Title>
            <Description>
              We are driven by a clear set of objectives that guide our growth
              and ensure the highest level of service for our global partners.
            </Description>
          </SectionTitle>

          <div className="grid gap-6 md:grid-cols-2">
            {goals.map((goal, index) => (
              <div
                key={index}
                className="border-border/50 flex items-start gap-4 rounded-xl border bg-white p-4 shadow-sm transition-all hover:shadow-md"
              >
                <div className="mt-1 flex-shrink-0">
                  <CheckCircle2 className="text-primary h-6 w-6" />
                </div>
                <p className="text-foreground/90 text-lg font-medium">{goal}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default GoalsSection;
