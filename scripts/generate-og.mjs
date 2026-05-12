// One-shot generator for /public/og-image.png (1200x630).
// Run: node scripts/generate-og.mjs
import { Resvg } from '@resvg/resvg-js';
import fs from 'node:fs';
import path from 'node:path';
import { fileURLToPath } from 'node:url';

const __dirname = path.dirname(fileURLToPath(import.meta.url));
const root = path.resolve(__dirname, '..');
const outPath = path.join(root, 'public', 'og-image.png');

const svg = `<?xml version="1.0" encoding="UTF-8"?>
<svg xmlns="http://www.w3.org/2000/svg" width="1200" height="630" viewBox="0 0 1200 630">
  <defs>
    <linearGradient id="bg" x1="0" y1="0" x2="1" y2="1">
      <stop offset="0%" stop-color="#06080f"/>
      <stop offset="100%" stop-color="#0f1424"/>
    </linearGradient>
    <radialGradient id="glow" cx="50%" cy="0%" r="60%">
      <stop offset="0%" stop-color="#319bff" stop-opacity="0.40"/>
      <stop offset="100%" stop-color="#0a0d18" stop-opacity="0"/>
    </radialGradient>
    <linearGradient id="ring" x1="0" y1="0" x2="1" y2="1">
      <stop offset="0%" stop-color="#58bbff"/>
      <stop offset="100%" stop-color="#1565e0"/>
    </linearGradient>
    <linearGradient id="title" x1="0" y1="0" x2="1" y2="0">
      <stop offset="0%" stop-color="#ffffff"/>
      <stop offset="100%" stop-color="#8ed5ff"/>
    </linearGradient>
    <pattern id="grid" width="48" height="48" patternUnits="userSpaceOnUse">
      <path d="M 48 0 L 0 0 0 48" fill="none" stroke="rgba(255,255,255,0.05)" stroke-width="1"/>
    </pattern>
  </defs>

  <rect width="1200" height="630" fill="url(#bg)"/>
  <rect width="1200" height="630" fill="url(#grid)"/>
  <rect width="1200" height="630" fill="url(#glow)"/>

  <!-- Logo mark -->
  <g transform="translate(80,90)">
    <rect x="0" y="0" width="92" height="92" rx="20" fill="#0f1424" stroke="url(#ring)" stroke-width="2"/>
    <text x="46" y="64" text-anchor="middle" font-family="Helvetica, Arial, sans-serif" font-size="44" font-weight="700" fill="url(#ring)">M</text>
  </g>
  <text x="190" y="130" font-family="Helvetica, Arial, sans-serif" font-size="26" font-weight="700" fill="#ffffff">MHI<tspan fill="#58bbff">-</tspan>IT</text>
  <text x="190" y="162" font-family="Helvetica, Arial, sans-serif" font-size="18" font-weight="500" letter-spacing="4" fill="#94a3b8">ENGINEERING · CONSULTING</text>

  <!-- Accent bar -->
  <rect x="80" y="240" width="60" height="4" fill="#319bff" rx="2"/>

  <!-- Title -->
  <text x="80" y="330" font-family="Helvetica, Arial, sans-serif" font-size="86" font-weight="700" fill="url(#title)">Markus Hinkel</text>

  <!-- Subtitle -->
  <text x="80" y="400" font-family="Helvetica, Arial, sans-serif" font-size="36" font-weight="500" fill="#cbd5e1">Senior IT Systems Engineer</text>
  <text x="80" y="450" font-family="Helvetica, Arial, sans-serif" font-size="36" font-weight="500" fill="#cbd5e1">&amp; Full-Stack Developer</text>

  <!-- Tag pills -->
  <g font-family="Helvetica, Arial, sans-serif" font-size="18" font-weight="500">
    <g transform="translate(80,500)">
      <rect width="120" height="36" rx="18" fill="rgba(49,155,255,0.10)" stroke="rgba(49,155,255,0.30)"/>
      <text x="60" y="23" text-anchor="middle" fill="#bce6ff">TypeScript</text>
    </g>
    <g transform="translate(212,500)">
      <rect width="80" height="36" rx="18" fill="rgba(49,155,255,0.10)" stroke="rgba(49,155,255,0.30)"/>
      <text x="40" y="23" text-anchor="middle" fill="#bce6ff">React</text>
    </g>
    <g transform="translate(304,500)">
      <rect width="80" height="36" rx="18" fill="rgba(49,155,255,0.10)" stroke="rgba(49,155,255,0.30)"/>
      <text x="40" y="23" text-anchor="middle" fill="#bce6ff">Azure</text>
    </g>
    <g transform="translate(396,500)">
      <rect width="110" height="36" rx="18" fill="rgba(49,155,255,0.10)" stroke="rgba(49,155,255,0.30)"/>
      <text x="55" y="23" text-anchor="middle" fill="#bce6ff">Cloud Ops</text>
    </g>
    <g transform="translate(518,500)">
      <rect width="130" height="36" rx="18" fill="rgba(49,155,255,0.10)" stroke="rgba(49,155,255,0.30)"/>
      <text x="65" y="23" text-anchor="middle" fill="#bce6ff">Full-Stack</text>
    </g>
  </g>

  <!-- Footer -->
  <text x="80" y="585" font-family="Helvetica, Arial, sans-serif" font-size="22" font-weight="500" fill="#64748b">Vienna, Austria  ·  markushinkel.com</text>

  <!-- Decorative dots -->
  <circle cx="1080" cy="120" r="6" fill="#319bff"/>
  <circle cx="1110" cy="120" r="6" fill="#319bff" opacity="0.5"/>
  <circle cx="1140" cy="120" r="6" fill="#319bff" opacity="0.25"/>
</svg>`;

const resvg = new Resvg(svg, {
  fitTo: { mode: 'width', value: 1200 },
  font: { loadSystemFonts: true },
});
const png = resvg.render().asPng();
fs.writeFileSync(outPath, png);
console.log(`Wrote ${outPath} (${png.length} bytes)`);

