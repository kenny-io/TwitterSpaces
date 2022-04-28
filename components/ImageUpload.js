import { useMemo, useState, useEffect, useRef } from "react";
import { createRandomId, createHeroId } from "../utils/id.helpers";
import { generateSignature } from "../utils/generateSignature";
export function ImageUpload({ userId, spaceId }) {
  const [isHeroUploaded, setIsHeroUploaded] = useState(false);

  const randomId = useMemo(() => createRandomId(), []);

  async function handleWidgetClick() {
    const widget = window.cloudinary.createUploadWidget(
      {
        cloudName: process.env.NEXT_PUBLIC_CLOUDINARY_CLOUD_NAME,
        uploadPreset: process.env.NEXT_PUBLIC_CLOUDINARY_UPLOAD_PRESET,
        apiKey: process.env.NEXT_PUBLIC_CLOUDINARY_API_KEY,
        uploadSignature: generateSignature,
        folder: "twitter-spaces-content",
        publicId: createHeroId(userId, spaceId, randomId),
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
