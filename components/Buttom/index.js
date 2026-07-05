import Link from "next/link";
import { ExternalLink } from "lucide-react";

import { Button } from "@/components/ui/button";

export default function Buttom({ label, url }) {
  return (
    <div className="flex justify-center pt-2">
      <Button asChild size="lg" className="rounded-full px-8">
        <Link href={url} rel="nofollow noreferrer" target="_blank">
          {label}
          <ExternalLink className="h-4 w-4" />
        </Link>
      </Button>
    </div>
  );
}
