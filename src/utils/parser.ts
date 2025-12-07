export function parseWithDates(json: string) {
  return JSON.parse(json, (key, value) => {
    if (typeof value === "string") {
      // Detect ISO 8601 date strings
      const isoDateRegex = /^\d{4}-\d{2}-\d{2}T\d{2}:\d{2}:\d{2}(?:\.\d+)?Z$/

      if (isoDateRegex.test(value)) {
        const date = new Date(value)
        if (!isNaN(date.getTime())) return date
      }
    }

    return value
  });
}
