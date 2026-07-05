import Image from "next/image";
import Link from "next/link";
import { useMemo, useState } from "react";

import {
  Card,
  CardContent,
  CardFooter,
  CardHeader,
} from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import {
  Pagination,
  PaginationButton,
  PaginationContent,
  PaginationEllipsis,
  PaginationItem,
  PaginationNext,
  PaginationPrevious,
} from "@/components/ui/pagination";

const ARTICLES_PER_PAGE = 3;

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

export default function ArticulosRecomendados({ props }) {
  const [currentPage, setCurrentPage] = useState(1);
  const totalPages = Math.ceil(props.length / ARTICLES_PER_PAGE);
  const visibleArticles = useMemo(() => {
    const start = (currentPage - 1) * ARTICLES_PER_PAGE;

    return props.slice(start, start + ARTICLES_PER_PAGE);
  }, [currentPage, props]);
  const pageItems = getPageItems(currentPage, totalPages);

  const goToPage = (page) => {
    setCurrentPage(Math.min(Math.max(page, 1), totalPages));
  };

  return (
    <section className="mx-auto w-full max-w-7xl px-4 py-10 sm:px-6 lg:px-8">
      <div className="mb-8 flex flex-col gap-2">
        <p className="text-sm font-medium uppercase tracking-[0.2em] text-muted-foreground">
          Blog
        </p>

        <h2 className="text-3xl font-bold tracking-tight text-foreground sm:text-4xl">
          Art&iacute;culos recomendados
        </h2>

        <p className="max-w-2xl text-base leading-7 text-muted-foreground">
          Una selecci&oacute;n de gu&iacute;as, comparativas y consejos para ayudarte
          a elegir mejor.
        </p>
      </div>

      <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
        {visibleArticles.map((i) => (
          <Card
            key={i.id}
            className="group overflow-hidden border-border/70 bg-card transition-all duration-300 hover:-translate-y-1 hover:shadow-xl"
          >
            <Link href={"/" + i.categories.nodes[0].slug + "/" + i.slug}>
              <CardHeader className="p-0">
                <div className="relative aspect-[16/10] overflow-hidden bg-muted">
                  <Image
                    src={i.acfArticulo.cabecera.portada.sourceUrl}
                    alt={i.acfArticulo.cabecera.portada.altText}
                    width={598}
                    height={335.5}
                    className="h-full w-full object-cover transition-transform duration-500 group-hover:scale-105"
                  />
                </div>
              </CardHeader>
            </Link>

            <CardContent className="space-y-4 p-5">
              <Link href={"/" + i.categories.nodes[0].slug + "/" + i.slug}>
                <h3 className="line-clamp-2 text-xl font-semibold leading-tight tracking-tight text-card-foreground transition-colors group-hover:text-primary">
                  {i.title}
                </h3>
              </Link>

              <div
                className="line-clamp-3 text-sm leading-6 text-muted-foreground [&_p]:m-0"
                dangerouslySetInnerHTML={{ __html: i.excerpt }}
              />
            </CardContent>

            <CardFooter className="px-5 pb-5 pt-0">
              <Button asChild className="w-full rounded-full">
                <Link href={"/" + i.categories.nodes[0].slug + "/" + i.slug}>
                  Leer m&aacute;s
                </Link>
              </Button>
            </CardFooter>
          </Card>
        ))}
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
