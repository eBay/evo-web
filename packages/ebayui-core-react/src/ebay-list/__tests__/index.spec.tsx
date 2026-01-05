/// <reference types="@testing-library/jest-dom" />
import { vi } from "vitest";
import React from "react";
import { screen, render } from "@testing-library/react";
import userEvent from "@testing-library/user-event";
import { EbayList, EbayListItem } from "../index";
import EbayListItemLeading from "../list-item-leading";
import EbayListItemTrailing from "../list-item-trailing";
import { eventOfType } from "../../common/event-utils/__tests__/helpers";

describe("<EbayList />", () => {
    it("should render static list", () => {
        render(
            <EbayList>
                <EbayListItem>
                    <EbayListItemLeading>Leading 1</EbayListItemLeading>
                    Item 1
                </EbayListItem>
                <EbayListItem>
                    <EbayListItemLeading>Leading 2</EbayListItemLeading>
                    Item 2
                </EbayListItem>
                <EbayListItem>
                    <EbayListItemLeading>Leading 3</EbayListItemLeading>
                    Item 3
                </EbayListItem>
            </EbayList>,
        );

        expect(screen.getByText("Item 1")).toBeInTheDocument();
        expect(screen.getByText("Item 2")).toBeInTheDocument();
        expect(screen.getByText("Item 3")).toBeInTheDocument();
        expect(screen.getByText("Leading 1")).toBeInTheDocument();
        expect(screen.getByText("Leading 2")).toBeInTheDocument();
        expect(screen.getByText("Leading 3")).toBeInTheDocument();
    });

    it("should render interactive list", async () => {
        const onClick = vi.fn();
        const onButtonClick = vi.fn();

        render(
            <EbayList onButtonClick={onButtonClick}>
                <EbayListItem as="button" onClick={onClick}>
                    Item 1
                </EbayListItem>
                <EbayListItem as="a" href="https://www.ebay.com">
                    Item 2
                </EbayListItem>
                <EbayListItem>Item 3</EbayListItem>
            </EbayList>,
        );

        const button = screen.getByRole("button", { name: "Item 1" });
        await userEvent.click(button);

        expect(onClick).toHaveBeenCalledTimes(1);
        expect(onButtonClick).toHaveBeenCalledTimes(1);
        expect(onButtonClick).toHaveBeenCalledWith(eventOfType("click"), { index: 0 });
    });

    it("should render with separator element", () => {
        render(
            <EbayList>
                <EbayListItem>
                    <EbayListItemLeading>Leading 1</EbayListItemLeading>
                    Item 1
                </EbayListItem>
                <EbayListItem separator />
                <EbayListItem>
                    <EbayListItemLeading>Leading 2</EbayListItemLeading>
                    Item 2
                </EbayListItem>
                <EbayListItem>
                    <EbayListItemLeading>Leading 3</EbayListItemLeading>
                    Item 3
                </EbayListItem>
                <EbayListItem separator />
                <EbayListItem>
                    <EbayListItemLeading>Leading 4</EbayListItemLeading>
                    Item 4
                </EbayListItem>
            </EbayList>,
        );

        expect(screen.getByText("Item 1")).toBeInTheDocument();
        expect(screen.getByText("Item 2")).toBeInTheDocument();
        expect(screen.getByText("Item 3")).toBeInTheDocument();
        expect(screen.getByText("Item 4")).toBeInTheDocument();
        expect(screen.getAllByRole("separator")).toHaveLength(2);
    });

    it("should render with trailing content", () => {
        render(
            <EbayList>
                <EbayListItem>
                    Item 1<EbayListItemTrailing>Trailing 1</EbayListItemTrailing>
                </EbayListItem>
                <EbayListItem>
                    Item 2<EbayListItemTrailing>Trailing 2</EbayListItemTrailing>
                </EbayListItem>
            </EbayList>,
        );

        expect(screen.getByText("Trailing 1")).toBeInTheDocument();
        expect(screen.getByText("Trailing 2")).toBeInTheDocument();
    });
});
