import React, { FC, useState } from "react";
import { EbayButton } from "../../ebay-button";
import { EbayProgressStepper, EbayProgressStep as Step, EbayProgressTitle as Title, StepState } from "../index";

export default {
    title: "progress/ebay-progress-stepper",
};

export const Default = () => (
    <div style={{ padding: 50 }}>
        <EbayProgressStepper>
            <Step>Started</Step>
            <Step>Shipped</Step>
            <Step current>Transit</Step>
            <Step>Delivered</Step>
        </EbayProgressStepper>
    </div>
);

export const DefaultStateUpcoming = {
    render: () => (
        <div style={{ padding: 50 }}>
            <EbayProgressStepper defaultState="upcoming">
                <Step>
                    <Title>Paid</Title>
                    July 3rd
                </Step>
                <Step>
                    <Title>Shipped</Title>
                    July 4th
                </Step>
                <Step>
                    <Title>Transit</Title>
                    July 5th
                </Step>
                <Step>
                    <Title>Delivered</Title>
                    July 6th
                </Step>
            </EbayProgressStepper>
        </div>
    ),

    name: "Default state: upcoming",
};

export const DefaultStateComplete = {
    render: () => (
        <div style={{ padding: 50 }}>
            <EbayProgressStepper defaultState="complete">
                <Step>Started</Step>
                <Step>Shipped</Step>
                <Step>Transit</Step>
                <Step>Delivered</Step>
            </EbayProgressStepper>
        </div>
    ),

    name: "Default state: complete",
};

export const Blocked = () => (
    <div style={{ padding: 50 }}>
        <EbayProgressStepper>
            <Step>Started</Step>
            <Step>Shipped</Step>
            <Step state="attention" current>
                Blocked
            </Step>
            <Step>Delivered</Step>
        </EbayProgressStepper>
    </div>
);

export const CustomTitles = () => (
    <div style={{ padding: 50 }}>
        <EbayProgressStepper>
            <Step>
                <Title as="h1">H1</Title>
            </Step>
            <Step current>
                <Title as="small">Small</Title>
            </Step>
            <Step>
                <Title as="h2">H2</Title>
            </Step>
        </EbayProgressStepper>
    </div>
);

export const VerticalColumn = {
    render: () => (
        <div style={{ padding: 50 }}>
            <EbayProgressStepper direction="column">
                <Step>
                    <Title>Order placed</Title>
                    <p>New Mens Addidas Ultra Boost</p>
                    <p>Order total $220</p>
                </Step>
                <Step current>
                    <Title>Preparing for shipment</Title>
                    <p>We will notify you once it ships.</p>
                </Step>
                <Step>
                    <Title>Delivered</Title>
                    <p>Guaranteed Wednesday, October 09.</p>
                </Step>
            </EbayProgressStepper>
        </div>
    ),

    name: "Vertical (column)",
};

export const Controlled = () => {
    const TestingComponent: FC = () => {
        const MIN = 1;
        const MAX = 4;
        const range = (to: number, from = 0): number[] => Array.from(Array(to - from + 1)).map((v, k) => from + k);

        const [currentNumber, setCurrentNumber] = useState<number>(2);

        const defaultState = (): StepState => {
            if (currentNumber < MIN) return "upcoming";
            if (currentNumber > MAX) return "complete";
            return "complete";
        };

        return (
            <div style={{ padding: 50 }}>
                <EbayProgressStepper defaultState={defaultState()}>
                    {range(MAX, MIN).map((n) => (
                        <Step current={currentNumber === n} key={n}>
                            Step {n}
                        </Step>
                    ))}
                </EbayProgressStepper>
                <p>
                    <EbayButton
                        onClick={() => {
                            setCurrentNumber(Math.max(MIN, currentNumber - 1));
                        }}
                    >
                        Back
                    </EbayButton>
                    &nbsp;
                    <EbayButton
                        onClick={() => {
                            setCurrentNumber(Math.min(MAX, currentNumber + 1));
                        }}
                    >
                        Forward
                    </EbayButton>
                </p>
            </div>
        );
    };

    return (
        <>
            <TestingComponent />
        </>
    );
};
