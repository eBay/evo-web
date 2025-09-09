export function getNItems(n: number, getAttrs: (i: number) => any[]) {
  return Array.from({ length: n }).map((_, i) => getAttrs(i));
}

// Helper method to render pagination items
export function getPaginationItems(
  n: number,
  href: boolean = false,
  selected: number = -1,
  navDisabled: boolean = false,
  skipPrevNext: boolean = false,
) {
  const items = [];
  if (!skipPrevNext) {
    items.push({
      type: "previous",
      href: href ? "#" : null,
      disabled: navDisabled,
    });
  }
  for (let i = 0; i < n; i++) {
    items.push({
      href: href ? "#" : null,
      current: i === selected,
    });
  }
  if (!skipPrevNext) {
    items.push({
      type: "next",
      href: href ? "#" : null,
      disabled: navDisabled,
    });
  }
  return items;
}
