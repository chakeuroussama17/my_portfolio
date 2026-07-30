import { readFileSync } from "node:fs";
// Strip TS types so we can exercise the real matcher logic in plain node.
const src = readFileSync("data/chatbot.ts", "utf8")
  .replace(/export type[\s\S]*?};\n/g, "")
  .replace(/: Intent\[\]|: Intent \| null|: string|: ChatLink\[\]/g, "")
  .replace(/export /g, "");
const mod = await import("data:text/javascript," + encodeURIComponent(src + "\nexport { matchIntent, intents };"));

const tests = [
  ["whats your email", "contact"],
  ["how can I contact you?", "contact"],
  ["can I call you", "contact"],
  ["where are you based", "location"],
  ["are you available for hire", "hire"],
  ["are you looking for a job", "hire"],
  ["what do you build", "role"],
  ["tell me about your experience", "experience"],
  ["how much money did you save", "impact"],
  ["show me your projects", "projects"],
  ["what is your best project", "best-project"],
  ["tell me about the helmet detection", "ppe"],
  ["how does the car tracking work", "vehicle"],
  ["what technologies do you know", "skills"],
  ["do you have any published research", "research"],
  ["where did you study", "education"],
  ["did you win any awards", "awards"],
  ["what is technexus", "technexus"],
  ["what languages do you speak", "languages"],
  ["can I download your cv", "resume"],
  ["thanks!", "thanks"],
  ["what programming languages do you use", "skills"],
  ["where do you live", "location"],
  ["can you work remote", "location"],
  ["send me your resume", "resume"],
  ["do you speak french", "languages"],
  ["tell me about your degree", "education"],
  ["what is your phone number", "contact"],
  ["hi there", "greeting"],
  ["hi", "greeting"],
  ["hello!", "greeting"],
  ["hey there", "greeting"],
  ["hi, whats your email?", "contact"],
  ["what is the weather today", null],
  ["asdfghjkl", null],
];

let pass = 0, fail = 0;
for (const [q, expected] of tests) {
  const got = mod.matchIntent(q)?.id ?? null;
  const ok = got === expected;
  if (ok) pass++; else { fail++; console.log(`FAIL "${q}"\n   expected=${expected}  got=${got}`); }
}
console.log(`\n${pass} passed, ${fail} failed (of ${tests.length})`);
