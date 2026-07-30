/**
 * Captures a screenshot of each live project URL into public/projects/.
 *
 * Usage:  node scripts/capture-screenshots.mjs
 *
 * Streamlit Community Cloud apps sleep after inactivity and show a "this app
 * has gone to sleep" screen. The script detects that, clicks the wake button,
 * and waits for the real app before shooting.
 */
import { chromium } from "playwright";
import { mkdir } from "node:fs/promises";
import path from "node:path";

const OUT_DIR = path.join(process.cwd(), "public", "projects");

const targets = [
  // --- Featured ---
  { file: "agrisenx.png", url: "https://agrisenx-website.vercel.app/" },
  { file: "operational-app.png", url: "https://operational-app-landing-page.vercel.app/" },
  { file: "quitnow.png", url: "https://quit-now.vercel.app/" },
  { file: "visitor-management.png", url: "https://visitors-managment-system.vercel.app/login" },
  { file: "dreaming-ball.png", url: "https://landing-page-dreaming-ball.vercel.app/" },
  { file: "algerian-street.png", url: "https://algerian-street-dz-landinging-page.vercel.app/" },
  { file: "hdsb.png", url: "https://www.hdsb.com.my/" },
  { file: "portfolio-ai.png", url: "https://portfolio-ai-eta-six.vercel.app/" },

  // --- Secondary ---
  { file: "ocr-parser.png", url: "https://invoice-ocr-parser-onnn52qryjnf6pgggcqlun.streamlit.app/" },
  { file: "ap-automation.png", url: "https://3way-matching-ap-3dykfwu5gg3rszlxrrsxkr.streamlit.app/" },
  { file: "sales-forecasting.png", url: "https://sales-forecasting-8huzbpsjavjtzuuecold8x.streamlit.app/" },
  { file: "forecasting-engine.png", url: "https://forecastingengine-6wyyebyusm583idejypkov.streamlit.app/" },
  { file: "faq-chatbot.png", url: "https://chatbot-ten-green-62.vercel.app/" },
  { file: "support-bot.png", url: "https://multi-channel-support-bot.vercel.app/widget/" },
];

async function wakeIfSleeping(page) {
  const wakeButton = page.getByRole("button", { name: /yes, get this app back up/i });
  if (await wakeButton.count()) {
    console.log("   app was asleep — waking it (this can take ~45s)");
    await wakeButton.first().click();
    await page.waitForTimeout(45000);
  }
}

const browser = await chromium.launch();
const context = await browser.newContext({
  viewport: { width: 1440, height: 900 },
  deviceScaleFactor: 2,
});

await mkdir(OUT_DIR, { recursive: true });

const results = [];

for (const { file, url } of targets) {
  const page = await context.newPage();
  try {
    console.log(`→ ${file}`);
    await page.goto(url, { waitUntil: "networkidle", timeout: 90000 });
    await wakeIfSleeping(page);
    // Let fonts, charts and animations settle before shooting.
    await page.waitForTimeout(6000);
    await page.screenshot({ path: path.join(OUT_DIR, file) });
    results.push({ file, status: "ok" });
    console.log(`   saved`);
  } catch (err) {
    results.push({ file, status: "failed", reason: err.message.split("\n")[0] });
    console.log(`   FAILED: ${err.message.split("\n")[0]}`);
  } finally {
    await page.close();
  }
}

await browser.close();

console.log("\n--- summary ---");
for (const r of results) {
  console.log(`${r.status === "ok" ? "OK  " : "FAIL"} ${r.file}${r.reason ? " — " + r.reason : ""}`);
}
