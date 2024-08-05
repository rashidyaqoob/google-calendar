// Learnings:
// used to add any number of classes.


export function cc(...classes: unknown[]) {
  return classes.filter(c => typeof c === "string").join(" ")
}
