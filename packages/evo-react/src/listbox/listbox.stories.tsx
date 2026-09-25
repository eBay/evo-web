import type { Meta, StoryObj } from "@storybook/react-vite";
import { EvoIconFlag16 } from "../icon/icons/flag-16";
import { EvoListbox } from "./listbox";

const meta: Meta<typeof EvoListbox> = {
  title: "Building Blocks/EvoListbox",
  component: EvoListbox,
  argTypes: {
    listSelection: { control: "select", options: ["manual", "auto"] },
  },
  args: {
    a11yText: "Shipping destination",
    a11ySelectedText: "selected",
    name: "destination",
    options: [
      { value: "US", text: "United States" },
      { value: "CA", text: "Canada" },
      { value: "MX", text: "Mexico" },
    ],
  },
};

export default meta;
type Story = StoryObj<typeof EvoListbox>;

/** Select a shipping destination using the pointer, arrow keys, or typeahead. */
export const Default: Story = {};

/** Each destination can include supporting information and an icon. */
export const WithDescriptions: Story = {
  args: {
    options: [
      {
        value: "US",
        text: "United States",
        icon: <EvoIconFlag16 />,
        description: "Domestic shipping",
      },
      {
        value: "CA",
        text: "Canada",
        description: "International shipping",
      },
      {
        value: "MX",
        text: "Mexico",
        description: "International shipping",
        disabled: true,
      },
    ],
  },
};
