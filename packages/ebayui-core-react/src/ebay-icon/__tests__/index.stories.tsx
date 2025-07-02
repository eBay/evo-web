import React from "react";
import { Meta } from "@storybook/react-vite";
import { EbayIcon } from "../index";
import { icons } from "./constants";

export default {
    component: EbayIcon,
    title: "graphics & icons/ebay-icon",
} as Meta;

export const AllIcons = () => (
    <table>
        {icons.map((icon, i) => (
            <tr key={i}>
                <td>{icon}</td>
                <td key={icon}>
                    <EbayIcon name={icon} />
                </td>
            </tr>
        ))}
    </table>
);

export const CustomColor = () => (
    <div>
        <style dangerouslySetInnerHTML={{ __html: `.demo3 {color: blue;}` }} />
        <p>
            default <EbayIcon name="notification16" />
        </p>
        <p>
            with className <EbayIcon name="notification16" className="demo3" />
        </p>
        <p>
            with style <EbayIcon name="notification16" style={{ color: "green" }} />
        </p>
        <p>
            with style <EbayIcon name="attentionFilled16" style={{ color: "purple" }} />
        </p>
    </div>
);

export const NonDecorative = () => (
    <div>
        <EbayIcon name="confirmation16" a11yText="Confirmation" />
        <EbayIcon name="attention16" a11yText="Attention" a11yVariant="label" />
    </div>
);
