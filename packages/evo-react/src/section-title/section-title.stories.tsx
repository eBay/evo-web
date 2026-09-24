import type { Meta, StoryObj } from "@storybook/react-vite";
import { EvoInfotip } from "../infotip/infotip";
import { EvoInfotipHeading } from "../infotip/infotip-heading";
import { EvoSectionTitle } from "./section-title";
import { EvoSectionTitleCta } from "./section-title-cta";
import { EvoSectionTitleInfo } from "./section-title-info";
import { EvoSectionTitleOverflow } from "./section-title-overflow";
import { EvoSectionTitleSubtitle } from "./section-title-subtitle";
import { EvoSectionTitleTitle } from "./section-title-title";
import { EvoSectionTitleTitleContainer } from "./section-title-title-container";

const meta: Meta<typeof EvoSectionTitle> = {
  title: "Navigation & Disclosure/EvoSectionTitle",
  component: EvoSectionTitle,
  subcomponents: {
    EvoSectionTitleTitleContainer,
    EvoSectionTitleTitle,
    EvoSectionTitleSubtitle,
    EvoSectionTitleCta,
    EvoSectionTitleInfo,
    EvoSectionTitleOverflow,
  },
};

export default meta;
type Story = StoryObj<typeof EvoSectionTitle>;

/** A section heading names the item group that follows it. */
export const Default: Story = {
  render: (args) => (
    <EvoSectionTitle {...args}>
      <EvoSectionTitleTitleContainer>
        <EvoSectionTitleTitle>Recently viewed</EvoSectionTitleTitle>
      </EvoSectionTitleTitleContainer>
    </EvoSectionTitle>
  ),
};

/** Supporting text adds context without changing the heading's accessible name. */
export const WithSubtitle: Story = {
  render: (args) => (
    <EvoSectionTitle {...args}>
      <EvoSectionTitleTitleContainer>
        <EvoSectionTitleTitle as="h3">Saved searches</EvoSectionTitleTitle>
        <EvoSectionTitleSubtitle>
          New listings matching your searches
        </EvoSectionTitleSubtitle>
      </EvoSectionTitleTitleContainer>
    </EvoSectionTitle>
  ),
};

/** A descriptive action link follows the heading in reading and tab order. */
export const WithCta: Story = {
  render: (args) => (
    <EvoSectionTitle {...args}>
      <EvoSectionTitleTitleContainer>
        <EvoSectionTitleTitle>Recently viewed</EvoSectionTitleTitle>
      </EvoSectionTitleTitleContainer>
      <EvoSectionTitleCta href="/my/recently-viewed">
        See all recently viewed items
      </EvoSectionTitleCta>
    </EvoSectionTitle>
  ),
};

/** An infotip gives extra context without putting a control inside the heading. */
export const WithInfo: Story = {
  render: (args) => (
    <EvoSectionTitle {...args}>
      <EvoSectionTitleTitleContainer>
        <EvoSectionTitleTitle>Seller feedback</EvoSectionTitleTitle>
      </EvoSectionTitleTitleContainer>
      <EvoSectionTitleInfo>
        <EvoInfotip
          a11yIconText="About seller feedback"
          a11yCloseText="Dismiss seller feedback help"
        >
          <EvoInfotipHeading>About seller feedback</EvoInfotipHeading>
          <p>Feedback comes from buyers who purchased from this seller.</p>
        </EvoInfotip>
      </EvoSectionTitleInfo>
    </EvoSectionTitle>
  ),
};
