import { describe, expect, it } from "vitest";
import { renderToString } from "react-dom/server";
import { EvoIconProvider } from "../../icon";
import { EvoFileInput } from "../file-input";
import { EvoFileInputHeader } from "../file-input-header";
import { EvoFileInputDescription } from "../file-input-description";
import { EvoFileInputCTA } from "../file-input-cta";

function renderFileInput(ui: React.ReactNode) {
  return renderToString(<EvoIconProvider>{ui}</EvoIconProvider>);
}

describe("EvoFileInput SSR", () => {
  it("renders default with all sub-components", () => {
    expect(
      renderFileInput(
        <EvoFileInput id="ssr-file">
          <EvoFileInputHeader>Upload files</EvoFileInputHeader>
          <EvoFileInputDescription>Supported: JPG, PNG</EvoFileInputDescription>
          <EvoFileInputCTA>Browse files</EvoFileInputCTA>
        </EvoFileInput>,
      ),
    ).toMatchSnapshot();
  });

  it("renders polymorphic header as h2", () => {
    expect(
      renderFileInput(
        <EvoFileInput id="header-h2">
          <EvoFileInputHeader as="h2">Upload</EvoFileInputHeader>
          <EvoFileInputCTA>Browse</EvoFileInputCTA>
        </EvoFileInput>,
      ),
    ).toMatchSnapshot();
  });

  it("renders without optional sub-components", () => {
    expect(
      renderFileInput(
        <EvoFileInput id="minimal">
          <EvoFileInputCTA>Browse</EvoFileInputCTA>
        </EvoFileInput>,
      ),
    ).toMatchSnapshot();
  });

  it("renders with multiple and accept attributes", () => {
    expect(
      renderFileInput(
        <EvoFileInput id="multi" multiple accept="image/*">
          <EvoFileInputCTA>Browse</EvoFileInputCTA>
        </EvoFileInput>,
      ),
    ).toMatchSnapshot();
  });

  it("renders with extra className on the wrapper", () => {
    expect(
      renderFileInput(
        <EvoFileInput id="cls" className="my-uploader">
          <EvoFileInputCTA>Browse</EvoFileInputCTA>
        </EvoFileInput>,
      ),
    ).toMatchSnapshot();
  });
});
