import { VueQueryPlugin, QueryClient } from '@tanstack/vue-query'
import type { App } from 'vue'

// Create a query client with default options
const queryClient = new QueryClient({
  defaultOptions: {
    queries: {
      staleTime: 1000 * 60 * 5, // 5 minutes
      retry: 1,
      refetchOnWindowFocus: false,
    },
  },
})

// Export plugin installation function
export function installVueQuery(app: App) {
  app.use(VueQueryPlugin, {
    queryClient,
  })
}

export { queryClient }
