import { createContext, use, useMemo } from "react";
import type { MouseEventHandler, ReactNode } from "react";

type SectionNoticeContextValue = {
  onCtaClick?: MouseEventHandler<HTMLParagraphElement>;
};

const SectionNoticeContext = createContext<SectionNoticeContextValue | null>(
  null,
);

export function SectionNoticeProvider({
  children,
  onCtaClick,
}: {
  children: ReactNode;
  onCtaClick?: MouseEventHandler<HTMLParagraphElement>;
}) {
  const value = useMemo(() => ({ onCtaClick }), [onCtaClick]);
  return <SectionNoticeContext value={value}>{children}</SectionNoticeContext>;
}

export function useSectionNotice() {
  return use(SectionNoticeContext);
}
