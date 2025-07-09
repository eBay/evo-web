import figma from "@figma/code-connect";
import { EbayIcon } from "@ebay/ui-core-react/ebay-icon";

// add 16
figma.connect(
  "https://www.figma.com/design/wUMu6fcAuDLthwAnCPJ2T6/Evo-Icon-Library?node-id=750-31813",
  {
    imports: [
      "import { EbayIcon } from '@ebay/ui-core-react/ebay-icon';",
      "import '@ebay/skin/icon';",
    ],
    example: () => <EbayIcon name="add16" />,
  },
);

// chevron down 16
figma.connect(
  "https://www.figma.com/design/wUMu6fcAuDLthwAnCPJ2T6/Evo-Icon-Library?node-id=750-33501",
  {
    example: () => <EbayIcon name="chevronDown16" />,
  },
);
