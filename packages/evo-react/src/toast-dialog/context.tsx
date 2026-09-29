import { createContext, use, useMemo } from "react";
import type { ReactNode } from "react";

type ToastDialogContextValue = {
  headerId: string;
  setHeaderId: (id: string) => void;
  requestClose: () => void;
};

const ToastDialogContext = createContext<ToastDialogContextValue | null>(null);

export function useToastDialog() {
  const context = use(ToastDialogContext);
  if (!context) {
    throw new Error(
      "EvoToastDialog subcomponents must be inside EvoToastDialog",
    );
  }
  return context;
}

export function ToastDialogProvider({
  headerId,
  setHeaderId,
  requestClose,
  children,
}: ToastDialogContextValue & { children: ReactNode }) {
  const value = useMemo(
    () => ({ headerId, setHeaderId, requestClose }),
    [headerId, setHeaderId, requestClose],
  );
  return <ToastDialogContext value={value}>{children}</ToastDialogContext>;
}
