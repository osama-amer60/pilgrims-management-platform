/**
 * API Configuration
 * Base URLs and endpoints for external services
 */

export const API_CONFIG = {
  // JSONPlaceholder API
  JSON_PLACEHOLDER_BASE_URL: 'https://jsonplaceholder.typicode.com',

  // Add other API base URLs here as needed
  // EXAMPLE_API_BASE_URL: 'https://api.example.com',
} as const

export const API_ENDPOINTS = {
  // JSONPlaceholder endpoints
  COMMENTS: '/comments',
  POSTS: '/posts',
  USERS: '/users',

  // Add other endpoints here as needed
} as const
