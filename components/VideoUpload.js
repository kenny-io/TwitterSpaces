import { useMemo, useState } from "react";
import { createRandomId, createAudioId } from "../utils/id.helpers";
import { generateSignature } from "../utils/generateSignature";
export function VideoUpload({ userId, spaceId }) {
  const [isAudioUploaded, setIsAudioUploaded] = useState(false);

  const randomId = useMemo(() => createRandomId(), []);

  function handleWidgetClick() {
    const widget = window.cloudinary.createUploadWidget(
      {
        cloudName: process.env.NEXT_PUBLIC_CLOUDINARY_CLOUD_NAME,
        uploadPreset: process.env.NEXT_PUBLIC_CLOUDINARY_UPLOAD_PRESET,
        apiKey: process.env.NEXT_PUBLIC_CLOUDINARY_API_KEY,
        sources: ["local", "url"],
        uploadSignature: generateSignature,
        multiple: false,
        publicId: createAudioId(userId, spaceId, randomId),
        resourceType: "video",
      },
      (error, result) => {
        if (!error && result && result.event === "success") {
          setIsAudioUploaded(true);
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
        Upload Twitter Space audio file
      </button>

      {isAudioUploaded ? (
        <>
          <div>Successfully uploaded</div>
          <input
            type="hidden"
            name="audioId"
            value={createAudioId(userId, spaceId, randomId)}
          />
        </>
      ) : null}
    </div>
  );
}
