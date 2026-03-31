import React, { FC } from "react";
import classNames from "classnames";
import type { EbayChartLegendProps } from "./types";

const EbayChartLegend: FC<EbayChartLegendProps> = ({ items, className, ...rest }) => (
    <div {...rest} className={classNames("chart-legend", className)}>
        <dl className="chart-legend__list">
            {items.map((legendItem, i) => (
                <div key={i} className="chart-legend__item">
                    <dt className="chart-legend__label">{legendItem.name}</dt>
                    <dd className="chart-legend__value">{legendItem.value}</dd>
                </div>
            ))}
        </dl>
    </div>
);

export default EbayChartLegend;
