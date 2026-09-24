import type { Meta, StoryObj } from "@storybook/react-vite";
import { EvoSwitch } from "./switch";

const meta: Meta<typeof EvoSwitch> = {
  title: "Form Input/EvoSwitch",
  component: EvoSwitch,
  argTypes: {
    onChange: { action: "onChange", table: { category: "Events" } },
  },
  args: {
    name: "saved-search-alerts",
    defaultChecked: false,
    disabled: false,
  },
  render: (args) => (
    <span className="field">
      <EvoSwitch {...args} id="saved-search-alerts" />
      <label
        className="field__label field__label--end"
        htmlFor="saved-search-alerts"
      >
        Email me about new listings in my saved searches
      </label>
    </span>
  ),
};

export default meta;
type Story = StoryObj<typeof EvoSwitch>;

/** Native input props control the setting, including checked and disabled states. */
export const Default: Story = {};
