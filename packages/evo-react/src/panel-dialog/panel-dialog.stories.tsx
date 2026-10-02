import { useState } from "react";
import type { Meta, StoryObj } from "@storybook/react-vite";
import { EvoButton } from "../button";
import {
  EvoPanelDialog,
  EvoPanelDialogClose,
  EvoPanelDialogFooter,
  EvoPanelDialogHeader,
  EvoPanelDialogMain,
  EvoPanelDialogPrevious,
  EvoPanelDialogTitle,
} from "./index";

const meta: Meta<typeof EvoPanelDialog> = {
  title: "Dialogs/EvoPanelDialog",
  component: EvoPanelDialog,
  subcomponents: {
    EvoPanelDialogHeader,
    EvoPanelDialogTitle,
    EvoPanelDialogMain,
    EvoPanelDialogFooter,
    EvoPanelDialogClose,
    EvoPanelDialogPrevious,
  },
  argTypes: {
    position: { control: "select", options: ["start", "end"] },
  },
};
export default meta;
type Story = StoryObj<typeof EvoPanelDialog>;

/** Open the panel to review shipping details. */
export const Default: Story = {
  render: (args) => {
    const [open, setOpen] = useState(false);
    return (
      <>
        <EvoButton onClick={() => setOpen(true)}>
          Review shipping details
        </EvoButton>
        <EvoPanelDialog {...args} open={open} onOpenChange={setOpen}>
          <EvoPanelDialogHeader>
            <EvoPanelDialogTitle>Shipping details</EvoPanelDialogTitle>
            <EvoPanelDialogClose a11yText="Close shipping details" />
          </EvoPanelDialogHeader>
          <EvoPanelDialogMain>
            <p>Check the delivery address and available services.</p>
          </EvoPanelDialogMain>
          <EvoPanelDialogFooter>
            <EvoButton onClick={() => setOpen(false)}>Done</EvoButton>
          </EvoPanelDialogFooter>
        </EvoPanelDialog>
      </>
    );
  },
};
