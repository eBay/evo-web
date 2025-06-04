function addContent(input: any): any {
  if (input && typeof input === "object") {
    if (Array.isArray(input)) {
      return input.map(addContent);
    }

    const clone: typeof input = {};
    for (const key in input) {
      clone[key] = addContent(input[key]);
    }

    const { content } = clone;
    if (typeof content === "string") {
      clone.content = (out: any) =>
        out.html ? out.html(content) : out.write(content);
    }

    return clone;
  }

  return input;
}

function buildExtensionTemplate(
  template: Marko.Template,
  code: string,
  args: Record<string, any> = {},
) {
  const builder = (args: Record<string, any>) => ({
    input: addContent(args),
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

export { addContent, buildExtensionTemplate };
