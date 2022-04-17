import { Cloudinary } from "@cloudinary/url-gen";

const cloudinary = new Cloudinary({
  cloud: {
    cloudName: process.env.NEXT_PUBLIC_CLOUDINARY_CLOUD_NAME,
  },
});

export const getImage = (id) => {
  return cloudinary.image(
    `${process.env.NEXT_PUBLIC_CLOUDINARY_UPLOAD_PRESET}/${id}`
  );
};

export const getVideo = (id) => {
  return cloudinary.video(
    `${process.env.NEXT_PUBLIC_CLOUDINARY_UPLOAD_PRESET}/${id}`
  );
};
