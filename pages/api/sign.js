import { v2 as cloudinary } from "cloudinary";

export default async function handler(req, res) {
  const apiSecret = "_3gp5UJt0Y_htrIqY_u3QDN2tdg";

  try {
    const result = cloudinary.utils.api_sign_request(
      `folder=twitter-spaces-prod-signed&source=uw&timestamp=${Date.now()}&upload_preset=ml_default`,
      apiSecret
    );
    res.json({ result });
  } catch (error) {
    console.log(error);
    res.send(error);
  }
}
