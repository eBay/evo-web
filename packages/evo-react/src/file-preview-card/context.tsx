import { createContext, use, useMemo } from "react";
import type { ReactNode } from "react";

type FilePreviewCardContextValue = {
  status?: "uploading";
};

const FilePreviewCardContext =
  createContext<FilePreviewCardContextValue | null>(null);

export function FilePreviewCardProvider({
  status,
  children,
}: FilePreviewCardContextValue & { children: ReactNode }) {
  const value = useMemo(() => ({ status }), [status]);
  return (
    <FilePreviewCardContext value={value}>{children}</FilePreviewCardContext>
  );
}

export function useFilePreviewCardContext() {
  const context = use(FilePreviewCardContext);
  if (!context) {
    throw new Error(
      "File preview card actions must be inside EvoFilePreviewCard",
    );
  }
  return context;
}
