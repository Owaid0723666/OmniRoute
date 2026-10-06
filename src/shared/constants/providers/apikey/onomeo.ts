/**
 * onomeo API-key catalog entry. Kept out of gateways.ts so that frozen file
 * does not grow past its 1544-line ceiling (#14297).
 */
export const onomeoGateway = {
  onomeo: {
    id: "onomeo",
    serviceKinds: ["llm"],
    alias: "onomeo",
    name: "onomeo",
    icon: "router",
    color: "#C2410C",
    textIcon: "ONO",
    passthroughModels: true,
    website: "https://onomeo.com",
    // Free credits come from a daily check-in, not a standing quota: 20,000 on day 1,
    // rising to 50,000 a day from day 7. Free models cost no credits; premium models do,
    // and each unpaid account can spend up to 50,000/day on them.
    hasFree: true,
    freeNote:
      "Sign in (email, Google or GitHub, no card) and check in daily: 20,000 credits on day 1, up to 50,000 a day from day 7. 35 free models cost no credits; 12 premium models do, and each unpaid account can spend up to 50,000/day on them. Optional: $5/month buys 3,000,000 credits that never expire (cancel anytime). 12 requests/min per key; free models allow 60 requests per 5 hours per account and 450 per 5 hours site-wide.",
    // onomeo routes to third-party upstreams; some may train on prompts, and each
    // model page on onomeo.com says which.
    apiHint:
      "Create an API key on the onomeo dashboard, then use https://onomeo.com/v1 as the OpenAI-compatible base URL. Models are served by third-party upstreams, some of which may train on prompts; each model page on onomeo.com states this. onomeo is in public beta: not every feature is guaranteed to work, and feedback is welcome at https://onomeo.com/feedback.",
  },
} as const;
