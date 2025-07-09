import figma from "@figma/code-connect";
import Signal from "@ebay/ui-core-react/ebay-signal/signal";

figma.connect(
  Signal,
  "https://www.figma.com/design/zEBdEhbonrBOGzZ0fXzWvM/eBay-Evo-Design-System?node-id=10051-5",
  {
    props: {
      // "type": figma.enum('Type', {
      //   "almost gone": "almost-gone",
      //   "deal ending": "deal-ending",
      //   "great price": "great-price",
      //   "last one": "last-one",
      //   "new listing": "new-listing"
      // })
    },
    example: () => <Signal />,
  },
);
