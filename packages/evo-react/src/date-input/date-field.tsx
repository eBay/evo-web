import { useCallback, useState } from "react";
import type { ChangeEvent, FocusEvent, KeyboardEvent } from "react";
import { EvoInput } from "../input";
import type { EvoInputPostfixProps } from "../input";
import { format, getLocale, parse, placeholder } from "../utils/dates";
import type {
  DateInputValue,
  EvoDateFieldProps,
  InvalidDateEvent,
} from "./types";

type DateFieldProps = {
  iso?: DateInputValue;
  locale?: string;
  disabled?: boolean;
  readOnly?: boolean;
  index: number;
  input?: EvoDateFieldProps;
  postfix?: EvoInputPostfixProps;
  onCommit: (iso: DateInputValue) => void;
  onInvalidDate?: (event: InvalidDateEvent) => void;
};

export function DateField({
  iso,
  locale,
  disabled,
  readOnly,
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
    invalid: inputInvalid,
    ...inputRest
  } = input ?? {};
  const [draft, setDraft] = useState<string | null>(null);
  const [invalid, setInvalid] = useState(false);
  const [prevIso, setPrevIso] = useState(iso);
  if (iso !== prevIso) {
    setPrevIso(iso);
    setDraft(null);
    setInvalid(false);
  }

  const display = draft ?? (iso ? format(iso, locale) || iso : "");

  const handleChange = useCallback(
    (event: ChangeEvent<HTMLInputElement>) => {
      setDraft(event.currentTarget.value);
      setInvalid(false);
      onChange?.(event);
    },
    [onChange],
  );

  const handleBlur = useCallback(
    (event: FocusEvent<HTMLInputElement>) => {
      const userInput = event.currentTarget.value;
      if (userInput.trim() === "") {
        setDraft(null);
        setInvalid(false);
        onCommit("");
        onBlur?.(event);
        return;
      }

      const parsed = parse(userInput, locale);
      if (parsed === null) {
        setInvalid(true);
        onInvalidDate?.({ value: userInput, index });
        onBlur?.(event);
        return;
      }

      setDraft(null);
      setInvalid(false);
      onCommit(parsed);
      onBlur?.(event);
    },
    [index, locale, onBlur, onCommit, onInvalidDate],
  );

  const handleKeyUp = useCallback(
    (event: KeyboardEvent<HTMLInputElement>) => {
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
    },
    [locale, onKeyUp],
  );

  return (
    <EvoInput
      {...inputRest}
      disabled={disabled}
      readOnly={readOnly}
      invalid={inputInvalid || invalid}
      placeholder={placeholderText ?? placeholder(locale)}
      postfix={postfix}
      value={display}
      onBlur={handleBlur}
      onChange={handleChange}
      onKeyUp={handleKeyUp}
    />
  );
}
