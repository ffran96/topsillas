import { SEO } from "@/components/Imports";

export default function PoliticaPrivacidad() {
  return (
    <>
      <SEO
        url="politica-privacidad"
        title="Politica de privacidad - Top Sillas"
        description="Politica de privacidad de Top Sillas."
        img="https://www.topsillas.info/logo.png"
        width="240"
        height="240"
      />
      <main className="mx-auto max-w-3xl px-4 py-16 sm:px-6 lg:px-8">
        <p className="text-sm font-semibold uppercase tracking-[0.2em] text-muted-foreground">
          Legal
        </p>
        <h1 className="mt-3 text-4xl font-bold tracking-tight text-foreground">
          Politica de privacidad
        </h1>
        <div className="article-content mt-8">
          <p>
            En Top Sillas tratamos los datos personales solo cuando son
            necesarios para atender consultas, mantener la seguridad del sitio o
            analizar el funcionamiento general de la web.
          </p>
          <p>
            No vendemos datos personales. Si contactas con nosotros, usaremos la
            informacion facilitada para responder a tu solicitud.
          </p>
          <p>
            Puedes solicitar informacion sobre tus datos o pedir su eliminacion
            a traves de la pagina de contacto.
          </p>
        </div>
      </main>
    </>
  );
}
