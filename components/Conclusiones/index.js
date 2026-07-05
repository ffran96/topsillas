import { AlertCircle, CheckCircle2 } from "lucide-react";

import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";

function ListBlock({ icon: Icon, items, title, tone }) {
  return (
    <Card className="border-border/80 shadow-sm">
      <CardHeader className="pb-3">
        <CardTitle className="flex items-center gap-2 text-lg">
          <span className={tone}>
            <Icon className="h-5 w-5" />
          </span>
          {title}
        </CardTitle>
      </CardHeader>
      <CardContent>
        <ul className="grid gap-3">
          {items.map((item, index) => (
            <li
              key={index}
              className="flex gap-3 text-sm leading-6 text-muted-foreground"
            >
              <span className={tone}>
                <Icon className="mt-0.5 h-4 w-4" />
              </span>
              <span>{item.ventaja || item.desventaja}</span>
            </li>
          ))}
        </ul>
      </CardContent>
    </Card>
  );
}

export default function Conclusiones({ dtg = [], vtg = [] }) {
  return (
    <div className="grid gap-4 md:grid-cols-2">
      <ListBlock
        icon={CheckCircle2}
        items={vtg}
        title="Ventajas"
        tone="text-primary"
      />
      <ListBlock
        icon={AlertCircle}
        items={dtg}
        title="A tener en cuenta"
        tone="text-destructive"
      />
    </div>
  );
}
