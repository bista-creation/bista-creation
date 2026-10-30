import type { ReactNode } from "react";
import { Breadcrumbs } from "@/components/breadcrumbs";
import { JsonLd } from "@/components/json-ld";
import { breadcrumbNode, type BreadcrumbEntry } from "@/lib/schema";

type Props = {
  eyebrow: string;
  title: ReactNode;
  lede?: ReactNode;
  children?: ReactNode;
  aside?: ReactNode;
  align?: "left" | "center";
  breadcrumb?: BreadcrumbEntry[];
};

export function PageHero({
  eyebrow,
  title,
  lede,
  children,
  aside,
  align = "left",
  breadcrumb,
}: Props) {
  return (
    <>
      {breadcrumb && breadcrumb.length > 1 ? (
        <JsonLd data={{ "@context": "https://schema.org", ...breadcrumbNode(breadcrumb) }} />
      ) : null}
      <section className="relative overflow-hidden pt-32 pb-16 sm:pt-40 sm:pb-20">
        <div
          className="pointer-events-none absolute -top-24 right-0 h-72 w-72 rounded-full bg-[radial-gradient(circle,rgba(233,200,119,0.16),transparent_68%)] blur-3xl"
          aria-hidden="true"
        />
        <div
          className="pointer-events-none absolute top-1/2 -left-24 h-64 w-64 rounded-full bg-[radial-gradient(circle,rgba(205,184,255,0.12),transparent_68%)] blur-3xl"
          aria-hidden="true"
        />

        <div className="relative mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div
            className={`grid gap-12 lg:grid-cols-[1fr_auto] lg:items-end ${
              align === "center" ? "text-center" : ""
            }`}
          >
            <div className={`max-w-3xl ${align === "center" ? "mx-auto" : ""}`}>
              {breadcrumb && breadcrumb.length > 1 ? (
                <Breadcrumbs items={breadcrumb} />
              ) : null}
              <span className="eyebrow">
                <span className="h-px w-8 bg-gold-400/70" aria-hidden="true" />
                {eyebrow}
              </span>
              <h1 className="mt-6 text-display text-4xl leading-[1.02] font-bold text-balance text-white sm:text-5xl lg:text-6xl">
                {title}
              </h1>
              {lede ? (
                <p className="mt-6 max-w-2xl text-base leading-relaxed text-pretty text-silver-300 sm:text-lg">
                  {lede}
                </p>
              ) : null}
              {children ? (
                <div
                  className={`mt-9 flex flex-wrap items-center gap-3 ${
                    align === "center" ? "justify-center" : ""
                  }`}
                >
                  {children}
                </div>
              ) : null}
            </div>
            {aside ? <div className="hidden lg:block">{aside}</div> : null}
          </div>
        </div>
      </section>
    </>
  );
}
