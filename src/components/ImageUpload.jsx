import React from 'react';
import { Button } from "@/components/ui/button";

const ImageUpload = ({ setBackgroundImage }) => {
  const handleImageUpload = (event) => {
    const file = event.target.files[0];
    if (file) {
      const reader = new FileReader();
      reader.onloadend = () => {
        setBackgroundImage(reader.result);
      };
      reader.readAsDataURL(file);
    }
  };

  return (
    <div className="py-4 bg-gray-100">
      <div className="container mx-auto px-4">
        <h3 className="text-xl font-semibold mb-4">Customize Header Background</h3>
        <p className="mb-2">Follow these steps to add your own background image:</p>
        <ol className="list-decimal list-inside mb-4">
          <li>Click the "Upload Custom Background" button below</li>
          <li>Select an image file from your device</li>
          <li>The header background will automatically update with your image</li>
        </ol>
        <p className="text-sm text-gray-600 mb-4">
          Recommended image dimensions: 1920x1080 pixels or larger. 
          For best results, use a high-quality image with good contrast against white text.
        </p>
        <input
          type="file"
          accept="image/*"
          onChange={handleImageUpload}
          className="hidden"
          id="background-image-upload"
        />
        <label htmlFor="background-image-upload">
          <Button as="span" className="bg-[#d7b971] hover:bg-[#c7a961] text-[#0A2647]">
            Upload Custom Background
          </Button>
        </label>
      </div>
    </div>
  );
};

export default ImageUpload;