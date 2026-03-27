import React, { ComponentProps, useState } from "react";
import { action } from "storybook/actions";
import { EbayPagination, EbayPaginationItem as Item } from "../index";
import { EbayButton } from "../../ebay-button";
import { EbayLightboxDialog } from "../../ebay-lightbox-dialog";
import { EbayTabs, EbayTab, EbayTabPanel } from "../../ebay-tabs";

export default {
    title: "navigation & disclosure/ebay-pagination",

    tags: ["autodocs"],
    parameters: {
        docs: {
            description: {
                component: `## Import

\`\`\`jsx harmony
import { EbayPagination, EbayPaginationItem } from "@ebay/ui-core-react/ebay-pagination";
\`\`\`

### Import following styles from SKIN

\`\`\`jsx harmony
import "@ebay/skin/button";
import "@ebay/skin/icon";
import "@ebay/skin/icon-button";
import "@ebay/skin/menu";
import "@ebay/skin/menu-button";
import "@ebay/skin/pagination";
import "@ebay/skin/utility";
\`\`\`

or import styles using SCSS/CSS

\`\`\`css
@import "@ebay/skin/button.css";
@import "@ebay/skin/icon.css";
@import "@ebay/skin/icon-button.css";
@import "@ebay/skin/menu.css";
@import "@ebay/skin/menu-button.css";
@import "@ebay/skin/pagination.css";
@import "@ebay/skin/utility.css";
\`\`\`

### EbayPagination Usage

### Basic

\`\`\`jsx
<EbayPagination a11yPreviousText="Previous page" a11yNextText="Next page" a11yCurrentText="Results Pagination - Page 2">
    <EbayPaginationItem href="#" type="previous" disabled />
    <EbayPaginationItem href="#" current>
        item 1
    </EbayPaginationItem>
    <EbayPaginationItem href="#">item 2</EbayPaginationItem>
    <EbayPaginationItem href="#">item 3</EbayPaginationItem>
    <EbayPaginationItem href="#" type="next" />
</EbayPagination>
\`\`\`

## EbayPaginationItem Tag

### EbayPaginationItem Usage

\`\`\`jsx
<EbayPaginationItem>1</EbayPaginationItem>
\`\`\``,
            },
        },
    },
    argTypes: {
        a11yPreviousText: { description: "a11y text for previous arrow button", control: "text" },
        a11yNextText: { description: "a11y text for next arrow button", control: "text" },
        a11yCurrentText: { description: "Description for the current page (e.g. Results of Page 1)", control: "text" },
        variant: {
            description:
                "Either `show-last`, or `show-range` (default). If show-last then will show the last page always and will put `…` between the last visible range and the last page. `…` and the last page will take up two items in the range. `…` will be hidden when the range to the last item is fully visible.",
            options: ["show-last", "show-range", "overflow"],
            control: { type: "select" },
        },
        fluid: {
            description:
                "Will fill all available horizontal space. Horizontal space will be distributed around each item as necessary.",
            control: "boolean",
        },
        disabled: { description: "Previous/next button is disabled or not", control: "boolean" },
        href: {
            description: "for link that looks like a menu-item; omitting the href will switch to a button",
            control: "text",
        },
        current: { description: "the current page", control: "boolean" },
        type: {
            description:
                '"previous", "next" or "page"(default). To specify if the information entered is for the previous or next arrow button or a page. If the `type=\'previous',
            control: "text",
        },
        onPrevious: {
            description: "Called when previous button is clicked",
            action: "onPrevious",
            table: { category: "Events" },
        },
        onNext: {
            description: "Called when next button is clicked",
            action: "onNext",
            table: { category: "Events" },
        },
        onSelect: {
            description: "Called when a page item is selected",
            action: "onSelect",
            table: { category: "Events" },
        },
    },
};

export const BasicLinks = {
    render: () => (
        <>
            <EbayPagination
                a11yPreviousText="Previous page"
                a11yNextText="Next page"
                a11yCurrentText="Results Pagination - Page 1"
                onPrevious={(e) => action("onPrevious")(e)}
                onNext={(e) => action("onNext")(e)}
                onSelect={(e, props) => action("onSelect")(e, props)}
            >
                <Item
                    type="previous"
                    disabled
                    href="https://www.ebay.com/sch/i.html?_from=R40&_nkw=iphone&_sacat=0&_pgn=5"
                />
                <Item href="https://www.ebay.com/sch/i.html?_from=R40&_nkw=iphone&_sacat=0&_pgn=1" current>
                    1
                </Item>
                <Item href="https://www.ebay.com/sch/i.html?_from=R40&_nkw=iphone&_sacat=0&_pgn=2">2</Item>
                <Item href="https://www.ebay.com/sch/i.html?_from=R40&_nkw=iphone&_sacat=0&_pgn=3">3</Item>
                <Item href="https://www.ebay.com/sch/i.html?_from=R40&_nkw=iphone&_sacat=0&_pgn=4">4</Item>
                <Item href="https://www.ebay.com/sch/i.html?_from=R40&_nkw=iphone&_sacat=0&_pgn=5">5</Item>
                <Item href="https://www.ebay.com/sch/i.html?_from=R40&_nkw=iphone&_sacat=0&_pgn=6">6</Item>
                <Item href="https://www.ebay.com/sch/i.html?_from=R40&_nkw=iphone&_sacat=0&_pgn=7">7</Item>
                <Item href="https://www.ebay.com/sch/i.html?_from=R40&_nkw=iphone&_sacat=0&_pgn=8">8</Item>
                <Item href="https://www.ebay.com/sch/i.html?_from=R40&_nkw=iphone&_sacat=0&_pgn=9">9</Item>
                <Item href="https://www.ebay.com/sch/i.html?_from=R40&_nkw=iphone&_sacat=0&_pgn=10" type="next" />
            </EbayPagination>
        </>
    ),

    name: "Basic links",
};

