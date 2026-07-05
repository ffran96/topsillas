import { CategoriasBox } from "../Imports";
import { Badge } from "@/components/ui/badge";

export default function Categories({ props }) {
  return (
    <section className="mx-auto max-w-7xl px-4 py-10 sm:px-6 lg:py-14">
      <div className="mb-8 max-w-3xl">
        <Badge variant="secondary" className="mb-4">
          Guías de compra
        </Badge>
        <h1 className="text-4xl font-black leading-tight text-foreground sm:text-5xl">
          Las mejores reseñas y comparativas sobre sillas
        </h1>
        <p className="mt-4 max-w-2xl text-lg leading-8 text-muted-foreground">
          Analizamos sillas de oficina, gaming, comedor y descanso para ayudarte
          a elegir con criterio, buen precio y menos ruido.
        </p>
      </div>

      <div className="grid gap-5 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4">
        {props.map((i) => (
          <CategoriasBox
            key={i.slug}
            link={"/" + i.slug}
            src={i.acfImagen.imagen.sourceUrl}
            alt={i.acfImagen.imagen.altText}
            title={i.title}
            width={i.acfImagen.imagen.mediaDetails.width}
            height={i.acfImagen.imagen.mediaDetails.height}
          />
        ))}
      </div>
    </section>
  );
}
