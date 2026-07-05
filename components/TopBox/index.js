import Image from "next/image";
import Link from "next/link";
import { ExternalLink } from "lucide-react";

import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";

export default function TopBox(props) {
  return (
    <Card className="overflow-hidden border-border/80 bg-card shadow-sm">
      <CardContent className="grid gap-6 p-5 md:grid-cols-[240px_1fr] md:p-6">
        <Link
          href={props.url}
          rel="nofollow noreferrer"
          target="_blank"
          className="block overflow-hidden rounded-md bg-muted"
        >
          <Image
            src={props.img}
            alt={props.alt || props.title}
            width={props.widthTop}
            height={props.heightTop}
            className="h-full w-full object-contain p-4 transition duration-300 hover:scale-105"
          />
        </Link>

        <div className="flex min-w-0 flex-col gap-4">
          <div className="space-y-3">
            <Badge variant="outline" className="w-fit">
              Producto destacado
            </Badge>
            <h2
              id={props.titleId}
            className="text-2xl font-bold leading-tight tracking-tight text-foreground"
            >
              <Link
                href={props.url}
                rel="nofollow noreferrer"
                target="_blank"
                className="transition hover:text-primary"
              >
                {props.title}
              </Link>
            </h2>
          </div>

          <div
            className="article-content article-content-compact text-base"
            dangerouslySetInnerHTML={{ __html: props.text }}
          />

          <Button asChild className="w-fit rounded-full">
            <Link href={props.url} rel="nofollow noreferrer" target="_blank">
              Ver oferta
              <ExternalLink className="h-4 w-4" />
            </Link>
          </Button>
        </div>
      </CardContent>
    </Card>
  );
}
