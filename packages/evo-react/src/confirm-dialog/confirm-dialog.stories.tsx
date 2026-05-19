import { useState } from "react";
import type { Meta, StoryObj } from "@storybook/react-vite";
import { EvoConfirmDialog } from "./confirm-dialog";
import { EvoConfirmDialogHeader } from "./confirm-dialog-header";
import { EvoConfirmDialogMain } from "./confirm-dialog-main";
import { EvoConfirmDialogFooter } from "./confirm-dialog-footer";
import { EvoConfirmDialogReject } from "./confirm-dialog-reject";
import { EvoConfirmDialogConfirm } from "./confirm-dialog-confirm";

const meta: Meta<typeof EvoConfirmDialog> = {
  title: "dialogs/evo-confirm-dialog",
  component: EvoConfirmDialog,
  subcomponents: {
    EvoConfirmDialogHeader,
    EvoConfirmDialogMain,
    EvoConfirmDialogFooter,
    EvoConfirmDialogReject,
    EvoConfirmDialogConfirm,
  },
  tags: ["autodocs"],
  parameters: {
    docs: {
      description: {
        component: `
A confirm dialog that prompts the user to confirm or reject an action. Renders a reject (secondary) and a confirm (primary) button. Escape key closes the dialog without invoking the reject button's click handler.

Uses a native \`<dialog>\` element with \`role="alertdialog"\` and \`closedby="closerequest"\`.

## Usage

\`\`\`tsx
import {
  EvoConfirmDialog,
  EvoConfirmDialogHeader,
  EvoConfirmDialogMain,
  EvoConfirmDialogFooter,
  EvoConfirmDialogReject,
  EvoConfirmDialogConfirm,
} from "@evo-web/react/confirm-dialog";
\`\`\`
        `,
      },
    },
  },
  argTypes: {
    open: {
      control: "boolean",
      description:
        "Controlled open state. When provided the consumer manages it via `onOpenChange`.",
    },
    defaultOpen: {
      control: "boolean",
      description:
        "Initial open state for uncontrolled usage. Ignored when `open` is provided.",
      table: { defaultValue: { summary: "false" } },
    },
    onOpenChange: {
      action: "onOpenChange",
      description:
        "Callback fired when the dialog requests to change its open state. Receives the new boolean value.",
      table: { category: "Events" },
    },
    onCancel: {
      action: "onCancel",
      description:
        "Native `cancel` event handler on the `<dialog>` element. Fired when Escape is pressed; the dialog closes via `onOpenChange` without invoking the reject button's `onClick`.",
      table: { category: "Events" },
    },
    onAnimationEnd: {
      action: "onAnimationEnd",
      description:
        "Native `animationend` event handler on the `<dialog>` element. Used internally to call `dialog.close()` after the closing animation finishes.",
      table: { category: "Events" },
    },
  },
  args: {},
};

export default meta;
type Story = StoryObj<typeof EvoConfirmDialog>;

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
