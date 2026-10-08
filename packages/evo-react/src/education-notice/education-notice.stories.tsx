import type { Meta, StoryObj } from "@storybook/react-vite";
import { EvoIconLightningBolt24 } from "../icon/icons/lightning-bolt-24";
import {
  EvoEducationNotice,
  EvoEducationNoticeCTA,
  EvoEducationNoticeFooter,
  EvoEducationNoticeHeader,
  EvoEducationNoticeMain,
  EvoEducationNoticeTitle,
} from "./index";

const meta: Meta<typeof EvoEducationNotice> = {
  title: "Notices & Tips/EvoEducationNotice",
  component: EvoEducationNotice,
  subcomponents: {
    EvoEducationNoticeHeader,
    EvoEducationNoticeTitle,
    EvoEducationNoticeMain,
    EvoEducationNoticeFooter,
    EvoEducationNoticeCTA,
  },
  argTypes: {
    status: {
      control: "select",
      options: ["attention", "confirmation", "information"],
    },
    variant: { control: "select", options: ["none", "prominent"] },
    iconVariant: { control: "select", options: ["none", "prominent"] },
    icon: { control: "select", options: ["none"] },
    dismissed: { control: "boolean" },
  },
  args: {
    a11yText: "Listing guidance",
    variant: "none",
    iconVariant: "none",
  },
};

export default meta;
type Story = StoryObj<typeof EvoEducationNotice>;

/** A lightbulb notice can offer a small piece of listing guidance. */
export const Default: Story = {
  render: (args) => (
    <EvoEducationNotice {...args}>
      <EvoEducationNoticeHeader>
        <EvoEducationNoticeTitle>Write a clear title</EvoEducationNoticeTitle>
      </EvoEducationNoticeHeader>
      <EvoEducationNoticeMain>
        Describe the item, its condition, and what is included.
      </EvoEducationNoticeMain>
    </EvoEducationNotice>
  ),
};

/** A footer can link to more detailed guidance. */
export const WithFooter: Story = {
  render: (args) => (
    <EvoEducationNotice {...args}>
      <EvoEducationNoticeHeader>
        <EvoEducationNoticeTitle>Write a clear title</EvoEducationNoticeTitle>
      </EvoEducationNoticeHeader>
      <EvoEducationNoticeMain>
        Describe the item, its condition, and what is included.
      </EvoEducationNoticeMain>
      <EvoEducationNoticeFooter>
        <a href="/seller-center">Read listing tips</a>
      </EvoEducationNoticeFooter>
    </EvoEducationNotice>
  ),
};

/** The CTA reports activation to the notice without changing the link. */
export const WithCTA: Story = {
  render: (args) => (
    <EvoEducationNotice {...args}>
      <EvoEducationNoticeHeader>
        <EvoEducationNoticeTitle>Write a clear title</EvoEducationNoticeTitle>
      </EvoEducationNoticeHeader>
      <EvoEducationNoticeMain>
        Describe the item, its condition, and what is included.
      </EvoEducationNoticeMain>
      <EvoEducationNoticeCTA>
        <a href="/seller-center">Read listing tips</a>
      </EvoEducationNoticeCTA>
    </EvoEducationNotice>
  ),
};

/** A supplied Evo icon replaces the default lightbulb. */
export const CustomIcon: Story = {
  render: (args) => (
    <EvoEducationNotice
      {...args}
      educationIcon={
        <EvoIconLightningBolt24
          a11yText="Listing insight"
          a11yVariant="label"
        />
      }
    >
      <EvoEducationNoticeHeader>
        <EvoEducationNoticeTitle>Improve your listing</EvoEducationNoticeTitle>
      </EvoEducationNoticeHeader>
      <EvoEducationNoticeMain>
        Add clear photos from several angles.
      </EvoEducationNoticeMain>
    </EvoEducationNotice>
  ),
};
