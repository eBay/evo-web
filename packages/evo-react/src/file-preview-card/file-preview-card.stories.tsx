import type { Meta, StoryObj } from "@storybook/react-vite";
import { EvoIconClose16 } from "../icon/icons/close-16";
import { EvoIconDelete16 } from "../icon/icons/delete-16";
import { EvoIconHeart16 } from "../icon/icons/heart-16";
import {
  EvoFilePreviewCard,
  EvoFilePreviewCardAction,
  EvoFilePreviewCardCancelAction,
  EvoFilePreviewCardMenu,
  EvoPreviewCardSeeMore,
  EvoMenuButtonItem,
} from "./index";

const photo = {
  name: "listing-photo.jpg",
  type: "image/jpeg",
  src: "https://ir.ebaystatic.com/cr/v/c01/skin/docs/tb-real-square-pic.jpg",
};

const meta: Meta<typeof EvoFilePreviewCard> = {
  title: "Media/EvoFilePreviewCard",
  component: EvoFilePreviewCard,
  subcomponents: {
    EvoFilePreviewCardAction,
    EvoFilePreviewCardCancelAction,
    EvoFilePreviewCardMenu,
    EvoPreviewCardSeeMore,
  },
  argTypes: {
    status: { control: "select", options: ["uploading"] },
    as: { control: "select", options: ["div", "span"] },
  },
};
export default meta;
type Story = StoryObj<typeof EvoFilePreviewCard>;

/** Image preview with a delete action and filename footer. */
export const Image: Story = {
  render: (args) => (
    <EvoFilePreviewCard
      {...args}
      file={photo}
      footerTitle={photo.name}
      footerSubtitle="JPEG image"
    >
      <EvoFilePreviewCardAction a11yText="Delete photo">
        <EvoIconDelete16 />
      </EvoFilePreviewCardAction>
    </EvoFilePreviewCard>
  ),
};

/** Upload progress and cancellation have a distinct action slot. */
export const Uploading: Story = {
  render: (args) => (
    <EvoFilePreviewCard
      {...args}
      file={{ name: "video.mp4", type: "video/mp4" }}
      status="uploading"
      a11yUploadingText="Uploading video"
    >
      <EvoFilePreviewCardCancelAction a11yText="Cancel upload">
        <EvoIconClose16 />
      </EvoFilePreviewCardCancelAction>
    </EvoFilePreviewCard>
  ),
};

/** A video uses the same body wrapper and a play badge. */
export const Video: Story = {
  render: (args) => (
    <EvoFilePreviewCard
      {...args}
      file={{
        name: "walkthrough.mp4",
        type: "video/mp4",
        src: "https://storage.googleapis.com/gtv-videos-bucket/sample/ForBiggerMeltdowns.mp4",
      }}
    >
      <EvoFilePreviewCardAction a11yText="Favorite video">
        <EvoIconHeart16 />
      </EvoFilePreviewCardAction>
    </EvoFilePreviewCard>
  ),
};

/** An overflow menu uses EvoMenuButton's item-level callbacks. */
export const DocumentMenu: Story = {
  render: (args) => (
    <EvoFilePreviewCard
      {...args}
      file={{ name: "report.csv", type: "text/csv" }}
      footerTitle="report.csv"
    >
      <EvoFilePreviewCardMenu a11yText="More file actions">
        <EvoMenuButtonItem>Edit</EvoMenuButtonItem>
        <EvoMenuButtonItem>Download</EvoMenuButtonItem>
        <EvoMenuButtonItem>Delete</EvoMenuButtonItem>
      </EvoFilePreviewCardMenu>
    </EvoFilePreviewCard>
  ),
};

/** The overlay can show the number of additional files. */
export const SeeMore: Story = {
  render: (args) => (
    <EvoFilePreviewCard {...args} file={photo}>
      <EvoPreviewCardSeeMore count={12} a11yText="See 12 more photos" />
    </EvoFilePreviewCard>
  ),
};

/** The see-more child owns its accessible label and click action. */
export const CustomSeeMore: Story = {
  render: (args) => (
    <EvoFilePreviewCard {...args} file={photo}>
      <EvoPreviewCardSeeMore count={5} a11yText="See 5 more photos" />
    </EvoFilePreviewCard>
  ),
};

/** A preview link may announce that it opens a new tab. */
export const Linked: Story = {
  render: (args) => (
    <EvoFilePreviewCard
      {...args}
      file={photo}
      href="/photos/listing"
      a11yExternalLinkText="opens in a new tab"
    />
  ),
};
