import { Mail } from "lucide-react";

import { SEO } from "@/components/Imports";
import { Button } from "@/components/ui/button";

export default function Contacto() {
  return (
    <>
      <SEO
        url="contacto"
        title="Contacto - Top Sillas"
        description="Contacta con Top Sillas para consultas editoriales, colaboraciones o informacion sobre el sitio."
        img="https://www.topsillas.info/logo.png"
        width="240"
        height="240"
      />
      <main className="mx-auto min-h-[60vh] max-w-3xl px-4 py-16 sm:px-6 lg:px-8">
        <p className="text-sm font-semibold uppercase tracking-[0.2em] text-muted-foreground">
          Contacto
        </p>
        <h1 className="mt-3 text-4xl font-bold tracking-tight text-foreground">
          Hablemos
        </h1>
        <p className="mt-5 text-lg leading-8 text-muted-foreground">
          Puedes escribirnos para consultas sobre contenidos, propuestas de
          colaboracion o incidencias relacionadas con Top Sillas.
        </p>
        <Button className="mt-8 rounded-full" asChild>
          <a href="mailto:contacto@topsillas.info">
            <Mail className="h-4 w-4" />
            contacto@topsillas.info
          </a>
        </Button>
      </main>
    </>
  );
}
