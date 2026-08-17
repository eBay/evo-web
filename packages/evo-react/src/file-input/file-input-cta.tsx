import { useFileInputContext } from "./context";
import type { EvoFileInputCTAProps } from "./types";

export function EvoFileInputCTA({
  className,
  children,
  ...rest
}: EvoFileInputCTAProps) {
  const { inputId } = useFileInputContext();

  return (
    <label {...rest} htmlFor={inputId} className={className}>
      <span className="file-input__content-cta">{children}</span>
    </label>
  );
}
