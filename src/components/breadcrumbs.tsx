import Link from "next/link";
import { ChevronRight } from "lucide-react";
import type { BreadcrumbEntry } from "@/lib/schema";

export function Breadcrumbs({ items }: { items: BreadcrumbEntry[] }) {
  return (
    <nav aria-label="Breadcrumb" className="mb-7">
      <ol className="flex flex-wrap items-center gap-1.5 text-[10px] font-semibold tracking-[0.18em] text-silver-500 uppercase">
        {items.map((item, index) => {
          const isCurrent = index === items.length - 1;

          return (
            <li key={item.href} className="flex items-center gap-1.5">
              {index > 0 ? (
                <ChevronRight
                  className="h-3 w-3 text-silver-600"
                  aria-hidden="true"
                />
              ) : null}
              {isCurrent ? (
                <span aria-current="page" className="text-silver-300">
                  {item.label}
                </span>
              ) : (
                <Link
                  href={item.href}
                  className="transition hover:text-gold-200"
                >
                  {item.label}
                </Link>
              )}
            </li>
          );
        })}
      </ol>
    </nav>
  );
}
