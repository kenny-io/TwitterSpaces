import { Cloudinary } from "@cloudinary/url-gen";
const cloudinary = new Cloudinary({
  cloud: {
    cloudName: process.env.NEXT_PUBLIC_CLOUDINARY_CLOUD_NAME,
  },
});

export const getImage = (id) => {
  return cloudinary.image(`twitter-spaces-content/${id}`);
};

export const getVideo = (id) => {
  return cloudinary.video(`twitter-spaces-content/${id}`);
};
