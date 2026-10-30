const gatewayBaseUrl = process.env.NEURON_AI_GATEWAY_BASE_URL;
const gatewayToken = process.env.NEURON_AI_GATEWAY_TOKEN;

export type AiMessage = {
  role: "system" | "user" | "assistant";
  content: string;
};

export type AiChatCompletionInput = {
  messages: AiMessage[];
  model?: string;
  temperature?: number;
};

export type AiChatCompletion = {
  content: string;
};

/**
 * Thin OpenAI-compatible client for the Neon AI Gateway.
 * The gateway base URL and token come from the Neon deployment env
 * (NEON_AI_GATEWAY_BASE_URL / NEON_AI_GATEWAY_TOKEN).
 */
export async function createChatCompletion(input: AiChatCompletionInput): Promise<AiChatCompletion> {
  const base = (gatewayBaseUrl ?? "https://api.neon.tech/v1").replace(/\/+$/, "");
  const res = await fetch(`${base}/chat/completions`, {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
      ...(gatewayToken ? { Authorization: `Bearer ${gatewayToken}` } : {}),
    },
    body: JSON.stringify({
      model: input.model ?? "default",
      messages: input.messages,
      temperature: input.temperature ?? 0.8,
    }),
  });

  if (!res.ok) {
    const detail = await res.text().catch(() => "");
    throw new Error(`AI Gateway request failed with status ${res.status}: ${detail}`);
  }

  const json = (await res.json()) as {
    choices?: Array<{ message?: { content?: string } }>;
  };

  const content = json.choices?.[0]?.message?.content ?? "";
  if (!content) {
    throw new Error("AI Gateway returned an empty completion");
  }

  return { content };
}
