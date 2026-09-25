import { createContext, use, useMemo } from "react";
import type { MouseEventHandler, ReactElement, ReactNode } from "react";
import type { EducationNoticeStatus, EducationNoticeVariant } from "./types";

type EducationNoticeContextValue = {
  headerId: string;
  status?: EducationNoticeStatus;
  a11yText: string;
  a11yIconText?: string;
  a11yDismissText?: string;
  icon?: "none";
  educationIcon?: ReactElement;
  iconVariant: EducationNoticeVariant;
  dismiss: MouseEventHandler<HTMLButtonElement>;
  onCtaClick?: MouseEventHandler<HTMLParagraphElement>;
};

const EducationNoticeContext =
  createContext<EducationNoticeContextValue | null>(null);

export function EducationNoticeProvider({
  children,
  headerId,
  status,
  a11yText,
  a11yIconText,
  a11yDismissText,
  icon,
  educationIcon,
  iconVariant,
  dismiss,
  onCtaClick,
}: EducationNoticeContextValue & { children: ReactNode }) {
  const value = useMemo(
    () => ({
      headerId,
      status,
      a11yText,
      a11yIconText,
      a11yDismissText,
      icon,
      educationIcon,
      iconVariant,
      dismiss,
      onCtaClick,
    }),
    [
      headerId,
      status,
      a11yText,
      a11yIconText,
      a11yDismissText,
      icon,
      educationIcon,
      iconVariant,
      dismiss,
      onCtaClick,
    ],
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
