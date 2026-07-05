import { useMemo, useState } from "react";
import Image from "next/image";
import Link from "next/link";
import { ArrowUpRight } from "lucide-react";

import { Card, CardContent, CardHeader } from "@/components/ui/card";
import {
  Pagination,
  PaginationButton,
  PaginationContent,
  PaginationEllipsis,
  PaginationItem,
  PaginationNext,
  PaginationPrevious,
} from "@/components/ui/pagination";

const ARTICLES_PER_PAGE = 8;

function stripHtml(value = "") {
  return value.replace(/<[^>]*>/g, "").replace(/\s+/g, " ").trim();
}

function getPageItems(currentPage, totalPages) {
  if (totalPages <= 5) {
    return Array.from({ length: totalPages }, (_, index) => index + 1);
  }

  if (currentPage <= 3) {
    return [1, 2, 3, 4, "ellipsis-end", totalPages];
  }

  if (currentPage >= totalPages - 2) {
    return [
      1,
      "ellipsis-start",
      totalPages - 3,
      totalPages - 2,
      totalPages - 1,
      totalPages,
    ];
  }

  return [
    1,
    "ellipsis-start",
    currentPage - 1,
    currentPage,
    currentPage + 1,
    "ellipsis-end",
    totalPages,
  ];
}

export default function ArticlesComp({ Data, Category }) {
  const [currentPage, setCurrentPage] = useState(1);
  const categoryName = Data[0]?.categories?.nodes?.[0]?.name ?? "Articulos";
  const totalPages = Math.ceil(Data.length / ARTICLES_PER_PAGE);
  const visibleArticles = useMemo(() => {
    const start = (currentPage - 1) * ARTICLES_PER_PAGE;

    return Data.slice(start, start + ARTICLES_PER_PAGE);
  }, [Data, currentPage]);
  const pageItems = getPageItems(currentPage, totalPages);

  const goToPage = (page) => {
    setCurrentPage(Math.min(Math.max(page, 1), totalPages));
  };

  return (
    <section className="mx-auto w-full max-w-7xl px-4 pb-16 pt-6 sm:px-6 lg:px-8">
      <div className="mb-8 max-w-3xl">
        <p className="text-sm font-semibold uppercase tracking-[0.2em] text-muted-foreground">
          Categoria
        </p>
        <h1 className="mt-2 text-3xl font-bold tracking-tight text-foreground sm:text-4xl">
          {categoryName}
        </h1>
        <p className="mt-3 text-base leading-7 text-muted-foreground">
          Guias y comparativas seleccionadas para ayudarte a encontrar la silla
          que encaja mejor con tu espacio, uso y presupuesto.
        </p>
      </div>

      <div className="grid gap-4">
        {visibleArticles.map((item) => {
          const href = "/" + Category + "/" + item.slug;
          const image = item.acfArticulo?.cabecera?.portada;
          const excerpt = stripHtml(item.excerpt);

          return (
            <Link
              key={item.id}
              href={href}
              className="group block rounded-lg focus:outline-none focus-visible:ring-2 focus-visible:ring-ring"
            >
              <Card className="overflow-hidden border-border/70 bg-card shadow-sm transition duration-200 group-hover:border-primary/25 group-hover:shadow-md">
                <article className="grid gap-4 p-3 sm:grid-cols-[200px_1fr] sm:items-center lg:grid-cols-[220px_1fr]">
                  <CardHeader className="p-0">
                    <div className="relative aspect-[16/10] overflow-hidden rounded-md bg-muted">
                      {image?.mediaItemUrl && (
                        <Image
                          src={image.mediaItemUrl}
                          alt={image.altText || item.title}
                          width={598}
                          height={336}
                          className="h-full w-full object-cover transition duration-500 group-hover:scale-105"
                        />
                      )}
                    </div>
                  </CardHeader>

                  <CardContent className="flex min-w-0 flex-col gap-2.5 p-0">
                    <div className="flex flex-wrap items-center gap-2">
                      <span className="w-fit rounded-full bg-primary/10 px-2.5 py-1 text-xs font-semibold text-primary">
                        Guia
                      </span>
                      <span className="text-xs font-medium text-muted-foreground">
                        {categoryName}
                      </span>
                    </div>

                    <h2 className="line-clamp-2 text-xl font-bold leading-tight tracking-tight text-card-foreground transition group-hover:text-primary">
                      {item.title}
                    </h2>

                    {excerpt && (
                      <p className="line-clamp-1 text-sm leading-6 text-muted-foreground">
                        {excerpt}
                      </p>
                    )}

                    <span className="mt-1 inline-flex items-center gap-2 text-sm font-semibold text-primary">
                      Leer guia
                      <ArrowUpRight className="h-4 w-4" />
                    </span>
                  </CardContent>
                </article>
              </Card>
            </Link>
          );
        })}
      </div>

      {totalPages > 1 && (
        <Pagination className="mt-8">
          <PaginationContent>
            <PaginationItem>
              <PaginationPrevious
                onClick={() => goToPage(currentPage - 1)}
                disabled={currentPage === 1}
              />
            </PaginationItem>

            {pageItems.map((page) => (
              <PaginationItem key={page}>
                {typeof page === "number" ? (
                  <PaginationButton
                    isActive={page === currentPage}
                    onClick={() => goToPage(page)}
                    aria-label={`Ir a la pagina ${page}`}
                  >
                    {page}
                  </PaginationButton>
                ) : (
                  <PaginationEllipsis />
                )}
              </PaginationItem>
            ))}

            <PaginationItem>
              <PaginationNext
                onClick={() => goToPage(currentPage + 1)}
                disabled={currentPage === totalPages}
              />
            </PaginationItem>
          </PaginationContent>
        </Pagination>
      )}
    </section>
  );
}
