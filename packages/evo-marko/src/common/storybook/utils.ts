import type { StoryObj } from "@storybook/marko";

export function buildExtensionTemplate(
  template: Marko.Template,
  code: string,
  args: Record<string, unknown> = {},
): StoryObj {
  return {
    render: (input) => ({ component: template, input }),
    args: { ...args },
    parameters: { docs: { source: { code } } },
  };
}
