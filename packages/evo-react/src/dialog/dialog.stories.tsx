import { useState } from "react";
import type { Meta, StoryObj } from "@storybook/react-vite";
import { EvoButton } from "../button";
import { EvoDialog } from "./dialog";
import { EvoDialogBanner } from "./dialog-banner";
import { EvoDialogClose } from "./dialog-close";
import { EvoDialogFooter } from "./dialog-footer";
import { EvoDialogHeader } from "./dialog-header";
import { EvoDialogMain } from "./dialog-main";
import { EvoDialogPrevious } from "./dialog-previous";
import { EvoDialogTitle } from "./dialog-title";

const meta: Meta<typeof EvoDialog> = {
  title: "Navigation & Disclosure/EvoDialog",
  component: EvoDialog,
  subcomponents: {
    EvoDialogBanner,
    EvoDialogHeader,
    EvoDialogTitle,
    EvoDialogClose,
    EvoDialogPrevious,
    EvoDialogMain,
    EvoDialogFooter,
  },
  argTypes: {
    open: { control: "boolean" },
    defaultOpen: {
      control: "boolean",
    },
    onOpenChange: {
      action: "onOpenChange",
      table: { category: "Events" },
    },
    size: {
      control: "select",
    },
    closedby: {
      control: "select",
    },
    banner: { control: false },
    children: { control: false },
  },
  args: {
    closedby: "any",
  },
};

export default meta;
type Story = StoryObj<typeof EvoDialog>;

/** A standard dialog pairs a clear title with focused content and an action. */
export const Default: Story = {
  render: (args) => {
    const [open, setOpen] = useState(false);
    const handleOpenChange = (nextOpen: boolean) => {
      setOpen(nextOpen);
      args.onOpenChange?.(nextOpen);
    };

    return (
      <div>
        <EvoButton priority="secondary" onClick={() => setOpen(true)}>
          Review order
        </EvoButton>
        <p>Order total: $84.99</p>
        <EvoDialog {...args} open={open} onOpenChange={handleOpenChange}>
          <EvoDialogHeader>
            <EvoDialogTitle>Review your order</EvoDialogTitle>
            <EvoDialogClose a11yText="Close order review" />
          </EvoDialogHeader>
          <EvoDialogMain>
            <p>
              Confirm your shipping address and payment method before placing
              the order.
            </p>
            <p>
              <a href="https://www.ebay.com/help/buying/returns-refunds/return-item-refund?id=4041">
                Review return policy
              </a>
            </p>
          </EvoDialogMain>
          <EvoDialogFooter>
            <EvoButton
              priority="primary"
              onClick={() => handleOpenChange(false)}
            >
              Continue to checkout
            </EvoButton>
          </EvoDialogFooter>
        </EvoDialog>
      </div>
    );
  },
};

/** An image provides visual context for the dialog. */
export const Banner: Story = {
  render: (args) => {
    const [open, setOpen] = useState(false);
    const handleOpenChange = (nextOpen: boolean) => {
      setOpen(nextOpen);
      args.onOpenChange?.(nextOpen);
    };

    return (
      <div>
        <EvoButton priority="secondary" onClick={() => setOpen(true)}>
          View refurbished benefits
        </EvoButton>
        <EvoDialog
          {...args}
          open={open}
          onOpenChange={handleOpenChange}
          banner={
            <EvoDialogBanner
              src="https://ir.ebaystatic.com/cr/v/c01/skin/docs/tb-landscape-pic.jpg"
              position="top"
            />
          }
        >
          <EvoDialogHeader>
            <EvoDialogTitle>eBay Refurbished</EvoDialogTitle>
            <EvoDialogClose a11yText="Close refurbished benefits" />
          </EvoDialogHeader>
          <EvoDialogMain>
            <p>
              Shop professionally inspected products backed by the applicable
              seller guarantee.
            </p>
          </EvoDialogMain>
        </EvoDialog>
      </div>
    );
  },
};

/** A banner can also hold branded or custom visual content. */
export const CustomBanner: Story = {
  render: (args) => {
    const [open, setOpen] = useState(false);
    const handleOpenChange = (nextOpen: boolean) => {
      setOpen(nextOpen);
      args.onOpenChange?.(nextOpen);
    };

    return (
      <div>
        <style>{`
          .banner-demo {
            align-items: center;
            background: linear-gradient(90deg, #2f7ede, #17a7ce);
            color: white;
            display: flex;
            font-size: 24px;
            font-weight: bold;
            justify-content: center;
          }
        `}</style>
        <EvoButton priority="secondary" onClick={() => setOpen(true)}>
          View certified refurbished
        </EvoButton>
        <EvoDialog
          {...args}
          open={open}
          onOpenChange={handleOpenChange}
          banner={
            <EvoDialogBanner className="banner-demo">
              Certified refurbished
            </EvoDialogBanner>
          }
        >
          <EvoDialogHeader>
            <EvoDialogPrevious a11yText="Back to item photos" />
            <EvoDialogTitle>Shop with confidence</EvoDialogTitle>
            <EvoDialogClose a11yText="Close refurbished details" />
          </EvoDialogHeader>
          <EvoDialogMain>
            <p>
              Review the item’s condition, seller details, and included
              accessories.
            </p>
          </EvoDialogMain>
        </EvoDialog>
      </div>
    );
  },
};

/** A multi-step flow includes a way to return to the previous step. */
export const WithPreviousAction: Story = {
  render: (args) => {
    const [open, setOpen] = useState(false);
    const handleOpenChange = (nextOpen: boolean) => {
      setOpen(nextOpen);
      args.onOpenChange?.(nextOpen);
    };

    return (
      <div>
        <EvoButton priority="secondary" onClick={() => setOpen(true)}>
          Continue listing
        </EvoButton>
        <EvoDialog {...args} open={open} onOpenChange={handleOpenChange}>
          <EvoDialogHeader>
            <EvoDialogPrevious a11yText="Back to photos" />
            <EvoDialogTitle>Set your price</EvoDialogTitle>
            <EvoDialogClose a11yText="Close listing" />
          </EvoDialogHeader>
          <EvoDialogMain>
            <p>Choose a starting price or add a Buy It Now price.</p>
          </EvoDialogMain>
        </EvoDialog>
      </div>
    );
  },
};
