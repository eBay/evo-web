export interface ConfigModules {
    [key: string]: string[];
}

export interface Config {
    modules: ConfigModules;
    skip: string[];
    skipIndex: string[];
    overrideFile: {
        [key: string]: string;
    };
    nested: {
        [key: string]: ConfigModules;
    };
}

const config: Config = {
    modules: {
        core: ["global", "utility"],
        combo: ["core", "lightbox-dialog", "form", "progress-spinner"],
        form: [
            "button",
            "checkbox",
            "field",
            "radio",
            "select",
            "switch",
            "textbox",
        ],
    },
    skip: [
        "bundles",
        "gh",
        "mixins",
        "tokens",
        "svg",
        "icon-large",
        "variables",
    ],
    skipIndex: ["dark-mode", "rounded-off", "variables"],
    overrideFile: {},
    nested: {
        tokens: {
            index: ["evo-core", "evo-light"],
            tokens: ["tokens/evo-core", "tokens/evo-light"],
            "evo-class": ["tokens/evo-core", "tokens/evo-light-class"],
            "evo-live": ["tokens/evo-core", "tokens/evo-live-dark"],
            "evo-live-class": ["tokens/evo-core", "tokens/evo-live-dark-class"],
        },
    },
};
export default config;
