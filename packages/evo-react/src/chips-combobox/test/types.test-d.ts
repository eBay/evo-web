import { expectTypeOf } from "vitest";
import type { EvoChipsComboboxProps } from "../types";

expectTypeOf<EvoChipsComboboxProps>().not.toHaveProperty("required");
expectTypeOf<EvoChipsComboboxProps>().not.toHaveProperty("inputSize");
