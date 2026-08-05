import { createContext, use, useMemo } from "react";
import type { ReactNode } from "react";

export type DialogContextValue = {
  headerId: string;
  setHeaderId: (id: string) => void;
  requestClose: () => void;
};

const DialogContext = createContext<DialogContextValue | null>(null);

export function useDialogContext() {
  const value = use(DialogContext);
  if (!value) {
    throw new Error("EvoDialog sub-components must be used within EvoDialog!");
  }
  return value;
}

type DialogProviderProps = DialogContextValue & {
  children: ReactNode;
};

export function DialogProvider({
  headerId,
  setHeaderId,
  requestClose,
  children,
}: DialogProviderProps) {
  const value = useMemo(
    () => ({ headerId, setHeaderId, requestClose }),
    [headerId, setHeaderId, requestClose],
  );

  return <DialogContext value={value}>{children}</DialogContext>;
}
