import React, { useState, useCallback } from "react";
import ImageCropper from "./ImageCropper";

const ImageUploader = ({ aspect }) => {
  const [cropperVisible, setCropperVisible] = useState(false);
  const [imageFile, setImageFile] = useState(null);
  const [croppedImage, setCroppedImage] = useState(null);

  const openCropper = () => {
    let file = document.getElementById("imageInput").files[0];
    var reader = new FileReader();

    if (file) {
      reader.readAsDataURL(file);
    }

    reader.onloadend = function () {
      setImageFile(reader.result);
      setCropperVisible(true);
    };
  };

  const handleCropSubmit = useCallback((croppedImage) => {
    setCroppedImage(croppedImage);
  });

  return (
    <div>
      <input id={"imageInput"} type={"file"} onChange={openCropper} />
      {cropperVisible ? (
        <ImageCropper
          aspect={aspect}
          image={imageFile}
          onCropSubmit={handleCropSubmit}
        />
      ) : null}
    </div>
  );
};

export default ImageUploader;
