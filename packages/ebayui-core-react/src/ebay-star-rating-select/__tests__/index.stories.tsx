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
        onKeydown: {
            action: "onKeydown",
            description: "Triggered on keydown",
            table: {
                category: "Events",
                defaultValue: {
                    summary: "{ originalEvent }, value",
                },
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
