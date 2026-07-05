import { SEO } from "@/components/Imports";

export default function PoliticaCookies() {
  return (
    <>
      <SEO
        url="politica-cookies"
        title="Politica de cookies - Top Sillas"
        description="Politica de cookies de Top Sillas."
        img="https://www.topsillas.info/logo.png"
        width="240"
        height="240"
      />
      <main className="mx-auto max-w-3xl px-4 py-16 sm:px-6 lg:px-8">
        <p className="text-sm font-semibold uppercase tracking-[0.2em] text-muted-foreground">
          Legal
        </p>
        <h1 className="mt-3 text-4xl font-bold tracking-tight text-foreground">
          Politica de cookies
        </h1>
        <div className="article-content mt-8">
          <p>
            Top Sillas puede utilizar cookies tecnicas y herramientas de
            medicion para entender el uso del sitio y mejorar la experiencia de
            navegacion.
          </p>
          <p>
            Puedes bloquear o eliminar cookies desde la configuracion de tu
            navegador. Al hacerlo, algunas funciones podrian comportarse de forma
            limitada.
          </p>
          <p>
            Esta politica se actualizara si se incorporan nuevas herramientas o
            cambia el uso de cookies del sitio.
          </p>
        </div>
      </main>
    </>
  );
}
