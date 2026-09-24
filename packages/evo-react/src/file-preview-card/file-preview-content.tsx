/* eslint-disable jsx-a11y/media-has-caption -- The preview has no playback controls and is hidden from assistive technology. */
import { useEffect, useState } from "react";
import classNames from "classnames";
import { EvoIconFile24 } from "../icon/icons/file-24";
import { EvoProgressSpinner } from "../progress-spinner/progress-spinner";
import type { FilePreviewCardFile } from "./types";

type PreviewContentProps = {
  file?: FilePreviewCardFile;
  status?: "uploading";
  fade?: boolean;
  a11yUploadingText: string;
};

type ObjectUrl = { file: File; url: string };

export function FilePreviewAsset({
  file,
  status,
  fade,
  a11yUploadingText,
}: PreviewContentProps) {
  const isNativeFile = typeof File !== "undefined" && file instanceof File;
  const name = file?.name;
  const mediaType = file?.type?.startsWith("image")
    ? "image"
    : file?.type?.startsWith("video")
      ? "video"
      : undefined;
  const [objectUrl, setObjectUrl] = useState<ObjectUrl | null>(null);

  useEffect(() => {
    if (!isNativeFile || !mediaType) return;
    const url = URL.createObjectURL(file);
    setObjectUrl({ file, url });
    return () => URL.revokeObjectURL(url);
  }, [file, isNativeFile, mediaType]);

  const src = isNativeFile
    ? objectUrl?.file === file
      ? objectUrl.url
      : undefined
    : file && "src" in file
      ? file.src
      : undefined;

  const asset = (() => {
    if (status === "uploading") {
      return (
        <EvoProgressSpinner
          className="file-preview-card__asset"
          a11yText={a11yUploadingText}
          size="large"
        />
      );
    }
    if (mediaType === "image") {
      return (
        <img
          className={classNames(
            "file-preview-card__asset",
            fade && "file-preview-card__asset--fade",
          )}
          src={src}
          alt={name}
        />
      );
    }
    if (mediaType === "video") {
      return (
        <video
          className="file-preview-card__asset"
          src={src}
          aria-hidden="true"
        />
      );
    }
    return <EvoIconFile24 className="file-preview-card__asset" />;
  })();

  return asset;
}
