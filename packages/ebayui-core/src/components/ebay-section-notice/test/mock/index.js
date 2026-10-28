import { createRenderBody } from "../../../../common/test-utils/shared";

export const SectionInfo = {
    a11yText: "Heading Text",
    status: "information",
    renderBody: createRenderBody("Content"),
};

export const SectionWarning = {
    a11yText: "Heading Text",
    status: "warning",
    renderBody: createRenderBody("Content"),
};

export const SectionLight = {
    renderBody: createRenderBody("Content"),
    footer: {
        renderBody: createRenderBody("Footer"),
    },
};
