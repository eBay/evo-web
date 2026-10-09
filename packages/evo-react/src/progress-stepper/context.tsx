import { createContext, use, useMemo } from "react";
import type { JSX, ReactNode } from "react";
import type { ProgressStepperState } from "./types";

type ProgressStepperContextValue = {
  currentStep: number;
  defaultState: ProgressStepperState;
  stepContentAs: keyof JSX.IntrinsicElements;
};

const ProgressStepperContext =
  createContext<ProgressStepperContextValue | null>(null);

export function ProgressStepperProvider({
  children,
  currentStep,
  defaultState,
  stepContentAs,
}: ProgressStepperContextValue & { children: ReactNode }) {
  const value = useMemo(
    () => ({ currentStep, defaultState, stepContentAs }),
    [currentStep, defaultState, stepContentAs],
  );
  return (
    <ProgressStepperContext value={value}>{children}</ProgressStepperContext>
  );
}

export function useProgressStepper() {
  const context = use(ProgressStepperContext);
  if (!context) {
    throw new Error("EvoProgressStep must be inside EvoProgressStepper");
  }
  return context;
}