export const ArrowsDisabled = {
    render: () => (
        <>
            <EbayPagination>
                <Item disabled type="previous" href="#" />
                <Item current type="page" href="#">
                    1
                </Item>
                <Item disabled type="next" href="#" />
            </EbayPagination>
        </>
    ),

    name: "Arrows disabled",
};

export const Buttons = () => (
    <>
        <EbayPagination
            onPrevious={(e) => action("onPrevious")(e)}
            onNext={(e) => action("onNext")(e)}
            onSelect={(e, props) => action("onSelect")(e, props)}
        >
            <Item type="previous" />
            <Item>1</Item>
            <Item current>2</Item>
            <Item>3</Item>
            <Item>4</Item>
            <Item>5</Item>
            <Item>6</Item>
            <Item>7</Item>
            <Item>8</Item>
            <Item>9</Item>
            <Item type="next" />
        </EbayPagination>
    </>
);

export const ButtonsInteractiveClickToChangeActivePage = {
    render: () => {
        const InteractivePaginationButtons = ({ numOfItems, firstPage = 1 }) => {
            const [activeIndex, setActiveIndex] = useState(0);
            const handlePrev = () => {
                const newIndex = Math.max(activeIndex - 1, 0);
                setActiveIndex(newIndex);
                action("Select previous")(newIndex + firstPage);
            };
            const handleNext = () => {
                const newIndex = Math.min(activeIndex + 1, numOfItems);
                setActiveIndex(newIndex);
                action("Select next")(newIndex + firstPage);
            };
            const handleSelect: ComponentProps<typeof EbayPagination>["onSelect"] = (_, options) => {
                setActiveIndex(options?.index);
                action("Select page")(options?.index + firstPage);
            };

            return (
                <EbayPagination
                    a11yCurrentText={`Results Pagination - Page ${firstPage + activeIndex}`}
                    onPrevious={handlePrev}
                    onNext={handleNext}
                    onSelect={handleSelect}
                >
                    <Item type="previous" disabled={activeIndex === 0} />
                    {Array.from(Array(numOfItems).keys()).map((i) => (
                        <Item key={`item-${i}`} current={i === activeIndex}>
                            {firstPage + i}
                        </Item>
                    ))}
                    <Item type="next" disabled={activeIndex >= numOfItems - 1} />
                </EbayPagination>
            );
        };

        return (
            <>
                <div>
                    <InteractivePaginationButtons numOfItems={15} />
                </div>
                <div>
                    <InteractivePaginationButtons numOfItems={5} firstPage={6} />
                </div>
            </>
        );
    },

    name: "Buttons interactive (click to change active page)",
};

export const VariantShowLastInteractive = {
    render: () => {
        const InteractivePagination = ({ numOfItems }) => {
            const [activeIndex, setActiveIndex] = useState(0);
            const handlePrev = () => setActiveIndex(Math.max(activeIndex - 1, 0));
            const handleNext = () => setActiveIndex(Math.min(activeIndex + 1, numOfItems));
            const handleSelect: ComponentProps<typeof EbayPagination>["onSelect"] = (_, data) =>
                setActiveIndex(parseInt(data?.value, 10) - 1);

            return (
                <EbayPagination
                    a11yCurrentText={`Results Pagination - Page ${activeIndex + 1}`}
                    onPrevious={handlePrev}
                    onNext={handleNext}
                    onSelect={handleSelect}
                    variant="show-last"
                >
                    <Item type="previous" disabled={activeIndex === 0} />
                    {Array.from(Array(numOfItems).keys()).map((i) => (
                        <Item key={`item-${i}`} current={i === activeIndex}>
                            {i + 1}
                        </Item>
                    ))}
                    <Item type="next" disabled={activeIndex >= numOfItems - 1} />
                </EbayPagination>
            );
        };

        return (
            <>
                <InteractivePagination numOfItems={15} />
            </>
        );
    },

    name: "Variant `showLast` (interactive)",
};

