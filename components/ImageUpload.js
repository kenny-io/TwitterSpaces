import { useMemo, useState, useEffect, useRef } from "react";
import { createRandomId, createHeroId } from "../utils/id.helpers";

export function ImageUpload({ userId, spaceId }) {
  const [isHeroUploaded, setIsHeroUploaded] = useState(false);

  const createSignature = async () => {
    const response = await fetch(`/api/sign`);
    const result = await response.json();
    console.log(result.result);
    return result.result;
  };

  const randomId = useMemo(() => createRandomId(), []);

  async function handleWidgetClick() {
    const signedSignature = await createSignature();
    const widget = window.cloudinary.createUploadWidget(
      {
        cloudName: process.env.NEXT_PUBLIC_CLOUDINARY_CLOUD_NAME,
        uploadPreset: process.env.NEXT_PUBLIC_CLOUDINARY_UPLOAD_PRESET,
        uploadSignature: signedSignature,
        apiKey: "API KEY HERE",
        folder: "twitter-spaces-prod-signed",
        publicId: createHeroId(userId, spaceId, randomId),
        // sources: ["local", "url"],
        // multiple: false,
        // resourceType: "image",
      },
      (error, result) => {
        if (!error && result && result.event === "success") {
          console.log("Done! Here is the image info: ", result.info);
          setIsHeroUploaded(true);
        } else if (error) {
          console.log(error);
        }
      }
    );

    widget.open();
  }

  return (
    <div className="flex flex-col gap-2">
      <button
        type="button"
        className="px-4 py-4 bg-gray-200 rounded-lg cursor-pointer"
        onClick={handleWidgetClick}
      >
        Upload hero image
      </button>

      {isHeroUploaded ? (
        <>
          <div>Successfully uploaded</div>
          <input
            type="hidden"
            name="heroId"
            value={createHeroId(userId, spaceId, randomId)}
          />
        </>
      ) : null}
    </div>
  );
}
