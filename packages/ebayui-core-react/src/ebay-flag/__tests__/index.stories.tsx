import React from "react";
import { Meta } from "@storybook/react";
import { EbayFlag } from "../index";
import { icons } from "./constants";

export default {
    component: EbayFlag,
    title: "graphics & icons/ebay-flag",
} as Meta;

export const AllFlags = () => (
    <table>
        {icons.map((icon, i) => (
            <tr key={i}>
                <td>{icon}</td>
                <td key={icon}>
                    <EbayFlag name={icon} />
                </td>
            </tr>
        ))}
    </table>
);
