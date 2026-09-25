import { EvoComboboxOption } from "../combobox/combobox-option";
import { useChipsComboboxContext } from "./context";
import type { EvoChipsComboboxOptionProps } from "./types";

/**
 * An `EvoComboboxOption` hidden after its text is selected as a chip. Use this
 * component inside `EvoChipsCombobox`.
 *
 * @summary Available chip choice.
 */
export function EvoChipsComboboxOption({
  text,
  ...rest
}: EvoChipsComboboxOptionProps) {
  const { selected } = useChipsComboboxContext();
  if (selected.includes(text)) return null;
  return <EvoComboboxOption {...rest} text={text} />;
}
