import type { Metadata } from "next";
import Link from "next/link";
import { ArrowLeft, Mail } from "lucide-react";
import { site } from "@/lib/site";

export const metadata: Metadata = {
  title: "Privacy Policy",
  description:
    "Bista Creation privacy policy — how the studio handles information when you commission a song or contact us.",
  alternates: { canonical: "/privacy" },
};

const sections = [
  {
    title: "Who we are",
    body: [
      "Bista Creation is an independent creative studio based in Nepal. This website is operated by Bista Creation. You can reach us at bistacreation@gmail.com or on WhatsApp at +977 9851150987.",
    ],
  },
  {
    title: "What we collect",
    body: [
      "This site does not require an account and does not store commission forms on its servers. The details you enter into the commission form are composed in your browser and passed to WhatsApp or your email app only when you choose to send them.",
      "If you contact us directly, we receive the information you choose to share — such as your name, email address, phone number, project details, references and any files you send.",
    ],
  },
  {
    title: "How we use it",
    body: [
      "We use your information to reply to your inquiry, prepare a quote, deliver commissioned work and manage the project. We do not sell personal information or use it for behavioural advertising.",
    ],
  },
  {
    title: "Third-party platforms",
    body: [
      "Conversations may move to WhatsApp or email, which are operated by third parties under their own privacy terms. Embedded YouTube players, Instagram and Facebook links may also set cookies or process data when you interact with them. We do not control those platforms.",
    ],
  },
  {
    title: "Cookies and analytics",
    body: [
      "This site does not use advertising cookies. Hosting infrastructure may process standard technical logs (such as request time and browser type) to keep the site secure and available.",
    ],
  },
  {
    title: "Retention",
    body: [
      "Project correspondence and delivered files are kept only as long as needed to complete the commission, meet legal or accounting obligations, or maintain a record of the agreed work. You can ask us to delete personal details associated with your inquiry at any time.",
    ],
  },
  {
    title: "Your choices",
    body: [
      "You may request access to, correction of, or deletion of the personal information you have shared with us. Email bistacreation@gmail.com and we will respond within a reasonable time.",
    ],
  },
];

export default function PrivacyPage() {
  return (
    <main id="main" className="relative pt-32 pb-24 sm:pt-40">
      <div className="mx-auto max-w-3xl px-4 sm:px-6 lg:px-8">
        <span className="eyebrow">
          <span className="h-px w-8 bg-gold-400/70" aria-hidden="true" />
          Legal
        </span>
        <h1 className="mt-5 text-display text-4xl font-bold text-balance text-white sm:text-5xl">
          Privacy Policy
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

          <div className="mt-9 flex flex-wrap items-center gap-3 border-t border-white/10 pt-6">
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
