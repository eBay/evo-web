import type { Meta, StoryObj } from "@storybook/react-vite";
import { useState } from "react";
import { EvoButton } from "../button";
import { EvoTextarea } from "./textarea";

const meta: Meta<typeof EvoTextarea> = {
  title: "form input/evo-textarea",
  component: EvoTextarea,
  tags: ["autodocs"],
  parameters: {
    docs: {
      description: {
        component: `
A multi-line text input with optional floating-label styling.

## Usage

\`\`\`tsx
import { EvoTextarea } from "@evo-web/react/textarea";
\`\`\`
        `,
      },
    },
  },
  argTypes: {
    inputSize: {
      control: "select",
      options: ["regular", "large"],
      description: "Textarea size.",
    },
    fluid: {
      control: "boolean",
      description: "Makes the textarea fill its container.",
    },
    invalid: {
      control: "boolean",
      description: "Indicates a field-level error.",
    },
    floatingLabel: {
      control: "text",
      description: "Text displayed as a floating label.",
    },
    floatingLabelStatic: {
      control: "boolean",
      description: "Keeps the floating label raised.",
    },
    opaqueLabel: {
      control: "boolean",
      description: "Adds an opaque background behind the floating label.",
    },
  },
};

export default meta;
type Story = StoryObj<typeof EvoTextarea>;

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

export const Controlled: Story = {
  render: (args) => <ControlledExample {...args} />,
};
