import { createContext, use, useMemo } from "react";
import type { ReactNode } from "react";

type FileInputContextValue = {
  inputId: string;
};

const FileInputContext = createContext<FileInputContextValue | null>(null);

export function useFileInputContext() {
  const context = use(FileInputContext);
  if (!context) {
    throw new Error(
      "EvoFileInputCTA must be used within an EvoFileInput component",
    );
  }
  return context;
}

type FileInputProviderProps = {
  inputId: string;
  children: ReactNode;
};

export function FileInputProvider({
  inputId,
  children,
}: FileInputProviderProps) {
  const value = useMemo(() => ({ inputId }), [inputId]);
  return <FileInputContext value={value}>{children}</FileInputContext>;
}
