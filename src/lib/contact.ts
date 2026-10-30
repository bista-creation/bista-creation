import { site } from "@/lib/site";

export function buildWhatsAppMessage(input: {
  name: string;
  scope: string;
  genre?: string;
  vocal?: string;
  deadline?: string;
  lyricsOrStory: string;
  references?: string;
}) {
  const lines = [
    `Hi ${site.name}! I would like to commission a custom song.`,
    ``,
    `Name: ${input.name || "—"}`,
    `Scope: ${input.scope}`,
    input.genre ? `Genre: ${input.genre}` : null,
    input.vocal ? `Vocal delivery: ${input.vocal}` : null,
    input.deadline ? `Target delivery: ${input.deadline}` : null,
    input.references ? `References: ${input.references}` : null,
    ``,
    `Lyrics / Story concept:`,
    input.lyricsOrStory || "—",
  ].filter((l): l is string => l !== null);

  return lines.join("\n");
}

export function whatsappHref(message: string) {
  return `https://wa.me/9779851150987?text=${encodeURIComponent(message)}`;
}

export function whatsappTelHref() {
  return `tel:+9779851150987`;
}

export function mailtoHref(subject: string, body: string) {
  const to = encodeURIComponent(site.email);
  const subjectEnc = encodeURIComponent(subject);
  const bodyEnc = encodeURIComponent(body);
  return `mailto:${to}?subject=${subjectEnc}&body=${bodyEnc}`;
}
