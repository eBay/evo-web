import { type Input } from "./index.marko";
declare const _default: {
    title: string;
    component: {
        render(input: Marko.TemplateInput<Input>): Marko.RenderedTemplate;
        mount(input: Marko.TemplateInput<Input>, reference: Node, position?: "afterbegin" | "afterend" | "beforebegin" | "beforeend"): Marko.MountedTemplate<Marko.TemplateInput<Input>>;
        api: "tags";
        _(): () => <__marko_internal_input extends unknown>(input: Marko.Directives & Input & Marko._.Relate<__marko_internal_input, Marko.Directives & Input>) => (Marko._.ReturnWithScope<__marko_internal_input, void>);
    };
    parameters: {
        docs: {
            description: {
                component: any;
            };
        };
    };
    argTypes: {
        renderBody: {};
        href: {
            description: string;
        };
        size: {
            options: string[];
            description: string;
            table: {
                defaultValue: {
                    summary: string;
                };
            };
            type: {
                category: string;
            };
        };
        priority: {
            options: string[];
            description: string;
            table: {
                defaultValue: {
                    summary: string;
                };
            };
            type: {
                category: string;
            };
        };
        fluid: {
            description: string;
            table: {
                category: string;
                defaultValue: {
                    summary: string;
                };
            };
        };
        borderless: {
            description: string;
            table: {
                category: string;
                defaultValue: {
                    summary: string;
                };
            };
        };
        bodyState: {
            description: string;
            options: string[];
            control: {
                type: string;
            };
            table: {
                defaultValue: {
                    summary: string;
                };
            };
            type: {
                category: string;
            };
        };
        a11yText: {
            description: string;
            table: {
                defaultValue: string;
            };
            control: {
                type: string;
            };
            type: {
                category: string;
            };
        };
        disabled: {
            description: string;
            table: {
                category: string;
                defaultValue: {
                    summary: string;
                };
            };
        };
        variant: {
            options: string[];
            description: string;
            table: {
                defaultValue: {
                    summary: string;
                };
            };
            type: {
                category: string;
            };
        };
        partiallyDisabled: {
            description: string;
            table: {
                defaultValue: {
                    summary: string;
                };
                category: string;
            };
        };
        transparent: {
            description: string;
            table: {
                defaultValue: {
                    summary: string;
                };
                category: string;
            };
        };
        fixedHeight: {
            description: string;
            table: {
                defaultValue: {
                    summary: string;
                };
                category: string;
            };
        };
        truncate: {
            description: string;
            table: {
                defaultValue: {
                    summary: string;
                };
                category: string;
            };
        };
        onClick: {
            action: string;
            description: string;
            table: {
                category: string;
                defaultValue: {
                    summary: string;
                };
            };
        };
        onEscape: {
            action: string;
            description: string;
            table: {
                category: string;
                defaultValue: {
                    summary: string;
                };
            };
        };
        onFocus: {
            action: string;
            description: string;
            table: {
                category: string;
                defaultValue: {
                    summary: string;
                };
            };
        };
        onBlur: {
            action: string;
            description: string;
            table: {
                category: string;
                defaultValue: {
                    summary: string;
                };
            };
        };
        spread: {
            control: {
                type: string;
            };
            description: string;
            table: {
                category: string;
            };
        };
    };
};
export default _default;
export declare const Standard: import("@storybook/marko").StoryFn<Input>;
export declare const ExpandButton: {
    (args: Record<string, any>): {
        input: any;
        component: Marko.Template<unknown, unknown>;
    };
    args: Record<string, any>;
    parameters: {
        docs: {
            source: {
                code: string;
            };
        };
    };
};
//# sourceMappingURL=button.stories.d.ts.map