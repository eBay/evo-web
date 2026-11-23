import { useState } from "react";
import { EvoAccordion } from "../accordion";
import { EvoAccordionItem } from "../accordion-item";
import type { EvoAccordionItemProps, EvoAccordionProps } from "../types";

type Section = "shipping" | "returns";

export function AccordionTypeTests() {
  const [section, setSection] = useState<Section | undefined>();
  const [sections, setSections] = useState<Section[]>([]);
  const [text, setText] = useState<string | undefined>();
  const [texts, setTexts] = useState<string[]>([]);
  const [, setNumber] = useState(0);

  const props: EvoAccordionProps = { open: text, onOpenChange: setText };
  const unionProps: EvoAccordionProps<Section> = {
    defaultOpen: "shipping",
    onOpenChange: setSection,
  };
  const itemProps: EvoAccordionItemProps<Section> = { id: "shipping" };
  // @ts-expect-error Item IDs must match their explicitly specified type.
  const invalidItem: EvoAccordionItemProps<Section> = { id: "other" };

  return (
    <>
      <EvoAccordion open={section} onOpenChange={setSection} />
      <EvoAccordion defaultOpen={section} onOpenChange={setSection} />
      <EvoAccordion open={sections} onOpenChange={setSections} />
      <EvoAccordion defaultOpen={sections} onOpenChange={setSections} />
      <EvoAccordion open={text} onOpenChange={setText} />
      <EvoAccordion open={texts} onOpenChange={setTexts} />
      <EvoAccordion {...props} />
      <EvoAccordion {...unionProps} />
      <EvoAccordionItem {...itemProps} />
      <EvoAccordionItem {...invalidItem} />
      {/* @ts-expect-error A number setter cannot receive section IDs. */}
      <EvoAccordion open={section} onOpenChange={setNumber} />
      {/* @ts-expect-error Multi-open state requires an array setter. */}
      <EvoAccordion open={sections} onOpenChange={setSection} />
    </>
  );
}
