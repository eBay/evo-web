import figma from "@figma/code-connect";
import {
  EbayPageNotice,
  EbayNoticeContent,
  EbayPageNoticeCTA,
  EbayPageNoticeTitle,
} from "@ebay/ui-core-react/ebay-page-notice";

figma.connect(
  EbayPageNotice,
  "https://www.figma.com/design/zEBdEhbonrBOGzZ0fXzWvM/eBay-Evo-Design-System?node-id=64873-99272",
  {
    imports: [
      "import { EbayPageNotice, EbayNoticeContent, EbayPageNoticeCTA, EbayPageNoticeTitle } from '@ebay/ui-core-react/ebay-page-notice'",
    ],
    props: {
      body: figma.string("Body"),
      // "buttonTitle": figma.string('Button title'),
      // "showTitle": figma.boolean('Show title'),
      // "showDismissButton": figma.boolean('Show dismiss button'),
      // "title": figma.string('Title'),
      // "showButton": figma.boolean('Show button'),
      // "level": figma.enum('Level', {
      //   "Page": "page",
      //   "Section": "section",
      //   "Inline": "inline"
      // }),
      type: figma.enum("Type", {
        Attention: "attention",
        Confirmation: "confirmation",
        General: "general",
        Information: "information",
      }),
    },
    example: ({ body, type }) => (
      <EbayPageNotice
        status={type}
        aria-label="Congratulations"
        a11yDismissText="Close"
      >
        <EbayNoticeContent>
          <EbayPageNoticeTitle>Your order&apos;s in!</EbayPageNoticeTitle>
          <p>{body}</p>
        </EbayNoticeContent>
        <EbayPageNoticeCTA>
          <a href="https://ebay.com">Action</a>
        </EbayPageNoticeCTA>
      </EbayPageNotice>
    ),
  },
);
