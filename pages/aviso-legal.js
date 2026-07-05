import { SEO } from "@/components/Imports";

export default function AvisoLegal() {
  return (
    <>
      <SEO
        url="aviso-legal"
        title="Aviso legal - Top Sillas"
        description="Aviso legal de Top Sillas."
        img="https://www.topsillas.info/logo.png"
        width="240"
        height="240"
      />
      <main className="mx-auto max-w-3xl px-4 py-16 sm:px-6 lg:px-8">
        <p className="text-sm font-semibold uppercase tracking-[0.2em] text-muted-foreground">
          Legal
        </p>
        <h1 className="mt-3 text-4xl font-bold tracking-tight text-foreground">
          Aviso legal
        </h1>
        <div className="article-content mt-8">
          <p>
            Top Sillas es un sitio editorial con guias, comparativas y reseñas
            sobre sillas y mobiliario. La informacion publicada tiene finalidad
            informativa y puede contener enlaces de afiliacion.
          </p>
          <p>
            El uso del sitio implica la aceptacion de estas condiciones. Nos
            reservamos el derecho a actualizar contenidos, enlaces y condiciones
            cuando sea necesario para mantener la informacion correcta.
          </p>
          <p>
            Para cualquier consulta relacionada con este aviso legal, puedes
            contactar desde la pagina de contacto.
          </p>
        </div>
      </main>
    </>
  );
}
