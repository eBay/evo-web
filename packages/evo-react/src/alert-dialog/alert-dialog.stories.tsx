import { useState } from "react";
import type { Meta, StoryObj } from "@storybook/react-vite";
import { EvoAlertDialog } from "./alert-dialog";
import { EvoAlertDialogHeader } from "./alert-dialog-header";
import { EvoAlertDialogMain } from "./alert-dialog-main";
import { EvoAlertDialogFooter } from "./alert-dialog-footer";
import { EvoAlertDialogConfirm } from "./alert-dialog-confirm";

const meta: Meta<typeof EvoAlertDialog> = {
  title: "Dialogs/EvoAlertDialog",
  component: EvoAlertDialog,
  subcomponents: {
    EvoAlertDialogHeader,
    EvoAlertDialogMain,
    EvoAlertDialogFooter,
    EvoAlertDialogConfirm,
  },

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
    onCancel: {
      action: "onCancel",

      table: { category: "Events" },
    },
    onAnimationEnd: {
      action: "onAnimationEnd",

      table: { category: "Events" },
    },
  },
  args: {},
};

export default meta;
type Story = StoryObj<typeof EvoAlertDialog>;

/** The alert dialog requires acknowledgement before returning to the page. */
export const Default: Story = {
  render: (args) => {
    const [open, setOpen] = useState(false);

    return (
      <div>
        <button className="btn btn--secondary" onClick={() => setOpen(true)}>
          Review listing issue
        </button>
        <p>Draft listing: Vintage leather messenger bag</p>
        <EvoAlertDialog {...args} open={open} onOpenChange={setOpen}>
          <EvoAlertDialogHeader>
            Your listing needs attention
          </EvoAlertDialogHeader>
          <EvoAlertDialogMain>
            <p>Add a shipping service before publishing this listing.</p>
            <p>
              <a href="https://www.ebay.com/help/selling/listings/creating-listing?id=4142">
                Review listing requirements
              </a>
            </p>
          </EvoAlertDialogMain>
          <EvoAlertDialogFooter>
            <EvoAlertDialogConfirm>Got it</EvoAlertDialogConfirm>
          </EvoAlertDialogFooter>
        </EvoAlertDialog>
      </div>
    );
  },
};
