import Image from "next/image";
import { CalendarDays } from "lucide-react";

export default function DateAuthor({ authorAvatar, date, dateTime, nameAvatar }) {
  return (
    <div className="flex flex-wrap items-center gap-3 text-sm text-muted-foreground">
      {authorAvatar && (
        <Image
          src={authorAvatar}
          alt={"Avatar de " + nameAvatar}
          width={32}
          height={32}
          className="h-8 w-8 rounded-full border border-border"
        />
      )}
      <span className="font-semibold text-foreground">{nameAvatar}</span>
      <span className="hidden h-1 w-1 rounded-full bg-muted-foreground/50 sm:block" />
      <time dateTime={dateTime} className="inline-flex items-center gap-2">
        <CalendarDays className="h-4 w-4" />
        {date}
      </time>
    </div>
  );
}
