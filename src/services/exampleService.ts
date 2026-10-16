import { apiClient } from './apiClient'
import type { ApiResponse, UserProfile } from '@/types'

/**
 * Example service demonstrating structured API calls
 */
export const exampleService = {
  getUsers: async () => {
    return apiClient.get<ApiResponse<UserProfile[]>>('/users')
  },

  getUserById: async (id: string) => {
    return apiClient.get<ApiResponse<UserProfile>>(`/users/${id}`)
  },

  updateUserProfile: async (id: string, profile: Partial<UserProfile>) => {
    return apiClient.patch<ApiResponse<UserProfile>>(`/users/${id}`, profile)
  },
}
