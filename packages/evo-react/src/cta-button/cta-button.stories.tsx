import type { ComponentProps } from "react";
import type { Meta, StoryObj } from "@storybook/react-vite";
import { EvoCtaButton } from "./cta-button";

const meta: Meta<typeof EvoCtaButton> = {
  title: "Buttons/EvoCtaButton",
  component: EvoCtaButton,

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
    },
    children: {
      control: "text",
    },
  },
  args: {
    children: "Shop refurbished tech",
    href: "/refurbished",
  },
};

export default meta;
type Story = StoryObj<typeof EvoCtaButton>;

/** A prominent link marks the destination as the primary next step. */
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

/** The `as` prop connects the CTA destination to a client-side link component. */
export const CustomLink: Story = {
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
  href="/refurbished"
  as={({ href, ...rest }) => <Link {...rest} to={href} />}
>
  Shop refurbished tech
</EvoCtaButton>
\`\`\`
        `,
      },
    },
  },
};
