// import { useEffect, useRef } from "react";
// import Hls from "hls.js";

// export function AudioPlayer({ src }) {
//   const audioRef = useRef(null);

//   useEffect(() => {
//     const audio = audioRef.current;
//     if (!audio) return;

//     audio.controls = true;
//     let hls;

//     if (audio.canPlayType("application/vnd.apple.mpegurl")) {
//       // This will run in safari, where HLS is supported natively
//       audio.src = src;
//     } else if (Hls.isSupported()) {
//       // This will run in all other modern browsers
//       hls = new Hls();
//       hls.loadSource(src);
//       hls.attachMedia(audio);
//     } else {
//       console.error(
//         "This is an old browser that does not support MSE https://developer.mozilla.org/en-US/docs/Web/API/Media_Source_Extensions_API"
//       );
//     }

//     return () => {
//       if (hls) {
//         hls.destroy();
//       }
//     };
//   }, [src, audioRef]);

//   return <audio ref={audioRef} />;
// }

// import { videoPlayer } from "cloudinary-video-player";
import { AdvancedVideo } from "@cloudinary/react";

export function AudioPlayer({ video }) {
  return <AdvancedVideo cldVid={video} controls />;
}
