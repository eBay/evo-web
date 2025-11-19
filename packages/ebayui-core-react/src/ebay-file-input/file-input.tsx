import React, { useState, FC, ComponentProps, ElementType } from "react";
import { FileInputHandler } from "./types";
import { findComponent, excludeComponent } from "../common/component-utils/utils";
import classNames from "classnames";
import { useRandomId } from "../utils";
import { EbayIconUpload24 } from "../ebay-icon/icons/ebay-icon-upload-24";

type ChildrenProps = ComponentProps<ElementType> & {
    as?: ElementType;
};

export const EbayFileInputHeader: FC<ChildrenProps> = ({ className, as: Component = "span", ...props }) => (
    <Component className={classNames("file-input__content-header", className)} {...props} />
);

export const EbayFileInputSubheader: FC<ChildrenProps> = ({ className, as: Component = "span", ...props }) => (
    <Component className={classNames("file-input__content-subheader", className)} {...props} />
);

export type EbayFileInputProps = Omit<ComponentProps<"input">, "onInput" | "type"> & {
    onInput?: FileInputHandler;
};

const EbayFileInput: React.FC<EbayFileInputProps> = ({ children, onInput, className, ...rest }) => {
    const inputId = useRandomId();
    const [dragging, setDragging] = useState(false);

    const handleFileChange: FileInputHandler = (event) => {
        if (onInput) {
            onInput(event, { files: event.target.files });
        }
    };

    const handleDragOver = () => setDragging(true);
    const handleDragLeave = () => setDragging(false);

    const header = findComponent(children, EbayFileInputHeader);
    const subheader = findComponent(children, EbayFileInputSubheader);
    const otherChildren = excludeComponent(children, EbayFileInputHeader).filter(
        ({ type }) => type !== EbayFileInputSubheader,
    );

    return (
        <div className={classNames(`file-input`, dragging && "file-input___container--dragged-over", className)}>
            <div className="file-input__container">
                <div className="file-input__upload-icon">
                    <EbayIconUpload24 />
                </div>
                <div className="file-input__content">
                    {header}
                    {subheader}
                    {otherChildren && (
                        <label htmlFor={rest.id || inputId}>
                            <span className="file-input__content-cta">{otherChildren}</span>
                        </label>
                    )}
                </div>
            </div>
            <input
                {...rest}
                id={rest.id || inputId}
                type="file"
                className="file-input__input"
                onChange={handleFileChange}
                onDragEnter={handleDragOver}
                onDragOver={handleDragOver}
                onDragLeave={handleDragLeave}
                onDrop={handleDragLeave}
            />
        </div>
    );
};

export default EbayFileInput;
