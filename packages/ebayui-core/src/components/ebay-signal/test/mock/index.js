import { createRenderBody } from "../../../../common/test-utils/shared";

export const Basic = {
    renderBody: createRenderBody("neutral"),
};

export const basicNeutral = {
    status: "neutral",
    renderBody: createRenderBody("neutral"),
};

export const basicTrustworthy = {
    status: "trustworthy",
    renderBody: createRenderBody("trustworthy"),
};

export const basicRecent = {
    status: "recent",
    renderBody: createRenderBody("recent"),
};

export const basicTimeSensitive = {
    status: "time-sensitive",
    renderBody: createRenderBody("time sensitive"),
};

export const basicWithClass = {
    renderBody: createRenderBody("neutral"),
    class: "custom-class",
};

export const basicTone = {
    tone: "positive",
    renderBody: createRenderBody("tone"),
};

export const toneOverStatus = {
    status: "recent",
    tone: "warning",
    renderBody: createRenderBody("tone over status"),
};

export const strong = {
    emphasis: "strong",
    renderBody: createRenderBody("strong"),
};

export const subtle = {
    emphasis: "subtle",
    renderBody: createRenderBody("subtle"),
};

export const defaultEmphasis = {
    emphasis: "default",
    renderBody: createRenderBody("default emphasis"),
};

export const statusWithEmphasis = {
    status: "trustworthy",
    emphasis: "strong",
    renderBody: createRenderBody("status emphasis"),
};

export const withIcon = {
    tone: "information",
    icon: {
        renderBody: createRenderBody(
            '<svg class="icon icon--12" aria-hidden="true"></svg>',
        ),
    },
    renderBody: createRenderBody("label"),
};
