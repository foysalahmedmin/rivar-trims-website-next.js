import { testimonials } from "@/assets/data/testimonials";
import { SectionTitle, Title } from "@/components/ui/SectionTitle";
import { Star } from "lucide-react";

const TestimonialsSection = () => {
  return (
    <section id="testimonials" className="intersection-fade-in py-16 md:py-24">
      <div className="container max-w-6xl">
        <SectionTitle variant="center">
          <Title>Trusted by Homeowners</Title>
        </SectionTitle>

        <div className="grid grid-cols-1 gap-8 md:grid-cols-2 lg:grid-cols-3">
          {testimonials?.map((testimonial) => (
            <div
              key={testimonial._id}
              className="group hover:border-primary/20 bg-card relative overflow-hidden rounded-2xl border shadow-md transition-all duration-300 hover:shadow-xl"
            >
              {/* Decorative elements */}
              <div className="from-primary to-primary absolute top-0 left-0 h-1 w-full bg-gradient-to-r"></div>
              <div className="bg-primary/25 absolute top-6 -right-6 h-24 w-24 rounded-full opacity-25 transition-opacity group-hover:opacity-50"></div>

              <div className="relative z-10 flex h-full flex-col p-6 md:p-8">
                {/* Rating stars */}
                <div className="mb-4 flex">
                  {[...Array(5)].map((_, i) => (
                    <Star
                      key={i}
                      className="fill-secondary text-secondary h-5 w-5"
                      strokeWidth={1.5}
                    />
                  ))}
                </div>

                {/* Quote with decorative icon */}
                <div className="relative mb-6">
                  <svg
                    className="text-muted absolute -top-1 -left-2 h-8 w-8 opacity-80"
                    viewBox="0 0 24 24"
                    fill="currentColor"
                  >
                    <path d="M14.017 21v-7.391c0-5.704 3.731-9.57 8.983-10.609l.995 2.151c-2.432.917-3.995 3.638-3.995 5.849h4v10h-9.983zm-14.017 0v-7.391c0-5.704 3.748-9.57 9-10.609l.996 2.151c-2.433.917-3.996 3.638-3.996 5.849h3.983v10h-9.983z" />
                  </svg>
                  <p className="text-muted-foreground relative z-10 pl-4 italic">
                    &ldquo;{testimonial?.quote}&rdquo;
                  </p>
                </div>

                {/* Author info */}
                <div className="mt-auto flex items-center border-t pt-4">
                  <div className="mr-4 flex-shrink-0">
                    <div className="bg-muted h-12 w-12 rounded-full border-2" />
                  </div>
                  <div>
                    <strong className="block font-semibold">
                      {testimonial?.author}
                    </strong>
                    <span className="text-muted-foreground text-sm">
                      {testimonial?.date}
                    </span>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default TestimonialsSection;
