import { AdvancedVideo } from "@cloudinary/react";

export function AudioPlayer({ video }) {
  return <AdvancedVideo cldVid={video} controls />;
}
