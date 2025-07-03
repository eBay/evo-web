import React from "react";
import { Meta, StoryFn } from "@storybook/react-vite";
import { EbayTable, EbayTableCell, EbayTableHeader, EbayTableRow, type TableSortHandler } from "../index";
import { EbaySignal, SignalStatus } from "../../ebay-signal";
import { EbaySelect, EbaySelectOption } from "../../ebay-select";
import { EbayCtaButton } from "../../ebay-cta-button";
import { EbayIconButton } from "../../ebay-icon-button";
import data from "./data.json";

const meta: Meta<typeof EbayTable> = {
    component: EbayTable,
    title: "data display/ebay-table",
    argTypes: {
        density: {
            control: { type: "select" },
            description: "table density",
            options: ["compact", "relaxed", "none"],
        },
        mode: {
            control: { type: "select" },
            description: "table mode",
            options: ["selection", "none"],
        },
        frozenHeader: {
            control: { type: "boolean" },
            description: "If true, the header will be frozen",
        },
        allSelected: {
            control: { type: "select" },
            description: "Select all tri-state checkbox state",
            options: ["true", "false", "mixed"],
        },
        a11ySelectAllText: {
            control: { type: "text" },
            description: "Accessibility text for select all checkbox",
            table: {
                category: "Accessibility",
                defaultValue: {
                    summary: "Select all rows",
                },
            },
        },
        a11ySelectRowText: {
            control: { type: "text" },
            description: "Accessibility text for select row checkbox",
            table: {
                category: "Accessibility",
                defaultValue: {
                    summary: "Select row",
                },
            },
        },
        onSelect: {
            action: "onSelect",
            description: "Triggered on selection",
            table: {
                category: "Events",
                defaultValue: {
                    summary: "event, { selected, allSelected }",
                },
            },
        },
        onSort: {
            action: "onSort",
            description: "Triggered on column sort",
            table: {
                category: "Events",
                defaultValue: {
                    summary: "event, { sorted }",
                },
            },
        },
    },
};

export default meta;

export const Default: StoryFn<typeof EbayTable> = (args) => (
    <EbayTable {...args}>
        <EbayTableHeader rowHeader>Seller</EbayTableHeader>
        <EbayTableHeader>Item</EbayTableHeader>
        <EbayTableHeader>Status</EbayTableHeader>
        <EbayTableHeader columnType="numeric">List Price</EbayTableHeader>
        <EbayTableHeader columnType="numeric">Quantity Available</EbayTableHeader>
        <EbayTableHeader>Orders</EbayTableHeader>
        <EbayTableHeader columnType="numeric">Watchers</EbayTableHeader>
        <EbayTableHeader columnType="numeric">Protection</EbayTableHeader>
        <EbayTableHeader>Shipping</EbayTableHeader>
        <EbayTableHeader>Delivery</EbayTableHeader>
        {data.map((row, index) => (
            <EbayTableRow key={index} name={`row_${index}`}>
                <EbayTableCell>{row.seller}</EbayTableCell>
                <EbayTableCell>{row.item.title}</EbayTableCell>
                <EbayTableCell>
                    <EbaySignal status={row.statusType as SignalStatus}>{row.status}</EbaySignal>
                </EbayTableCell>
                <EbayTableCell columnType="numeric">{row.listPrice}</EbayTableCell>
                <EbayTableCell columnType="numeric">{row.quantityAvailable}</EbayTableCell>
                <EbayTableCell>
                    <a href="https://ebay.com">{row.orders.number}</a>
                </EbayTableCell>
                <EbayTableCell columnType="numeric">{row.watchers}</EbayTableCell>
                <EbayTableCell columnType="numeric">{row.protection}</EbayTableCell>
                <EbayTableCell>{row.shipping}</EbayTableCell>
                <EbayTableCell>{row.delivery}</EbayTableCell>
            </EbayTableRow>
        ))}
    </EbayTable>
);

