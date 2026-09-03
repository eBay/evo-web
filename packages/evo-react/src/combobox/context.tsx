import { createContext, use, useMemo } from "react";
import type { ReactNode } from "react";
import type { ActiveDescendant } from "../utils/use-active-descendant";
import type { ComboboxAutocomplete } from "./types";

export type ComboboxContextValue = {
  activeDescendant: ActiveDescendant<string, string>;
  autocomplete: ComboboxAutocomplete;
  displayedValue: string;
  filterValue: string;
  disabled?: boolean;
  selectOption: (text: string) => void;
};

const ComboboxContext = createContext<ComboboxContextValue | undefined>(
  undefined,
);

export function useComboboxContext() {
  const context = use(ComboboxContext);
  if (!context) {
    throw new Error(
      "EvoComboboxOption must be used within an EvoCombobox component",
    );
  }
  return context;
}

type ComboboxProviderProps = ComboboxContextValue & {
  children?: ReactNode;
};

export function ComboboxProvider({
  activeDescendant,
  autocomplete,
  displayedValue,
  filterValue,
  disabled,
  selectOption,
  children,
}: ComboboxProviderProps) {
  const value = useMemo(
    () => ({
      activeDescendant,
      autocomplete,
      displayedValue,
      filterValue,
      disabled,
      selectOption,
    }),
    [
      activeDescendant,
      autocomplete,
      disabled,
      displayedValue,
      filterValue,
      selectOption,
    ],
  );

  return <ComboboxContext value={value}>{children}</ComboboxContext>;
}
