"use client";

import { useState, type FormEvent } from "react";
import { CheckCircle2, Copy, Mail, MessageCircle, Send, ShieldCheck } from "lucide-react";
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

type FieldOptions = {
  type?: "text" | "email" | "tel" | "url" | "date";
  placeholder?: string;
  textarea?: boolean;
  required?: boolean;
  options?: string[];
  half?: boolean;
  autoComplete?: string;
};

type Props = {
  showIntro?: boolean;
};

export function CommissionForm({ showIntro = true }: Props) {
  const [values, setValues] = useState<Values>(initialValues);
  const [errors, setErrors] = useState<Partial<Record<keyof Values, string>>>({});
  const [submitted, setSubmitted] = useState(false);
  const [copied, setCopied] = useState(false);

  const set = (key: keyof Values, value: string) => {
    setValues((current) => ({ ...current, [key]: value }));
  };

  const onSubmit = (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    const parsed = schema.safeParse(values);
    if (!parsed.success) {
      const nextErrors: Partial<Record<keyof Values, string>> = {};
      for (const issue of parsed.error.issues) {
        const key = issue.path[0] as keyof Values;
        if (!nextErrors[key]) nextErrors[key] = issue.message;
      }
      setErrors(nextErrors);
      setSubmitted(false);
      return;
    }
    setErrors({});
    setSubmitted(true);
  };

  const message = buildWhatsAppMessage({
    name: values.clientName,
    scope: values.scope,
    genre: values.genre || undefined,
    vocal: values.vocal || undefined,
    deadline: values.deadline || undefined,
    lyricsOrStory: values.lyricsOrStory,
    references: values.references || undefined,
  });

  const subject = `Bista Creation — Song inquiry from ${values.clientName || "client"}`;
  const emailBody = [
    "Hi Bista Creation!",
    "",
    `Name: ${values.clientName || "—"}`,
    `Email: ${values.email || "—"}`,
    `WhatsApp: ${values.whatsapp || "—"}`,
    `Scope: ${values.scope || "—"}`,
    values.genre ? `Genre: ${values.genre}` : null,
    values.vocal ? `Vocal delivery: ${values.vocal}` : null,
    values.deadline ? `Target delivery: ${values.deadline}` : null,
    values.references ? `References: ${values.references}` : null,
    "",
    "Lyrics / Story concept:",
    values.lyricsOrStory || "—",
  ]
    .filter((line): line is string => line !== null)
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
      // Clipboard may be unavailable in some browsers.
    }
  };

  const field = (key: keyof Values, label: string, options: FieldOptions = {}) => {
    const error = errors[key];
    const id = `commission-${key}`;
    const errorId = `${id}-error`;
    const halfClass = options.half ? "md:col-span-1" : "md:col-span-2";

    const controlClass = `w-full rounded-xl border bg-ink-950/45 px-4 py-3 text-sm text-silver-100 placeholder:text-silver-500 outline-none transition focus:bg-ink-950/70 focus:ring-2 focus:ring-gold-400/15 ${
      error
        ? "border-crimson-400/70 focus:border-crimson-400"
        : "border-white/12 focus:border-gold-400/65"
    }`;

    const shared = {
      id,
      name: key,
      "aria-invalid": error ? true : undefined,
      "aria-describedby": error ? errorId : undefined,
    };

    return (
      <label htmlFor={id} className={`block ${halfClass}`}>
        <span className="mb-2 block text-[11px] font-semibold tracking-[0.18em] text-silver-300 uppercase">
          {label} {options.required ? <span className="text-crimson-400">*</span> : null}
        </span>
        {options.textarea ? (
          <textarea
            {...shared}
            value={values[key]}
            onChange={(event) => set(key, event.target.value)}
            placeholder={options.placeholder}
            rows={6}
            className={`${controlClass} resize-y`}
          />
        ) : options.options ? (
          <select
            {...shared}
            value={values[key]}
            onChange={(event) => set(key, event.target.value)}
            className={`${controlClass} select-chevron`}
          >
            <option value="">Select…</option>
            {options.options.map((option) => (
              <option key={option} value={option}>
                {option}
              </option>
            ))}
          </select>
        ) : (
          <input
            {...shared}
            type={options.type ?? "text"}
            value={values[key]}
            onChange={(event) => set(key, event.target.value)}
            placeholder={options.placeholder}
            autoComplete={options.autoComplete}
            className={controlClass}
          />
        )}
        {error ? (
          <p id={errorId} role="alert" className="mt-2 text-xs font-medium text-crimson-400">
            {error}
          </p>
        ) : null}
      </label>
    );
  };

  return (
    <section id="commission" className="relative scroll-mt-24 section-pad">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="grid gap-8 lg:grid-cols-5 lg:items-start">
          <div className="lg:col-span-2">
            <div className="glass liquid-edge rounded-3xl p-7 sm:p-8">
              {showIntro ? (
                <>
                  <span className="eyebrow text-[10px]">Commission a custom song</span>
                  <h2 className="mt-4 text-display text-3xl font-bold text-balance text-white sm:text-4xl">
                    Paid commission studio
                  </h2>
                  <p className="mt-4 text-sm leading-relaxed text-silver-300">
                    Pricing and milestone deliveries are tailored to your project and finalised
                    transparently via WhatsApp or email — before production begins.
                  </p>
                </>
              ) : (
                <>
                  <span className="eyebrow text-[10px]">Your brief</span>
                  <h2 className="mt-4 text-display text-2xl font-bold text-white sm:text-3xl">
                    What every commission includes
                  </h2>
                </>
              )}

              <ul className="mt-6 space-y-3 text-sm text-silver-300">
                {[
                  "Custom lyrics or story-driven songwriting",
                  "Suno AI Pro vocal production and mix",
                  "Google Flow / Veo cinematic visuals",
                  "Mastering for YouTube 16:9 and Instagram 9:16",
                  "Milestone delivery via WhatsApp or email",
                ].map((item) => (
                  <li key={item} className="flex items-start gap-3">
                    <CheckCircle2 className="mt-0.5 h-4 w-4 shrink-0 text-gold-300" />
                    <span>{item}</span>
                  </li>
                ))}
              </ul>

              <div className="mt-8 space-y-3 border-t border-white/10 pt-6 text-sm">
                <p>
                  <span className="text-silver-400">WhatsApp:</span>{" "}
                  <a
                    href={site.whatsappHref}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="font-semibold text-gold-200 underline-offset-4 hover:underline"
                  >
                    {site.whatsappDisplay}
                  </a>
                </p>
                <p>
                  <span className="text-silver-400">Email:</span>{" "}
                  <a
                    href={`mailto:${site.email}`}
                    className="font-semibold text-gold-200 underline-offset-4 hover:underline"
                  >
                    {site.email}
                  </a>
                </p>
                <p className="flex items-center gap-2 pt-1 text-xs text-silver-500">
                  <ShieldCheck className="h-3.5 w-3.5 text-gold-400" />
                  Your brief only opens WhatsApp or your email app.
                </p>
              </div>
            </div>
          </div>

          <div className="lg:col-span-3">
            <form
              onSubmit={onSubmit}
              noValidate
              className="glass-strong liquid-edge rounded-3xl p-6 sm:p-8"
            >
              <div className="grid gap-5 md:grid-cols-2">
                {field("clientName", "Client name", {
                  required: true,
                  half: true,
                  placeholder: "Your name",
                  autoComplete: "name",
                })}
                {field("whatsapp", "WhatsApp number", {
                  required: true,
                  half: true,
                  type: "tel",
                  placeholder: "+977 …",
                  autoComplete: "tel",
                })}
                {field("email", "Email address", {
                  required: true,
                  half: true,
                  type: "email",
                  placeholder: "you@example.com",
                  autoComplete: "email",
                })}
                {field("scope", "Production scope", {
                  required: true,
                  half: true,
                  options: scopes,
                })}
                {field("genre", "Musical genre", { half: true, options: genres })}
                {field("vocal", "Vocal delivery", { half: true, options: vocals })}
                {field("deadline", "Target delivery date", {
                  half: true,
                  type: "date",
                })}
                {field("references", "Reference links", {
                  half: true,
                  type: "url",
                  placeholder: "YouTube, mood board, artist…",
                })}
                {field("lyricsOrStory", "Lyrics / story concept", {
                  required: true,
                  textarea: true,
                  placeholder: "Paste your written lyrics or the story behind the song…",
                })}
              </div>

              <div className="mt-6 flex flex-wrap items-center gap-3">
                <button type="submit" className="btn btn-gold">
                  <Send className="h-4 w-4" />
                  Prepare my brief
                </button>
                <p className="text-xs text-silver-500">
                  You will choose WhatsApp or email on the next step.
                </p>
              </div>

              {submitted ? (
                <div
                  className="mt-6 rounded-2xl border border-gold-400/35 bg-gold-500/10 p-5"
                  aria-live="polite"
                >
                  <p className="text-sm font-semibold text-gold-100">Your brief is ready.</p>
                  <p className="mt-2 text-sm leading-relaxed text-silver-300">
                    Send it through WhatsApp for the fastest reply, or open it in your email app.
                    Scope and price are confirmed before any work begins.
                  </p>
                  <div className="mt-5 flex flex-wrap gap-3">
                    <button
                      type="button"
                      onClick={openWhatsApp}
                      className="btn btn-sm bg-emerald-400 text-ink-950 hover:bg-emerald-300"
                    >
                      <MessageCircle className="h-4 w-4" />
                      Open on WhatsApp
                    </button>
                    <button
                      type="button"
                      onClick={openEmail}
                      className="btn btn-glass btn-sm"
                    >
                      <Mail className="h-4 w-4" />
                      Open by email
                    </button>
                    <button
                      type="button"
                      onClick={copyBrief}
                      className="btn btn-glass btn-sm"
                    >
                      <Copy className="h-4 w-4" />
                      {copied ? "Copied!" : "Copy brief"}
                    </button>
                  </div>
                </div>
              ) : null}

              <p className="mt-4 text-xs text-silver-500">
                We never share your details. Nothing is stored on this website — the brief is
                passed to WhatsApp or your email app.
              </p>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
}
