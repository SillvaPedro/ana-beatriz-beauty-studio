const fs = require("fs");
const path = require("path");

const publicDir = path.join(process.cwd(), "public", "images");
const portfolioDir = path.join(publicDir, "portfolio");
const coursesDir = path.join(publicDir, "courses");
fs.mkdirSync(portfolioDir, { recursive: true });
fs.mkdirSync(coursesDir, { recursive: true });

function svg(text, label, c1, c2, width = 800, height = 1000) {
  return `<svg xmlns="http://www.w3.org/2000/svg" width="${width}" height="${height}" viewBox="0 0 ${width} ${height}">
  <defs>
    <linearGradient id="g" x1="0" y1="0" x2="1" y2="1">
      <stop offset="0%" stop-color="${c1}"/>
      <stop offset="100%" stop-color="${c2}"/>
    </linearGradient>
  </defs>
  <rect width="${width}" height="${height}" fill="url(#g)"/>
  <circle cx="${width * 0.8}" cy="${height * 0.2}" r="${width * 0.35}" fill="#ffffff" opacity="0.08"/>
  <circle cx="${width * 0.1}" cy="${height * 0.9}" r="${width * 0.3}" fill="#000000" opacity="0.08"/>
  <g fill="#ffffff" font-family="Georgia, serif" text-anchor="middle">
    <text x="${width / 2}" y="${height / 2 - 12}" font-size="44" font-weight="bold">${text}</text>
    <text x="${width / 2}" y="${height / 2 + 44}" font-size="22" opacity="0.9">${label}</text>
  </g>
</svg>`;
}

const files = [
  ["hero", "MAQUIAGEM PROFISSIONAL", "Ana Beatriz Beauty Studio", "#db2777", "#7c4d10"],
  ["profile", "ANA BEATRIZ", "Maquiadora profissional", "#be185d", "#b8860b"],
  ["portfolio/noiva", "Look Noiva", "Maquiagem para noivas", "#db2777", "#9d174d"],
  ["portfolio/noiva2", "Noiva Clássica", "Make elegante", "#be185d", "#7c4d10"],
  ["portfolio/social", "Look Festa", "Maquiagem social", "#db2777", "#b8860b"],
  ["portfolio/social2", "Social Sofisticado", "Acabamento profissional", "#9d174d", "#b8860b"],
  ["portfolio/automaquiagem", "Make Rápida", "Dia a dia", "#ec4899", "#b8860b"],
  ["portfolio/dia-a-dia", "Look Natural", "Maquiagem leve", "#f472b6", "#d4af37"],
  ["courses/curso1", "AUTOMAQUIAGEM", "Para iniciantes", "#be185d", "#7c4d10"],
  ["courses/curso2", "EVENTOS", "Maquiagem de festa", "#db2777", "#b8860b"],
  ["courses/curso3", "PROFISSIONAL", "Formação completa", "#9d174d", "#d4af37"],
];

for (const [name, text, label, c1, c2] of files) {
  const file = path.join(publicDir, name + ".svg");
  const content = svg(text, label, c1, c2);
  fs.writeFileSync(file, content);
  console.log("created", file);
}
console.log("done");
