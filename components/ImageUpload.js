import { useMemo, useState } from "react";
import { createRandomId, createHeroId } from "../utils/id.helpers";

export function ImageUpload({ userId, spaceId }) {
  const [isHeroUploaded, setIsHeroUploaded] = useState(false);

  const randomId = useMemo(() => createRandomId(), []);

  function handleWidgetClick() {
    const widget = window.cloudinary.createUploadWidget(
      {
        cloudName: process.env.NEXT_PUBLIC_CLOUDINARY_CLOUD_NAME,
        uploadPreset: process.env.NEXT_PUBLIC_CLOUDINARY_UPLOAD_PRESET,
        sources: ["local", "url"],
        multiple: false,
        publicId: createHeroId(userId, spaceId, randomId),
        resourceType: "image",
      },
      (error, result) => {
        if (!error && result && result.event === "success") {
          setIsHeroUploaded(true);
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
