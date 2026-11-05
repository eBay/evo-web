import type { ComponentProps } from "react";
import type { Meta, StoryObj } from "@storybook/react-vite";
import { EvoSectionTitle } from "./section-title";
import { EvoSectionTitleContent } from "./section-title-content";
import { EvoSectionTitleCta } from "./section-title-cta";
import { EvoSectionTitleHeading } from "./section-title-heading";
import { EvoSectionTitleOverflow } from "./section-title-overflow";
import { EvoSectionTitleSubtitle } from "./section-title-subtitle";

const meta: Meta<typeof EvoSectionTitle> = {
  title: "Navigation & Disclosure/EvoSectionTitle",
  component: EvoSectionTitle,
  subcomponents: {
    EvoSectionTitleContent,
    EvoSectionTitleHeading,
    EvoSectionTitleSubtitle,
    EvoSectionTitleCta,
    EvoSectionTitleOverflow,
  },
};

export default meta;
type Story = StoryObj<typeof EvoSectionTitle>;

/** A section heading names the item group that follows it. */
export const Default: Story = {
  render: (args) => (
    <EvoSectionTitle {...args}>
      <EvoSectionTitleContent>
        <EvoSectionTitleHeading>Recently viewed</EvoSectionTitleHeading>
      </EvoSectionTitleContent>
    </EvoSectionTitle>
  ),
};

/** Supporting text adds context without changing the heading's accessible name. */
export const WithSubtitle: Story = {
  render: (args) => (
    <EvoSectionTitle {...args}>
      <EvoSectionTitleContent>
        <EvoSectionTitleHeading as="h3">Saved searches</EvoSectionTitleHeading>
        <EvoSectionTitleSubtitle>
          New listings matching your searches
        </EvoSectionTitleSubtitle>
      </EvoSectionTitleContent>
    </EvoSectionTitle>
  ),
};

/** A descriptive action link follows the heading in reading and tab order. */
export const WithCta: Story = {
  render: (args) => (
    <EvoSectionTitle {...args}>
      <EvoSectionTitleContent>
        <EvoSectionTitleHeading>Recently viewed</EvoSectionTitleHeading>
      </EvoSectionTitleContent>
      <EvoSectionTitleCta href="/my/recently-viewed">
        See all recently viewed items
      </EvoSectionTitleCta>
    </EvoSectionTitle>
  ),
};

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

/** The `as` prop connects the section action to a client-side link component. */
export const CustomLink: Story = {
  render: (args) => (
    <EvoSectionTitle {...args}>
      <EvoSectionTitleContent>
        <EvoSectionTitleHeading>Recently viewed</EvoSectionTitleHeading>
      </EvoSectionTitleContent>
      <EvoSectionTitleCta
        href="/my/recently-viewed"
        as={({ href, ...rest }) => <Link {...rest} to={href} />}
      >
        See all recently viewed items
      </EvoSectionTitleCta>
    </EvoSectionTitle>
  ),
  parameters: {
    docs: {
      description: {
        story: `
Pass a custom component via the \`as\` prop to replace the native \`<a>\`. React Router's \`Link\` uses \`to\` instead of \`href\`.

\`\`\`tsx
import { Link } from "react-router";

<EvoSectionTitle>
  <EvoSectionTitleContent>
    <EvoSectionTitleHeading>Recently viewed</EvoSectionTitleHeading>
  </EvoSectionTitleContent>
  <EvoSectionTitleCta
    href="/my/recently-viewed"
    as={({ href, ...rest }) => <Link {...rest} to={href} />}
  >
    See all recently viewed items
  </EvoSectionTitleCta>
</EvoSectionTitle>
\`\`\`
        `,
      },
    },
  },
};
