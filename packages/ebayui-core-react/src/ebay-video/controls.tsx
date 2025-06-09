/* eslint-disable @typescript-eslint/ban-ts-comment, @typescript-eslint/no-explicit-any */
import React from "react";
import { createRoot } from "react-dom/client";
// need that for broken definitions workaround
// @ts-ignore
import { ui } from "shaka-player/dist/shaka-player.ui";
import { ReportButton } from "./reportButton";

export function customControls(onReport = () => {}): { Report: any } {
    // Have to contain in order to not execute until shaka is downloaded

    const Report = class extends (ui.Element as any) {
        constructor(parent, controls, text) {
            super(parent, controls);

            const tempEl: HTMLElement = document.createElement("div");
            const buttonCallback = () => {
                const reportButton = tempEl.firstChild;
                parent.appendChild(reportButton);
                tempEl.remove();

                // have to listen to clicks this way (React onClick will not work):
                this.eventManager.listen(reportButton, "click", onReport);
            };
            createRoot(tempEl).render(<ReportButton callback={buttonCallback}>{text}</ReportButton>);
        }
    };

    Report.Factory = class {
        private readonly reportText: string;

        constructor(reportText) {
            this.reportText = reportText;
        }

        create(rootElement, controls) {
            return new Report(rootElement, controls, this.reportText);
        }
    };

    return { Report };
}
