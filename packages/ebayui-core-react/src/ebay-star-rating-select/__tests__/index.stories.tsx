import React from "react";
import { EbayStarRatingSelect } from "../";
import { IsolatedDefaultProps, FieldsetDefaultProps } from "./mocks";

export default {
    component: EbayStarRatingSelect,
    title: "form input/ebay-star-rating-select",
    argTypes: {
        disabled: {
            control: { type: "boolean" },
        },
        value: {
            control: { type: "number" },
            description: "1 - 5, depending on how many stars are selected. If 0 or null defaults to no stars selected",
        },
        a11yStarText: {
            control: "object",
            description: "Array object which sets the aria label for each star",
        },
        a11yText: {
            control: { type: "text" },
            description: "The aria label for the outer container. Only used on isolated case.",
        },

        onChange: {
            action: "onChange",
            description: "Triggered on change",
            table: {
                category: "Events",
                defaultValue: {
                    summary: "{ originalEvent }, value",
                },
            },
        },
        onFocus: {
            action: "onFocus",
            description: "Triggered on focus",
            table: {
                category: "Events",
                defaultValue: {
                    summary: "{ originalEvent }, value",
                },
            },
        },
        onKeyDown: {
            action: "onKeyDown",
            description: "Triggered on keydown",
            table: {
                category: "Events",
                defaultValue: {
                    summary: "{ originalEvent }, value",
                },
            },
        },
        name: {
            control: { type: "text" },
            description: "Name attribute for the rating input",
        },
    },

    tags: ["autodocs"],
    parameters: {
        docs: {
            description: {
                component: `## Usage

### Import

\`\`\`jsx harmony
import { EbayStarRatingSelect } from "@ebay/ui-core-react/ebay-star-rating-select";
\`\`\`

### Import following styles from SKIN

\`\`\`jsx harmony
import "@ebay/skin/icon";
import "@ebay/skin/star-rating-select";
\`\`\`

or import styles using SCSS/CSS

\`\`\`css
@import "@ebay/skin/icon.css";
@import "@ebay/skin/star-rating-select.css";
\`\`\`

### Basic

\`\`\`jsx
<EbayStarRatingSelect a11yText="Rate this item" />
\`\`\``,
            },
        },
    },
};

export const Isolated = {
    render: (args) => <EbayStarRatingSelect {...IsolatedDefaultProps} {...args} />,
    args: IsolatedDefaultProps,
};

export const Fieldset = {
    render: (args) => (
        <fieldset>
            <legend>Rate Product</legend>
            <EbayStarRatingSelect {...FieldsetDefaultProps} {...args} />
        </fieldset>
    ),

    args: FieldsetDefaultProps,
};
