import { useState } from "react";
import type { Meta, StoryObj } from "@storybook/react-vite";
import {
  EvoSnackbarDialog,
  EvoSnackbarDialogAction,
  EvoSnackbarDialogActions,
  EvoSnackbarDialogMain,
} from "./index";

const meta: Meta<typeof EvoSnackbarDialog> = {
  title: "Dialogs/EvoSnackbarDialog",
  component: EvoSnackbarDialog,
  subcomponents: {
    EvoSnackbarDialogMain,
    EvoSnackbarDialogActions,
    EvoSnackbarDialogAction,
  },
  argTypes: {
    layout: { control: "select", options: ["row", "column"] },
    animated: { control: "boolean" },
  },
  args: {
    a11yText: "Watchlist update",
  },
};

export default meta;
type Story = StoryObj<typeof EvoSnackbarDialog>;

/** A snackbar confirms a lightweight action and closes after six seconds. */
export const Default: Story = {
  render: (args) => {
    function Example() {
      const [open, setOpen] = useState(false);
      return (
        <>
          <button type="button" onClick={() => setOpen(true)}>
            Remove from watchlist
          </button>
          <EvoSnackbarDialog
            {...args}
            open={open}
            onClose={() => setOpen(false)}
          >
            <EvoSnackbarDialogMain>
              <p>Item removed from your watchlist.</p>
            </EvoSnackbarDialogMain>
          </EvoSnackbarDialog>
        </>
      );
    }
    return <Example />;
  },
};

/** The action lets users reverse a change before the snackbar closes. */
export const WithAction: Story = {
  render: (args) => {
    function Example() {
      const [open, setOpen] = useState(false);
      return (
        <>
          <button type="button" onClick={() => setOpen(true)}>
            Remove from watchlist
          </button>
          <EvoSnackbarDialog
            {...args}
            open={open}
            onClose={() => setOpen(false)}
          >
            <EvoSnackbarDialogMain>
              <p>Item removed from your watchlist.</p>
            </EvoSnackbarDialogMain>
            <EvoSnackbarDialogActions>
              <EvoSnackbarDialogAction onClick={() => setOpen(false)}>
                Undo
              </EvoSnackbarDialogAction>
            </EvoSnackbarDialogActions>
          </EvoSnackbarDialog>
        </>
      );
    }
    return <Example />;
  },
};
