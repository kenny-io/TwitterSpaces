import { useEffect, useState } from "react";
import * as UpChunk from "@mux/upchunk";
import useSwr from "swr";
import { useDropzone } from "react-dropzone";

const fetcher = (url) => {
  return fetch(url).then((res) => res.json());
};

export function Upload() {
  const [isUploading, setIsUploading] = useState(false);
  const [isPreparing, setIsPreparing] = useState(false);
  const [uploadId, setUploadId] = useState(null);
  const [progress, setProgress] = useState(null);
  const [errorMessage, setErrorMessage] = useState("");

  const { getRootProps, getInputProps } = useDropzone({
    onDrop: (acceptedFiles) => {
      startUpload(acceptedFiles[0]);
    },
  });

  const { data, error } = useSwr(
    () => (isPreparing ? `/api/upload/${uploadId}` : null),
    fetcher,
    { refreshInterval: 5000 }
  );

  const upload = data && data.upload;
  const asset = data && data.asset;

  useEffect(() => {
    if (upload && upload.asset_id) {
      // Router.push({
      //   pathname: `/asset/${upload.asset_id}`,
      //   scroll: false,
      // })
      console.log("done");
      console.log(upload);
    }
  }, [upload]);

  async function createUpload() {
    try {
      return fetch("/api/upload", {
        method: "POST",
      })
        .then((res) => res.json())
        .then(({ id, url }) => {
          setUploadId(id);
          return url;
        });
    } catch (e) {
      console.error("Error in createUpload", e);
      setErrorMessage("Error creating upload");
    }
  }

  function startUpload(file) {
    setIsUploading(true);
    const upload = UpChunk.createUpload({
      endpoint: createUpload,
      file,
    });

    upload.on("error", (err) => {
      setErrorMessage(err.detail);
    });

    upload.on("progress", (progress) => {
      setProgress(Math.floor(progress.detail));
    });

    upload.on("success", () => {
      setIsPreparing(true);
    });
  }

  if (error) return <p className="text-red-600">Error fetching api</p>;
  if (data && data.error) return <p className="text-red-600">{data.error}</p>;
  if (errorMessage) return <p className="text-red-600">{errorMessage}</p>;

  return (
    <div
      {...getRootProps({
        className: "pl-6 py-4 mb-6 bg-gray-200 rounded-lg cursor-pointer",
      })}
    >
      <input {...getInputProps()} />
      <div className="px-4">
        {isUploading ? (
          <>
            {upload?.asset_id ? (
              <p>Uploaded</p>
            ) : (
              <p>Uploading...{progress ? `${progress}%` : ""}</p>
            )}
          </>
        ) : (
          <p>Click or drop file here</p>
        )}
      </div>

      <input name="assetId" type="hidden" value={upload?.asset_id || ""} />
      <input name="playbackId" type="hidden" value={asset?.playback_id || ""} />
    </div>
  );
}
