import { createContext, use, useMemo } from "react";
import type { ReactNode } from "react";

export type ConfirmDialogContextValue = {
  headerId: string;
  setHeaderId: (id: string) => void;
  mainId: string;
  setMainId: (id: string) => void;
  onConfirmClick: () => void;
  onRejectClick: () => void;
};

export const ConfirmDialogContext =
  createContext<ConfirmDialogContextValue | null>(null);

export function useConfirmDialogContext() {
  const value = use(ConfirmDialogContext);
  if (!value) {
    throw new Error("EvoConfirmDialog sub-components must be used within EvoConfirmDialog!");
  }
  return value;
}

type ConfirmDialogProviderProps = ConfirmDialogContextValue & {
  children: ReactNode;
};

export function ConfirmDialogProvider({
  headerId,
  setHeaderId,
  mainId,
  setMainId,
  onConfirmClick,
  onRejectClick,
  children,
}: ConfirmDialogProviderProps) {
  const value = useMemo(
    () => ({
      headerId,
      setHeaderId,
      mainId,
      setMainId,
      onConfirmClick,
      onRejectClick,
    }),
    [headerId, setHeaderId, mainId, setMainId, onConfirmClick, onRejectClick],
  );
  return (
    <ConfirmDialogContext value={value}>{children}</ConfirmDialogContext>
  );
}
