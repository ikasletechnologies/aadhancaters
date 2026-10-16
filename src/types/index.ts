/**
 * Shared Type Definitions
 */

export interface NavItem {
  id: string
  label: string
  href: string
  icon?: string
  badge?: string | number
  active?: boolean
  children?: NavItem[]
}

export interface UserProfile {
  id: string
  name: string
  email: string
  avatarUrl?: string
  role: 'admin' | 'manager' | 'user'
}

export interface ApiResponse<T> {
  success: boolean
  data: T
  message?: string
  error?: string
}

export interface PaginatedResult<T> {
  items: T[]
  total: number
  page: number
  limit: number
  totalPages: number
}
