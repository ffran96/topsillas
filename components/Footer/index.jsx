import Image from "next/image";
import Link from "next/link";
import { Mail } from "lucide-react";

import {
  primaryNavigation,
  utilityNavigation,
} from "@/components/site-navigation";

export default function Footer() {
  return (
    <footer className="border-t border-border bg-foreground text-background">
      <div className="mx-auto grid max-w-7xl gap-10 px-4 py-12 sm:px-6 lg:grid-cols-[1.2fr_2fr] lg:px-8">
        <div className="max-w-sm">
          <Link href="/" className="inline-flex rounded-md focus:outline-none focus:ring-2 focus:ring-background/70">
            <Image
              src="/logo.png"
              alt="Top Sillas"
              width={170}
              height={52}
              className="h-11 w-auto rounded-sm bg-white object-contain p-1"
            />
          </Link>
          <p className="mt-4 text-sm leading-6 text-background/70">
            Guias, comparativas y reseñas para elegir sillas con mejor criterio:
            gaming, oficina, comedor, exterior y hogar.
          </p>
          <Link
            href="/contacto"
            className="mt-5 inline-flex items-center gap-2 text-sm font-semibold text-background transition hover:text-background/75"
          >
            <Mail className="h-4 w-4" />
            Contactar con Top Sillas
          </Link>
        </div>

        <div className="grid gap-8 sm:grid-cols-3">
          {primaryNavigation.map((section) => (
            <section key={section.title}>
              <h2 className="text-sm font-bold text-background">
                {section.title}
              </h2>
              <ul className="mt-3 grid gap-2">
                {section.items.map((item) => (
                  <li key={item.href}>
                    <Link
                      href={item.href}
                      className="text-sm text-background/70 transition hover:text-background"
                    >
                      {item.title}
                    </Link>
                  </li>
                ))}
              </ul>
            </section>
          ))}

          <section>
            <h2 className="text-sm font-bold text-background">
              Legal y contacto
            </h2>
            <ul className="mt-3 grid gap-2">
              {utilityNavigation.map((item) => (
                <li key={item.href}>
                  <Link
                    href={item.href}
                    className="text-sm text-background/70 transition hover:text-background"
                  >
                    {item.title}
                  </Link>
                </li>
              ))}
            </ul>
          </section>
        </div>
      </div>

      <div className="border-t border-background/10">
        <div className="mx-auto flex max-w-7xl flex-col gap-2 px-4 py-5 text-sm text-background/60 sm:flex-row sm:items-center sm:justify-between sm:px-6 lg:px-8">
          <span>Copyright &copy; 2026 TopSillas.info</span>
          <span>Contenido editorial sobre sillas y mobiliario.</span>
        </div>
      </div>
    </footer>
  );
}
