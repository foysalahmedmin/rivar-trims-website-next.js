"use client";

import { useIntersectionObserver } from "@/hooks/observers/useIntersectionObserver";
import { cn } from "@/lib/utils";
import { cva, type VariantProps } from "class-variance-authority";
import {
  forwardRef,
  type ComponentPropsWithoutRef,
  type ComponentRef,
} from "react";

// ---------- SectionTitle ----------
const sectionTitleVariants = cva("group mb-8 md:mb-12 space-y-4 max-w-3xl", {
  variants: {
    variant: {
      center:
        "center mx-auto pb-2 px-4 text-center after:border-b-2 after:border-primary after:mx-auto",
      left: "left text-left after:mr-auto",
      right: "right text-right after:ml-auto",
      none: "",
    },
  },
  defaultVariants: {
    variant: "left",
  },
});

type SectionTitleProps = ComponentPropsWithoutRef<"div"> &
  VariantProps<typeof sectionTitleVariants>;

const SectionTitle = forwardRef<ComponentRef<"div">, SectionTitleProps>(
  ({ className, variant, ...props }, ref) => {
    return (
      <div
        className={cn(sectionTitleVariants({ variant }), className)}
        ref={ref}
        {...props}
      />
    );
  },
);
SectionTitle.displayName = "SectionTitle";

// ---------- Title ----------
type TitleProps = ComponentPropsWithoutRef<"h1"> & {
  isAnimation?: boolean;
};

const Title = forwardRef<ComponentRef<"h1">, TitleProps>(
  ({ className, isAnimation = true, children, ...props }, ref) => {
    const { setRef } = useIntersectionObserver({
      classNames: "animate-trigger",
      isToggle: true,
      isUnobservable: true,
    });

    const content =
      isAnimation && typeof children === "string"
        ? children.split(" ").map((word, index) => (
            <span
              key={index}
              className="inline-block opacity-0 [.animate-trigger_&]:animate-[fadein_0.3s_ease-in-out_forwards]"
              style={{ animationDelay: `${index * 0.15}s` }}
            >
              {word}&nbsp;
            </span>
          ))
        : children;

    return (
      <h1
        className={cn("text-4xl font-bold md:text-6xl", className)}
        ref={(node) => {
          if (isAnimation) setRef(0)(node);
          if (typeof ref === "function") {
            ref(node);
          } else if (ref) {
            ref.current = node;
          }
        }}
        {...props}
      >
        {content}
      </h1>
    );
  },
);
Title.displayName = "Title";

// ---------- Subtitle ----------
type SubtitleProps = ComponentPropsWithoutRef<"span">;

const Subtitle = forwardRef<ComponentRef<"span">, SubtitleProps>(
  ({ className, ...props }, ref) => {
    return (
      <span
        className={cn(
          "border-primary text-primary after:bg-primary relative inline-block py-1 capitalize after:absolute after:top-5/9 after:-right-2 after:bottom-0 after:inline-block after:h-[0.0625rem] after:w-12 after:translate-x-full after:content-['_']",
          className,
        )}
        ref={ref}
        {...props}
      />
    );
  },
);
Subtitle.displayName = "Subtitle";

// ---------- Description ----------
type DescriptionProps = ComponentPropsWithoutRef<"p">;

const Description = forwardRef<ComponentRef<"div">, DescriptionProps>(
  ({ className, ...props }, ref) => {
    return <div className={cn("mt-4", className)} ref={ref} {...props} />;
  },
);
Description.displayName = "Description";

// ---------- Exports ----------
export { Description, SectionTitle, Subtitle, Title };
