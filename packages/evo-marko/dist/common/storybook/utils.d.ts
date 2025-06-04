declare function addRenderBodies(input: any): any;
declare function buildExtensionTemplate(template: Marko.Template, code: string, args?: Record<string, any>): {
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
export { addRenderBodies, buildExtensionTemplate };
//# sourceMappingURL=utils.d.ts.map