export const TableWithAction: StoryFn<typeof EbayTable> = (args) => (
    <EbayTable {...args}>
        <EbayTableHeader rowHeader>Seller</EbayTableHeader>
        <EbayTableHeader>Item</EbayTableHeader>
        <EbayTableHeader>Condition</EbayTableHeader>
        <EbayTableHeader columnType="layout">Multiple Actions</EbayTableHeader>
        <EbayTableHeader columnType="icon-action">Action Plus</EbayTableHeader>
        <EbayTableHeader columnType="numeric">List Price</EbayTableHeader>
        <EbayTableHeader columnType="numeric">Quantity Available</EbayTableHeader>
        <EbayTableHeader>Orders</EbayTableHeader>
        <EbayTableHeader columnType="numeric">Watchers</EbayTableHeader>
        <EbayTableHeader columnType="numeric">Protection</EbayTableHeader>
        <EbayTableHeader>Shipping</EbayTableHeader>
        <EbayTableHeader>Delivery</EbayTableHeader>
        {data.map((row, index) => (
            <EbayTableRow key={index} name={`row_${index}`}>
                <EbayTableCell>{row.seller}</EbayTableCell>
                <EbayTableCell>{row.item.titleShort}</EbayTableCell>
                <EbayTableCell>
                    <EbaySelect borderless defaultValue="newWithoutBox">
                        <EbaySelectOption value="new">New</EbaySelectOption>
                        <EbaySelectOption value="newWithoutBox">New without box</EbaySelectOption>
                        <EbaySelectOption value="used">Used</EbaySelectOption>
                    </EbaySelect>
                </EbayTableCell>
                <EbayTableCell>
                    <EbayCtaButton href="https://ebay.com">Edit Listing</EbayCtaButton>
                    <EbayIconButton icon="overflowVertical16" />
                </EbayTableCell>
                <EbayTableCell>
                    <EbayIconButton icon="overflowVertical16" />
                </EbayTableCell>
                <EbayTableCell>
                    <EbaySignal status={row.statusType as SignalStatus}>{row.status}</EbaySignal>
                </EbayTableCell>
                <EbayTableCell columnType="numeric">{row.listPrice}</EbayTableCell>
                <EbayTableCell columnType="numeric">{row.quantityAvailable}</EbayTableCell>
                <EbayTableCell>
                    <a href="https://ebay.com">{row.orders.number}</a>
                </EbayTableCell>
                <EbayTableCell columnType="numeric">{row.watchers}</EbayTableCell>
                <EbayTableCell columnType="numeric">{row.protection}</EbayTableCell>
                <EbayTableCell>{row.shipping}</EbayTableCell>
                <EbayTableCell>{row.delivery}</EbayTableCell>
            </EbayTableRow>
        ))}
    </EbayTable>
);

export const ColumnSorting: StoryFn<typeof EbayTable> = (args) => (
    <EbayTable {...args}>
        <EbayTableHeader sort="none" rowHeader>
            Seller
        </EbayTableHeader>
        <EbayTableHeader sort="none">Item</EbayTableHeader>
        <EbayTableHeader sort="none">Status</EbayTableHeader>
        <EbayTableHeader columnType="numeric" sort="none">
            List Price
        </EbayTableHeader>
        <EbayTableHeader columnType="numeric" sort="none">
            Quantity Available
        </EbayTableHeader>
        <EbayTableHeader sort="none">Orders</EbayTableHeader>
        <EbayTableHeader columnType="numeric" sort="none">
            Watchers
        </EbayTableHeader>
        <EbayTableHeader columnType="numeric" sort="none">
            Protection
        </EbayTableHeader>
        <EbayTableHeader sort="none">Shipping</EbayTableHeader>
        <EbayTableHeader sort="none">Delivery</EbayTableHeader>
        {data.map((row, index) => (
            <EbayTableRow key={index} name={`row_${index}`}>
                <EbayTableCell>{row.seller}</EbayTableCell>
                <EbayTableCell>{row.item.title}</EbayTableCell>
                <EbayTableCell>
                    <EbaySignal status={row.statusType as SignalStatus}>{row.status}</EbaySignal>
                </EbayTableCell>
                <EbayTableCell columnType="numeric">{row.listPrice}</EbayTableCell>
                <EbayTableCell columnType="numeric">{row.quantityAvailable}</EbayTableCell>
                <EbayTableCell>
                    <a href="https://ebay.com">{row.orders.number}</a>
                </EbayTableCell>
                <EbayTableCell columnType="numeric">{row.watchers}</EbayTableCell>
                <EbayTableCell columnType="numeric">{row.protection}</EbayTableCell>
                <EbayTableCell>{row.shipping}</EbayTableCell>
                <EbayTableCell>{row.delivery}</EbayTableCell>
            </EbayTableRow>
        ))}
    </EbayTable>
);

