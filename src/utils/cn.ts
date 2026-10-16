export type ClassValue = string | number | boolean | undefined | null

/**
 * Class name merging utility
 * Combines conditional class names into a single string.
 */
export function cn(...classes: ClassValue[]): string {
  return classes.filter(Boolean).join(' ')
}
