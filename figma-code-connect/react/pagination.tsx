import figma from "@figma/code-connect";
import Pagination from "@ebay/ui-core-react/ebay-pagination/pagination";

figma.connect(
  Pagination,
  "https://www.figma.com/design/zEBdEhbonrBOGzZ0fXzWvM/eBay-Evo-Design-System?node-id=30164-31155",
  {
    props: {
      // "state": figma.enum('State', {
      //   "No overflow": "no-overflow",
      //   "← Trailing overflow": "--trailing-overflow",
      //   "←→ Leading+trailing overflow": "---leading-trailing-overflow",
      //   "→ Leading overflow": "--leading-overflow"
      // })
    },
    example: () => <Pagination />,
  },
);
