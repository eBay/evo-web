import type { Meta, StoryObj } from "@storybook/react-vite";
import { EvoFilterInput } from "./filter-input";

const meta: Meta<typeof EvoFilterInput> = {
  title: "Form Input/EvoFilterInput",
  component: EvoFilterInput,
  argTypes: {
    size: { control: "select", options: ["small", "large"] },
  },
  args: {
    a11yControlsId: "filtered-items",
    a11yClearButtonText: "Clear filter",
    "aria-label": "Filter items",
    placeholder: "Filter items",
  },
};

export default meta;
type Story = StoryObj<typeof EvoFilterInput>;

/** A search box controls a visible list of filtered results. */
export const Default: Story = {
  render: (args) => (
    <>
      <EvoFilterInput {...args} />
      <ul id="filtered-items">
        <li>Camera</li>
        <li>Lens</li>
      </ul>
    </>
  ),
};
