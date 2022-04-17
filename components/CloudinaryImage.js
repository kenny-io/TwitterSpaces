import {
  AdvancedImage,
  lazyload,
  responsive,
  placeholder,
} from "@cloudinary/react";

export function CloudinaryImage({ img, ...delegated }) {
  return (
    <AdvancedImage
      plugins={[lazyload(), responsive(), placeholder()]}
      cldImg={img}
      {...delegated}
    />
  );
}
