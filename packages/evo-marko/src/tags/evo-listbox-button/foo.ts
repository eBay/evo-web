import type { Input as ListboxInput } from "../evo-listbox/index.marko";
import {
  validSplit,
  type Input as ButtonInput,
} from "../evo-button/index.marko";
export interface Input<Index extends number | string> extends Marko.HTML.Div {
  selected?: ListboxInput<Index>["selected"];
  selectedChange?: ListboxInput<Index>["selectedChange"];
  open?: boolean;
  openChange?: (newOpen: boolean) => void;
  option?: ListboxInput<Index>["option"];
  name?: ListboxInput<Index>["name"];
  listSelection?: ListboxInput<Index>["listSelection"];
  prefixId?: string;
  unselectedText?: string;
  variant?: "standard" | "form";
  truncate?: boolean;
  fluid?: boolean;
  strategy?: "fixed" | "absolute";
  borderless?: boolean;
  floatingLabel?: string;
  disabled?: boolean;
  buttonName?: string;
  split?: ButtonInput["split"];
  invalid?: boolean;
  hasError?: boolean;
  /**
   * The clipped text for screen readers when an option is selected
   *
   * English default to be overridden is `"selected"`
   **/
  a11ySelectedText: string;
  prefixLabel?: string;
  postfixLabel?: string;
  collapseOnSelect?: boolean;
  buttonDescribedBy?: string;
}
(function <Index extends number | string>(this: void) {
  const input = Marko._.any as Input<Index>;
  const $signal = Marko._.any as AbortSignal;
  const $global = Marko._.getGlobal(
    // @ts-expect-error We expect the compiler to error because we are checking if the MarkoRun.Context is defined.
    (Marko._.error, Marko._.any as MarkoRun.Context),
  );
  const name = Marko._.hoist(() => __marko_internal_hoist__name);
  const inputClass = Marko._.hoist(() => __marko_internal_hoist__inputClass);
  const inputSelected = Marko._.hoist(
    () => __marko_internal_hoist__inputSelected,
  );
  const selectedChange = Marko._.hoist(
    () => __marko_internal_hoist__selectedChange,
  );
  const inputOpen = Marko._.hoist(() => __marko_internal_hoist__inputOpen);
  const openChange = Marko._.hoist(() => __marko_internal_hoist__openChange);
  const borderless = Marko._.hoist(() => __marko_internal_hoist__borderless);
  const disabled = Marko._.hoist(() => __marko_internal_hoist__disabled);
  const fluid = Marko._.hoist(() => __marko_internal_hoist__fluid);
  const invalid = Marko._.hoist(() => __marko_internal_hoist__invalid);
  const buttonName = Marko._.hoist(() => __marko_internal_hoist__buttonName);
  const options = Marko._.hoist(() => __marko_internal_hoist__options);
  const truncate = Marko._.hoist(() => __marko_internal_hoist__truncate);
  const prefixLabel = Marko._.hoist(() => __marko_internal_hoist__prefixLabel);
  const prefixId = Marko._.hoist(() => __marko_internal_hoist__prefixId);
  const postfixLabel = Marko._.hoist(
    () => __marko_internal_hoist__postfixLabel,
  );
  const unselectedText = Marko._.hoist(
    () => __marko_internal_hoist__unselectedText,
  );
  const floatingLabel = Marko._.hoist(
    () => __marko_internal_hoist__floatingLabel,
  );
  const collapseOnSelect = Marko._.hoist(
    () => __marko_internal_hoist__collapseOnSelect,
  );
  const listSelection = Marko._.hoist(
    () => __marko_internal_hoist__listSelection,
  );
  const variant = Marko._.hoist(() => __marko_internal_hoist__variant);
  const hasError = Marko._.hoist(() => __marko_internal_hoist__hasError);
  const strategy = Marko._.hoist(() => __marko_internal_hoist__strategy);
  const split = Marko._.hoist(() => __marko_internal_hoist__split);
  const buttonDescribedBy = Marko._.hoist(
    () => __marko_internal_hoist__buttonDescribedBy,
  );
  const a11ySelectedText = Marko._.hoist(
    () => __marko_internal_hoist__a11ySelectedText,
  );
  const onKeyDown = Marko._.hoist(() => __marko_internal_hoist__onKeyDown);
  const onFocusOut = Marko._.hoist(() => __marko_internal_hoist__onFocusOut);
  const htmlInput = Marko._.hoist(() => __marko_internal_hoist__htmlInput);
  const selected = Marko._.hoist(() => __marko_internal_hoist__selected);
  const open = Marko._.hoist(() => __marko_internal_hoist__open);
  const optionsList = Marko._.hoist(() => __marko_internal_hoist__optionsList);
  const selectedIndex = Marko._.hoist(
    () => __marko_internal_hoist__selectedIndex,
  );
  const selectedOption = Marko._.hoist(
    () => __marko_internal_hoist__selectedOption,
  );
  const rootId = Marko._.hoist(() => __marko_internal_hoist__rootId);
  const $root = Marko._.hoist(() => __marko_internal_hoist__$root);
  const expander = Marko._.hoist(() => __marko_internal_hoist__expander);
  const labelId = Marko._.hoist(() => __marko_internal_hoist__labelId);
  const $listbox = Marko._.hoist(() => __marko_internal_hoist__$listbox);
  const __marko_internal_tag_1 = Marko._.resolveTemplate(
    import("marko/tags/const.d.marko"),
  );
  {
    const {
      name,
      class: inputClass,
      selected: inputSelected,
      selectedChange,
      open: inputOpen,
      openChange,
      borderless,
      disabled,
      fluid,
      invalid,
      buttonName,
      option: options,
      truncate,
      prefixLabel,
      prefixId,
      postfixLabel,
      unselectedText = "-",
      floatingLabel,
      collapseOnSelect,
      listSelection,
      variant,
      hasError,
      strategy,
      split,
      buttonDescribedBy,
      a11ySelectedText = "selected",
      onKeyDown,
      onFocusOut,
      ...htmlInput
    } = Marko._.returned(() => __marko_internal_rendered_1);
    const __marko_internal_rendered_1 = Marko._.renderTemplate(
      __marko_internal_tag_1 /*const*/,
    )()()({
      value: input,
    });
    const __marko_internal_tag_2 = Marko._.resolveTemplate(
      import("marko/tags/let.d.marko"),
    );
    {
      const selected = Marko._.returned(() => __marko_internal_rendered_2);
      const __marko_internal_rendered_2 = Marko._.renderTemplate(
        __marko_internal_tag_2 /*let*/,
      )()()({
        value: input.selected,
        valueChange: input.selectedChange,
      });
      const __marko_internal_change__selected = Marko._.change(
        "selected",
        "value",
        __marko_internal_rendered_2.return,
      );
      const __marko_internal_tag_3 = Marko._.resolveTemplate(
        import("marko/tags/let.d.marko"),
      );
      {
        const open = Marko._.returned(() => __marko_internal_rendered_3);
        const __marko_internal_rendered_3 = Marko._.renderTemplate(
          __marko_internal_tag_3 /*let*/,
        )()()({
          value: input.open,
          valueChange: input.openChange,
        });
        const __marko_internal_change__open = Marko._.change(
          "open",
          "value",
          __marko_internal_rendered_3.return,
        );
        const __marko_internal_tag_4 = Marko._.resolveTemplate(
          import("marko/tags/const.d.marko"),
        );
        {
          const optionsList = Marko._.returned(
            () => __marko_internal_rendered_4,
          );
          const __marko_internal_rendered_4 = Marko._.renderTemplate(
            __marko_internal_tag_4 /*const*/,
          )()()({
            value: [...(options || [])],
          });
          const __marko_internal_tag_5 = Marko._.resolveTemplate(
            import("marko/tags/const.d.marko"),
          );
          {
            const selectedIndex = Marko._.returned(
              () => __marko_internal_rendered_5,
            );
            const __marko_internal_rendered_5 = Marko._.renderTemplate(
              __marko_internal_tag_5 /*const*/,
            )()()({
              value:
                typeof selected === "number"
                  ? selected
                  : optionsList.findIndex((o) => o.value === selected),
            });
            const __marko_internal_tag_6 = Marko._.resolveTemplate(
              import("marko/tags/const.d.marko"),
            );
            {
              const selectedOption = Marko._.returned(
                () => __marko_internal_rendered_6,
              );
              const __marko_internal_rendered_6 = Marko._.renderTemplate(
                __marko_internal_tag_6 /*const*/,
              )()()({
                value: optionsList[selectedIndex],
              });
              const __marko_internal_tag_7 = Marko._.resolveTemplate(
                import("marko/tags/id.d.marko"),
              );
              {
                const rootId = Marko._.returned(
                  () => __marko_internal_rendered_7,
                );
                const __marko_internal_rendered_7 = Marko._.renderTemplate(
                  __marko_internal_tag_7 /*id*/,
                )()()({
                  /*id*/
                });
                const __marko_internal_tag_8 = Marko._.resolveTemplate(
                  import("marko/tags/const.d.marko"),
                );
                {
                  const $root = Marko._.returned(
                    () => __marko_internal_rendered_8,
                  );
                  const __marko_internal_rendered_8 = Marko._.renderTemplate(
                    __marko_internal_tag_8 /*const*/,
                  )()()(
                    // TODO: remove in favor of $root once Marko supports dynamic tag return
                    {
                      value() {
                        return document.getElementById(rootId)!;
                      },
                    },
                  );
                  const __marko_internal_tag_9 = Marko._.resolveTemplate(
                    import("../tags/evo-expander/index.marko"),
                  );
                  {
                    const expander: Marko.Return<
                      (typeof import("<evo-expander>"))["default"]
                    >["value"] = Marko._.returned(
                      () => __marko_internal_rendered_9,
                    );
                    const __marko_internal_rendered_9 = Marko._.renderTemplate(
                      __marko_internal_tag_9 /*evo-expander*/,
                    )()()({
                      open: open,

                      strategy: strategy,

                      host: $root,

                      overlay: $listbox,
                    });
                    const __marko_internal_tag_10 =
                      truncate && !fluid ? "div" : "span";
                    const __marko_internal_rendered_10 =
                      Marko._.renderDynamicTag(
                        __marko_internal_tag_10 /*truncate && !fluid ? "div" : "span"*/,
                      )()()({
                        ...htmlInput,

                        id: rootId,

                        class: [
                          "listbox-button",
                          inputClass,
                          fluid && "listbox-button--fluid",
                          variant === "form" && `listbox-button--form`,
                          hasError && "listbox-button--error",
                        ],

                        onKeyDown(e: KeyboardEvent, el: HTMLDivElement) {
                          if (open && e.key === "Escape") {
                            __marko_internal_change__open.open = false;
                          }
                          onKeyDown && onKeyDown(e, el);
                        },

                        onFocusOut(e: FocusEvent, el: HTMLDivElement) {
                          if (!el.contains(e.relatedTarget as Node)) {
                            __marko_internal_change__open.open = false;
                          }
                          onFocusOut && onFocusOut(e, el);
                        },
                        ["content" /*truncate && !fluid ? "div" : "span"*/]:
                          (() => {
                            const __marko_internal_rendered_11 =
                              Marko._.renderNativeTag("button")()()({
                                class: [
                                  "listbox-button__control",
                                  "btn",
                                  validSplit.includes(split!) &&
                                    `btn--split-${split}`,
                                  borderless ? "btn--borderless" : "btn--form",
                                  truncate && "btn--truncated",
                                  floatingLabel && "btn--floating-label",
                                ],

                                value: selectedOption.value as string,

                                type: "button",

                                disabled: disabled,

                                name: buttonName,

                                "aria-haspopup": "listbox",

                                "aria-describedby": buttonDescribedBy,

                                "aria-labelledby": prefixId,

                                "aria-invalid": invalid && "true",

                                "aria-expanded": expander.ariaExpanded,

                                onClick() {
                                  __marko_internal_change__open.open = !open;
                                },
                                ["content" /*button*/]: (() => {
                                  const __marko_internal_rendered_12 =
                                    Marko._.renderNativeTag("span")()()({
                                      class: "btn__cell",
                                      ["content" /*span*/]: (() => {
                                        if (floatingLabel) {
                                          Marko._.renderNativeTag("span")()()({
                                            class: [
                                              "btn__floating-label",
                                              "btn__floating-label--animate",
                                              !selectedOption &&
                                                "btn__floating-label--inline",
                                            ],
                                            ["content" /*span*/]: (() => {
                                              floatingLabel;
                                              return () => {
                                                return Marko._.voidReturn;
                                              };
                                            })(),
                                          });
                                        } else if (prefixLabel) {
                                          Marko._.renderNativeTag("span")()()({
                                            class: "btn__label",
                                            ["content" /*span*/]: (() => {
                                              prefixLabel;
                                              return () => {
                                                return Marko._.voidReturn;
                                              };
                                            })(),
                                          });
                                        }
                                        const __marko_internal_tag_13 =
                                          Marko._.resolveTemplate(
                                            import("marko/tags/id.d.marko"),
                                          );
                                        {
                                          const labelId = Marko._.returned(
                                            () => __marko_internal_rendered_13,
                                          );
                                          const __marko_internal_rendered_13 =
                                            Marko._.renderTemplate(
                                              __marko_internal_tag_13 /*id*/,
                                            )()()({
                                              /*id*/
                                            });
                                          if (selectedOption) {
                                            if (selectedOption.icon) {
                                              Marko._.renderNativeTag(
                                                "span",
                                              )()()({
                                                ...selectedOption.icon,
                                                id: labelId,
                                                class: "btn__text",
                                              });
                                            }
                                            Marko._.renderNativeTag("span")()()(
                                              {
                                                id: labelId,
                                                class: "btn__text",
                                                ["content" /*span*/]: (() => {
                                                  const __marko_internal_tag_14 =
                                                    selectedOption.content;
                                                  Marko._.renderDynamicTag(
                                                    __marko_internal_tag_14 /*selectedOption.content*/,
                                                  )()()({
                                                    /*selectedOption.content*/
                                                  });
                                                  return () => {
                                                    return Marko._.voidReturn;
                                                  };
                                                })(),
                                              },
                                            );
                                            if (postfixLabel) {
                                              Marko._.renderNativeTag(
                                                "span",
                                              )()()({
                                                class: "btn__postfix-label",
                                                ["content" /*span*/]: (() => {
                                                  (" ");
                                                  postfixLabel;
                                                  return () => {
                                                    return Marko._.voidReturn;
                                                  };
                                                })(),
                                              });
                                            }
                                          } else if (!floatingLabel) {
                                            Marko._.renderNativeTag("span")()()(
                                              {
                                                id: labelId,
                                                class: "btn__text",
                                                ["content" /*span*/]: (() => {
                                                  unselectedText;
                                                  return () => {
                                                    return Marko._.voidReturn;
                                                  };
                                                })(),
                                              },
                                            );
                                          }
                                          const __marko_internal_tag_15 =
                                            Marko._.resolveTemplate(
                                              import("../evo-icon/tags/evo-icon-chevron-down-16.marko"),
                                            );
                                          Marko._.renderTemplate(
                                            __marko_internal_tag_15 /*evo-icon-chevron-down-16*/,
                                          )()()({
                                            /*evo-icon-chevron-down-16*/
                                          });
                                          return () => {
                                            return new (class MarkoReturn<
                                              Return = void,
                                            > {
                                              [Marko._.scope] = { labelId };
                                              declare return: Return;
                                              constructor(_?: Return) {}
                                            })();
                                          };
                                        }
                                      })(),
                                    });
                                  return () => {
                                    return new (class MarkoReturn<
                                      Return = void,
                                    > {
                                      [Marko._.scope] = Marko._.readScope(
                                        __marko_internal_rendered_12,
                                      );
                                      declare return: Return;
                                      constructor(_?: Return) {}
                                    })();
                                  };
                                })(),
                              });
                            const __marko_internal_tag_16 =
                              Marko._.resolveTemplate(
                                import("../evo-listbox/index.marko"),
                              );
                            {
                              const $listbox = Marko._.returned(
                                () => __marko_internal_rendered_16,
                              );
                              const __marko_internal_rendered_16 =
                                Marko._.renderTemplate(
                                  __marko_internal_tag_16 /*evo-listbox*/,
                                )()()({
                                  style: expander.floatingStyles,

                                  class: [
                                    "listbox-button__listbox",
                                    strategy === "fixed" &&
                                      "listbox-button__listbox--fixed",
                                  ],

                                  selected: selected,
                                  selectedChange(
                                    // @ts-ignore
                                    _selected,
                                  ) {
                                    __marko_internal_change__selected.selected =
                                      _selected;
                                  },

                                  name: name,

                                  listSelection: listSelection,

                                  a11ySelectedText: a11ySelectedText,

                                  onClick() {
                                    if (collapseOnSelect)
                                      __marko_internal_change__open.open = false;
                                  },

                                  option: input.option,
                                });
                              return () => {
                                return new (class MarkoReturn<Return = void> {
                                  [Marko._.scope] = {
                                    ...Marko._.readScope(
                                      __marko_internal_rendered_11,
                                    ),
                                    $listbox,
                                  };
                                  declare return: Return;
                                  constructor(_?: Return) {}
                                })();
                              };
                            }
                          })(),
                      });
                    var __marko_internal_hoist__name = name;
                    var __marko_internal_hoist__inputClass = inputClass;
                    var __marko_internal_hoist__inputSelected = inputSelected;
                    var __marko_internal_hoist__selectedChange = selectedChange;
                    var __marko_internal_hoist__inputOpen = inputOpen;
                    var __marko_internal_hoist__openChange = openChange;
                    var __marko_internal_hoist__borderless = borderless;
                    var __marko_internal_hoist__disabled = disabled;
                    var __marko_internal_hoist__fluid = fluid;
                    var __marko_internal_hoist__invalid = invalid;
                    var __marko_internal_hoist__buttonName = buttonName;
                    var __marko_internal_hoist__options = options;
                    var __marko_internal_hoist__truncate = truncate;
                    var __marko_internal_hoist__prefixLabel = prefixLabel;
                    var __marko_internal_hoist__prefixId = prefixId;
                    var __marko_internal_hoist__postfixLabel = postfixLabel;
                    var __marko_internal_hoist__unselectedText = unselectedText;
                    var __marko_internal_hoist__floatingLabel = floatingLabel;
                    var __marko_internal_hoist__collapseOnSelect =
                      collapseOnSelect;
                    var __marko_internal_hoist__listSelection = listSelection;
                    var __marko_internal_hoist__variant = variant;
                    var __marko_internal_hoist__hasError = hasError;
                    var __marko_internal_hoist__strategy = strategy;
                    var __marko_internal_hoist__split = split;
                    var __marko_internal_hoist__buttonDescribedBy =
                      buttonDescribedBy;
                    var __marko_internal_hoist__a11ySelectedText =
                      a11ySelectedText;
                    var __marko_internal_hoist__onKeyDown = onKeyDown;
                    var __marko_internal_hoist__onFocusOut = onFocusOut;
                    var __marko_internal_hoist__htmlInput = htmlInput;
                    var __marko_internal_hoist__selected = selected;
                    var __marko_internal_hoist__open = open;
                    var __marko_internal_hoist__optionsList = optionsList;
                    var __marko_internal_hoist__selectedIndex = selectedIndex;
                    var __marko_internal_hoist__selectedOption = selectedOption;
                    var __marko_internal_hoist__rootId = rootId;
                    var __marko_internal_hoist__$root = $root;
                    var __marko_internal_hoist__expander = expander;
                    var {
                      labelId: __marko_internal_hoist__labelId,
                      $listbox: __marko_internal_hoist__$listbox,
                    } = Marko._.readScope(__marko_internal_rendered_10);
                  }
                }
              }
            }
          }
        }
      }
    }
  }
  Marko._.noop({
    name,
    inputClass,
    inputSelected,
    selectedChange,
    inputOpen,
    openChange,
    borderless,
    disabled,
    fluid,
    invalid,
    buttonName,
    options,
    truncate,
    prefixLabel,
    prefixId,
    postfixLabel,
    unselectedText,
    floatingLabel,
    collapseOnSelect,
    listSelection,
    variant,
    hasError,
    strategy,
    split,
    buttonDescribedBy,
    a11ySelectedText,
    onKeyDown,
    onFocusOut,
    htmlInput,
    selected,
    open,
    optionsList,
    selectedIndex,
    selectedOption,
    rootId,
    $root,
    expander,
    labelId,
    $listbox,
    input,
    $global,
    $signal,
  });
  return;
})();
export default new (class Template extends Marko._.Template<{
  render<Index extends number | string>(
    input: Marko.TemplateInput<Input<Index>>,
  ): Marko.RenderedTemplate;

  mount<Index extends number | string>(
    input: Marko.TemplateInput<Input<Index>>,
    reference: Node,
    position?: "afterbegin" | "afterend" | "beforebegin" | "beforeend",
  ): Marko.MountedTemplate<typeof input, void>;

  _<__marko_internal_apply = 1>(): __marko_internal_apply extends 0
    ? <Index extends number | string>() => <
        __marko_internal_input extends unknown,
      >(
        input: Marko.Directives &
          Input<Index> &
          Marko._.Relate<
            __marko_internal_input,
            Marko.Directives & Input<Index>
          >,
      ) => Marko._.ReturnWithScope<__marko_internal_input, void>
    : () => <
        __marko_internal_input extends unknown,
        Index extends number | string,
      >(
        input: Marko.Directives &
          Input<Index> &
          Marko._.Relate<
            __marko_internal_input,
            Marko.Directives & Input<Index>
          >,
      ) => Marko._.ReturnWithScope<__marko_internal_input, void>;
}> {})();
