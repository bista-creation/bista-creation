import type { Metadata } from "next";
import { CommissionForm } from "@/components/commission-form";
import { Faq } from "@/components/faq";
import { JsonLd } from "@/components/json-ld";
import { PageHero } from "@/components/page-hero";
import { ProcessSteps } from "@/components/process-steps";
import { SectionHeading } from "@/components/section-heading";
import { faqs } from "@/lib/faq";
import { faqNode, jsonLdGraph, organizationNode, webPageNode, websiteNode } from "@/lib/schema";

export const metadata: Metadata = {
  title: {
    absolute: "Commission a Custom Song — Bista Creation",
  },
  description:
    "Commission a custom song or cinematic music video from Bista Creation in Nepal. Share your story, scope and references, then choose WhatsApp or email to send the brief.",
  alternates: { canonical: "/commission" },
  openGraph: {
    title: "Commission a Custom Song — Bista Creation",
    description:
      "A paid commission studio for custom songs, wedding anthems and cinematic music videos. Scope and price confirmed before work begins.",
    url: "/commission",
  },
};

export default function CommissionPage() {
  return (
    <main id="main">
      <JsonLd
        data={jsonLdGraph([
          organizationNode(),
          websiteNode(),
          webPageNode({
            type: "WebPage",
            path: "/commission",
            name: "Commission a Custom Song — Bista Creation",
            description:
              "Commission a custom song or cinematic music video from Bista Creation in Nepal.",
          }),
          faqNode(faqs),
        ])}
      />
      <PageHero
        eyebrow="Commission"
        breadcrumb={[
          { label: "Home", href: "/" },
          { label: "Commission", href: "/commission" },
        ]}
        title={
          <>
            Start with <span className="nova-text">the story.</span>
          </>
        }
        lede="Tell us what the song is for, who it is for and how it should feel. We will reply with a clear scope, price and delivery plan — then make it real."
      />

      <div className="-mt-8">
        <CommissionForm showIntro={false} />
      </div>

      <section className="relative pb-8">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <SectionHeading
            eyebrow="What happens next"
            title="No mystery. No surprise invoice."
            lede="Every commission follows the same four stages, with the scope and price locked before production begins."
          />
          <ProcessSteps className="mt-10" />
        </div>
      </section>

      <Faq />
    </main>
  );
}