export const ColumnSortingWithLinks: StoryFn<typeof EbayTable> = (args) => (
    <EbayTable {...args}>
        <EbayTableHeader sort="asc" rowHeader href="https://ebay.com">
            Seller
        </EbayTableHeader>
        <EbayTableHeader>Item</EbayTableHeader>
        <EbayTableHeader>Status</EbayTableHeader>
        <EbayTableHeader columnType="numeric">List Price</EbayTableHeader>
        <EbayTableHeader columnType="numeric">Quantity Available</EbayTableHeader>
        <EbayTableHeader>Orders</EbayTableHeader>
        <EbayTableHeader columnType="numeric">Watchers</EbayTableHeader>
        <EbayTableHeader columnType="numeric">Protection</EbayTableHeader>
        <EbayTableHeader>Shipping</EbayTableHeader>
        <EbayTableHeader>Delivery</EbayTableHeader>
        {data.map((row, index) => (
            <EbayTableRow key={index} name={`row_${index}`}>
                <EbayTableCell>{row.seller}</EbayTableCell>
                <EbayTableCell>{row.item.title}</EbayTableCell>
                <EbayTableCell>
                    <EbaySignal status={row.statusType as SignalStatus}>{row.status}</EbaySignal>
                </EbayTableCell>
                <EbayTableCell columnType="numeric">{row.listPrice}</EbayTableCell>
                <EbayTableCell columnType="numeric">{row.quantityAvailable}</EbayTableCell>
                <EbayTableCell>
                    <a href="https://ebay.com">{row.orders.number}</a>
                </EbayTableCell>
                <EbayTableCell columnType="numeric">{row.watchers}</EbayTableCell>
                <EbayTableCell columnType="numeric">{row.protection}</EbayTableCell>
                <EbayTableCell>{row.shipping}</EbayTableCell>
                <EbayTableCell>{row.delivery}</EbayTableCell>
            </EbayTableRow>
        ))}
    </EbayTable>
);

export const ColumnSortingClientSide: StoryFn<typeof EbayTable> = (args) => {
    const [sortedData, setSortedData] = React.useState(data);

    const handleSort: TableSortHandler = (event, { sorted }) => {
        const newSortedData = [...data].sort((a, b) => {
            if (sorted.listPrice === "asc") {
                return Number(a.listPrice.substring(1)) - Number(b.listPrice.substring(1));
            } else if (sorted.listPrice === "desc") {
                return Number(b.listPrice.substring(1)) - Number(a.listPrice.substring(1));
            } else if (sorted.quantityAvailable === "asc") {
                return Number(a.quantityAvailable) - Number(b.quantityAvailable);
            } else if (sorted.quantityAvailable === "desc") {
                return Number(b.quantityAvailable) - Number(a.quantityAvailable);
            }
            return 0;
        });

        setSortedData(newSortedData);
    };

    return (
        <EbayTable {...args} onSort={handleSort}>
            <EbayTableHeader rowHeader>Seller</EbayTableHeader>
            <EbayTableHeader>Item</EbayTableHeader>
            <EbayTableHeader>Status</EbayTableHeader>
            <EbayTableHeader name="listPrice" columnType="numeric" sort="none">
                List Price
            </EbayTableHeader>
            <EbayTableHeader name="quantityAvailable" columnType="numeric" sort="none">
                Quantity Available
            </EbayTableHeader>
            <EbayTableHeader>Orders</EbayTableHeader>
            <EbayTableHeader columnType="numeric">Watchers</EbayTableHeader>
            <EbayTableHeader columnType="numeric">Protection</EbayTableHeader>
            <EbayTableHeader>Shipping</EbayTableHeader>
            <EbayTableHeader>Delivery</EbayTableHeader>
            {sortedData.map((row, index) => (
                <EbayTableRow key={index} name={`row_${index}`}>
                    <EbayTableCell>{row.seller}</EbayTableCell>
                    <EbayTableCell>{row.item.title}</EbayTableCell>
                    <EbayTableCell>
                        <EbaySignal status={row.statusType as SignalStatus}>{row.status}</EbaySignal>
                    </EbayTableCell>
                    <EbayTableCell columnType="numeric">{row.listPrice}</EbayTableCell>
                    <EbayTableCell columnType="numeric">{row.quantityAvailable}</EbayTableCell>
                    <EbayTableCell>
                        <a href="https://ebay.com">{row.orders.number}</a>
                    </EbayTableCell>
                    <EbayTableCell columnType="numeric">{row.watchers}</EbayTableCell>
                    <EbayTableCell columnType="numeric">{row.protection}</EbayTableCell>
                    <EbayTableCell>{row.shipping}</EbayTableCell>
                    <EbayTableCell>{row.delivery}</EbayTableCell>
                </EbayTableRow>
            ))}
        </EbayTable>
    );
};
