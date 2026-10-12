import { useRef } from "react";
import type { Meta, StoryObj } from "@storybook/react-vite";
import { useArgs } from "storybook/preview-api";
import { EvoButton } from "../button";
import { EvoIconLightningBolt24 } from "../icon/icons/lightning-bolt-24";
import {
  EvoEducationNotice,
  EvoEducationNoticeFooter,
  EvoEducationNoticeHeader,
  EvoEducationNoticeIcon,
  EvoEducationNoticeMain,
  EvoEducationNoticeTitle,
} from "./index";
import type { EvoEducationNoticeProps } from "./index";

const meta: Meta<typeof EvoEducationNotice> = {
  title: "Notices & Tips/EvoEducationNotice",
  component: EvoEducationNotice,
  subcomponents: {
    EvoEducationNoticeHeader,
    EvoEducationNoticeIcon,
    EvoEducationNoticeTitle,
    EvoEducationNoticeMain,
    EvoEducationNoticeFooter,
  },
  argTypes: {
    a11yText: {
      control: "text",
      type: { name: "string", required: true },
      table: { defaultValue: { summary: "Education notice" } },
    },
    a11yDismissText: { control: "text" },
    variant: { control: "select", options: ["none", "prominent"] },
    dismissed: { control: false },
    onDismiss: { action: "onDismiss", table: { category: "Events" } },
  },
  args: {
    a11yText: "Listing guidance",
    variant: "none",
  },
};

export default meta;
type Story = StoryObj<typeof EvoEducationNotice>;

/** Including `EvoEducationNoticeIcon` adds the default lightbulb. */
export const Default: Story = {
  render: (args) => (
    <EvoEducationNotice {...args}>
      <EvoEducationNoticeHeader>
        <EvoEducationNoticeIcon />
        <EvoEducationNoticeTitle>Write a clear title</EvoEducationNoticeTitle>
      </EvoEducationNoticeHeader>
      <EvoEducationNoticeMain>
        Describe the item, its condition, and what is included.
      </EvoEducationNoticeMain>
    </EvoEducationNotice>
  ),
};

/** Add footer links to direct readers to more detailed guidance. */
export const WithFooter: Story = {
  render: (args) => (
    <EvoEducationNotice {...args}>
      <EvoEducationNoticeHeader>
        <EvoEducationNoticeIcon />
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

/** Pass a custom Evo icon and set its accessible label and prominence on the icon. */
export const CustomIcon: Story = {
  render: (args) => (
    <EvoEducationNotice {...args}>
      <EvoEducationNoticeHeader>
        <EvoEducationNoticeIcon
          icon={
            <EvoIconLightningBolt24
              a11yText="Listing insight"
              a11yVariant="label"
              prominent
            />
          }
        />
        <EvoEducationNoticeTitle>Improve your listing</EvoEducationNoticeTitle>
      </EvoEducationNoticeHeader>
      <EvoEducationNoticeMain>
        Add clear photos from several angles.
      </EvoEducationNoticeMain>
    </EvoEducationNotice>
  ),
};

/** Omit `EvoEducationNoticeIcon` to show the notice without an icon. */
export const Iconless: Story = {
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

/**
 * This controlled notice sets `dismissed` to true in `onDismiss` before
 * unmounting. It moves focus to the persistent button that restores it.
 */
export const Controlled: Story = {
  args: {
    a11yDismissText: "Dismiss guidance",
    dismissed: false,
  },
  argTypes: {
    dismissed: { control: "boolean" },
  },
  render: () => {
    const [args, updateArgs] = useArgs<EvoEducationNoticeProps>();
    const restoreRef = useRef<HTMLButtonElement>(null);

    return (
      <div
        style={{
          alignItems: "flex-start",
          display: "flex",
          flexDirection: "column",
          gap: 16,
        }}
      >
        <EvoEducationNotice
          {...args}
          onDismiss={(event) => {
            args.onDismiss?.(event);
            restoreRef.current?.focus();
            updateArgs({ dismissed: true });
          }}
        >
          <EvoEducationNoticeHeader>
            <EvoEducationNoticeIcon />
            <EvoEducationNoticeTitle>
              Write a clear title
            </EvoEducationNoticeTitle>
          </EvoEducationNoticeHeader>
          <EvoEducationNoticeMain>
            Describe the item, its condition, and what is included.
          </EvoEducationNoticeMain>
        </EvoEducationNotice>
        <EvoButton
          ref={restoreRef}
          type="button"
          onClick={() => updateArgs({ dismissed: false })}
        >
          Show listing guidance
        </EvoButton>
      </div>
    );
  },
};
