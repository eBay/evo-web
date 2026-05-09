import { useId, useState } from "react";

export function useControllableId(initialId?: string) {
  const generatedId = useId();
  const [id, setId] = useState(initialId ?? generatedId);
  return [id, setId] as const;
}
