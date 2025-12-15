"use client";

import { cn } from "@/lib/utils";
import { Minus, Plus } from "lucide-react";
import * as React from "react";

interface AccordionContextProps {
  openItems: string[];
  toggleItem: (value: string) => void;
}

const AccordionContext = React.createContext<AccordionContextProps | null>(
  null
);

const Accordion = ({
  children,
  type = "single",
  defaultValue,
  collapsible,
  className,
  ...props
}: {
  children: React.ReactNode;
  type?: "single" | "multiple";
  collapsible?: boolean;
  defaultValue?: string | string[];
  className?: string;
} & React.HTMLAttributes<HTMLDivElement>) => {
  const [openItems, setOpenItems] = React.useState<string[]>(() => {
    if (defaultValue) {
      return Array.isArray(defaultValue) ? defaultValue : [defaultValue];
    }
    return [];
  });

  const toggleItem = (value: string) => {
    setOpenItems((prev) => {
      if (type === "single") {
        return prev.includes(value) ? [] : [value];
      } else {
        return prev.includes(value)
          ? prev.filter((item) => item !== value)
          : [...prev, value];
      }
    });
  };

  return (
    <AccordionContext.Provider value={{ openItems, toggleItem }}>
      <div className={className} {...props}>
        {children}
      </div>
    </AccordionContext.Provider>
  );
};

const AccordionItem = React.forwardRef<
  HTMLDivElement,
  React.HTMLAttributes<HTMLDivElement> & { value: string }
>(({ className, value, ...props }, ref) => (
  <div
    ref={ref}
    className={cn("border-b", className)}
    data-state={
      useAccordionContext().openItems.includes(value) ? "open" : "closed"
    }
    {...props}
  />
));
AccordionItem.displayName = "AccordionItem";

const useAccordionContext = () => {
  const context = React.useContext(AccordionContext);
  if (!context) {
    throw new Error("Accordion components must be used within an Accordion");
  }
  return context;
};

const AccordionTrigger = React.forwardRef<
  HTMLButtonElement,
  React.ButtonHTMLAttributes<HTMLButtonElement> & { value: string }
>(({ className, children, value, ...props }, ref) => {
  const { openItems, toggleItem } = useAccordionContext();
  const isOpen = openItems.includes(value);

  return (
    <button
      ref={ref}
      className={cn(
        "hover:text-primary w-full group/trigger gap-4 data-[state=open]:text-primary flex flex-1 cursor-pointer items-center justify-between py-4 text-left text-sm transition-all",
        className
      )}
      onClick={() => toggleItem(value)}
      data-state={isOpen ? "open" : "closed"}
      {...props}
    >
      <div className="flex flex-1 items-center gap-2">{children}</div>
      <div className="flex items-center">
        <Plus
          className={cn(
            "text-muted-foreground inline-block h-4 w-4 shrink-0 transition-transform duration-300",
            isOpen && "hidden"
          )}
        />
        <Minus
          className={cn(
            "text-muted-foreground hidden h-4 w-4 shrink-0 transition-transform duration-300",
            isOpen && "inline-block"
          )}
        />
      </div>
    </button>
  );
});
AccordionTrigger.displayName = "AccordionTrigger";

const AccordionContent = React.forwardRef<
  HTMLDivElement,
  React.HTMLAttributes<HTMLDivElement> & { value: string }
>(({ className, children, value, ...props }, ref) => {
  const { openItems } = useAccordionContext();
  const isOpen = openItems.includes(value);

  return (
    <div
      ref={ref}
      className={cn(
        "overflow-hidden transition-all duration-300",
        isOpen ? "animate-accordion-down" : "animate-accordion-up",
        !isOpen && "invisible h-0 opacity-0"
      )}
      data-state={isOpen ? "open" : "closed"}
      {...props}
    >
      <div className={cn("pt-0 pb-4", className)}>{children}</div>
    </div>
  );
});
AccordionContent.displayName = "AccordionContent";

export { Accordion, AccordionContent, AccordionItem, AccordionTrigger };
