import { useId, useState } from "react";

export function useControllableId(externalId?: string) {
  const generatedId = useId();
  const [id, setId] = useState(externalId ?? generatedId);
  return [id, setId] as const;
}
