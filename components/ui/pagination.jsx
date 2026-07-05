import * as React from "react";
import { ChevronLeft, ChevronRight, MoreHorizontal } from "lucide-react";

import { Button } from "@/components/ui/button";
import { cn } from "@/lib/utils";

function Pagination({ className, ...props }) {
  return (
    <nav
      role="navigation"
      aria-label="Paginacion"
      className={cn("mx-auto flex w-full justify-center", className)}
      {...props}
    />
  );
}

function PaginationContent({ className, ...props }) {
  return (
    <ul
      className={cn("flex flex-row items-center gap-1", className)}
      {...props}
    />
  );
}

function PaginationItem(props) {
  return <li {...props} />;
}

function PaginationButton({
  className,
  isActive,
  disabled,
  children,
  ...props
}) {
  return (
    <Button
      type="button"
      variant={isActive ? "outline" : "ghost"}
      size="icon"
      aria-current={isActive ? "page" : undefined}
      disabled={disabled}
      className={cn("h-9 w-9", className)}
      {...props}
    >
      {children}
    </Button>
  );
}

function PaginationPrevious({ className, ...props }) {
  return (
    <Button
      type="button"
      variant="ghost"
      className={cn("h-9 gap-1 px-3", className)}
      {...props}
    >
      <ChevronLeft className="h-4 w-4" />
      <span>Anterior</span>
    </Button>
  );
}

function PaginationNext({ className, ...props }) {
  return (
    <Button
      type="button"
      variant="ghost"
      className={cn("h-9 gap-1 px-3", className)}
      {...props}
    >
      <span>Siguiente</span>
      <ChevronRight className="h-4 w-4" />
    </Button>
  );
}

function PaginationEllipsis({ className, ...props }) {
  return (
    <span
      aria-hidden
      className={cn("flex h-9 w-9 items-center justify-center", className)}
      {...props}
    >
      <MoreHorizontal className="h-4 w-4" />
      <span className="sr-only">Mas paginas</span>
    </span>
  );
}

export {
  Pagination,
  PaginationContent,
  PaginationEllipsis,
  PaginationItem,
  PaginationButton,
  PaginationNext,
  PaginationPrevious,
};
