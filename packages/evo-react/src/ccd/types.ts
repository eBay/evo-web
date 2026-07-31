import type { ComponentProps } from "react";

export type ChargerIcon = "included" | "not-included";
export type SecondaryType = "usbpd";

export type EvoCCDProps = Omit<ComponentProps<"div">, "aria-label"> & {
    /** Maximum power range value. When both `min` and `max` are unset, the description figure is hidden. */
    max?: string;
    /** Minimum power range value. When both `min` and `max` are unset, the description figure is hidden. */
    min?: string;
    /** Shows whether a charger is included. */
    chargerIcon?: ChargerIcon;
    /** Unit label displayed beneath the power range. */
    units?: string;
    /** Displays the `"USB PD"` secondary label when set to `"usbpd"`. */
    secondaryType?: SecondaryType;
    /**
     * Accessible label for the figure. English default to be overridden is
     * `"Charger included. {min} - {max} Watts. USB PD"`. Pass `null` explicitly
     * _only_ if alternative accessibility information is present.
     */
    a11yText: string | null;
};
