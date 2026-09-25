import type { Meta, StoryObj } from "@storybook/react-vite";
import { EvoImagePlaceholder } from "./image-placeholder";

const meta: Meta<typeof EvoImagePlaceholder> = {
  title: "Graphics & Icons/EvoImagePlaceholder",
  component: EvoImagePlaceholder,
  argTypes: {
    a11yText: {
      control: "text",
    },
    a11yVariant: {
      control: "select",
      options: ["label"],
    },
  },
  args: {
    a11yText: "Product image unavailable",
  },
};

export default meta;

type Story = StoryObj<typeof EvoImagePlaceholder>;

/** The placeholder names the missing product image for assistive technology. */
export const Default: Story = {};
