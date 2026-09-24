import { createContext, use, useMemo } from "react";
import type { MouseEventHandler, ReactNode } from "react";

type SnackbarDialogContextValue = {
  close: () => void;
  onAction?: MouseEventHandler<HTMLButtonElement>;
};

const SnackbarDialogContext = createContext<SnackbarDialogContextValue | null>(
  null,
);

export function SnackbarDialogProvider({
  children,
  close,
  onAction,
}: {
  children: ReactNode;
  close: () => void;
  onAction?: MouseEventHandler<HTMLButtonElement>;
}) {
  const value = useMemo(() => ({ close, onAction }), [close, onAction]);
  return (
    <SnackbarDialogContext value={value}>{children}</SnackbarDialogContext>
  );
}

export function useSnackbarDialog() {
  const context = use(SnackbarDialogContext);
  if (!context) {
    throw new Error("EvoSnackbarDialogAction must be inside EvoSnackbarDialog");
  }
  return context;
}
