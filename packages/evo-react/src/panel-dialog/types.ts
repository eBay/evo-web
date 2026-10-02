import type { EvoDialogProps } from "../dialog/types";
import type {
  EvoDialogCloseProps,
  EvoDialogFooterProps,
  EvoDialogHeaderProps,
  EvoDialogMainProps,
  EvoDialogPreviousProps,
  EvoDialogTitleProps,
} from "../dialog/types";

/** Side of the viewport occupied by the panel. */
export type PanelDialogPosition = "start" | "end";

export type EvoPanelDialogProps = Omit<
  EvoDialogProps,
  "banner" | "role" | "size"
> & {
  /** Places the panel at the start or end of the viewport. Defaults to `"start"`. */
  position?: PanelDialogPosition;
  /** Animates the panel when it opens or closes. Defaults to `true`. */
  animated?: boolean;
};

export type EvoPanelDialogHeaderProps = EvoDialogHeaderProps;
export type EvoPanelDialogTitleProps = EvoDialogTitleProps;
export type EvoPanelDialogMainProps = EvoDialogMainProps;
export type EvoPanelDialogFooterProps = EvoDialogFooterProps;
export type EvoPanelDialogCloseProps = EvoDialogCloseProps;
export type EvoPanelDialogPreviousProps = EvoDialogPreviousProps;
