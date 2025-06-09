import React, { Children, FC, ReactElement, ReactNode } from "react";
import classNames from "classnames";
import { EbayIcon, Icon } from "../ebay-icon";
import { StepState } from "./types";
import { EbayProgressTitle } from "./index";

export type EbayProgressStepProps = {
    state?: StepState;
    current?: boolean;
    className?: string;
    children?: ReactNode;
};

const typeIcons: { [key in StepState]: Icon } = {
    complete: "stepperConfirmation24",
    attention: "stepperAttention24",
    upcoming: "stepperUpcoming24",
    active: "stepperConfirmation24",
};

const EbayProgressStep: FC<EbayProgressStepProps> = ({ current, state = "complete", children, className, ...rest }) => {
    const childrenArray = Children.toArray(children) as ReactElement[];
    const title = childrenArray.find((child) => child.type === EbayProgressTitle);
    const text = childrenArray.filter((child) => child.type !== EbayProgressTitle);
    const stepClassNames = classNames(className, "progress-stepper__item", {
        "progress-stepper__item--attention": state === "attention",
    });
    const icon = typeIcons[state];
    const ariaLabel = current ? "current" : state;

    return (
        <div {...rest} className={stepClassNames} role="listitem" aria-current={current ? "step" : undefined}>
            <div className="progress-stepper__icon">{icon && <EbayIcon name={icon} aria-label={ariaLabel} />}</div>

            <div className="progress-stepper__text">
                {title}
                {text}
            </div>
        </div>
    );
};

export default EbayProgressStep;
