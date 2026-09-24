import classNames from "classnames";
import { EvoMenuButton } from "../menu-button/menu-button";
import { EvoMenuButtonTrigger } from "../menu-button/menu-button-trigger";
import { EvoMenuButtonMenu } from "../menu-button/menu-button-menu";
import type { EvoFilePreviewCardMenuProps } from "./types";

/**
 * Overflow menu for a file preview. Use `EvoMenuButtonItem` children with
 * item-level `onSelect` callbacks and explicit values where selection applies.
 *
 * @summary File preview overflow actions.
 */
export function EvoFilePreviewCardMenu({
  children,
  className,
  ...rest
}: EvoFilePreviewCardMenuProps) {
  return (
    <EvoMenuButton
      {...rest}
      variant="icon"
      collapseOnSelect={rest.collapseOnSelect ?? true}
      className={classNames("file-preview-card__action", className)}
    >
      <EvoMenuButtonTrigger />
      <EvoMenuButtonMenu>{children}</EvoMenuButtonMenu>
    </EvoMenuButton>
  );
}
