import classNames from "classnames";
import { FilePreviewCardProvider } from "./context";
import { FilePreviewAsset } from "./file-preview-content";
import { FilePreviewInfo } from "./file-preview-info";
import type { EvoFilePreviewCardProps } from "./types";
import "@ebay/skin/file-preview-card.mjs";

/**
 * File preview cards show an image, video, document icon, or upload progress.
 * Place a named action, cancel action, menu, or see-more child inside the card.
 * The card shares upload state with its children through context.
 *
 * ## Usage
 *
 * ```tsx
 * import { EvoFilePreviewCard, EvoFilePreviewCardAction } from "@evo-web/react/file-preview-card";
 * import { EvoIconDelete16 } from "@evo-web/react/icons/delete-16";
 *
 * <EvoFilePreviewCard file={{ name: "photo.jpg", type: "image/jpeg", src: imageUrl }}>
 *   <EvoFilePreviewCardAction a11yText="Delete photo" onClick={onDelete}>
 *     <EvoIconDelete16 />
 *   </EvoFilePreviewCardAction>
 * </EvoFilePreviewCard>
 * ```
 *
 * @summary Preview and manage a file.
 */
export function EvoFilePreviewCard({
  a11yExternalLinkText,
  a11yUploadingText = "Uploading",
  as: Component = "div",
  children,
  className,
  file,
  footerSubtitle,
  footerTitle,
  href,
  infoText,
  ref,
  status,
  ...rest
}: EvoFilePreviewCardProps) {
  const asset = (
    <FilePreviewAsset
      file={file}
      status={status}
      a11yUploadingText={a11yUploadingText}
    />
  );
  return (
    <FilePreviewCardProvider status={status}>
      <Component
        {...rest}
        ref={ref}
        className={classNames("file-preview-card", className)}
      >
        <div className="file-preview-card__body">
          {href ? (
            <a
              href={href}
              target={a11yExternalLinkText ? "_blank" : undefined}
              rel={a11yExternalLinkText ? "noopener noreferrer" : undefined}
            >
              {asset}
              {a11yExternalLinkText && (
                <span className="clipped"> - {a11yExternalLinkText}</span>
              )}
            </a>
          ) : (
            asset
          )}
          {children}
          <FilePreviewInfo file={file} infoText={infoText} />
        </div>
        {footerTitle && (
          <div className="file-preview-card__footer">
            <span>{footerTitle}</span>
            {footerSubtitle && <span>{footerSubtitle}</span>}
          </div>
        )}
      </Component>
    </FilePreviewCardProvider>
  );
}
