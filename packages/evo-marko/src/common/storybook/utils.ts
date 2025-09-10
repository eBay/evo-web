function buildExtensionTemplate(
  template: Marko.Template,
  code: string,
  args: Record<string, any> = {},
) {
  const builder = (args: Record<string, any>) => ({
    input: args,
    component: template,
  });

  builder.args = Object.assign({}, args);
  builder.parameters = {
    docs: {
      source: {
        code,
      },
    },
  };

  return builder;
}

export { buildExtensionTemplate };
