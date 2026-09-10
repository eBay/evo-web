import type { Meta, StoryObj } from "@storybook/react-vite";
import { EvoAvatar } from "./avatar";
import { EvoAvatarImage } from "./avatar-image";

const meta: Meta<typeof EvoAvatar> = {
  title: "Graphics & Icons/EvoAvatar",
  component: EvoAvatar,
  subcomponents: { EvoAvatarImage },

  argTypes: {
    size: {
      control: "select",
      options: ["32", "40", "48", "56", "64", "96", "128"],
      table: { defaultValue: { summary: "48" } },
    },
    color: {
      control: "select",
      options: [
        "teal",
        "light-teal",
        "green",
        "lime",
        "yellow",
        "orange",
        "magenta",
        "pink",
      ],
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

/** Initials identify the avatar when a profile image is unavailable. */
export const Default: Story = {
  args: {
    username: "Elizabeth",
    a11yText: "Signed in as Elizabeth",
  },
};

/** A profile image supplies the avatar's visual identity. */
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

/** The signed-out fallback represents an avatar without a signed-in identity. */
export const SignedOut: Story = {
  args: {
    a11yText: "Signed out",
  },
};

/** Custom content takes precedence over initials and an image. */
export const CustomContent: Story = {
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

/** Image dimensions determine `"fit"` or `"cover"` placement after loading. */
export const AutomaticPlacement: Story = {
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
