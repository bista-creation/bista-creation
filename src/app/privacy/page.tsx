import type { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = {
  title: "Privacy Policy",
  description: "Bista Creation privacy policy — how we handle information when you commission a song or contact the studio.",
};

export default function PrivacyPage() {
  return (
    <main className="mx-auto max-w-3xl px-4 py-20 sm:px-6 lg:px-8">
      <p className="text-display text-xs font-semibold tracking-[0.38em] text-gold-400 uppercase">Legal</p>
      <h1 className="mt-4 text-display text-3xl font-bold text-white sm:text-5xl">Privacy Policy</h1>
      <p className="mt-6 text-sm text-silver-400">Last updated: October 2026</p>

      <div className="mt-10 space-y-6 text-silver-300">
        <p>
          Bista Creation (&quot;we&quot;, &quot;us&quot;) operates this website. We respect your privacy.
        </p>
        <p>
          This site does not use advertising cookies, behavioral advertising, or sell personal
          information. We use privacy-friendly hosting and analytics that do not personally
          identify visitors.
        </p>
        <p>
          When you submit a commission or contact request through this site, the details you enter
          are used to respond to your project inquiry. Commission details may be shared with
          WhatsApp or the email you provide so the studio can prepare your song.
        </p>
        <p>
          We do not store commission forms on this website. Conversations move to WhatsApp or email
          directly with the studio.
        </p>
        <p>
          You may request deletion of any personal details associated with your inquiry at any time
          by contacting us at <a href="mailto:bistacreation@gmail.com" className="text-gold-300 underline-offset-4 hover:underline">bistacreation@gmail.com</a>.
        </p>
      </div>

      <p className="mt-12 text-sm">
        <Link href="/" className="text-gold-300 underline-offset-4 hover:underline">Back to home</Link>
      </p>
    </main>
  );
}
