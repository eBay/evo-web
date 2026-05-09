import { createContext, use, useMemo } from "react";
import type { ReactNode } from "react";

export type AlertDialogContextValue = {
  headerId: string;
  setHeaderId: (id: string) => void;
  mainId: string;
  onConfirmClick: () => void;
};

export const AlertDialogContext = createContext<AlertDialogContextValue>({
  headerId: "",
  setHeaderId: () => {},
  mainId: "",
  onConfirmClick: () => {},
});

export function useAlertDialogContext() {
  return use(AlertDialogContext);
}

type AlertDialogProviderProps = AlertDialogContextValue & {
  children: ReactNode;
};

export function AlertDialogProvider({
  headerId,
  setHeaderId,
  mainId,
  onConfirmClick,
  children,
}: AlertDialogProviderProps) {
  const value = useMemo(
    () => ({ headerId, setHeaderId, mainId, onConfirmClick }),
    [headerId, setHeaderId, mainId, onConfirmClick],
  );
  return <AlertDialogContext value={value}>{children}</AlertDialogContext>;
}
