import { v2 as cloudinary } from "cloudinary";
import crypto from "crypto";

export default async function handler(req, res) {
  const apiSecret = process.env.NEXT_PUBLIC_CLOUDINARY_API_SECRET;
  const stringtosign = `source=uw&upload_preset=ml_default&timestamp=${
    Date.now() / 1000
  }${apiSecret}`;

  // Using CLOUDINARY to generate a signature

  // const dataToSign = {
  //   timestamp: Date.now() / 1000,
  //   folder: "twitter-spaces-prod-signed",
  //   source: "uw",
  //   upload_preset: "ml_default",
  // };
  // try {
  //   const result = cloudinary.utils.api_sign_request(dataToSign, apiSecret);
  //   res.status(201).json({ result });
  // } catch (error) {
  //   res.send(error);
  // }

  // Using crypto to generate a signature
  try {
    const signature = crypto
      .createHash("sha256")
      .update(stringtosign)
      .digest("hex");
    res.json({ signature });
  } catch (error) {
    console.log(error);
    res.send(error);
  }
}
