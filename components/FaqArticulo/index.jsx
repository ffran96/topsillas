import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";

export default function FaqArticulo({ items = [] }) {
  const faqItems = Array.isArray(items)
    ? items.filter((item) => item?.pregunta && item?.respuesta)
    : [];

  if (faqItems.length === 0) {
    return null;
  }

  return (
    <section className="mx-auto max-w-4xl px-4 pb-14 sm:px-6 lg:px-8">
      <Card className="border-border bg-card shadow-sm">
        <CardHeader>
          <p className="text-sm font-semibold uppercase tracking-[0.2em] text-muted-foreground">
            Dudas frecuentes
          </p>
          <CardTitle className="text-2xl font-bold tracking-tight">
            Preguntas y respuestas
          </CardTitle>
        </CardHeader>
        <CardContent>
          <Accordion>
            {faqItems.map((item, index) => (
              <AccordionItem key={`${item.pregunta}-${index}`}>
                <AccordionTrigger>{item.pregunta}</AccordionTrigger>
                <AccordionContent>
                  <div
                    className="article-content article-content-compact"
                    dangerouslySetInnerHTML={{ __html: item.respuesta }}
                  />
                </AccordionContent>
              </AccordionItem>
            ))}
          </Accordion>
        </CardContent>
      </Card>
    </section>
  );
}
