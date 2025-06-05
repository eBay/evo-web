import React from "react";
import { render } from "@testing-library/react";
import NoticeContent from "../../../../common/notice-utils/notice-content";

describe("<NoticeContent>", () => {
    describe("when inline", () => {
        it("should render the content in a <span>", () => {
            const wrapper = render(
                <NoticeContent type="inline">
                    <p>I am a notice!</p>
                </NoticeContent>,
            );
            expect(wrapper.container.querySelectorAll("span").length).toBe(1);
            expect(wrapper.container.querySelectorAll("div").length).toBe(0);
        });
    });

    describe("when not inline", () => {
        it("should render the content in a <span>", () => {
            const wrapper = render(
                <NoticeContent type="section">
                    <p>I am a notice!</p>
                </NoticeContent>,
            );
            expect(wrapper.container.querySelectorAll("span").length).toBe(0);
            expect(wrapper.container.querySelectorAll("div").length).toBe(1);
        });
    });
});
