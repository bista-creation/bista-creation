import type { Metadata } from "next";
import Link from "next/link";
import { ArrowLeft, Mail } from "lucide-react";
import { site } from "@/lib/site";

export const metadata: Metadata = {
  title: "Terms & Rights",
  description:
    "Bista Creation terms, commission rules and usage rights for commissioned songs and cinematic music videos.",
  alternates: { canonical: "/terms" },
};

const sections = [
  {
    title: "Overview",
    body: [
      "Bista Creation is an independent creative studio. These terms are a plain-language summary of how commissions work. Each project is also governed by the scope, price and delivery terms confirmed in writing with the client.",
      "Nothing on this website creates an order, payment obligation or delivery commitment until a commission agreement is confirmed.",
    ],
  },
  {
    title: "Quotes and scope",
    body: [
      "Every commission is quoted individually after we review the brief. The quote sets out the deliverables, number of agreed revisions, usage rights and delivery schedule. Work outside that scope is quoted separately before it begins.",
    ],
  },
  {
    title: "Payment and milestones",
    body: [
      "This is a paid commission studio. Payment amounts, currencies and milestone dates are agreed directly with the client via WhatsApp or email. No payment is taken through this website.",
      "Production begins after the agreed initial payment or written confirmation, as stated in the project terms.",
    ],
  },
  {
    title: "Revisions and delivery",
    body: [
      "Agreed revision rounds are included in the scope. Additional revisions or changes of direction may affect the timeline or price. Final files are delivered digitally in the formats listed in the quote, typically including YouTube 16:9 and vertical 9:16 masters where applicable.",
    ],
  },
  {
    title: "Rights and usage",
    body: [
      "Clients retain ownership of original lyrics and story material they provide. Usage rights for the finished song and video are set out in the commission agreement and depend on the scope purchased.",
      "Third-party music, footage or references remain subject to the rights of their original owners. Clients are responsible for ensuring they have permission to use any material they supply.",
    ],
  },
  {
    title: "AI disclosure",
    body: [
      "Bista Creation uses AI-assisted tools, including Suno AI Pro and Google Flow / Veo, as part of the production process. AI-generated assets are used under the applicable terms of those tools. Bista Creation is not affiliated with or endorsed by Suno AI or Google.",
    ],
  },
  {
    title: "Third-party platforms",
    body: [
      "Releases may be published on YouTube, Instagram, Facebook or other platforms. Those platforms have their own terms, content policies and monetisation rules, which can affect distribution. Bista Creation is not responsible for platform decisions, takedowns or outages.",
    ],
  },
  {
    title: "Liability",
    body: [
      "This website and its content are provided for informational purposes. To the extent permitted by law, Bista Creation is not liable for indirect losses arising from use of the site or from third-party platform actions. Nothing in these terms limits rights that cannot be excluded by law.",
    ],
  },
  {
    title: "Changes and contact",
    body: [
      "These terms may be updated as the studio evolves. The latest version is always published on this page. Questions about a commission or these terms can be sent to bistacreation@gmail.com or via WhatsApp at +977 9851150987.",
    ],
  },
];

export default function TermsPage() {
  return (
    <main id="main" className="relative pt-32 pb-24 sm:pt-40">
      <div className="mx-auto max-w-3xl px-4 sm:px-6 lg:px-8">
        <span className="eyebrow">
          <span className="h-px w-8 bg-gold-400/70" aria-hidden="true" />
          Legal
        </span>
        <h1 className="mt-5 text-display text-4xl font-bold text-balance text-white sm:text-5xl">
          Terms &amp; Rights
        </h1>
        <p className="mt-4 text-sm text-silver-400">Last updated: October 2026</p>

        <div className="glass liquid-edge mt-10 rounded-3xl p-6 sm:p-9">
          <div className="space-y-8">
            {sections.map((section) => (
              <section key={section.title}>
                <h2 className="text-base font-semibold text-gold-200">{section.title}</h2>
                <div className="mt-2.5 space-y-3">
                  {section.body.map((paragraph) => (
                    <p key={paragraph} className="text-sm leading-relaxed text-silver-300">
                      {paragraph}
                    </p>
                  ))}
                </div>
              </section>
            ))}
          </div>

          <p className="mt-8 border-t border-white/10 pt-6 text-xs leading-relaxed text-silver-500">
            This page is a plain-language summary, not legal advice. Specific project terms prevail
            where they differ.
          </p>

          <div className="mt-5 flex flex-wrap items-center gap-3">
            <a href={`mailto:${site.email}`} className="btn btn-gold btn-sm">
              <Mail className="h-4 w-4" />
              Contact the studio
            </a>
            <Link href="/" className="btn btn-glass btn-sm">
              <ArrowLeft className="h-4 w-4" />
              Back home
            </Link>
          </div>
        </div>
      </div>
    </main>
  );
}
