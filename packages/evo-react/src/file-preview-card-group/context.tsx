import { createContext, use, useMemo } from "react";
import type { ReactNode } from "react";

type FilePreviewCardGroupContextValue = {
  remaining: number;
  showMore: () => void;
};

const FilePreviewCardGroupContext =
  createContext<FilePreviewCardGroupContextValue | null>(null);

export function useFilePreviewCardGroup() {
  const context = use(FilePreviewCardGroupContext);
  if (!context)
    throw new Error(
      "EvoFilePreviewCardGroupSeeMoreAction must be inside EvoFilePreviewCardGroup",
    );
  return context;
}

export function FilePreviewCardGroupProvider({
  children,
  remaining,
  showMore,
}: FilePreviewCardGroupContextValue & { children: ReactNode }) {
  const value = useMemo(() => ({ remaining, showMore }), [remaining, showMore]);
  return (
    <FilePreviewCardGroupContext value={value}>
      {children}
    </FilePreviewCardGroupContext>
  );
}
