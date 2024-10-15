// This script should be run as part of your build process
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
        .resize(1200) // Adjust size as needed
        .webp({ quality: 80 })
        .toFile(path.join(imageDir, `${path.parse(file).name}.webp`));
    }
  }
};

optimizeImages();