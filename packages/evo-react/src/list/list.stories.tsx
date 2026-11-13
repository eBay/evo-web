import type { ComponentProps } from "react";
import type { Meta, StoryObj } from "@storybook/react-vite";
import { action } from "storybook/actions";
import { EvoIconChevronRight16 } from "../icon/icons/chevron-right-16";
import { EvoIconFile16 } from "../icon/icons/file-16";
import { EvoIconFolder16 } from "../icon/icons/folder-16";
import { EvoList } from "./list";
import { EvoListItem } from "./list-item";
import { EvoListItemButton } from "./list-item-button";
import { EvoListItemLink } from "./list-item-link";
import { EvoListItemContent } from "./list-item-content";
import { EvoListItemLeading } from "./list-item-leading";
import { EvoListItemTrailing } from "./list-item-trailing";
import { EvoListSeparator } from "./list-separator";

const meta: Meta<typeof EvoList> = {
  title: "Building Blocks/EvoList",
  component: EvoList,
  subcomponents: {
    EvoListItem,
    EvoListItemButton,
    EvoListItemLink,
    EvoListItemContent,
    EvoListItemLeading,
    EvoListItemTrailing,
    EvoListSeparator,
  },
};

export default meta;
type Story = StoryObj<typeof EvoList>;

/** A static list groups related files under one heading. */
export const Default: Story = {
  render: (args) => (
    <>
      <h2 id="listing-files">Listing files</h2>
      <EvoList {...args} a11yLabelId="listing-files">
        <EvoListItem>
          <EvoListItemLeading>
            <EvoIconFolder16 />
          </EvoListItemLeading>
          <EvoListItemContent>Product photos</EvoListItemContent>
        </EvoListItem>
        <EvoListItem>
          <EvoListItemLeading>
            <EvoIconFile16 />
          </EvoListItemLeading>
          <EvoListItemContent>Size guide.pdf</EvoListItemContent>
        </EvoListItem>
      </EvoList>
    </>
  ),
};

/** Native buttons run actions, while links navigate to another page. */
export const Interactive: Story = {
  render: (args) => (
    <EvoList {...args}>
      <EvoListItemButton
        type="button"
        onClick={action("show shipping details")}
      >
        <EvoListItemContent>Show shipping details</EvoListItemContent>
      </EvoListItemButton>
      <EvoListItemLink href="/help/returns">
        <EvoListItemContent>Read the returns guide</EvoListItemContent>
        <EvoListItemTrailing>
          <EvoIconChevronRight16 />
        </EvoListItemTrailing>
      </EvoListItemLink>
    </EvoList>
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

/** The `as` prop connects a link item to a client-side link component. */
export const CustomLink: Story = {
  render: (args) => (
    <EvoList {...args}>
      <EvoListItemLink
        href="/help/returns"
        as={({ href, ...rest }) => <Link {...rest} to={href} />}
      >
        <EvoListItemContent>Read the returns guide</EvoListItemContent>
        <EvoListItemTrailing>
          <EvoIconChevronRight16 />
        </EvoListItemTrailing>
      </EvoListItemLink>
    </EvoList>
  ),
  parameters: {
    docs: {
      description: {
        story: `
Pass a custom component via the \`as\` prop of \`EvoListItemLink\` to replace the native \`<a>\`.

\`\`\`tsx
import { Link } from "react-router";

<EvoListItemLink
  href="/help/returns"
  as={({ href, ...rest }) => <Link {...rest} to={href} />}
>
  <EvoListItemContent>Read the returns guide</EvoListItemContent>
</EvoListItemLink>
\`\`\`
        `,
      },
    },
  },
};

/** A separator divides related groups without adding an item. */
export const WithSeparator: Story = {
  render: (args) => (
    <EvoList {...args}>
      <EvoListItem>
        <EvoListItemContent>Saved searches</EvoListItemContent>
      </EvoListItem>
      <EvoListSeparator />
      <EvoListItem>
        <EvoListItemContent>Recently viewed</EvoListItemContent>
      </EvoListItem>
    </EvoList>
  ),
};
