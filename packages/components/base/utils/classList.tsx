export const classList = (classes: Record<string, boolean | undefined | null>): string =>
  Object.entries(classes)
    .filter(([, value]) => value)
    .map(([key]) => key)
    .join(" ");
