import * as React from "react";
import { ChevronDown } from "lucide-react";

import { cn } from "@/lib/utils";

function Accordion({ className, ...props }) {
  return <div className={cn("divide-y divide-border", className)} {...props} />;
}

function AccordionItem({ className, ...props }) {
  return (
    <details
      className={cn("group py-1", className)}
      {...props}
    />
  );
}

function AccordionTrigger({ children, className, ...props }) {
  return (
    <summary
      className={cn(
        "flex cursor-pointer list-none items-center justify-between gap-4 py-4 text-left text-base font-semibold text-foreground transition hover:text-primary [&::-webkit-details-marker]:hidden",
        className
      )}
      {...props}
    >
      {children}
      <ChevronDown className="h-4 w-4 shrink-0 text-muted-foreground transition group-open:rotate-180" />
    </summary>
  );
}

function AccordionContent({ className, ...props }) {
  return (
    <div
      className={cn("pb-4 text-sm leading-7 text-muted-foreground", className)}
      {...props}
    />
  );
}

export { Accordion, AccordionContent, AccordionItem, AccordionTrigger };
