import Link from "next/link";
import { ChevronRight } from "lucide-react";

const menuSections = [
  {
    title: "Uso",
    items: [
      { title: "Comedor", slug: "sillas-de-comedor" },
      { title: "Oficina", slug: "sillas-de-escritorio" },
      { title: "Gaming", slug: "sillas-gaming" },
      { title: "Puffs", slug: "puffs" },
    ],
  },
  {
    title: "Guías",
    items: [
      { title: "Exterior", slug: "sillas-de-exterior" },
      { title: "Taburetes", slug: "taburetes-para-barra-o-cocina" },
      { title: "Masaje", slug: "sillones-de-masaje" },
      { title: "Mecedoras", slug: "sillas-mecedoras" },
    ],
  },
];

export default function Index({ onClose }) {
  return (
    <div className="fixed inset-x-0 top-18 z-30 border-b border-border bg-white shadow-lg md:hidden">
      <nav className="mx-auto grid max-w-6xl gap-5 px-4 py-6">
        {menuSections.map((section) => (
          <section key={section.title}>
            <h2 className="mb-2 text-xs font-bold uppercase text-muted-foreground">
              {section.title}
            </h2>
            <ul className="grid gap-1">
              {section.items.map((item) => (
                <li key={item.slug}>
                  <Link
                    href={"/" + item.slug}
                    onClick={onClose}
                    className="flex items-center justify-between rounded-md px-3 py-3 text-base font-semibold text-foreground transition hover:bg-muted"
                  >
                    {item.title}
                    <ChevronRight className="h-4 w-4 text-muted-foreground" />
                  </Link>
                </li>
              ))}
            </ul>
          </section>
        ))}
      </nav>
    </div>
  );
}
