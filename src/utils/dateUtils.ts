export function toLocaleDateString(date?: Date): string {
  if (date === undefined) {
    return "Now";
  }

  return date.toLocaleDateString("en-GB", {
    month: "short",
    year: "numeric",
  });
}
