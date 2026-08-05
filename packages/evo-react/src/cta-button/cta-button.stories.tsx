import type { ComponentProps } from "react";
import type { Meta, StoryObj } from "@storybook/react-vite";
import { EvoCtaButton } from "./cta-button";

const meta: Meta<typeof EvoCtaButton> = {
  title: "buttons/evo-cta-button",
  component: EvoCtaButton,
  tags: ["autodocs"],
  parameters: {
    docs: {
      description: {
        component: `
A call-to-action link with prominent button styling and a directional icon.

## Usage

\`\`\`tsx
import { EvoCtaButton } from "@evo-web/react/cta-button";
\`\`\`
        `,
      },
    },
  },
  argTypes: {
    as: {
      control: false,
    },
    fluid: {
      control: "boolean",
    },
    truncated: {
      control: "boolean",
    },
    size: {
      control: "select",
      options: ["large"],
    },
    href: {
      control: "text",
      description: "The destination URL.",
    },
    children: {
      control: "text",
      description: "CTA button content.",
    },
  },
  args: {
    children: "Take Action Now!",
    href: "https://www.ebay.com",
  },
};

export default meta;
type Story = StoryObj<typeof EvoCtaButton>;

export const Default: Story = {};

function Link({
  to,
  children,
  ...rest
}: ComponentProps<"a"> & { to?: string }) {
  return (
    <a data-custom-link="true" {...rest} href={to}>
      {children}
    </a>
  );
}

export const WithCustomLinkComponent: Story = {
  render: (args) => (
    <EvoCtaButton
      {...args}
      as={({ href, ...rest }) => <Link {...rest} to={href} />}
    />
  ),
  parameters: {
    docs: {
      description: {
        story: `
Pass a custom component via the \`as\` prop to replace the native \`<a>\`.

\`\`\`tsx
import { Link } from "react-router";

<EvoCtaButton
  href="/home"
  as={({ href, ...rest }) => <Link {...rest} to={href} />}
>
  Take Action Now!
</EvoCtaButton>
\`\`\`
        `,
      },
    },
  },
};
