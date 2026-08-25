import { useState } from "react";
import type { ChangeEvent, FocusEvent, KeyboardEvent } from "react";
import type { DayISO } from "../calendar";
import { EvoInput } from "../input";
import type { EvoInputPostfixProps } from "../input";
import { format, getLocale, parse, placeholder } from "../utils/dates";
import type { EvoDateFieldProps, InvalidDateEvent } from "./types";

type DateFieldProps = {
  iso?: DayISO;
  locale?: string;
  disabled?: boolean;
  index: number;
  input?: EvoDateFieldProps;
  postfix?: EvoInputPostfixProps;
  onCommit: (iso: DayISO | undefined) => void;
  onInvalidDate?: (event: InvalidDateEvent) => void;
};

export function DateField({
  iso,
  locale,
  disabled,
  index,
  input,
  postfix,
  onCommit,
  onInvalidDate,
}: DateFieldProps) {
  const {
    onBlur,
    onChange,
    onKeyUp,
    placeholder: placeholderText,
    disabled: inputDisabled,
    ...inputRest
  } = input ?? {};
  const [draft, setDraft] = useState<string | null>(null);
  const [prevIso, setPrevIso] = useState(iso);
  if (iso !== prevIso) {
    setPrevIso(iso);
    setDraft(null);
  }

  const display = draft ?? (iso ? format(iso, locale) || iso : "");

  const handleChange = (event: ChangeEvent<HTMLInputElement>) => {
    setDraft(event.currentTarget.value);
    onChange?.(event);
  };

  const handleBlur = (event: FocusEvent<HTMLInputElement>) => {
    const userInput = event.currentTarget.value;
    if (userInput.trim() === "") {
      setDraft(null);
      onCommit(undefined);
      onBlur?.(event);
      return;
    }

    const parsed = parse(userInput, locale);
    if (parsed === null) {
      onInvalidDate?.({ value: userInput, index });
      onBlur?.(event);
      return;
    }

    setDraft(null);
    onCommit(parsed);
    onBlur?.(event);
  };

  const handleKeyUp = (event: KeyboardEvent<HTMLInputElement>) => {
    onKeyUp?.(event);
    if (!/^\d$/.test(event.key)) {
      return;
    }

    const field = event.currentTarget;
    const { value } = field;
    if (field.selectionStart !== value.length) {
      return;
    }

    const { o: order, s: sep } = getLocale(locale);
    let i = 0;
    let start = 0;
    for (let currStart; ~(currStart = value.indexOf(sep[i], start)); ) {
      start = currStart + sep[i].length;
      i++;
    }

    const segmentLength = order[i] === "y" ? 4 : 2;
    if (value.length - start === segmentLength && sep[i]) {
      setDraft(`${value}${sep[i]}`);
    }
  };

  return (
    <EvoInput
      {...inputRest}
      disabled={inputDisabled ?? disabled}
      placeholder={placeholderText ?? placeholder(locale)}
      postfix={postfix}
      value={display}
      onBlur={handleBlur}
      onChange={handleChange}
      onKeyUp={handleKeyUp}
    />
  );
}
