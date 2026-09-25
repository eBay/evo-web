import { useState } from "react";
import type { Meta, StoryObj } from "@storybook/react-vite";
import {
  EvoTable,
  EvoTableBody,
  EvoTableCell,
  EvoTableHead,
  EvoTableHeader,
  EvoTableRow,
  type TableSort,
} from "./index";

const listings = [
  { id: "camera", item: "Digital camera", price: "$120", quantity: 3 },
  { id: "case", item: "Phone case", price: "$18", quantity: 12 },
  { id: "headphones", item: "Headphones", price: "$45", quantity: 6 },
];

const meta: Meta<typeof EvoTable> = {
  title: "Data Display/EvoTable",
  component: EvoTable,
  subcomponents: {
    EvoTableHead,
    EvoTableBody,
    EvoTableRow,
    EvoTableHeader,
    EvoTableCell,
  },
  argTypes: {
    density: { control: "select", options: ["compact", "relaxed"] },
  },
};
export default meta;
type Story = StoryObj<typeof EvoTable>;

/** Compare current listing prices and quantities. */
export const Default: Story = {
  render: (args) => (
    <EvoTable {...args} aria-label="Active listings">
      <EvoTableHead>
        <EvoTableHeader>Item</EvoTableHeader>
        <EvoTableHeader columnType="numeric">Price</EvoTableHeader>
        <EvoTableHeader columnType="numeric">Available</EvoTableHeader>
      </EvoTableHead>
      <EvoTableBody>
        {listings.map((listing) => (
          <EvoTableRow key={listing.id}>
            <EvoTableCell rowHeader>{listing.item}</EvoTableCell>
            <EvoTableCell columnType="numeric">{listing.price}</EvoTableCell>
            <EvoTableCell columnType="numeric">{listing.quantity}</EvoTableCell>
          </EvoTableRow>
        ))}
      </EvoTableBody>
    </EvoTable>
  ),
};

/** The application sorts its rows after a column requests a direction. */
export const Sorting: Story = {
  render: () => {
    const [sort, setSort] = useState<TableSort>("none");
    const rows = [...listings].sort((first, second) =>
      sort === "none"
        ? 0
        : sort === "asc"
          ? Number(first.price.slice(1)) - Number(second.price.slice(1))
          : Number(second.price.slice(1)) - Number(first.price.slice(1)),
    );
    return (
      <EvoTable aria-label="Active listings">
        <EvoTableHead>
          <EvoTableHeader>Item</EvoTableHeader>
          <EvoTableHeader
            columnType="numeric"
            sort={sort}
            onSortChange={setSort}
          >
            Price
          </EvoTableHeader>
          <EvoTableHeader columnType="numeric">Available</EvoTableHeader>
        </EvoTableHead>
        <EvoTableBody>
          {rows.map((listing) => (
            <EvoTableRow key={listing.id}>
              <EvoTableCell rowHeader>{listing.item}</EvoTableCell>
              <EvoTableCell columnType="numeric">{listing.price}</EvoTableCell>
              <EvoTableCell columnType="numeric">
                {listing.quantity}
              </EvoTableCell>
            </EvoTableRow>
          ))}
        </EvoTableBody>
      </EvoTable>
    );
  },
};
