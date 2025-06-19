/**
 * Safely checks if we're in a browser environment
 */
export function isBrowser(): boolean {
  return typeof window !== "undefined"
}

/**
 * Safely checks if a browser feature exists
 */
export function browserHasFeature(featureName: string): boolean {
  if (!isBrowser()) return false

  try {
    return featureName in window
  } catch (e) {
    return false
  }
}
