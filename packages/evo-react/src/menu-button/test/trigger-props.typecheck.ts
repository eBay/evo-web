import type {
  EvoMenuButtonProps,
  EvoMenuButtonTriggerProps,
  EvoMenuProps,
} from "../index";

export const defaultRoot = {} satisfies EvoMenuButtonProps;
export const buttonRoot = { variant: "button" } satisfies EvoMenuButtonProps;
export const formRoot = { variant: "form" } satisfies EvoMenuButtonProps;
export const iconRoot = { variant: "icon" } satisfies EvoMenuButtonProps;
export const filterRoot = { variant: "filter" } satisfies EvoMenuButtonProps;
export const disabledRoot = {
  variant: "filter",
  disabled: true,
} satisfies EvoMenuButtonProps;

export const buttonTriggerProps = {
  children: "Actions",
  priority: "secondary",
} satisfies EvoMenuButtonTriggerProps;

export const formTriggerProps = {
  borderless: true,
  noToggleIcon: true,
} satisfies EvoMenuButtonTriggerProps;

export const iconTriggerProps = {
  a11yText: "More actions",
  size: "small",
} satisfies EvoMenuButtonTriggerProps;

export const iconTriggerWithNullA11yText = {
  a11yText: null,
  title: "More listing actions",
} satisfies EvoMenuButtonTriggerProps;

export const filterTriggerProps = {
  hasSelection: true,
  a11ySelectedText: "Filter Applied",
  onClick: (event) => {
    const trigger: HTMLButtonElement = event.currentTarget;
    void trigger;
  },
} satisfies EvoMenuButtonTriggerProps;

export const triggerVariantConflict: EvoMenuButtonTriggerProps = {
  // @ts-expect-error trigger presentation is configured by the root
  variant: "icon",
};

// @ts-expect-error popup presentation is derived from the root variant
export const popupVariantConflict: EvoMenuProps = { variant: "filter" };

export const triggerHrefConflict: EvoMenuButtonTriggerProps = {
  // @ts-expect-error menu-button triggers cannot use anchor mode
  href: "/orders",
};

// @ts-expect-error menu-button triggers cannot use a custom anchor
export const triggerAsConflict: EvoMenuButtonTriggerProps = { as: "a" };

// @ts-expect-error popup state is owned by EvoMenuButton
export const triggerOpenConflict: EvoMenuButtonTriggerProps = { open: true };

export const triggerDefaultOpenConflict: EvoMenuButtonTriggerProps = {
  // @ts-expect-error popup state is owned by EvoMenuButton
  defaultOpen: true,
};

export const triggerDisabledConflict: EvoMenuButtonTriggerProps = {
  // @ts-expect-error disabled is owned by EvoMenuButton
  disabled: true,
};
