import type { SyntheticEvent } from "react";
import classNames from "classnames";
import type { EvoDetailsProps } from "./types";
import { DetailsProvider } from "./context";
import "@ebay/skin/details.mjs";

export function EvoDetails({
  size,
  alignment,
  open,
  onToggle,
  children,
  className,
  ...rest
}: EvoDetailsProps) {
  const handleToggle =
    onToggle &&
    ((event: SyntheticEvent<HTMLDetailsElement>) => {
      onToggle(event, { open: event.currentTarget.open });
    });

  return (
    <DetailsProvider size={size} alignment={alignment}>
      <details
        open={open}
        onToggle={handleToggle}
        className={classNames("details", className)}
        {...rest}
      >
        {children}
      </details>
    </DetailsProvider>
  );
}
