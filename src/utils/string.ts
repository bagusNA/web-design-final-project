export function randomString(length: number = 5): string {
  return Math.random().toString(36).substring(2, length)
}
