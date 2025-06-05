import * as React from "react";
import { EbayStarRatingSelect } from "../";

export const IsolatedDefaultProps = {
    disabled: false,
    a11yStarText: ["1 star", "2 stars", "3 stars", "4 stars", "5 stars"],
    a11yText: "Rate product",
    value: 0,
    name: "star-rating",
};
export const Isolated = (props) => <EbayStarRatingSelect {...IsolatedDefaultProps} {...props} />;

export const FieldsetDefaultProps = {
    disabled: false,
    a11yStarText: ["1 star", "2 stars", "3 stars", "4 stars", "5 stars"],
    value: "0",
    name: "star-rating",
};

export const Fieldset = (props) => (
    <fieldset>
        <legend>Rate Product</legend>
        <EbayStarRatingSelect {...FieldsetDefaultProps} {...props} />
    </fieldset>
);
