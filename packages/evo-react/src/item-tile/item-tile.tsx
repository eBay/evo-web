import classNames from "classnames";
import { EvoFilePreviewCard } from "../file-preview-card/file-preview-card";
import { ItemTileProvider } from "./context";
import type { EvoItemTileProps } from "./types";
import "@ebay/skin/item-tile.mjs";

/**
 * Item tiles pair a file preview with listing information. Supply named
 * supertitle, title, subtitle, description, and action slots to preserve the
 * Skin section order without inspecting children.
 *
 * ## Usage
 *
 * ```tsx
 * import { EvoItemTile, EvoItemTileTitle, EvoItemTileDescription } from "@evo-web/react/item-tile";
 *
 * <EvoItemTile
 *   href="/listing"
 *   file={{ name: "photo.jpg", type: "image/jpeg", src: photoUrl }}
 *   title={<EvoItemTileTitle>Listing title</EvoItemTileTitle>}
 *   description={<EvoItemTileDescription>$29.99</EvoItemTileDescription>}
 * />
 * ```
 *
 * @summary Listing preview with media and description sections.
 */
export function EvoItemTile({
  a11yExternalLinkText,
  action,
  className,
  description,
  file,
  href,
  layout = "gallery",
  ref,
  subtitle,
  supertitle,
  title,
  ...rest
}: EvoItemTileProps) {
  return (
    <ItemTileProvider href={href}>
      <div
        {...rest}
        ref={ref}
        className={classNames(
          "item-tile",
          layout === "list" && "item-tile--list-view",
          className,
        )}
      >
        {file && (
          <div className="item-tile__header">
            <EvoFilePreviewCard
              file={file}
              href={href}
              a11yExternalLinkText={a11yExternalLinkText}
            >
              {action}
            </EvoFilePreviewCard>
          </div>
        )}
        <div className="item-tile__body">
          {supertitle}
          {(title || subtitle) && (
            <div className="item-tile__section-secondary">
              {title}
              {subtitle}
            </div>
          )}
          {description && (
            <div className="item-tile__section-tertiary">{description}</div>
          )}
        </div>
      </div>
    </ItemTileProvider>
  );
}
