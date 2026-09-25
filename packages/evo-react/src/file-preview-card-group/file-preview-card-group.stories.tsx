import type { Meta, StoryObj } from "@storybook/react-vite";
import { EvoPreviewCardSeeMore } from "../file-preview-card";
import { EvoFilePreviewCardGroup, EvoFilePreviewCardGroupItem } from "./index";

const meta: Meta<typeof EvoFilePreviewCardGroup> = {
  title: "Media/EvoFilePreviewCardGroup",
  component: EvoFilePreviewCardGroup,
  subcomponents: { EvoFilePreviewCardGroupItem },
};
export default meta;
type Story = StoryObj<typeof EvoFilePreviewCardGroup>;

const file = {
  name: "photo.jpg",
  type: "image/jpeg",
  src: "https://ir.ebaystatic.com/cr/v/c01/skin/docs/tb-real-square-pic.jpg",
};

/** Applications choose which items to render. */
export const Default: Story = {
  render: () => (
    <EvoFilePreviewCardGroup aria-label="Photos">
      <EvoFilePreviewCardGroupItem file={file} footerTitle="Photo" />
      <EvoFilePreviewCardGroupItem file={file} footerTitle="Second photo" />
    </EvoFilePreviewCardGroup>
  ),
};

/** The application owns see-more behavior and count. */
export const SeeMore: Story = {
  render: () => (
    <EvoFilePreviewCardGroup aria-label="Photos">
      <EvoFilePreviewCardGroupItem file={file} footerTitle="Photo" />
      <EvoFilePreviewCardGroupItem file={file}>
        <EvoPreviewCardSeeMore
          count={5}
          a11yText="See more photos"
          onClick={() => {}}
        />
      </EvoFilePreviewCardGroupItem>
    </EvoFilePreviewCardGroup>
  ),
};
