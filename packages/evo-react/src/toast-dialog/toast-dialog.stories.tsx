import { useState } from "react";
import type { Meta, StoryObj } from "@storybook/react-vite";
import { EvoButton } from "../button/button";
import { EvoToastDialog } from "./toast-dialog";
import { EvoToastDialogHeader } from "./toast-dialog-header";
import { EvoToastDialogTitle } from "./toast-dialog-title";
import { EvoToastDialogClose } from "./toast-dialog-close";
import { EvoToastDialogMain } from "./toast-dialog-main";
import { EvoToastDialogFooter } from "./toast-dialog-footer";

const meta: Meta<typeof EvoToastDialog> = {
  title: "Dialogs/EvoToastDialog",
  component: EvoToastDialog,
  subcomponents: {
    EvoToastDialogHeader,
    EvoToastDialogTitle,
    EvoToastDialogClose,
    EvoToastDialogMain,
    EvoToastDialogFooter,
  },
  argTypes: {
    open: { control: "boolean" },
    defaultOpen: { control: "boolean" },
    onOpenChange: {
      action: "onOpenChange",
      table: { category: "Events" },
    },
    children: { control: false },
  },
  render(args) {
    const [open, setOpen] = useState(false);
    const handleOpenChange = (nextOpen: boolean) => {
      setOpen(nextOpen);
      args.onOpenChange?.(nextOpen);
    };
    return (
      <div>
        <EvoButton onClick={() => setOpen(true)}>Save listing draft</EvoButton>
        <EvoToastDialog {...args} open={open} onOpenChange={handleOpenChange}>
          <EvoToastDialogHeader>
            <EvoToastDialogTitle>Draft saved</EvoToastDialogTitle>
            <EvoToastDialogClose a11yText="Close draft saved message" />
          </EvoToastDialogHeader>
          <EvoToastDialogMain>
            <p>Your listing draft is ready to edit later.</p>
          </EvoToastDialogMain>
          <EvoToastDialogFooter>
            <EvoButton onClick={() => handleOpenChange(false)}>
              Continue editing
            </EvoButton>
          </EvoToastDialogFooter>
        </EvoToastDialog>
      </div>
    );
  },
};

export default meta;
type Story = StoryObj<typeof EvoToastDialog>;

/** A nonmodal confirmation leaves the rest of the page available. */
export const Default: Story = {};
