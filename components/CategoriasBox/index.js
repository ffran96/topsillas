import Link from "next/link";
import Image from "next/image";
import { ArrowUpRight } from "lucide-react";
import { Card } from "@/components/ui/card";

const index = (props) => {
  return (
    <Link href={"/[category]"} as={props.link} className="group block">
      <Card className="h-full overflow-hidden border-border/80 bg-white transition duration-200 hover:-translate-y-1 hover:shadow-lg">
        <div className="relative aspect-[4/3] overflow-hidden bg-muted">
          <Image
            src={props.src}
            alt={props.alt}
            width={props.width}
            height={props.height}
            className="h-full w-full object-cover transition duration-500 group-hover:scale-105"
          />
        </div>
        <div className="flex items-center justify-between gap-3 p-4">
          <strong className="text-base font800 leading-snug text-foreground">
            {props.title}
          </strong>
          <span className="flex h-9 w-9 shrink-0 items-center justify-center rounded-md bg-primary/10 text-primary transition group-hover:bg-primary group-hover:text-primary-foreground">
            <ArrowUpRight className="h-4 w-4" />
          </span>
        </div>
      </Card>
    </Link>
  );
};

export default index;
