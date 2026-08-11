import React, { ComponentProps, FC, ReactElement, Children, cloneElement } from "react";
import classNames from "classnames";
import { filterByType } from "../utils";
import EbayListItem from "./list-item";
import { ListItemClickHandler } from "./types";

export type EbayListProps = ComponentProps<"div"> & {
    onButtonClick?: ListItemClickHandler;
};

const EbayList: FC<EbayListProps> = ({ className, style, children, onButtonClick = () => {}, ...rest }) => {
    const items = filterByType(children, EbayListItem);

    return (
        <div className={classNames("list", className)} style={style} {...rest}>
            <ul>
                {Children.map(items, (item: ReactElement, index) => {
                    const { as, onClick } = item.props as {
                        as?: string;
                        onClick?: (event: React.MouseEvent<HTMLElement>) => void;
                    };

                    // Add onClick handler for button items
                    const itemProps =
                        as === "button"
                            ? {
                                  onClick: (event) => {
                                      if (onClick) onClick(event);
                                      onButtonClick(event, { index });
                                  },
                              }
                            : {};

                    return cloneElement(item, itemProps);
                })}
            </ul>
        </div>
    );
};

export default EbayList;
