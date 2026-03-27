import React from "react";
import { EbayStarRating } from "../";

export default {
    component: EbayStarRating,
    title: "graphics & icons/ebay-star-rating",
    argTypes: {
        value: {
            control: { type: "select" },
            options: ["0", "0-5", "1", "1-5", "2", "2-5", "3", "3-5", "4", "4-5", "5"],
            description:
                'How many stars are selected, "1" - "5". If "0" or null defaults to no stars selected. Can use "2-5" for 2 and a half stars',
        },
        a11yText: {
            description: "The aria label for the outer container.",
        },
    },

    tags: ["autodocs"],
    parameters: {
        docs: {
            description: {
                component: `For full stars use (rating from 0-5): \`ebay-star-rating-{rating}\`

For half stars use: \`ebay-star-rating-{rating}-5\`

## Usage

### Import

\`\`\`jsx harmony
import { EbayStarRating } from "@ebay/ui-core-react/ebay-star-rating";
\`\`\`

### Import following styles from SKIN

\`\`\`jsx harmony
import "@ebay/skin/icon";
import "@ebay/skin/star-rating";
\`\`\`

or import styles using SCSS/CSS

\`\`\`css
@import "@ebay/skin/icon.css";
@import "@ebay/skin/star-rating.css";
\`\`\`

### Basic

\`\`\`jsx
<EbayStarRating a11yText="Rated 3 out of 5 stars" value="3" />
\`\`\``,
            },
        },
    },
};

export const Stars = () => (
    <>
        <EbayStarRating a11yText="star-rating" />
        <EbayStarRating value="3-5" a11yText="star-rating" />
        <EbayStarRating value="5" a11yText="star-rating" />
    </>
);

export const StarsWithControls = {
    render: (args) => (
        <>
            <h2>Change stars using `Controls` addon</h2>
            <EbayStarRating {...args} a11yText="star-rating" />
        </>
    ),
};
