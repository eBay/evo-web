import { createContext, use, useMemo } from "react";
import type { MouseEventHandler, ReactNode } from "react";

type EducationNoticeContextValue = {
  a11yText: string;
  a11yDismissText?: string;
  dismiss: MouseEventHandler<HTMLButtonElement>;
};

const EducationNoticeContext =
  createContext<EducationNoticeContextValue | null>(null);

export function EducationNoticeProvider({
  children,
  a11yText,
  a11yDismissText,
  dismiss,
}: EducationNoticeContextValue & { children: ReactNode }) {
  const value = useMemo(
    () => ({
      a11yText,
      a11yDismissText,
      dismiss,
    }),
    [a11yText, a11yDismissText, dismiss],
  );
  return (
    <EducationNoticeContext value={value}>{children}</EducationNoticeContext>
  );
}

export function useEducationNotice() {
  const context = use(EducationNoticeContext);
  if (!context) {
    throw new Error(
      "Education notice regions must be inside EvoEducationNotice",
    );
  }
  return context;
}
