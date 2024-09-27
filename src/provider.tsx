import { ReactNode, useState } from 'react'
import { QueryClient, QueryClientProvider } from '@tanstack/react-query'
import { MovieProvider } from './context/MovieContext'
import { BrowserRouter } from 'react-router-dom'

const Provider = ({ children }: { children: ReactNode }) => {
  const [queryClient] = useState(() => new QueryClient())

  return (
    <QueryClientProvider client={queryClient}>
      <BrowserRouter>
        <MovieProvider>{children}</MovieProvider>
      </BrowserRouter>
    </QueryClientProvider>
  )
}
export default Provider
