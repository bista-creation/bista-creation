"use client";

import { useState, type FormEvent } from "react";
import { CheckCircle2, Copy, Mail, MessageCircle, Send } from "lucide-react";
import { z } from "zod";
import { buildWhatsAppMessage, mailtoHref, whatsappHref } from "@/lib/contact";
import { site } from "@/lib/site";

const schema = z.object({
  clientName: z.string().min(1, "Please tell us your name."),
  whatsapp: z.string().min(7, "Please add a reachable WhatsApp number."),
  email: z.string().regex(/[^@\s]+@[^@\s]+\.[^@\s]+/, "Please add a valid email address."),
  scope: z.string().min(1, "Please choose a production scope."),
  genre: z.string().optional(),
  vocal: z.string().optional(),
  lyricsOrStory: z.string().min(1, "Share the lyrics or story so we can craft the song."),
  references: z.string().optional(),
  deadline: z.string().optional(),
});

type Values = z.infer<typeof schema>;

const initialValues: Values = {
  clientName: "",
  whatsapp: "",
  email: "",
  scope: "",
  genre: "",
  vocal: "",
  lyricsOrStory: "",
  references: "",
  deadline: "",
};

const scopes = [
  "Custom Lyrics to Song",
  "Wedding / Anniversary Anthem",
  "Lok-Pop Single",
  "Club EDM Drop",
  "Full AI Music Video",
];

const genres = [
  "Nepali Lok-Pop Fusion",
  "Melodic EDM / Club",
  "Acoustic Ballad",
  "Rap / Urban",
  "Cinematic Orchestral",
];

const vocals = ["Male Vocal", "Female Vocal", "Duet", "Instrumental Only"];

