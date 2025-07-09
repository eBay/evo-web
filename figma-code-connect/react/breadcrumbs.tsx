import figma from "@figma/code-connect/react";
import {
  EbayBreadcrumbs,
  EbayBreadcrumbItem,
} from "@ebay/ui-core-react/ebay-breadcrumbs";

figma.connect(
  EbayBreadcrumbs,
  "https://www.figma.com/design/zEBdEhbonrBOGzZ0fXzWvM/eBay-Evo-Design-System?node-id=67603-81724",
  {
    imports: [
      "import { EbayBreadcrumbs, EbayBreadcrumbItem } from '@ebay/ui-core-react/ebay-breadcrumbs'",
      "import '@ebay/skin/utility';",
      "import '@ebay/skin/breadcrumbs';",
    ],
    props: {
      // "page4": figma.string('Page 4'),
      // "page2": figma.string('Page 2'),
      // "page3": figma.string('Page 3'),
      // "page1": figma.string('Page 1'),
      // "lastPage": figma.enum('Last page', {
      //   "Parent": "parent",
      //   "Current": "current"
      // }),
      // "showOverflow": figma.boolean('Show overflow')
    },
    example: (props) => (
      <EbayBreadcrumbs a11yHeadingText="Page navigation">
        <EbayBreadcrumbItem href="https://ebay.com">eBay</EbayBreadcrumbItem>
        <EbayBreadcrumbItem href="https://ebay.com/cars">
          Auto Parts and Vehicles
        </EbayBreadcrumbItem>
        <EbayBreadcrumbItem>Motors Parts and Accessories</EbayBreadcrumbItem>
      </EbayBreadcrumbs>
    ),
  },
);
