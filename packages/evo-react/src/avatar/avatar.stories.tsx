import type { Meta, StoryObj } from "@storybook/react-vite";
import { EvoAvatar } from "./avatar";
import { EvoAvatarImage } from "./avatar-image";

const meta: Meta<typeof EvoAvatar> = {
  title: "graphics & icons/evo-avatar",
  component: EvoAvatar,
  subcomponents: { EvoAvatarImage },
  tags: ["autodocs"],
  parameters: {
    docs: {
      description: {
        component: `
An avatar component that displays a user's profile picture, initials, or a signed-out placeholder icon.

## Usage

\`\`\`tsx
import { EvoAvatar, EvoAvatarImage } from "@evo-web/react/avatar";
\`\`\`
        `,
      },
    },
  },
  argTypes: {
    size: {
      control: "select",
      options: ["32", "40", "48", "56", "64", "96", "128"],
      table: { defaultValue: { summary: "48" } },
    },
    color: {
      control: "select",
      options: ["teal", "light-teal", "green", "lime", "yellow", "orange", "magenta", "pink"],
      description:
        "Background color override for the initials variant. When omitted, color is derived from the username hash.",
    },
    username: {
      control: "text",
    },
    knownAspectRatio: {
      control: "number",
    },
    a11yText: {
      type: { name: "string", required: true },
      control: "text",
    },
  },
  args: {
    a11yText: "avatar",
  },
};

export default meta;
type Story = StoryObj<typeof EvoAvatar>;

export const Default: Story = {
  args: {
    username: "Elizabeth",
    a11yText: "Signed in as Elizabeth",
  },
};

export const WithImage: Story = {
  args: {
    username: "Elizabeth",
    a11yText: "Signed in as Elizabeth",
  },
  render: (args) => (
    <EvoAvatar {...args}>
      <EvoAvatarImage src="https://ir.ebaystatic.com/cr/v/c01/skin/docs/dog_profile.png" />
    </EvoAvatar>
  ),
};

export const SignedOut: Story = {
  args: {
    a11yText: "Signed out",
  },
};

export const WithCustomBody: Story = {
  args: {
    username: "Elizabeth",
    a11yText: "Signed in as Elizabeth",
  },
  render: (args) => (
    <EvoAvatar {...args}>
      <div
        style={{
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
          height: "100%",
          width: "100%",
          color: "white",
          backgroundColor: "black",
        }}
      >
        <span>EB</span>
      </div>
    </EvoAvatar>
  ),
};

export const WithAutoPlacement: Story = {
  args: {
    a11yText: "Signed in as Doggy",
  },
  render: (args) => (
    <>
      <div>
        <EvoAvatar {...args}>
          <EvoAvatarImage src="https://ir.ebaystatic.com/cr/v/c01/skin/docs/dog_profile2.png" />
        </EvoAvatar>
      </div>
      <div>
        <EvoAvatar {...args}>
          <EvoAvatarImage src="https://ir.ebaystatic.com/cr/v/c01/skin/docs/dog_profile3.png" />
        </EvoAvatar>
      </div>
      <div>
        <EvoAvatar {...args}>
          <EvoAvatarImage src="https://ir.ebaystatic.com/cr/v/c01/skin/docs/dog_profile4.png" />
        </EvoAvatar>
      </div>
    </>
  ),
};
