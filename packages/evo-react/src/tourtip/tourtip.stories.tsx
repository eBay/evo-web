import type { Meta, StoryObj } from "@storybook/react-vite";
import { EvoButton } from "../button/button";
import {
  EvoTourtip,
  EvoTourtipContent,
  EvoTourtipFooter,
  EvoTourtipHeading,
  EvoTourtipHost,
} from "./index";

const meta: Meta<typeof EvoTourtip> = {
  title: "Notices & Tips/EvoTourtip",
  component: EvoTourtip,
  subcomponents: {
    EvoTourtipHost,
    EvoTourtipContent,
    EvoTourtipHeading,
    EvoTourtipFooter,
  },
  argTypes: {
    open: { control: "boolean" },
    defaultOpen: { control: "boolean" },
    onOpenChange: { action: "onOpenChange", table: { category: "Events" } },
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
    },
    offset: { control: "number" },
    flip: { control: "boolean" },
    shift: { control: "boolean" },
    inline: { control: "boolean" },
  },
  args: {
    a11yCloseText: "Dismiss seller tools guide",
    placement: "top",
  },
};

export default meta;
type Story = StoryObj<typeof EvoTourtip>;

/** A heading names the guidance region and a button anchors it beside seller tools. */
export const Default: Story = {
  render: (args) => (
    <div style={{ padding: "10rem" }}>
      <EvoTourtip {...args}>
        <EvoTourtipHost as={EvoButton}>Seller tools</EvoTourtipHost>
        <EvoTourtipContent
          heading={<EvoTourtipHeading>Manage your listings</EvoTourtipHeading>}
        >
          <p>Find your listing tools here.</p>
        </EvoTourtipContent>
      </EvoTourtip>
    </div>
  ),
};

/** A footer can show the current step and actions in a guided sequence. */
export const WithFooter: Story = {
  render: (args) => (
    <div style={{ padding: "10rem" }}>
      <EvoTourtip {...args}>
        <EvoTourtipHost as={EvoButton}>Seller tools</EvoTourtipHost>
        <EvoTourtipContent
          heading={<EvoTourtipHeading>Manage your listings</EvoTourtipHeading>}
          footer={
            <EvoTourtipFooter index="1 of 3">
              <EvoButton priority="primary">Next</EvoButton>
            </EvoTourtipFooter>
          }
        >
          <p>Find your listing tools here.</p>
        </EvoTourtipContent>
      </EvoTourtip>
    </div>
  ),
};
