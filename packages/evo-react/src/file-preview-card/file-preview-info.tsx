import { EvoIconPlay16 } from "../icon/icons/play-16";
import type { FilePreviewCardFile } from "./types";

type FilePreviewInfoProps = {
  file?: FilePreviewCardFile;
  infoText?: string;
};

export function FilePreviewInfo({ file, infoText }: FilePreviewInfoProps) {
  if (!file || file.type?.startsWith("image")) return null;
  const name = file.name;
  return (
    <div className="file-preview-card__info">
      {file.type?.startsWith("video") && (
        <EvoIconPlay16 className="file-preview-card__video-icon" />
      )}
      {infoText || name.substring(name.lastIndexOf(".") + 1).toUpperCase()}
    </div>
  );
}
