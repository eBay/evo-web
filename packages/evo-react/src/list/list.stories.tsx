import type { Meta, StoryObj } from "@storybook/react-vite";
import { action } from "storybook/actions";
import { EvoIconChevronRight16 } from "../icon/icons/chevron-right-16";
import { EvoIconFile16 } from "../icon/icons/file-16";
import { EvoIconFolder16 } from "../icon/icons/folder-16";
import { EvoList } from "./list";
import { EvoListItem } from "./list-item";
import { EvoListItemBody } from "./list-item-body";
import { EvoListItemLeading } from "./list-item-leading";
import { EvoListItemTrailing } from "./list-item-trailing";
import { EvoListSeparator } from "./list-separator";

const meta: Meta<typeof EvoList> = {
  title: "Building Blocks/EvoList",
  component: EvoList,
  subcomponents: {
    EvoListItem,
    EvoListItemBody,
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
          <EvoListItemBody>Product photos</EvoListItemBody>
        </EvoListItem>
        <EvoListItem>
          <EvoListItemLeading>
            <EvoIconFile16 />
          </EvoListItemLeading>
          <EvoListItemBody>Size guide.pdf</EvoListItemBody>
        </EvoListItem>
      </EvoList>
    </>
  ),
};

/** Native buttons run actions, while links navigate to another page. */
export const Interactive: Story = {
  render: (args) => (
    <EvoList {...args}>
      <EvoListItem as="button" onClick={action("show shipping details")}>
        <EvoListItemBody>Show shipping details</EvoListItemBody>
      </EvoListItem>
      <EvoListItem as="a" href="/help/returns">
        <EvoListItemBody>Read the returns guide</EvoListItemBody>
        <EvoListItemTrailing>
          <EvoIconChevronRight16 />
        </EvoListItemTrailing>
      </EvoListItem>
    </EvoList>
  ),
};

/** A separator divides related groups without adding an item. */
export const WithSeparator: Story = {
  render: (args) => (
    <EvoList {...args}>
      <EvoListItem>
        <EvoListItemBody>Saved searches</EvoListItemBody>
      </EvoListItem>
      <EvoListSeparator />
      <EvoListItem>
        <EvoListItemBody>Recently viewed</EvoListItemBody>
      </EvoListItem>
    </EvoList>
  ),
};
