import type { Meta, StoryObj } from "@storybook/react-vite";
import { useState } from "react";
import { EvoButton } from "../button";
import { EvoTextarea } from "./textarea";

const meta: Meta<typeof EvoTextarea> = {
  title: "Form Input/EvoTextarea",
  component: EvoTextarea,

  argTypes: {
    inputSize: {
      control: "select",
      options: ["regular", "large"],
    },
    fluid: {
      control: "boolean",
    },
    invalid: {
      control: "boolean",
    },
    floatingLabel: {
      control: "text",
    },
    floatingLabelStatic: {
      control: "boolean",
    },
    opaqueLabel: {
      control: "boolean",
    },
  },
};

export default meta;
type Story = StoryObj<typeof EvoTextarea>;

/** A standard multi-line input has an accessible name. */
export const Default: Story = {
  args: {
    "aria-label": "Example textarea",
  },
};

function ControlledExample(args: Story["args"]) {
  const [value, setValue] = useState("");

  return (
    <>
      <EvoTextarea
        {...args}
        aria-label="Controlled textarea"
        value={value}
        onChange={(event) => setValue(event.currentTarget.value)}
      />
      <pre>{value}</pre>
      <EvoButton onClick={() => setValue("")}>Clear</EvoButton>
    </>
  );
}

/** Controlled state keeps the value owned by the surrounding form. */
export const Controlled: Story = {
  render: (args) => <ControlledExample {...args} />,
};
