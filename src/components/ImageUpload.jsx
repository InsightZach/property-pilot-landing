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