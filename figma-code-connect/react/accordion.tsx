import figma from "@figma/code-connect/react";
import { EbayAccordion, EbayDetails } from "@ebay/ui-core-react/ebay-accordion";

figma.connect(
  EbayAccordion,
  "https://www.figma.com/design/zEBdEhbonrBOGzZ0fXzWvM/eBay-Evo-Design-System?node-id=256381-3425",
  {
    imports: [
      "import { EbayAccordion, EbayDetails } from '@ebay/ui-core-react/ebay-accordion'",
      "import '@ebay/skin/accordion'",
      "import '@ebay/skin/details'",
    ],
    props: {
      size: figma.enum("Title size", {
        Small: "regular",
        Large: "large",
      }),
      title: figma.string("Title"),
      // content: figma.boolean("Content", {
      //   true: figma.nestedProps('Accordion content', {
      //       title: figma.string("Title")
      //   }),
      //   false: { title: "content not set" }
      // }),
      // "divider": figma.boolean('Divider?'),
      // "title": figma.string('Title'),
      // "open": figma.boolean('Open?')
    },
    example: ({ size, title }) => (
      <EbayAccordion size={size}>
        <EbayDetails text={title}>content here</EbayDetails>
      </EbayAccordion>
    ),
  },
);

figma.connect(
  EbayAccordion,
  "https://www.figma.com/design/zEBdEhbonrBOGzZ0fXzWvM/eBay-Evo-Design-System?node-id=256381-3831",
  {
    imports: ["import '@ebay/skin/accordion'", "import '@ebay/skin/details'"],
    example: () => (
      <EbayAccordion>
        <EbayDetails text="Details summary">content here</EbayDetails>
      </EbayAccordion>
    ),
  },
);
