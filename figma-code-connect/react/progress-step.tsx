import figma from "@figma/code-connect";
import EbayProgressStep from "@ebay/ui-core-react/ebay-progress-stepper/ebay-progress-step";

figma.connect(
  EbayProgressStep,
  "https://www.figma.com/design/zEBdEhbonrBOGzZ0fXzWvM/eBay-Evo-Design-System?node-id=72990-81027",
  {
    props: {
      state: figma.enum("state", {
        complete: "complete",
        blocked: "attention",
        incomplete: "upcoming",
        latest: "active",
      }),
    },
    example: (props) => <EbayProgressStep state={props.state} />,
  },
);
