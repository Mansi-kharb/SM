const fs = require('fs');
const path = require('path');

// Create public/images directory if it doesn't exist
const imagesDir = path.join(__dirname, '../public/images');
if (!fs.existsSync(imagesDir)) {
  fs.mkdirSync(imagesDir, { recursive: true });
}

// SVG placeholder generator
function createSVGPlaceholder(width, height, title) {
  const colors = [
    '#8B4513', '#6B4423', '#A0522D', '#8B7355', '#654321',
    '#4A4A3A', '#5C4033', '#6B4C3A', '#7C5C2A', '#8B6914'
  ];

  const color = colors[Math.floor(Math.random() * colors.length)];
  const textColor = '#FFFFFF';

  return `<?xml version="1.0" encoding="UTF-8"?>
<svg width="${width}" height="${height}" xmlns="http://www.w3.org/2000/svg">
  <rect width="${width}" height="${height}" fill="${color}"/>
  <rect width="${width}" height="${height}" fill="url(#grad)" opacity="0.7"/>
  <defs>
    <linearGradient id="grad" x1="0%" y1="0%" x2="100%" y2="100%">
      <stop offset="0%" style="stop-color:${color};stop-opacity:0.8" />
      <stop offset="100%" style="stop-color:#2C2C2C;stop-opacity:0.9" />
    </linearGradient>
  </defs>
  <text x="50%" y="50%" font-size="48" fill="${textColor}" text-anchor="middle" dy=".3em" font-family="Arial" font-weight="bold" opacity="0.8">${title}</text>
</svg>`;
}

// Hero image (landscape)
const heroSvg = createSVGPlaceholder(1920, 1080, 'INTERIOR DESIGN');
fs.writeFileSync(path.join(imagesDir, 'hero-archway.svg'), heroSvg);
console.log('✅ Created: hero-archway.svg');

// About images (square)
const aboutTitles = ['Design', 'Space', 'Style', 'Modern'];
aboutTitles.forEach((title, idx) => {
  const svg = createSVGPlaceholder(600, 600, title);
  fs.writeFileSync(path.join(imagesDir, `about-${idx + 1}.svg`), svg);
  console.log(`✅ Created: about-${idx + 1}.svg`);
});

// Project images (square)
const projectTitles = [
  'Living Room', 'Office', 'Bedroom', 'Kitchen',
  'Retail', 'Dining', 'Gym', 'Theater',
  'Library', 'Spa', 'Kids Room', 'Cafe'
];

projectTitles.forEach((title, idx) => {
  const svg = createSVGPlaceholder(600, 600, title);
  fs.writeFileSync(path.join(imagesDir, `project-${idx + 1}.svg`), svg);
  console.log(`✅ Created: project-${idx + 1}.svg`);
});

console.log('\n✨ All placeholder images created!');
console.log(`📁 Location: ${imagesDir}`);
