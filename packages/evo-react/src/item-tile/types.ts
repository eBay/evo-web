import type { ComponentProps, ElementType, ReactNode } from "react";
import type { NativeIconButtonProps } from "../icon-button/types";
import type { FilePreviewCardFile } from "../file-preview-card/types";

/** Available item tile arrangements. */
export type ItemTileLayout = "gallery" | "list";

export type EvoItemTileProps = Omit<
  ComponentProps<"div">,
  "title" | "children"
> & {
  /** Gallery or horizontal list arrangement. Defaults to `"gallery"`. */
  layout?: ItemTileLayout;
  /** Browser file or descriptor used by the media preview. */
  file?: FilePreviewCardFile;
  /** Destination for the preview and, by default, the title link. */
  href?: string;
  /** Announces the preview link opening a new tab when provided. */
  a11yExternalLinkText?: string;
  /** Leading status or other short label, usually `EvoItemTileSupertitle`. */
  supertitle?: ReactNode;
  /** Main listing link, usually `EvoItemTileTitle`. */
  title?: ReactNode;
  /** Supporting title text, usually `EvoItemTileSubtitle`. */
  subtitle?: ReactNode;
  /** One or more `EvoItemTileDescription` elements. */
  description?: ReactNode;
  /** File preview corner action, usually `EvoItemTileAction`. */
  action?: ReactNode;
};

export type EvoItemTileSupertitleProps = ComponentProps<"div">;
export type EvoItemTileTitleProps = ComponentProps<"a">;
export type EvoItemTileSubtitleProps = ComponentProps<"div">;
export type EvoItemTileDescriptionProps = ComponentProps<"p"> & {
  /** HTML element used for this description; defaults to `p`. */
  as?: ElementType;
};
export type EvoItemTileActionProps = NativeIconButtonProps;
