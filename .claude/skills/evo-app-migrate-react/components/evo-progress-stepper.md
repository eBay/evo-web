# ebay-progress-stepper → evo-progress-stepper

Import `EvoProgressStepper`, `EvoProgressStep`, `EvoProgressStepTitle`, and `EvoProgressStepContent` from `@evo-web/react/progress-stepper`. Keep steps in DOM order and assign consecutive zero-based `index` values. Put each step's body in `EvoProgressStepContent` after its title.

| ebayui-core-react                              | evo-react                                                     | Change                                                                                                      |
| ---------------------------------------------- | ------------------------------------------------------------- | ----------------------------------------------------------------------------------------------------------- |
| `current` on a step                            | `currentStep` on the parent and required `index` on each step | The parent shares the current position through context.                                                     |
| `state="attention"` on a step                  | `defaultState="attention"` on the parent                      | The current step receives the attention icon and styling.                                                   |
| `state` on an individual step                  | Removed                                                       | Complete and upcoming states derive from `currentStep` and `defaultState`.                                  |
| No heading prop                                | Required `a11yHeadingText`; optional `headingAs`              | Adds a clipped heading that names the sequence. Translate the text for the page language.                   |
| No per-step accessible icon label              | `a11yText` on a step                                          | Overrides the state-based English label.                                                                    |
| Body directly inside `.progress-stepper__text` | `EvoProgressStepContent`                                      | Renders a `<p>` by default, matching evo-marko. `stepContentAs` on the parent selects another body element. |

```tsx
import {
  EvoProgressStepper,
  EvoProgressStep,
  EvoProgressStepTitle,
  EvoProgressStepContent,
} from "@evo-web/react/progress-stepper";

<EvoProgressStepper a11yHeadingText="Shipment progress" currentStep={1}>
  <EvoProgressStep index={0}>
    <EvoProgressStepTitle>Ordered</EvoProgressStepTitle>
    <EvoProgressStepContent>Payment received</EvoProgressStepContent>
  </EvoProgressStep>
  <EvoProgressStep index={1}>
    <EvoProgressStepTitle>Shipped</EvoProgressStepTitle>
    <EvoProgressStepContent>Package is on its way</EvoProgressStepContent>
  </EvoProgressStep>
</EvoProgressStepper>;
```
