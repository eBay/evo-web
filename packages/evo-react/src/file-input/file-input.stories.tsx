import type { Meta, StoryObj } from "@storybook/react-vite";
import { EvoFileInput } from "./file-input";
import { EvoFileInputHeader } from "./file-input-header";
import { EvoFileInputDescription } from "./file-input-description";
import { EvoFileInputCTA } from "./file-input-cta";

const meta: Meta<typeof EvoFileInput> = {
  title: "form input/evo-file-input",
  component: EvoFileInput,
  subcomponents: {
    EvoFileInputHeader,
    EvoFileInputDescription,
    EvoFileInputCTA,
  },
  tags: ["autodocs"],
  parameters: {
    docs: {
      description: {
        component: `
A styled \`<input type="file">\` composed with named sub-components for the header, description, and call-to-action label.

## Usage

\`\`\`tsx
import {
  EvoFileInput,
  EvoFileInputHeader,
  EvoFileInputDescription,
  EvoFileInputCTA,
} from "@evo-web/react/file-input";
\`\`\`
        `,
      },
    },
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
      description: "Comma-separated list of accepted file types.",
    },
    onChange: {
      action: "change",
      table: { category: "Events" },
    },
  },
};

export default meta;
type Story = StoryObj<typeof EvoFileInput>;

export const Default: Story = {
  render: (args) => (
    <EvoFileInput {...args}>
      <EvoFileInputHeader>Upload your files</EvoFileInputHeader>
      <EvoFileInputDescription>
        Supported formats: JPG, PNG
      </EvoFileInputDescription>
      <EvoFileInputCTA>Browse files</EvoFileInputCTA>
    </EvoFileInput>
  ),
};
