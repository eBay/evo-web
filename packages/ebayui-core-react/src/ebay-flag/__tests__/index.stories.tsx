import React from "react";
import { Meta } from "@storybook/react";
import { EbayFlag, EbayFlagIcon } from "../index";
import { icons } from "./constants";

export default {
    component: EbayFlagIcon,
    title: "graphics & icons/ebay-flag",
} as Meta;

export const AllSVGFlags = () => (
    <table>
        <tbody>
            {icons.map((icon, i) => (
                <tr key={i}>
                    <td>{icon}</td>
                    <td key={icon}>
                        <EbayFlagIcon name={icon} />
                    </td>
                </tr>
            ))}
        </tbody>
    </table>
);

export const AllFlagsSpan = () => (
    <table>
        <tbody>
            {icons.map((icon, i) => (
                <tr key={i}>
                    <td>{icon}</td>
                    <td key={icon}>
                        <EbayFlag flag={icon} style={{ height: 18, width: 24 }} />
                    </td>
                </tr>
            ))}
        </tbody>
    </table>
);
