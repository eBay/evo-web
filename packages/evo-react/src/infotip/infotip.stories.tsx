import type { Meta, StoryObj } from "@storybook/react-vite";
import { EvoInfotip } from "./infotip";
import { EvoInfotipHeading } from "./infotip-heading";

const meta: Meta<typeof EvoInfotip> = {
  title: "Notices & Tips/EvoInfotip",
  component: EvoInfotip,
  subcomponents: { EvoInfotipHeading },

  argTypes: {
    open: {
      control: "boolean",
    },
    defaultOpen: {
      control: "boolean",
      table: { defaultValue: { summary: "false" } },
    },
    onOpenChange: {
      action: "onOpenChange",
      table: { category: "Events" },
    },
    placement: {
      control: "select",
      options: [
        "top",
        "top-start",
        "top-end",
        "right",
        "right-start",
        "right-end",
        "bottom",
        "bottom-start",
        "bottom-end",
        "left",
        "left-start",
        "left-end",
      ],
      table: { defaultValue: { summary: "bottom" } },
    },
    offset: {
      control: "number",
      table: { defaultValue: { summary: "8" } },
    },
    flip: {
      control: "boolean",
      table: { defaultValue: { summary: "true" } },
    },
    shift: {
      control: "boolean",
      table: { defaultValue: { summary: "true" } },
    },
    disabled: {
      control: "boolean",
    },
    icon: {
      control: false,
    },
    a11yIconText: {
      control: "text",
      type: { name: "string", required: true },
      table: { defaultValue: { summary: "Help" } },
    },
    a11yCloseText: {
      control: "text",
      type: { name: "string", required: true },
      table: { defaultValue: { summary: "Dismiss infotip" } },
    },
  },
  args: {
    a11yIconText: "More pricing information",
    a11yCloseText: "Close price details",
  },
};

export default meta;
type Story = StoryObj<typeof EvoInfotip>;

/** A clickable help trigger reveals supporting information. */
export const Default: Story = {
  render: (args) => (
    <EvoInfotip {...args}>
      <EvoInfotipHeading>Price details</EvoInfotipHeading>
      <p>The total may change when shipping and taxes are calculated.</p>
    </EvoInfotip>
  ),
};

/** The overlay shifts to stay aligned with a trigger inside wrapping text. */
export const WrappedParagraph: Story = {
  render: (args) => (
    <div style={{ width: 240 }}>
      <p>
        Check how shipping costs are calculated{" "}
        <EvoInfotip
          {...args}
          a11yIconText="More shipping information"
          a11yCloseText="Close shipping costs"
          defaultOpen
          placement="bottom"
        >
          <EvoInfotipHeading>Shipping costs</EvoInfotipHeading>
          Shipping is calculated from the item location and delivery address.
        </EvoInfotip>{" "}
        before checkout.
      </p>
    </div>
  ),
  parameters: {
    docs: {
      description: {
        story:
          "Resize the canvas and confirm that the infotip remains aligned with its icon button while the surrounding paragraph wraps.",
      },
    },
  },
};
