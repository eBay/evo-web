import figma from "@figma/code-connect";
import { EbayButton } from "@ebay/ui-core-react/ebay-button";
import { EbayFakeLink } from "@ebay/ui-core-react/ebay-fake-link";
import { EbayIconButton } from "@ebay/ui-core-react/ebay-icon-button";

// CTA button
figma.connect(
  EbayButton,
  "https://www.figma.com/design/zEBdEhbonrBOGzZ0fXzWvM/eBay-Evo-Design-System?node-id=65849-91206",
  {
    imports: [
      "import { EbayButton } from '@ebay/ui-core-react/ebay-button'",
      "import '@ebay/skin/tokens';",
      "import '@ebay/skin/button';",
    ],
    props: {
      leadIcon: figma.instance("Lead icon"),
      level: figma.enum("Level", {
        Primary: "primary",
        Secondary: "secondary",
        Tertiary: "tertiary",
        Borderless: "none",
      }),
      size: figma.enum("Size", {
        Small: "small",
        Large: "large",
      }),
      state: figma.enum("State", {
        Enabled: false,
        Hovered: false,
        Pressed: false,
        Focused: false,
        Disabled: true,
        Pending: false,
      }),
      title: figma.string("Title"),
      trailingIcon: figma.instance("Trailing icon"),
    },
    example: ({ leadIcon, level, size, state, title, trailingIcon }) => (
      <EbayButton
        disabled={state}
        priority={level}
        size={size}
        variant="standard"
      >
        {leadIcon}
        {title}
        {trailingIcon}
      </EbayButton>
    ),
  },
);

// CTA button with leading icon
figma.connect(
  EbayButton,
  "https://www.figma.com/design/zEBdEhbonrBOGzZ0fXzWvM/eBay-Evo-Design-System?node-id=65849-91206",
  {
    imports: [
      "import { EbayButton } from '@ebay/ui-core-react/ebay-button'",
      "import { EbayIcon } from '@ebay/ui-core-react/ebay-icon';",
      "import '@ebay/skin/tokens';",
      "import '@ebay/skin/button';",
      "import '@ebay/skin/icon';",
    ],
    variant: { "Show lead icon": true },
    props: {
      leadIcon: figma.instance("Lead icon"),
      level: figma.enum("Level", {
        Primary: "primary",
        Secondary: "secondary",
        Tertiary: "tertiary",
        Borderless: "none",
      }),
      size: figma.enum("Size", {
        Small: "small",
        Large: "large",
      }),
      state: figma.enum("State", {
        Enabled: false,
        Hovered: false,
        Pressed: false,
        Focused: false,
        Disabled: true,
        Pending: false,
      }),
      title: figma.string("Title"),
    },
    example: ({ leadIcon, level, size, state, title }) => (
      <EbayButton
        disabled={state}
        priority={level}
        size={size}
        variant="standard"
      >
        {leadIcon}
        {title}
      </EbayButton>
    ),
  },
);

// CTA button with trailing icon
figma.connect(
  EbayButton,
  "https://www.figma.com/design/zEBdEhbonrBOGzZ0fXzWvM/eBay-Evo-Design-System?node-id=65849-91206",
  {
    imports: [
      "import { EbayButton } from '@ebay/ui-core-react/ebay-button'",
      "import { EbayIcon } from '@ebay/ui-core-react/ebay-icon';",
      "import '@ebay/skin/tokens';",
      "import '@ebay/skin/button';",
      "import '@ebay/skin/icon';",
    ],
    variant: { "Show trailing icon": true },
    props: {
      level: figma.enum("Level", {
        Primary: "primary",
        Secondary: "secondary",
        Tertiary: "tertiary",
        Borderless: "none",
      }),
      size: figma.enum("Size", {
        Small: "small",
        Large: "large",
      }),
      state: figma.enum("State", {
        Enabled: false,
        Hovered: false,
        Pressed: false,
        Focused: false,
        Disabled: true,
        Pending: false,
      }),
      title: figma.string("Title"),
      trailingIcon: figma.instance("Trailing icon"),
    },
    example: ({ level, size, state, title, trailingIcon }) => (
      <EbayButton
        disabled={state}
        priority={level}
        size={size}
        variant="standard"
      >
        {title}
        {trailingIcon}
      </EbayButton>
    ),
  },
);

