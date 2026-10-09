import type { Meta, StoryObj } from "@storybook/react-vite";
import {
  EvoPageNotice,
  EvoPageNoticeCTA,
  EvoPageNoticeFooter,
  EvoPageNoticeMain,
  EvoPageNoticeTitle,
} from "./index";

const meta: Meta<typeof EvoPageNotice> = {
  title: "Notices & Tips/EvoPageNotice",
  component: EvoPageNotice,
  subcomponents: {
    EvoPageNoticeMain,
    EvoPageNoticeTitle,
    EvoPageNoticeCTA,
    EvoPageNoticeFooter,
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
    status: "confirmation",
    a11yText: "Order confirmed",
  },
};

export default meta;
type Story = StoryObj<typeof EvoPageNotice>;

/** A page notice gives a status and the detail needed to understand it. */
export const Default: Story = {
  render: (args) => (
    <EvoPageNotice {...args}>
      <EvoPageNoticeMain>
        <EvoPageNoticeTitle>Your order is in</EvoPageNoticeTitle>
        <p>We will email you when the seller ships your item.</p>
      </EvoPageNoticeMain>
    </EvoPageNotice>
  ),
};

/** An action follows the message and stays outside the main region. */
export const WithCTA: Story = {
  render: (args) => (
    <EvoPageNotice {...args}>
      <EvoPageNoticeMain>
        <EvoPageNoticeTitle>Your order is in</EvoPageNoticeTitle>
        <p>Review the items and shipping address in your order details.</p>
      </EvoPageNoticeMain>
      <EvoPageNoticeCTA>
        <a href="/orders">View order details</a>
      </EvoPageNoticeCTA>
    </EvoPageNotice>
  ),
};

/** A custom footer can hold a separate action when dismissal is not needed. */
export const WithFooter: Story = {
  render: (args) => (
    <EvoPageNotice {...args}>
      <EvoPageNoticeMain>
        <EvoPageNoticeTitle>Your order is in</EvoPageNoticeTitle>
        <p>We will email you when the seller ships your item.</p>
      </EvoPageNoticeMain>
      <EvoPageNoticeFooter>
        <a href="/orders">View order details</a>
      </EvoPageNoticeFooter>
    </EvoPageNotice>
  ),
};
