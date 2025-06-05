import React from "react";
import { EbayProgressBar } from "../index";

export default {
    title: "progress/ebay-progress-bar",
    component: EbayProgressBar,
};

export const Default = () => (
    <>
        <p>
            0%
            <br />
            <EbayProgressBar />
        </p>
        <p>
            50%
            <br />
            <EbayProgressBar value={50} />
        </p>
        <p>
            100%
            <br />
            <EbayProgressBar value={100} />
        </p>
    </>
);

export const CustomMax = () => (
    <>
        <p>
            50/200
            <br />
            <EbayProgressBar value={50} max={200} />
        </p>
        <p>
            100/200
            <br />
            <EbayProgressBar value={100} max={200} />
        </p>
    </>
);

export const Fluid = () => (
    <>
        <p>
            <EbayProgressBar fluid value={50} />
        </p>
    </>
);
