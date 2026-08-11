/**
 * This Component is used only for finding it as a child of EbayInlineNotice, EbaySectionNotice, or EbayPageNotice
 * and pass the properties to NoticeContent
 */
import { FC } from "react";
import { NoticeContentProps } from "../../../common/notice-utils/notice-content";

type Props = Omit<NoticeContentProps, "type">;

const EbayNoticeContent: FC<Props> = () => null;

EbayNoticeContent.displayName = "EbayNoticeContent";

export default EbayNoticeContent;
