import { useFileInputContext } from "./context";
import type { EvoFileInputCTAProps } from "./types";

/**
 * Labels the native file picker action. It belongs inside `EvoFileInput`, which
 * manages its association with the `<input type="file">` automatically.
 *
 * @summary File picker action label.
 */
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
