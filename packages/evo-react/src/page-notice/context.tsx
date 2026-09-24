import { createContext, use, useMemo } from "react";
import type { MouseEventHandler, ReactNode } from "react";

type PageNoticeContextValue = {
  onCtaClick?: MouseEventHandler<HTMLParagraphElement>;
};

const PageNoticeContext = createContext<PageNoticeContextValue | null>(null);

export function PageNoticeProvider({
  children,
  onCtaClick,
}: {
  children: ReactNode;
  onCtaClick?: MouseEventHandler<HTMLParagraphElement>;
}) {
  const value = useMemo(() => ({ onCtaClick }), [onCtaClick]);
  return <PageNoticeContext value={value}>{children}</PageNoticeContext>;
}

export function usePageNotice() {
  return use(PageNoticeContext);
}
