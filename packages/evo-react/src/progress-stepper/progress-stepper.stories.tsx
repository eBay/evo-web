import type { Meta, StoryObj } from "@storybook/react-vite";
import {
  EvoProgressStep,
  EvoProgressStepper,
  EvoProgressStepTitle,
  EvoProgressStepContent,
} from "./index";

const meta: Meta<typeof EvoProgressStepper> = {
  title: "Progress/EvoProgressStepper",
  component: EvoProgressStepper,
  subcomponents: {
    EvoProgressStep,
    EvoProgressStepTitle,
    EvoProgressStepContent,
  },
  argTypes: {
    direction: { control: "select", options: ["row", "column"] },
    defaultState: {
      control: "select",
      options: ["active", "complete", "upcoming", "attention", "current"],
    },
    headingAs: {
      control: "select",
      options: ["h1", "h2", "h3", "h4", "h5", "h6"],
    },
    stepContentAs: {
      control: "select",
      options: ["p", "span", "div"],
    },
  },
  args: {
    a11yHeadingText: "Shipment progress",
    currentStep: 1,
    direction: "row",
    defaultState: "active",
  },
};

export default meta;
type Story = StoryObj<typeof EvoProgressStepper>;

/** The current position and status icons track an order's shipment. */
export const Default: Story = {
  render: (args) => (
    <EvoProgressStepper {...args}>
      <EvoProgressStep index={0}>
        <EvoProgressStepTitle>Ordered</EvoProgressStepTitle>
        <EvoProgressStepContent>Payment received</EvoProgressStepContent>
      </EvoProgressStep>
      <EvoProgressStep index={1}>
        <EvoProgressStepTitle>Shipped</EvoProgressStepTitle>
        <EvoProgressStepContent>
          Seller handed over the package
        </EvoProgressStepContent>
      </EvoProgressStep>
      <EvoProgressStep index={2}>
        <EvoProgressStepTitle>Delivered</EvoProgressStepTitle>
        <EvoProgressStepContent>Awaiting delivery</EvoProgressStepContent>
      </EvoProgressStep>
    </EvoProgressStepper>
  ),
};
