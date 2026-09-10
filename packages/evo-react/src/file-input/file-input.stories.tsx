import type { Meta, StoryObj } from "@storybook/react-vite";
import { EvoFileInput } from "./file-input";
import { EvoFileInputHeader } from "./file-input-header";
import { EvoFileInputDescription } from "./file-input-description";
import { EvoFileInputCTA } from "./file-input-cta";

const meta: Meta<typeof EvoFileInput> = {
  title: "Form Input/EvoFileInput",
  component: EvoFileInput,
  subcomponents: {
    EvoFileInputHeader,
    EvoFileInputDescription,
    EvoFileInputCTA,
  },

  argTypes: {
    multiple: {
      control: "boolean",
      description: "Whether multiple files can be selected.",
    },
    disabled: {
      control: "boolean",
    },
    accept: {
      control: "text",
    },
    onChange: {
      action: "change",
      table: { category: "Events" },
    },
  },
};

export default meta;
type Story = StoryObj<typeof EvoFileInput>;

/** The upload affordance combines guidance with a file-picker action. */
export const Default: Story = {
  render: (args) => (
    <EvoFileInput {...args}>
      <EvoFileInputHeader>Drag and drop files</EvoFileInputHeader>
      <EvoFileInputDescription>
        Accepted formats: JPG and PNG. Maximum size: 10 MB.
      </EvoFileInputDescription>
      <EvoFileInputCTA>Browse files</EvoFileInputCTA>
    </EvoFileInput>
  ),
};
