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
          Open Dialog
        </EvoButton>
        <p>Some outside content...</p>
        <EvoDialog {...args} open={open} onOpenChange={handleOpenChange}>
          <EvoDialogHeader>
            <EvoDialogTitle>Dialog Title</EvoDialogTitle>
            <EvoDialogClose a11yText="Close Dialog" />
          </EvoDialogHeader>
          <EvoDialogMain>
            <p>This is the default dialog content.</p>
            <p>
              <a href="https://www.ebay.com">www.ebay.com</a>
            </p>
          </EvoDialogMain>
          <EvoDialogFooter>
            <EvoButton
              priority="primary"
              onClick={() => handleOpenChange(false)}
            >
              Done
            </EvoButton>
          </EvoDialogFooter>
        </EvoDialog>
      </div>
    );
  },
};

/** Add an image when it provides useful visual context for the dialog. */
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
          Open Dialog With Banner
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
            <EvoDialogTitle>Dialog Title</EvoDialogTitle>
            <EvoDialogClose a11yText="Close Dialog" />
          </EvoDialogHeader>
          <EvoDialogMain>
            <p>This dialog uses an expressive banner image.</p>
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
          Open Dialog With Custom Banner
        </EvoButton>
        <EvoDialog
          {...args}
          open={open}
          onOpenChange={handleOpenChange}
          banner={
            <EvoDialogBanner className="banner-demo">
              Custom Banner
            </EvoDialogBanner>
          }
        >
          <EvoDialogHeader>
            <EvoDialogPrevious a11yText="Back" />
            <EvoDialogTitle>Dialog Title</EvoDialogTitle>
            <EvoDialogClose a11yText="Close Dialog" />
          </EvoDialogHeader>
          <EvoDialogMain>
            <p>
              This dialog uses custom content inside the banner instead of a
              background image.
            </p>
          </EvoDialogMain>
        </EvoDialog>
      </div>
    );
  },
};

/** In a multi-step flow, offer a clear way to return to the previous step. */
export const WithPrevious: Story = {
  render: (args) => {
    const [open, setOpen] = useState(false);
    const handleOpenChange = (nextOpen: boolean) => {
      setOpen(nextOpen);
      args.onOpenChange?.(nextOpen);
    };

    return (
      <div>
        <EvoButton priority="secondary" onClick={() => setOpen(true)}>
          Open Dialog With Previous Action
        </EvoButton>
        <EvoDialog {...args} open={open} onOpenChange={handleOpenChange}>
          <EvoDialogHeader>
            <EvoDialogPrevious a11yText="Back" />
            <EvoDialogTitle>Dialog Title</EvoDialogTitle>
            <EvoDialogClose a11yText="Close Dialog" />
          </EvoDialogHeader>
          <EvoDialogMain>
            <p>This dialog includes a previous navigation action.</p>
          </EvoDialogMain>
        </EvoDialog>
      </div>
    );
  },
};
