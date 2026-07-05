import Image from "next/image";

import { Badge } from "@/components/ui/badge";
import DateAuthor from "../DateAuthor";

export default function Cabecera(props) {
  return (
    <header className="mx-auto max-w-4xl px-4 pb-10 pt-4 sm:px-6 lg:px-8">
      <div className="space-y-6">
        <div className="space-y-4">
          <Badge variant="secondary" className="w-fit">
            Guia de compra
          </Badge>
          <h1
            id={props.titleId}
            className="max-w-3xl text-4xl font-bold leading-tight tracking-tight text-foreground sm:text-5xl"
          >
            {props.title}
          </h1>
          <DateAuthor
            dateTime={props.dateTime}
            date={props.date}
            nameAvatar={props.nameAvatar}
            authorAvatar={props.authorAvatar}
          />
        </div>

        <figure className="overflow-hidden rounded-lg border border-border bg-muted shadow-sm">
          <Image
            src={props.img}
            alt={props.title}
            width={props.width}
            height={props.height}
            priority
            className="h-full w-full object-cover"
          />
        </figure>

        <div
          className="article-content rounded-lg border border-border bg-card p-5 text-muted-foreground shadow-sm sm:p-6"
          dangerouslySetInnerHTML={{ __html: props.text }}
        />
      </div>
    </header>
  );
}
