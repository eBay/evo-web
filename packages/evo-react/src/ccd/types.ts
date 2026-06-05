import type { ComponentProps } from "react";

export type ChargerIcon = "included" | "not-included";
export type SecondaryType = "usbpd";

export type EvoCCDProps = Omit<ComponentProps<"div">, "aria-label"> & {
    max?: string;
    min?: string;
    chargerIcon?: ChargerIcon;
    units?: string;
    secondaryType?: SecondaryType;
    a11yText: string | null;
};
