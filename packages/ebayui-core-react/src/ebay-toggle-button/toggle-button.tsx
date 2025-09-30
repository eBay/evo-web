import React, { FC, MouseEvent } from "react";
import cx from "classnames";
import { EbayIcon } from "../ebay-icon";
import { ToggleButtonProps } from "./types";

const ToggleButton: FC<ToggleButtonProps> = ({
    pressed = false,
    children,
    className,
    title,
    subtitle,
    layoutType = "minimal",
    icon,
    img,
    onToggle,
    ...rest
}) => {
    const handleClick = (event: MouseEvent<HTMLButtonElement>) => {
        if (onToggle) {
            onToggle(event, { pressed: !pressed });
        }
    };

    const getButtonContent = () => {
        if (children) {
            return children;
        }
        return (
            <>
                <p className="toggle-button__title">{title}</p>
                {subtitle && <p className="toggle-button__subtitle">{subtitle}</p>}
            </>
        );
    };

    const getMediaContent = () => {
        if (icon) {
            return (
                <div className="toggle-button__icon">{typeof icon === "string" ? <EbayIcon name={icon} /> : icon}</div>
            );
        } else if (img) {
            return (
                <span className="toggle-button__image-container">
                    {img.fillPlacement ? (
                        <span
                            role="img"
                            aria-label={img.alt}
                            className="toggle-button__image"
                            style={{
                                backgroundImage: `url(${img.src})`,
                                backgroundPosition: img.fillPlacement || "center",
                                backgroundSize: "cover",
                                backgroundRepeat: "no-repeat",
                            }}
                        />
                    ) : (
                        <span className="toggle-button__image">
                            <img src={img.src} alt={img.alt} />
                        </span>
                    )}
                </span>
            );
        }
        return;
    };

    return (
        <button
            onClick={handleClick}
            className={cx("toggle-button", className, {
                "toggle-button--minimal-layout": layoutType === "minimal",
                "toggle-button--list-layout": layoutType === "list",
                "toggle-button--gallery-layout": layoutType === "gallery",
            })}
            aria-pressed={pressed}
            {...rest}
        >
            {getMediaContent()}
            <div className="toggle-button__content">{getButtonContent()}</div>
        </button>
    );
};

export default ToggleButton;
