import { useMemo, useState, useEffect, useRef } from "react";
import { createRandomId, createHeroId } from "../utils/id.helpers";

export function ImageUpload({ userId, spaceId }) {
  const [isHeroUploaded, setIsHeroUploaded] = useState(false);

  function generateSignature( callback, paramsToSign ) {
    fetch(`/api/sign`, {
      method: 'POST',
      body: JSON.stringify({
        paramsToSign
      })
    }).then(r => r.json()).then(({ signature }) => {
      callback(signature)
    });
  }

  const randomId = useMemo(() => createRandomId(), []);

  async function handleWidgetClick() {
    const widget = window.cloudinary.createUploadWidget(
      {
        cloudName: process.env.NEXT_PUBLIC_CLOUDINARY_CLOUD_NAME,
        uploadPreset: process.env.NEXT_PUBLIC_CLOUDINARY_UPLOAD_PRESET,
        uploadSignature: generateSignature,
        apiKey: process.env.NEXT_PUBLIC_CLOUDINARY_API_KEY,
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
