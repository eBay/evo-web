import classNames from "classnames";
import { FilePreviewAsset } from "./file-preview-content";
import { FilePreviewInfo } from "./file-preview-info";
import { EvoFilePreviewCardSeeMoreAction } from "./file-preview-card-see-more-action";
import type { EvoFilePreviewCardProps } from "./types";
import "@ebay/skin/file-preview-card.mjs";

/**
 * File preview cards show an image, video, document icon, or upload progress.
 * Use named slots for the top-corner controls. The card selects the appropriate
 * action for upload, see-more, and ordinary states without inspecting children.
 *
 * ## Usage
 *
 * ```tsx
 * import { EvoFilePreviewCard, EvoFilePreviewCardAction } from "@evo-web/react/file-preview-card";
 * import { EvoIconDelete16 } from "@evo-web/react/icons/delete-16";
 *
 * <EvoFilePreviewCard
 *   file={{ name: "photo.jpg", type: "image/jpeg", src: imageUrl }}
 *   deleteAction={
 *     <EvoFilePreviewCardAction a11yText="Delete photo" onClick={onDelete}>
 *       <EvoIconDelete16 />
 *     </EvoFilePreviewCardAction>
 *   }
 * />
 * ```
 *
 * @summary Preview and manage a file.
 */
export function EvoFilePreviewCard({
  a11yExternalLinkText,
  a11ySeeMoreText = "See more files",
  a11yUploadingText = "Uploading",
  action,
  as: Component = "div",
  cancelAction,
  children,
  className,
  deleteAction,
  file,
  footerSubtitle,
  footerTitle,
  href,
  infoText,
  menu,
  onSeeMore,
  ref,
  seeMore,
  seeMoreAction,
  status,
  ...rest
}: EvoFilePreviewCardProps) {
  const hasSeeMore = Boolean(seeMoreAction || (seeMore && seeMore > 0));
  const asset = (
    <FilePreviewAsset
      file={file}
      status={status}
      fade={hasSeeMore}
      a11yUploadingText={a11yUploadingText}
    />
  );
  return (
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
        {hasSeeMore
          ? (seeMoreAction ?? (
              <EvoFilePreviewCardSeeMoreAction
                count={seeMore as number}
                a11yText={a11ySeeMoreText}
                onClick={onSeeMore}
              />
            ))
          : status === "uploading"
            ? cancelAction
            : (menu ?? action ?? deleteAction)}
        <FilePreviewInfo file={file} infoText={infoText} />
      </div>
      {footerTitle && (
        <div className="file-preview-card__footer">
          <span>{footerTitle}</span>
          {footerSubtitle && <span>{footerSubtitle}</span>}
        </div>
      )}
      {children}
    </Component>
  );
}
