import figma from "@figma/code-connect/react";
import {
  EbayCombobox,
  EbayComboboxOption,
} from "@ebay/ui-core-react/ebay-combobox";

figma.connect(
  EbayCombobox,
  "https://www.figma.com/design/zEBdEhbonrBOGzZ0fXzWvM/eBay-Evo-Design-System?node-id=137211-228217",
  {
    imports: [
      "import { EbayCombobox, EbayComboboxOption, EbayComboboxButton } from '@ebay/ui-core-react/ebay-combobox'",
      "import '@ebay/skin/combobox'",
    ],
    props: {
      floatingLabel: figma.string("Label"),
      disabled: figma.enum("State", {
        Enabled: false,
        Hovered: false,
        Pressed: false,
        Focused: false,
        Disabled: true,
        Pending: false,
      }),
    },
    example: ({ floatingLabel, disabled }) => (
      <EbayCombobox
        floatingLabel={floatingLabel}
        fluid
        disabled={disabled}
        id="combobox-example-1"
      >
        <EbayComboboxOption value="1" text="Option 1" />
        <EbayComboboxOption value="2" text="Option 2" />
        <EbayComboboxOption value="3" text="Option 3" />
      </EbayCombobox>
    ),
  },
);
