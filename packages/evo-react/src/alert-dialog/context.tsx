import { createContext, use, useMemo } from "react";
import type { ReactNode } from "react";
export type AlertDialogContextValue = {
  headerId: string;
  setHeaderId: (id: string) => void;
  mainId: string;
  setMainId: (id: string) => void;
  onConfirmClick: () => void;
};

export const AlertDialogContext = createContext<AlertDialogContextValue | null>(
  null,
);

export function useAlertDialogContext() {
  const value = use(AlertDialogContext);
  if (!value) {
    throw new Error("EvoAlertDialog must be used with the context!");
  }
  return value;
}

type AlertDialogProviderProps = AlertDialogContextValue & {
  children: ReactNode;
};

export function AlertDialogProvider({
  headerId,
  setHeaderId,
  mainId,
  setMainId,
  onConfirmClick,
  children,
}: AlertDialogProviderProps) {
  const value = useMemo(
    () => ({ headerId, setHeaderId, mainId, setMainId, onConfirmClick }),
    [headerId, setHeaderId, mainId, setMainId, onConfirmClick],
  );
  return <AlertDialogContext value={value}>{children}</AlertDialogContext>;
}
