import React, { useState, useCallback } from "react";
import Cropper from "react-easy-crop";
import getCroppedImg from "./cropperUtils";

const ImageCropper = ({ aspect, image, onCropSubmit }) => {
  const style = {
    wrapper: {
      position: "relative",
      width: 500,
      height: 400,
    },
  };
  const [crop, setCrop] = useState({ x: 0, y: 0 });
  const [zoom, setZoom] = useState(1);
  const [croppedAreaPixels, setCroppedAreaPixels] = useState(null);

  const onCropComplete = useCallback((croppedArea, croppedAreaPixels) => {
    setCroppedAreaPixels(croppedAreaPixels);
  }, []);

  const createCroppedImage = useCallback(async () => {
    try {
      const croppedImage = await getCroppedImg(image, croppedAreaPixels);
      console.log("donee", { croppedImage });
      onCropSubmit(croppedImage);
    } catch (e) {
      console.error(e);
    }
  }, [croppedAreaPixels]);

  return (
    <>
      <div style={style.wrapper}>
        <Cropper
          image={image}
          crop={crop}
          zoom={zoom}
          aspect={aspect}
          onCropChange={setCrop}
          onCropComplete={onCropComplete}
          onZoomChange={setZoom}
        />
      </div>
      <button onClick={createCroppedImage}>Crop</button>
    </>
  );
};

export default ImageCropper;
