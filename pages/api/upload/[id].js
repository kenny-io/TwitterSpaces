import { Video } from "../../../lib/mux";

export default async function handler(req, res) {
  if (req.method !== "GET") return res.status(405).send("Method Not Allowed");

  try {
    const upload = await Video.Uploads.get(req.query.id);
    if (upload.status !== "asset_created") {
      return res.json({
        upload: {
          status: upload.status,
          url: upload.url,
          asset_id: upload.asset_id,
        },
      });
    }
    const asset = await Video.Assets.get(upload.asset_id);
    return res.json({
      upload: {
        status: upload.status,
        url: upload.url,
        asset_id: upload.asset_id,
      },
      asset: {
        id: asset.id,
        status: asset.status,
        errors: asset.errors,
        playback_id: asset.playback_ids[0].id,
      },
    });
  } catch (e) {
    console.error("Request error", e);
    res.status(500).json({ error: "Error getting upload/asset" });
  }
}
