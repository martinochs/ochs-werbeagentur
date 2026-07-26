import { chromium } from "playwright";
import { mkdir } from "fs/promises";
import path from "path";
import { fileURLToPath } from "url";

const __dirname = path.dirname(fileURLToPath(import.meta.url));
const projectRoot = path.resolve(__dirname, "..");
const outDir = path.join(projectRoot, "exports");
const url = process.env.EXPORT_URL ?? "http://localhost:3000";

await mkdir(outDir, { recursive: true });

const browser = await chromium.launch();
const page = await browser.newPage({
  viewport: { width: 1440, height: 900 },
});

await page.goto(url, { waitUntil: "networkidle", timeout: 60000 });
await page.waitForTimeout(1500);

const dimensions = await page.evaluate(() => ({
  width: document.documentElement.scrollWidth,
  height: document.documentElement.scrollHeight,
}));

const jpgPath = path.join(outDir, "ochs-homepage.jpg");
const pdfPath = path.join(outDir, "ochs-homepage.pdf");

await page.screenshot({
  path: jpgPath,
  fullPage: true,
  type: "jpeg",
  quality: 92,
});

await page.pdf({
  path: pdfPath,
  printBackground: true,
  width: `${dimensions.width}px`,
  height: `${dimensions.height}px`,
  margin: { top: "0", right: "0", bottom: "0", left: "0" },
});

await browser.close();

console.log(`JPG: ${jpgPath}`);
console.log(`PDF: ${pdfPath}`);
