import figma from "@figma/code-connect/react";
import { EbayBadge } from "@ebay/ui-core-react/ebay-badge";

figma.connect(
  EbayBadge,
  "https://www.figma.com/design/zEBdEhbonrBOGzZ0fXzWvM/eBay-Evo-Design-System?node-id=38612-44629",
  {
    imports: [
      "import { EbayBadge } from '@ebay/ui-core-react/ebay-badge'",
      "import '@ebay/skin/badge';",
    ],
    props: {
      number: figma.string("Number"),
    },
    example: ({ number }) => (
      <EbayBadge aria-label={`${number} unread item`} number={number}>
        1
      </EbayBadge>
    ),
  },
);
