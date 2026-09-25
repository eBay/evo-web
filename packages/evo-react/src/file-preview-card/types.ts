/** File metadata used when a browser `File` is unavailable or a preview URL already exists. */
export type FilePreviewCardDescriptor = {
  /** Displayed filename and image alternative text. */
  name: string;
  /** MIME type; image and video types select a media preview. */
  type?: string;
  /** Existing image or video preview URL. */
  src?: string;
};

/** Browser file or a descriptor with a ready preview URL. */
export type FilePreviewCardFile = File | FilePreviewCardDescriptor;

import type { ComponentProps, ElementType, ReactNode } from "react";
import type { NativeIconButtonProps } from "../icon-button/types";
import type { EvoMenuButtonProps } from "../menu-button/types";

/** Props for a file preview with composable action children. */
export type EvoFilePreviewCardProps = ComponentProps<"div"> & {
  /** Native element used for the outer wrapper; defaults to `div`. */
  as?: ElementType;
  /** Browser file or metadata for an existing preview URL. */
  file?: FilePreviewCardFile;
  /** Replaces the asset with a spinner while the file uploads. */
  status?: "uploading";
  /** Localized spinner label. Defaults to `"Uploading"`. */
  a11yUploadingText?: string;
  /** Wraps the asset in an anchor to this destination. */
  href?: string;
  /** Announces an external link and opens it in a new tab when supplied. */
  a11yExternalLinkText?: string;
  /** Override for the nonimage file type badge. */
  infoText?: string;
  /** Primary footer text, usually the filename. */
  footerTitle?: string;
  /** Secondary footer text, rendered only with `footerTitle`. */
  footerSubtitle?: string;
};

export type EvoFilePreviewCardActionProps = NativeIconButtonProps;
export type EvoFilePreviewCardCancelActionProps = NativeIconButtonProps;

export type EvoPreviewCardSeeMoreProps = Omit<
  ComponentProps<"button">,
  "children" | "aria-label"
> & {
  /** Number of additional files. */
  count: number;
  /** Accessible name for the overlay button. */
  a11yText: string;
};

export type EvoFilePreviewCardMenuProps = Omit<
  EvoMenuButtonProps,
  "variant" | "children"
> & {
  /** Localized accessible name for the overflow trigger. */
  a11yText: string;
  /** Command items or value-based groups. */
  children?: ReactNode;
};
