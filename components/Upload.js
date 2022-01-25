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
    <>
      <div
        {...getRootProps({
          className: "p-4 border border-dashed border-gray-600",
        })}
      >
        <label>
          Click or drop file here
          <input {...getInputProps()} />
        </label>
      </div>

      <input name="assetId" type="hidden" value={upload?.asset_id || ""} />
      <input name="playbackId" type="hidden" value={asset?.playback_id || ""} />

      {isUploading ? (
        <>
          {upload?.asset_id ? (
            <div>Uploaded</div>
          ) : (
            <div>Uploading...{progress ? `${progress}%` : ""}</div>
          )}
        </>
      ) : null}
    </>
  );
}
