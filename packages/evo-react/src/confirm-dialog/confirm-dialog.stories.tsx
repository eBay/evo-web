import { useState } from "react";
import type { Meta, StoryObj } from "@storybook/react-vite";
import { EvoConfirmDialog } from "./confirm-dialog";
import { EvoConfirmDialogHeader } from "./confirm-dialog-header";
import { EvoConfirmDialogMain } from "./confirm-dialog-main";
import { EvoConfirmDialogFooter } from "./confirm-dialog-footer";
import { EvoConfirmDialogReject } from "./confirm-dialog-reject";
import { EvoConfirmDialogConfirm } from "./confirm-dialog-confirm";

const meta: Meta<typeof EvoConfirmDialog> = {
  title: "Dialogs/EvoConfirmDialog",
  component: EvoConfirmDialog,
  subcomponents: {
    EvoConfirmDialogHeader,
    EvoConfirmDialogMain,
    EvoConfirmDialogFooter,
    EvoConfirmDialogReject,
    EvoConfirmDialogConfirm,
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
type Story = StoryObj<typeof EvoConfirmDialog>;

/** The dialog presents cancel and confirm actions before a destructive change. */
export const Default: Story = {
  render: (args) => {
    const [open, setOpen] = useState(false);

    return (
      <div>
        <button className="btn btn--secondary" onClick={() => setOpen(true)}>
          Open Confirm Dialog
        </button>
        <p>Some outside content...</p>
        <EvoConfirmDialog {...args} open={open} onOpenChange={setOpen}>
          <EvoConfirmDialogHeader>Delete Address?</EvoConfirmDialogHeader>
          <EvoConfirmDialogMain>
            <p>You will permanently lose this address.</p>
          </EvoConfirmDialogMain>
          <EvoConfirmDialogFooter>
            <EvoConfirmDialogReject>Cancel</EvoConfirmDialogReject>
            <EvoConfirmDialogConfirm>Delete</EvoConfirmDialogConfirm>
          </EvoConfirmDialogFooter>
        </EvoConfirmDialog>
      </div>
    );
  },
};