// Destructive button
figma.connect(
  EbayButton,
  "https://www.figma.com/design/zEBdEhbonrBOGzZ0fXzWvM/eBay-Evo-Design-System?node-id=260004-7740",
  {
    imports: [
      "import { EbayButton } from '@ebay/ui-core-react/ebay-button'",
      "import '@ebay/skin/tokens';",
      "import '@ebay/skin/button';",
    ],
    props: {
      leadIcon: figma.instance("Lead icon"),
      level: figma.enum("Level", {
        Primary: "primary",
        Secondary: "secondary",
        Tertiary: "tertiary",
        Borderless: "none",
      }),
      size: figma.enum("Size", {
        Small: "small",
        Large: "large",
      }),
      state: figma.enum("State", {
        Enabled: false,
        Hovered: false,
        Pressed: false,
        Focused: false,
        Disabled: true,
        Pending: false,
      }),
      title: figma.string("Title"),
      trailingIcon: figma.instance("Trailing icon"),
    },
    example: ({ leadIcon, level, size, state, title, trailingIcon }) => (
      <EbayButton
        disabled={state}
        priority={level}
        size={size}
        variant="destructive"
      >
        {leadIcon}
        {title}
        {trailingIcon}
      </EbayButton>
    ),
  },
);

// Destructive button with leading icon
figma.connect(
  EbayButton,
  "https://www.figma.com/design/zEBdEhbonrBOGzZ0fXzWvM/eBay-Evo-Design-System?node-id=260004-7740",
  {
    imports: [
      "import { EbayButton } from '@ebay/ui-core-react/ebay-button'",
      "import { EbayIcon } from '@ebay/ui-core-react/ebay-icon';",
      "import '@ebay/skin/tokens';",
      "import '@ebay/skin/button';",
      "import '@ebay/skin/icon';",
    ],
    variant: { "Show lead icon": true },
    props: {
      leadIcon: figma.instance("Lead icon"),
      level: figma.enum("Level", {
        Primary: "primary",
        Secondary: "secondary",
        Tertiary: "tertiary",
        Borderless: "none",
      }),
      size: figma.enum("Size", {
        Small: "small",
        Large: "large",
      }),
      state: figma.enum("State", {
        Enabled: false,
        Hovered: false,
        Pressed: false,
        Focused: false,
        Disabled: true,
        Pending: false,
      }),
      title: figma.string("Title"),
    },
    example: ({ leadIcon, level, size, state, title }) => (
      <EbayButton
        disabled={state}
        priority={level}
        size={size}
        variant="destructive"
      >
        {leadIcon}
        {title}
      </EbayButton>
    ),
  },
);

// Destructive button with trailing icon
figma.connect(
  EbayButton,
  "https://www.figma.com/design/zEBdEhbonrBOGzZ0fXzWvM/eBay-Evo-Design-System?node-id=260004-7740",
  {
    imports: [
      "import { EbayButton } from '@ebay/ui-core-react/ebay-button'",
      "import { EbayIcon } from '@ebay/ui-core-react/ebay-icon';",
      "import '@ebay/skin/tokens';",
      "import '@ebay/skin/button';",
      "import '@ebay/skin/icon';",
    ],
    variant: { "Show trailing icon": true },
    props: {
      level: figma.enum("Level", {
        Primary: "primary",
        Secondary: "secondary",
        Tertiary: "tertiary",
        Borderless: "none",
      }),
      size: figma.enum("Size", {
        Small: "small",
        Large: "large",
      }),
      state: figma.enum("State", {
        Enabled: false,
        Hovered: false,
        Pressed: false,
        Focused: false,
        Disabled: true,
        Pending: false,
      }),
      title: figma.string("Title"),
      trailingIcon: figma.instance("Trailing icon"),
    },
    example: ({ level, size, state, title, trailingIcon }) => (
      <EbayButton
        disabled={state}
        priority={level}
        size={size}
        variant="destructive"
      >
        {title}
        {trailingIcon}
      </EbayButton>
    ),
  },
);

// Link button
figma.connect(
  EbayButton,
  "https://www.figma.com/design/zEBdEhbonrBOGzZ0fXzWvM/eBay-Evo-Design-System?node-id=109500-131885",
  {
    imports: [
      "import { EbayFakeLink } from '@ebay/ui-core-react/ebay-fake-link';",
      "import '@ebay/skin/tokens';",
      "import '@ebay/skin/link';",
    ],
    props: {
      title: figma.string("Title"),
    },
    example: ({ title }) => <EbayFakeLink>{title}</EbayFakeLink>,
  },
);

// Icon only button
figma.connect(
  EbayButton,
  "https://www.figma.com/design/zEBdEhbonrBOGzZ0fXzWvM/eBay-Evo-Design-System?node-id=65935-91936",
  {
    imports: [
      "import { EbayIconButton } from '@ebay/ui-core-react/ebay-icon-button';",
      "import '@ebay/skin/icon';",
      "import '@ebay/skin/icon-button';",
    ],
    example: () => <EbayIconButton icon="settings16" aria-label="settings" />,
  },
);

//overflowHorizontal16

// Group button
// https://www.figma.com/design/zEBdEhbonrBOGzZ0fXzWvM/eBay-Evo-Design-System?node-id=142946-293070
