import React from "react";
import { EbaySignal } from "../index";

export default {
    component: EbaySignal,
    title: "graphics & icons/ebay-signal",
};

export const DefaultCase = () => (
    <>
        <EbaySignal>Default</EbaySignal>
    </>
);

export const Trustworthy = () => (
    <>
        <EbaySignal status="trustworthy">Trustworthy</EbaySignal>
    </>
);

export const Recent = () => (
    <>
        <EbaySignal status="recent">Recent</EbaySignal>
    </>
);

export const TimeSensitive = () => (
    <>
        <EbaySignal status="time-sensitive">Time-Sensitive</EbaySignal>
    </>
);

export const Neutral = () => (
    <>
        <EbaySignal status="neutral">Neutral</EbaySignal>
    </>
);
