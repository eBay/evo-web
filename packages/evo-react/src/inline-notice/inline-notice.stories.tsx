import type { Meta, StoryObj } from "@storybook/react-vite";
import { EvoInlineNotice, EvoInlineNoticeMain } from "./index";

const meta: Meta<typeof EvoInlineNotice> = {
  title: "Notices & Tips/EvoInlineNotice",
  component: EvoInlineNotice,
  subcomponents: { EvoInlineNoticeMain },
  argTypes: {
    status: {
      control: "select",
      options: ["attention", "confirmation", "information"],
    },
    hidden: { control: "boolean" },
  },
  args: {
    status: "confirmation",
    a11yText: "Confirmation",
  },
};

export default meta;
type Story = StoryObj<typeof EvoInlineNotice>;

/** An inline confirmation appears beside the content it updates. */
export const Default: Story = {
  render: (args) => (
    <EvoInlineNotice {...args}>
      <EvoInlineNoticeMain>
        Payment received. Your order is being prepared.
      </EvoInlineNoticeMain>
    </EvoInlineNotice>
  ),
};
