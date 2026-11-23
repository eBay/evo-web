import { useState } from "react";
import { EvoSelect } from "../select";
import type { EvoSelectProps } from "../types";

type Sort = "newest" | "price";

export function SelectTypeTests() {
  const [sort, setSort] = useState<Sort>("newest");
  const [sorts, setSorts] = useState<Sort[]>([]);
  const [text, setText] = useState("");
  const [texts, setTexts] = useState<string[]>([]);
  const [, setNumber] = useState(0);

  const props: EvoSelectProps = { value: text, onChange: setText };
  const unionProps: EvoSelectProps<Sort> = {
    defaultValue: "price",
    onChange: setSort,
  };

  return (
    <>
      <EvoSelect value={sort} onChange={setSort} />
      <EvoSelect defaultValue={sort} onChange={setSort} />
      <EvoSelect multiple value={sorts} onChange={setSorts} />
      <EvoSelect multiple defaultValue={sorts} onChange={setSorts} />
      <EvoSelect value={text} onChange={setText} />
      <EvoSelect multiple value={texts} onChange={setTexts} />
      <EvoSelect {...props} />
      <EvoSelect {...unionProps} />
      {/* @ts-expect-error A number setter cannot receive selected strings. */}
      <EvoSelect value={sort} onChange={setNumber} />
      {/* @ts-expect-error Single selection does not report an array. */}
      <EvoSelect value={sort} onChange={setSorts} />
      {/* @ts-expect-error Multiple selection does not report a single value. */}
      <EvoSelect multiple value={sorts} onChange={setSort} />
    </>
  );
}
