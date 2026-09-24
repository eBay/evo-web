import type { Meta, StoryObj } from "@storybook/react-vite";
import {
  EvoSectionNotice,
  EvoSectionNoticeCTA,
  EvoSectionNoticeFooter,
  EvoSectionNoticeMain,
  EvoSectionNoticeTitle,
} from "./index";

const meta: Meta<typeof EvoSectionNotice> = {
  title: "Notices & Tips/EvoSectionNotice",
  component: EvoSectionNotice,
  subcomponents: {
    EvoSectionNoticeMain,
    EvoSectionNoticeTitle,
    EvoSectionNoticeCTA,
    EvoSectionNoticeFooter,
  },
  argTypes: {
    status: {
      control: "select",
      options: ["attention", "confirmation", "information"],
    },
    icon: { control: "select", options: ["none"] },
    dismissed: { control: "boolean" },
  },
  args: {
    a11yText: "Order update",
  },
};

export default meta;
type Story = StoryObj<typeof EvoSectionNotice>;

/** An iconless section notice gives context without assigning a status. */
export const Default: Story = {
  render: (args) => (
    <EvoSectionNotice {...args}>
      <EvoSectionNoticeMain>
        Your order details are available in your purchase history.
      </EvoSectionNoticeMain>
    </EvoSectionNotice>
  ),
};

/** A status icon and action help users identify and act on a change. */
export const WithCTA: Story = {
  args: { a11yText: "Order confirmed" },
  render: (args) => (
    <EvoSectionNotice {...args} status="confirmation">
      <EvoSectionNoticeMain>
        Your order is in. Review the items and shipping address in your order
        details.
      </EvoSectionNoticeMain>
      <EvoSectionNoticeCTA>
        <a href="/orders">View order details</a>
      </EvoSectionNoticeCTA>
    </EvoSectionNotice>
  ),
};

/** A custom footer can hold a separate action when dismissal is not needed. */
export const WithFooter: Story = {
  args: { a11yText: "Order confirmed" },
  render: (args) => (
    <EvoSectionNotice {...args}>
      <EvoSectionNoticeMain>
        <EvoSectionNoticeTitle>Your order is in</EvoSectionNoticeTitle>
        We will email you when the seller ships your item.
      </EvoSectionNoticeMain>
      <EvoSectionNoticeFooter>
        <a href="/orders">View order details</a>
      </EvoSectionNoticeFooter>
    </EvoSectionNotice>
  ),
};