export function CommissionForm() {
  const [values, setValues] = useState<Values>(initialValues);
  const [errors, setErrors] = useState<Partial<Record<keyof Values, string>>>({});
  const [submitted, setSubmitted] = useState(false);
  const [copied, setCopied] = useState(false);

  const set = (key: keyof Values, value: string) => {
    setValues((v) => ({ ...v, [key]: value }));
  };

  const onSubmit = (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    const parsed = schema.safeParse(values);
    if (!parsed.success) {
      const nextErrors: Partial<Record<keyof Values, string>> = {};
      for (const issue of parsed.error.issues) {
        const key = issue.path[0] as keyof Values;
        if (!nextErrors[key]) nextErrors[key] = issue.message;
      }
      setErrors(nextErrors);
      return;
    }
    setSubmitted(true);
  };

  const message = buildWhatsAppMessage({
    name: values.clientName,
    scope: values.scope,
    genre: values.genre || undefined,
    vocal: values.vocal || undefined,
    deadline: values.deadline || undefined,
    lyricsOrStory: values.lyricsOrStory,
  });

  const subject = `Bista Creation — Song inquiry from ${values.clientName || "client"}`;
  const emailBody = [
    `Hi Bista Creation!`,
    ``,
    `Name: ${values.clientName || "—"}`,
    `Scope: ${values.scope}`,
    values.genre ? `Genre: ${values.genre}` : null,
    values.vocal ? `Vocal delivery: ${values.vocal}` : null,
    values.deadline ? `Target delivery: ${values.deadline}` : null,
    ``,
    `Lyrics / Story concept:`,
    values.lyricsOrStory || "—",
  ]
    .filter((l): l is string => l !== null)
    .join("\n");

  const openWhatsApp = () => {
    window.open(whatsappHref(message), "_blank", "noopener,noreferrer");
  };

  const openEmail = () => {
    window.location.href = mailtoHref(subject, emailBody);
  };

  const copyBrief = async () => {
    try {
      await navigator.clipboard.writeText(message);
      setCopied(true);
      setTimeout(() => setCopied(false), 2000);
    } catch {
      // clipboard unavailable
    }
  };

  const field = (
    key: keyof Values,
    label: string,
    opts?: { type?: "text" | "email" | "tel" | "url"; placeholder?: string; textarea?: boolean; required?: boolean; options?: string[]; half?: boolean }
  ) => {
    const error = errors[key];
    const common = `w-full rounded-xl border bg-white/5 px-4 py-3 text-sm text-silver-200 placeholder:text-silver-500 outline-none transition focus:bg-white/5 ${
      error ? "border-red-500/60" : "border-white/10 focus:border-gold-500/60"
    }`;
    return (
      <label className={`block ${opts?.half ? "md:col-span-1" : ""}`}>
        <span className="mb-2 block text-[11px] font-semibold tracking-[0.2em] text-silver-300 uppercase">
          {label} {opts?.required ? <span className="text-red-400">*</span> : null}
        </span>
        {opts?.textarea ? (
          <textarea
            value={values[key]}
            onChange={(e) => set(key, e.target.value)}
            placeholder={opts.placeholder}
            rows={6}
            className={`${common} resize-y`}
          />
        ) : (
          <select
            value={values[key]}
            onChange={(e) => set(key, e.target.value)}
            className={`${common} ${opts?.type === "text" ? "" : ""}`}
            required={opts?.required}
          >
            <option value="">Select…</option>
            {opts?.options?.map((o) => (
              <option key={o} value={o}>{o}</option>
            ))}
          </select>
        )}
        {error ? <p className="mt-2 text-xs text-red-400">{error}</p> : null}
      </label>
    );
  };

  return (
    <section id="commission" className="scroll-mt-20 py-24 sm:py-32">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="grid gap-14 lg:grid-cols-5">
          <div className="lg:col-span-2">
            <div className="glass rounded-3xl p-8">
              <p className="text-display text-xs font-semibold tracking-[0.3em] text-gold-400 uppercase">
                Commission a Custom Song
              </p>
              <h2 className="mt-4 text-display text-3xl font-bold text-white sm:text-4xl">
                Paid Commission Studio
              </h2>
              <p className="mt-4 text-silver-300">
                Pricing and milestone deliveries are custom-tailored and finalized transparently
                via WhatsApp or Email.
              </p>
              <ul className="mt-6 space-y-3 text-sm text-silver-300">
                {[
                  "Custom lyrics or story-driven song",
                  "Suno AI Pro vocal production & mix",
                  "Google Flow / Veo cinematic video",
                  "Mastering for YouTube & Instagram",
                  "Milestone delivery via WhatsApp / email",
                ].map((item) => (
                  <li key={item} className="flex items-start gap-3">
                    <CheckCircle2 className="mt-0.5 h-4 w-4 shrink-0 text-gold-400" />
                    <span>{item}</span>
                  </li>
                ))}
              </ul>
              <div className="mt-8 space-y-3 border-t border-white/10 pt-6 text-sm">
                <p>
                  <span className="text-silver-400">WhatsApp:</span>{" "}
                  <a href={site.whatsappHref} target="_blank" rel="noopener noreferrer" className="text-gold-300 underline-offset-4 hover:underline">
                    {site.whatsappDisplay}
                  </a>
                </p>
                <p>
                  <span className="text-silver-400">Email:</span>{" "}
                  <a href={`mailto:${site.email}`} className="text-gold-300 underline-offset-4 hover:underline">
                    {site.email}
                  </a>
                </p>
              </div>
            </div>
          </div>

          <div className="lg:col-span-3">
            <form onSubmit={onSubmit} className="glass-strong rounded-3xl p-6 sm:p-8">
              <div className="grid gap-5 md:grid-cols-2">
                {field("clientName", "Client Name", { required: true, half: true, placeholder: "Your name" })}
                {field("whatsapp", "WhatsApp Phone Number", { required: true, half: true, type: "tel", placeholder: "+977 …" })}
                {field("email", "Client Email Address", { required: true, half: true, type: "email", placeholder: "you@example.com" })}
                {field("scope", "Production Scope", { required: true, options: scopes })}
                {field("genre", "Musical Genre", { options: genres })}
                {field("vocal", "Vocal Delivery", { options: vocals })}
                {field("lyricsOrStory", "Lyrics / Story Concept", { required: true, textarea: true, placeholder: "Paste your written lyrics or story details…" })}
                {field("references", "Reference Links / Target Delivery Date", { placeholder: "Paste links or date" })}
              </div>

              <div className="mt-6 flex flex-wrap gap-3">
                <button
                  type="submit"
                  className="inline-flex items-center gap-2 rounded-full bg-gold-500 px-6 py-3 text-xs font-bold tracking-[0.18em] text-black uppercase transition hover:bg-gold-400"
                >
                  <Send className="h-4 w-4" /> Send via WhatsApp / Email
                </button>
              </div>

              {submitted ? (
                <div className="mt-6 rounded-2xl border border-gold-500/40 bg-gold-500/10 p-5">
                  <p className="text-sm font-semibold text-gold-200">Inquiry ready.</p>
                  <p className="mt-2 text-sm text-silver-300">
                    Press the WhatsApp button to open your chat with the brief, or the Email button to
                    open the mail composer. Save this link somewhere safe — it is the delivery key.
                  </p>
                  <div className="mt-5 flex flex-wrap gap-3">
                    <button type="button" onClick={openWhatsApp} className="inline-flex items-center gap-2 rounded-full bg-[#22c55e] px-5 py-3 text-xs font-bold tracking-[0.16em] text-black uppercase transition hover:bg-green-400">
                      <MessageCircle className="h-4 w-4" /> Open on WhatsApp
                    </button>
                    <button type="button" onClick={openEmail} className="inline-flex items-center gap-2 rounded-full border border-gold-500/60 bg-gold-500/10 px-5 py-3 text-xs font-bold tracking-[0.16em] text-gold-300 uppercase transition hover:bg-gold-500/20">
                      <Mail className="h-4 w-4" /> Open by Email
                    </button>
                    <button type="button" onClick={copyBrief} className="inline-flex items-center gap-2 rounded-full border border-white/20 px-5 py-3 text-xs font-bold tracking-[0.16em] text-silver-300 uppercase transition hover:border-white/40">
                      <Copy className="h-4 w-4" /> {copied ? "Copied!" : "Copy Brief"}
                    </button>
                  </div>
                </div>
              ) : null}

              <p className="mt-4 text-center text-xs text-silver-500">
                We never share your details. Submissions open WhatsApp or your email app.
              </p>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
}
