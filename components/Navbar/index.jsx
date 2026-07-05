import Image from "next/image";
import Link from "next/link";
import { ChevronDown, Menu, X } from "lucide-react";
import { useState } from "react";

import { Button } from "@/components/ui/button";
import { primaryNavigation } from "@/components/site-navigation";

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const [openSection, setOpenSection] = useState(primaryNavigation[0].title);

  return (
    <header className="sticky top-0 z-50 border-b border-border/80 bg-white/95 shadow-sm backdrop-blur">
      <nav
        className="mx-auto flex h-20 max-w-7xl items-center justify-between gap-4 px-4 sm:px-6 lg:px-8"
        aria-label="Navegacion principal"
      >
        <Link
          href="/"
          className="flex h-12 shrink-0 items-center outline-none focus:outline-none focus-visible:outline-none"
          onClick={() => setIsOpen(false)}
        >
          <Image
            src="/logo.png"
            alt="Top Sillas"
            width={170}
            height={52}
            priority
            className="h-10 w-auto object-contain"
          />
        </Link>

        <div className="hidden items-center gap-1 lg:flex">
          <Link
            href="/"
            className="rounded-md px-3 py-2 text-sm font-semibold text-foreground transition hover:bg-muted"
          >
            Inicio
          </Link>

          {primaryNavigation.map((section) => (
            <div key={section.title} className="group relative">
              <button
                type="button"
                className="flex items-center gap-1 rounded-md px-3 py-2 text-sm font-semibold text-foreground transition hover:bg-muted"
              >
                {section.title}
                <ChevronDown className="h-4 w-4 text-muted-foreground transition group-hover:rotate-180" />
              </button>

              <div className="invisible absolute left-1/2 top-full w-80 -translate-x-1/2 pt-3 opacity-0 transition group-focus-within:visible group-focus-within:opacity-100 group-hover:visible group-hover:opacity-100">
                <div className="rounded-lg border border-border bg-white p-3 shadow-xl">
                  <p className="px-3 pb-2 text-xs font-semibold uppercase text-muted-foreground">
                    {section.description}
                  </p>
                  <ul className="grid gap-1">
                    {section.items.map((item) => (
                      <li key={item.href}>
                        <Link
                          href={item.href}
                          className="block rounded-md px-3 py-2 text-sm font-semibold text-foreground transition hover:bg-muted hover:text-primary"
                        >
                          {item.title}
                        </Link>
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            </div>
          ))}
        </div>

        <div className="hidden items-center gap-2 lg:flex">
          <Button variant="outline" className="h-10 rounded-full px-4" asChild>
            <Link href="/contacto">Contacto</Link>
          </Button>
        </div>

        <Button
          type="button"
          variant="ghost"
          size="icon"
          className="lg:hidden"
          onClick={() => setIsOpen((value) => !value)}
          aria-label={isOpen ? "Cerrar menu" : "Abrir menu"}
          aria-expanded={isOpen}
        >
          {isOpen ? <X /> : <Menu />}
        </Button>
      </nav>

      {isOpen && (
        <div className="border-t border-border bg-white lg:hidden">
          <nav className="mx-auto max-w-7xl px-4 py-4 sm:px-6" aria-label="Menu movil">
            <Link
              href="/"
              className="block rounded-md px-3 py-3 text-base font-semibold text-foreground hover:bg-muted"
              onClick={() => setIsOpen(false)}
            >
              Inicio
            </Link>

            <div className="mt-2 grid gap-2">
              {primaryNavigation.map((section) => {
                const isSectionOpen = openSection === section.title;

                return (
                  <section key={section.title} className="rounded-lg border border-border">
                    <button
                      type="button"
                      className="flex w-full items-center justify-between px-3 py-3 text-left text-base font-semibold text-foreground"
                      onClick={() =>
                        setOpenSection(isSectionOpen ? "" : section.title)
                      }
                    >
                      {section.title}
                      <ChevronDown
                        className={`h-4 w-4 text-muted-foreground transition ${
                          isSectionOpen ? "rotate-180" : ""
                        }`}
                      />
                    </button>

                    {isSectionOpen && (
                      <ul className="grid gap-1 border-t border-border p-2">
                        {section.items.map((item) => (
                          <li key={item.href}>
                            <Link
                              href={item.href}
                              className="block rounded-md px-3 py-2 text-sm font-medium text-muted-foreground hover:bg-muted hover:text-foreground"
                              onClick={() => setIsOpen(false)}
                            >
                              {item.title}
                            </Link>
                          </li>
                        ))}
                      </ul>
                    )}
                  </section>
                );
              })}
            </div>

            <Button className="mt-4 w-full rounded-full" asChild>
              <Link href="/contacto" onClick={() => setIsOpen(false)}>
                Contacto
              </Link>
            </Button>
          </nav>
        </div>
      )}
    </header>
  );
}
