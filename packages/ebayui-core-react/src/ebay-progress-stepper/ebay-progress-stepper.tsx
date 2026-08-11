import React, { Children, cloneElement, FC, Fragment, ReactElement, ReactNode } from "react";
import classNames from "classnames";
import { StepperDirection, StepState } from "./types";
import { EbayProgressStepProps } from "./ebay-progress-step";

type ProgressStepperProps = {
    direction?: StepperDirection;
    defaultState?: StepState;
    className?: string;
    children?: ReactNode;
};

const EbayProgressStepper: FC<ProgressStepperProps> = ({
    direction = "row",
    defaultState = "active",
    children,
    className,
    ...rest
}) => {
    const childrenArray = Children.toArray(children) as ReactElement<EbayProgressStepProps>[];
    const currentIndex = currentIndexByDefaultState(childrenArray, defaultState);

    return (
        <div
            {...rest}
            className={classNames(className, "progress-stepper", {
                "progress-stepper--vertical": direction === "column",
            })}
        >
            <div role="list" className="progress-stepper__items">
                {childrenArray.map((child, index) => (
                    <Fragment key={index}>
                        {index > 0 && <hr className="progress-stepper__separator" role="presentation" />}
                        {cloneElement<EbayProgressStepProps>(child, {
                            state: stepState(index, currentIndex),
                            ...child.props,
                            current: currentIndex === index,
                        })}
                    </Fragment>
                ))}
            </div>
        </div>
    );
};

function currentIndexByDefaultState(steps: ReactElement<EbayProgressStepProps>[], defaultState: StepState): number {
    const foundCurrentIndex = steps.findIndex((child) => child.props.current);

    if (foundCurrentIndex === -1) {
        switch (defaultState) {
            case "complete":
                return steps.length - 1;
            case "upcoming":
                return 0;
        }
    }

    return foundCurrentIndex;
}

function stepState(stepIndex, currentIndex): StepState {
    if (stepIndex <= currentIndex) return "complete";
    if (stepIndex > currentIndex) return "upcoming";
}

export default EbayProgressStepper;
