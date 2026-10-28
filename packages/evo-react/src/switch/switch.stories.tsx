import type { Meta, StoryObj } from "@storybook/react-vite";
import type { ComponentProps } from "react";
import { useArgs } from "storybook/preview-api";
import { EvoButton } from "../button";
import { EvoSwitch } from "./switch";

type StoryArgs = ComponentProps<typeof EvoSwitch>;

const meta: Meta<typeof EvoSwitch> = {
  title: "Form Input/EvoSwitch",
  component: EvoSwitch,
  argTypes: {
    checked: { control: "boolean" },
    defaultChecked: { control: "boolean" },
    disabled: { control: "boolean" },
    onChange: { action: "onChange", table: { category: "Events" } },
  },
  args: {
    name: "saved-search-alerts",
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

/** A visible label names the switch. */
export const Default: Story = {};

/** Synchronizes the switch with externally controlled state. */
export const Controlled: Story = {
  args: {
    checked: false,
  },
  render: () => {
    const [args, updateArgs] = useArgs<StoryArgs>();
    const setChecked = (checked: boolean) => updateArgs({ checked });

    return (
      <div
        style={{
          alignItems: "flex-start",
          display: "flex",
          flexDirection: "column",
          gap: 16,
        }}
      >
        <span className="field">
          <EvoSwitch
            {...args}
            id="saved-search-alerts"
            onChange={(event) => {
              args.onChange?.(event);
              setChecked(event.target.checked);
            }}
          />
          <label
            className="field__label field__label--end"
            htmlFor="saved-search-alerts"
          >
            Email me about new listings in my saved searches
          </label>
        </span>
        <div style={{ display: "flex", flexWrap: "wrap", gap: 8 }}>
          <EvoButton type="button" onClick={() => setChecked(true)}>
            Turn on
          </EvoButton>
          <EvoButton type="button" onClick={() => setChecked(false)}>
            Turn off
          </EvoButton>
          <EvoButton type="button" onClick={() => setChecked(!args.checked)}>
            Toggle
          </EvoButton>
        </div>
      </div>
    );
  },
};
