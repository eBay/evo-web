import { useState } from "react";
import type { Meta, StoryObj } from "@storybook/react-vite";
import { EvoAlertDialog } from "./alert-dialog";
import { EvoAlertDialogHeader } from "./alert-dialog-header";
import { EvoAlertDialogMain } from "./alert-dialog-main";
import { EvoAlertDialogFooter } from "./alert-dialog-footer";
import { EvoAlertDialogConfirm } from "./alert-dialog-confirm";

const LOREM =
  "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.";

const meta: Meta<typeof EvoAlertDialog> = {
  title: "dialogs/evo-alert-dialog",
  component: EvoAlertDialog,
  subcomponents: {
    EvoAlertDialogHeader,
    EvoAlertDialogMain,
    EvoAlertDialogFooter,
    EvoAlertDialogConfirm,
  },
  tags: ["autodocs"],
  parameters: {
    docs: {
      description: {
        component: `
An alert dialog that forces the user to acknowledge a message before continuing. The dialog can only be dismissed by clicking the confirm button — Escape and backdrop clicks are blocked.

Uses a native \`<dialog>\` element with \`role="alertdialog"\` and \`closedby="none"\`.

## Usage

\`\`\`tsx
import {
  EvoAlertDialog,
  EvoAlertDialogHeader,
  EvoAlertDialogMain,
  EvoAlertDialogFooter,
  EvoAlertDialogConfirm,
} from "@evo-web/react/alert-dialog";
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
        "Native `cancel` event handler on the `<dialog>` element. The default Escape-key behaviour is always prevented.",
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
type Story = StoryObj<typeof EvoAlertDialog>;

export const Default: Story = {
  render: (args) => {
    const [open, setOpen] = useState(false);

    return (
      <div>
        <button className="btn btn--secondary" onClick={() => setOpen(true)}>
          Open Alert Dialog
        </button>
        <p>Some outside content...</p>
        <EvoAlertDialog {...args} open={open} onOpenChange={setOpen}>
          <EvoAlertDialogHeader>Alert!</EvoAlertDialogHeader>
          <EvoAlertDialogMain>
            <p>{LOREM}</p>
            <p>
              <a href="http://www.ebay.com">www.ebay.com</a>
            </p>
          </EvoAlertDialogMain>
          <EvoAlertDialogFooter>
            <EvoAlertDialogConfirm>OK</EvoAlertDialogConfirm>
          </EvoAlertDialogFooter>
        </EvoAlertDialog>
      </div>
    );
  },
};
