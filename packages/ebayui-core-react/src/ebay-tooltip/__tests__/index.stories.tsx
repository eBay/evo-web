import React from "react";
import { EbayButton } from "../../ebay-button";
import { EbayTextbox } from "../../ebay-textbox";
import { EbayTooltip, EbayTooltipContent, EbayTooltipHost, PointerDirection } from "../index";

const allPointers: PointerDirection[] = [
    "top",
    "top-left",
    "top-right",
    "right",
    "right-bottom",
    "right-top",
    "bottom",
    "bottom-left",
    "bottom-right",
    "left",
    "left-bottom",
    "left-top",
];

export default {
    title: "notices & tips/ebay-tooltip",
};

export const DefaultTooltip = () => (
    <div style={{ width: "100%", textAlign: "center", marginTop: 100 }}>
        <EbayTooltip>
            <EbayTooltipHost>
                <EbayButton>Info</EbayButton>
            </EbayTooltipHost>

            <EbayTooltipContent>
                <p>Content</p>
            </EbayTooltipContent>
        </EbayTooltip>
    </div>
);

export const AnchorHost = () => (
    <div style={{ width: "100%", textAlign: "center", marginTop: 100 }}>
        <EbayTooltip>
            <EbayTooltipHost>
                <a href="https://www.ebay.com">View options</a>
            </EbayTooltipHost>

            <EbayTooltipContent>
                <p>Use Access Key &apos;S&apos; to display settings.</p>
            </EbayTooltipContent>
        </EbayTooltip>
    </div>
);

export const PointersWithAllDirections = () => (
    <div>
        {allPointers.map((pointerType, index) => (
            <div
                key={index}
                style={{
                    margin: "100px 0",
                    width: "100%",
                    textAlign: "center",
                }}
            >
                <EbayTooltip pointer={pointerType}>
                    <EbayTooltipHost>
                        <a href="https://www.ebay.com">{pointerType}</a>
                    </EbayTooltipHost>

                    <EbayTooltipContent>
                        <p>Use Access Key &apos;S&apos; to display settings.</p>
                    </EbayTooltipContent>
                </EbayTooltip>
            </div>
        ))}
    </div>
);

export const PointerWithCustomLocation = () => (
    <div style={{ width: "100%", textAlign: "center", marginTop: 100 }}>
        <EbayTooltip pointer="top-left" overlayStyle={{ top: 40, left: -16 }}>
            <EbayTooltipHost>
                <a href="https://www.ebay.com">View options</a>
            </EbayTooltipHost>

            <EbayTooltipContent>
                <p>Use Access Key &apos;S&apos; to display settings.</p>
            </EbayTooltipContent>
        </EbayTooltip>
    </div>
);

export const NoHover = () => (
    <div style={{ width: "100%", textAlign: "center", marginTop: 100 }}>
        <EbayTooltip noHover pointer="bottom">
            <EbayTooltipHost>
                <EbayTextbox placeholder="Email address" />
            </EbayTooltipHost>

            <EbayTooltipContent>
                <p>Use Access Key &apos;S&apos; to display settings.</p>
            </EbayTooltipContent>
        </EbayTooltip>
    </div>
);