export const VariantOverflowInteractive = {
    render: () => {
        const InteractivePagination = ({ numOfItems }) => {
            const [activeIndex, setActiveIndex] = useState(0);
            const handlePrev = () => setActiveIndex(Math.max(activeIndex - 1, 0));
            const handleNext = () => setActiveIndex(Math.min(activeIndex + 1, numOfItems));
            const handleSelect: ComponentProps<typeof EbayPagination>["onSelect"] = (_, data) =>
                setActiveIndex(parseInt(data?.value, 10) - 1);

            return (
                <EbayPagination
                    a11yCurrentText={`Results Pagination - Page ${activeIndex + 1}`}
                    onPrevious={handlePrev}
                    onNext={handleNext}
                    onSelect={handleSelect}
                    variant="overflow"
                >
                    <Item type="previous" disabled={activeIndex === 0} />
                    {Array.from(Array(numOfItems).keys()).map((i) => (
                        <Item key={`item-${i}`} href="" current={i === activeIndex}>
                            {i + 1}
                        </Item>
                    ))}
                    <Item type="next" disabled={activeIndex >= numOfItems - 1} />
                </EbayPagination>
            );
        };

        return (
            <>
                <div>
                    <InteractivePagination numOfItems={5} />
                </div>
                <div>
                    <InteractivePagination numOfItems={9} />
                </div>
                <div>
                    <InteractivePagination numOfItems={10} />
                </div>
                <div>
                    <InteractivePagination numOfItems={15} />
                </div>
            </>
        );
    },

    name: "Variant `overflow` (interactive)",
};

export const Fluid = () => (
    <>
        <h2>Default fluid</h2>
        <EbayPagination
            fluid
            onPrevious={action("onPaginationPrevious")}
            onNext={action("onPaginationNext")}
            onSelect={action("onPageSelect")}
        >
            <Item type="previous" />
            <Item>1</Item>
            <Item current>2</Item>
            <Item>3</Item>
            <Item>4</Item>
            <Item>5</Item>
            <Item>6</Item>
            <Item>7</Item>
            <Item>8</Item>
            <Item>9</Item>
            <Item>10</Item>
            <Item>11</Item>
            <Item>12</Item>
            <Item>13</Item>
            <Item type="next" />
        </EbayPagination>

        <h2>Fluid with dots</h2>
        <EbayPagination
            variant="show-last"
            fluid
            onPrevious={action("onPaginationPrevious")}
            onNext={action("onPaginationNext")}
            onSelect={action("onPageSelect")}
        >
            <Item type="previous" />
            <Item>1</Item>
            <Item current>2</Item>
            <Item>3</Item>
            <Item>4</Item>
            <Item>5</Item>
            <Item>6</Item>
            <Item>7</Item>
            <Item>8</Item>
            <Item>9</Item>
            <Item>10</Item>
            <Item>11</Item>
            <Item>12</Item>
            <Item>13</Item>
            <Item type="next" />
        </EbayPagination>
    </>
);

export const InsideADialog = {
    render: () => {
        const InteractivePagination = ({ numOfItems }) => {
            const [activeIndex, setActiveIndex] = useState(0);
            const [open, setOpen] = useState(false);
            const handlePrev = () => setActiveIndex(Math.max(activeIndex - 1, 0));
            const handleNext = () => setActiveIndex(Math.min(activeIndex + 1, numOfItems));
            const handleSelect = (e, { index }) => setActiveIndex(index);

            return (
                <>
                    <EbayButton onClick={() => setOpen(true)}>Show pagination dialog</EbayButton>
                    <EbayLightboxDialog open={open}>
                        <EbayPagination
                            a11yCurrentText={`Results Pagination - Page ${activeIndex + 1}`}
                            onPrevious={handlePrev}
                            onNext={handleNext}
                            onSelect={handleSelect}
                        >
                            <Item type="previous" disabled={activeIndex === 0} />
                            {Array.from(Array(numOfItems).keys()).map((i) => (
                                <Item key={`item-${i}`} current={i === activeIndex}>
                                    {i + 1}
                                </Item>
                            ))}
                            <Item type="next" disabled={activeIndex >= numOfItems - 1} />
                        </EbayPagination>
                    </EbayLightboxDialog>
                </>
            );
        };

        return (
            <>
                <InteractivePagination numOfItems={5} />
            </>
        );
    },

    name: "Inside a dialog",
};

export const InsideTabPanel = () => {
    return (
        <EbayTabs size="large">
            <EbayTab className="tab">Upload Process</EbayTab>
            <EbayTab className="tab">Buyer View</EbayTab>
            <EbayTabPanel>
                <p>Test content in first tab</p>
            </EbayTabPanel>
            <EbayTabPanel>
                <EbayPagination variant="show-last" a11yPreviousText="Previous page" a11yNextText="Next page">
                    <Item type="previous" />
                    <Item>1</Item>
                    <Item current>2</Item>
                    <Item>3</Item>
                    <Item type="next" />
                </EbayPagination>
            </EbayTabPanel>
        </EbayTabs>
    );
};
