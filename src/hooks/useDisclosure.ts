import { useState, useCallback } from 'react'

export interface UseDisclosureReturn {
  isOpen: boolean
  open: () => void
  close: () => void
  toggle: () => void
  setOpen: (open: boolean) => void
}

/**
 * Hook to manage boolean open/close state for modals, drawers, and menus.
 */
export function useDisclosure(initialState: boolean = false): UseDisclosureReturn {
  const [isOpen, setIsOpen] = useState<boolean>(initialState)

  const open = useCallback(() => setIsOpen(true), [])
  const close = useCallback(() => setIsOpen(false), [])
  const toggle = useCallback(() => setIsOpen((prev) => !prev), [])
  const setOpen = useCallback((val: boolean) => setIsOpen(val), [])

  return { isOpen, open, close, toggle, setOpen }
}
