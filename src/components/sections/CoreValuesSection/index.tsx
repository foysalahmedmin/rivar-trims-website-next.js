"use client";

import { MessageSquareQuote } from "lucide-react";

const coreValues = [
  "Innovation",
  "Diversity & Inclusion",
  "Corporate Social Responsibility",
  "Research & Development",
  "Adding Newness",
  "Partnership",
];

const CoreValuesSection = () => {
  return (
    <section className="bg-primary/5 border-primary/10 relative overflow-hidden border-y py-16 md:py-24">
      <div className="text-primary/5 absolute top-0 right-0 translate-x-1/2 -translate-y-1/2 rotate-12 p-8">
        <MessageSquareQuote size={300} strokeWidth={1} />
      </div>

      <div className="relative z-10 container">
        <div className="mx-auto max-w-4xl text-center">
          <div className="bg-primary/10 border-primary/20 text-primary mb-6 inline-flex items-center gap-2 rounded-full border px-4 py-2 text-xs leading-none font-bold tracking-[0.2em] uppercase shadow-sm">
            Core Values
          </div>

          <h2 className="text-foreground/90 mb-12 text-3xl leading-tight font-extrabold tracking-tight md:text-5xl">
            The Principles That Define{" "}
            <span className="text-primary italic">Our Essence</span>
          </h2>

          <div className="flex flex-wrap justify-center gap-4">
            {coreValues.map((value, index) => (
              <div
                key={index}
                className="group bg-card border-border hover:border-primary/30 relative flex flex-col items-center justify-center rounded-xl border p-4 shadow-sm transition-all duration-300 hover:-translate-y-1 hover:shadow-lg"
              >
                <div className="bg-primary/10 text-primary absolute -top-3 -right-3 flex h-8 w-8 items-center justify-center rounded-full text-sm font-bold opacity-0 shadow-sm transition-opacity group-hover:opacity-100">
                  {index + 1}
                </div>
                <p className="text-foreground/80 text-center text-lg font-bold tracking-wide uppercase md:text-xl">
                  {value}
                </p>
              </div>
            ))}
          </div>

          <p className="text-muted-foreground border-primary/30 mx-auto mt-16 max-w-2xl border-l-4 pl-6 text-left text-lg leading-relaxed italic">
            "We believe in more than just products; we believe in the values
            that build long-lasting impact and meaningful transformation in the
            garments industry."
          </p>
        </div>
      </div>
    </section>
  );
};

export default CoreValuesSection;
