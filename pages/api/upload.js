import { Video } from "../../lib/mux";

export default async function handler(req, res) {
  if (req.method !== "POST") return res.status(405).send("Method Not Allowed");

  try {
    const upload = await Video.Uploads.create({
      new_asset_settings: { playback_policy: "public" },
      cors_origin: "*",
    });
    res.json({
      id: upload.id,
      url: upload.url,
    });
  } catch (e) {
    console.error("Request error", e);
    res.status(500).json({ error: "Error creating upload" });
  }
}
