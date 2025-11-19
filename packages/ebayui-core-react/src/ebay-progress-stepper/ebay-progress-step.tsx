import React, { Children, FC, ReactElement, ReactNode } from "react";
import classNames from "classnames";
import { EbayIconStepperConfirmation24 } from "../ebay-icon/icons/ebay-icon-stepper-confirmation-24";
import { EbayIconStepperAttention24 } from "../ebay-icon/icons/ebay-icon-stepper-attention-24";
import { EbayIconStepperUpcoming24 } from "../ebay-icon/icons/ebay-icon-stepper-upcoming-24";
import { StepState } from "./types";
import { EbayProgressTitle } from "./index";
import { EbayIconComponent } from "../ebay-icon/icons/types";

export type EbayProgressStepProps = {
    state?: StepState;
    current?: boolean;
    className?: string;
    children?: ReactNode;
};

const typeIcons: { [key in StepState]: EbayIconComponent } = {
    complete: EbayIconStepperConfirmation24,
    attention: EbayIconStepperAttention24,
    upcoming: EbayIconStepperUpcoming24,
    active: EbayIconStepperConfirmation24,
};

const EbayProgressStep: FC<EbayProgressStepProps> = ({ current, state = "complete", children, className, ...rest }) => {
    const childrenArray = Children.toArray(children) as ReactElement[];
    const title = childrenArray.find((child) => child.type === EbayProgressTitle);
    const text = childrenArray.filter((child) => child.type !== EbayProgressTitle);
    const stepClassNames = classNames(className, "progress-stepper__item", {
        "progress-stepper__item--attention": state === "attention",
    });
    const Icon = typeIcons[state];
    const ariaLabel = current ? "current" : state;

    return (
        <div {...rest} className={stepClassNames} role="listitem" aria-current={current ? "step" : undefined}>
            <div className="progress-stepper__icon">
                <Icon aria-label={ariaLabel} />
            </div>

            <div className="progress-stepper__text">
                {title}
                {text}
            </div>
        </div>
    );
};

export default EbayProgressStep;
