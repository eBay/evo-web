import { describe, expect, it } from "vitest";
import { renderToString } from "react-dom/server";
import { EvoPhoneInput } from "../phone-input";

describe("EvoPhoneInput SSR", () => {
  it("renders a country selector, prefix, and masked input", () => {
    const html = renderToString(
      <EvoPhoneInput
        countryCode="US"
        locale="en-US"
        floatingLabel="Phone number"
        value="5551234567"
      />,
    );
    expect({
      wrapper: html.match(/^<span class="[^"]+"/)?.[0],
      button: html.match(/<button[^>]+aria-label="[^"]+"[^>]*>/)?.[0],
      prefix: html.match(/<span id="[^"]+">\+ 1<\/span>/)?.[0],
      input: html.match(/<input[^>]+type="tel"[^>]*>/)?.[0],
      flags: html.match(/fflag--/g)?.length,
    }).toMatchSnapshot();
  });
});
