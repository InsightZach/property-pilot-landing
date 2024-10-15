const sharp = require('sharp');
const fs = require('fs');
const path = require('path');

const optimizeImages = async () => {
  const imageDir = path.join(__dirname, 'public');
  const files = fs.readdirSync(imageDir);

  for (const file of files) {
    if (file.match(/\.(png|jpg|jpeg)$/i)) {
      const filePath = path.join(imageDir, file);
      await sharp(filePath)
        .resize(1920, 1080, { fit: 'inside', withoutEnlargement: true })
        .webp({ quality: 85 })
        .toFile(path.join(imageDir, `${path.parse(file).name}.webp`));
      
      console.log(`Optimized: ${file}`);
    }
  }
};

optimizeImages().then(() => console.log('Image optimization complete'));