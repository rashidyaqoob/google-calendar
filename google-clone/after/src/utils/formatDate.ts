// Learnings:

// Undefined argument --> Pull up local env Date. 
// formatDate(new Date(), { weekday: 'long', year: 'numeric', month: 'short', day: 'numeric' })

export function formatDate(date: Date, options?: Intl.DateTimeFormatOptions) {
  return new Intl.DateTimeFormat(undefined, options).format(date)
}
