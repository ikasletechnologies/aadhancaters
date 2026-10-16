import { useSyncExternalStore } from 'react'

/**
 * Hook to evaluate responsive CSS media queries using React's useSyncExternalStore.
 */
export function useMediaQuery(query: string): boolean {
  return useSyncExternalStore(
    (callback) => {
      if (typeof window === 'undefined') return () => {}
      const mediaQueryList = window.matchMedia(query)
      mediaQueryList.addEventListener('change', callback)
      return () => mediaQueryList.removeEventListener('change', callback)
    },
    () => {
      if (typeof window === 'undefined') return false
      return window.matchMedia(query).matches
    },
    () => false
  )
}
