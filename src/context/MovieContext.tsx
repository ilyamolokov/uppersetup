import { useQuery } from '@tanstack/react-query'
import { createContext, useContext, useMemo, useState } from 'react'
import { IMovie } from '../@types/types'
import { useDebounce } from '@uidotdev/usehooks'
import { fetchMovies } from '../api/fetchMovies'
import { useSearchParams } from 'react-router-dom'

interface IMovieContext {
  movies: IMovie[]
  currentPage: number
  setCurrentPage: (page: number) => void
  isFetching: boolean
  isError: boolean
  setSearchValue: React.Dispatch<React.SetStateAction<string>>
  totalMovies: number
  debouncedSearchValue: string
  apiErrorMessage: string
}

const MovieContext = createContext<IMovieContext>({
  movies: [],
  currentPage: 0,
  setCurrentPage: () => {},
  isFetching: false,
  isError: false,
  setSearchValue: () => {},
  totalMovies: 0,
  debouncedSearchValue: '',
  apiErrorMessage: '',
})

export const useMovies = () => useContext<IMovieContext>(MovieContext)

export const MovieProvider = ({ children }: { children: React.ReactNode }) => {
  const [searchValue, setSearchValue] = useState('')
  const debouncedSearchValue = useDebounce(searchValue, 500)

  const [searchParams, setSearchParams] = useSearchParams()

  const currentPage = Number(searchParams.get('page') ?? 1)

  const setCurrentPage = (page: number) => {
    setSearchParams(
      new URLSearchParams({
        search: debouncedSearchValue,
        page: String(page),
      }),
    )
  }

  const {
    data = { Response: 'False', Error: '' },
    isFetching,
    error,
  } = useQuery({
    queryKey: ['fetchMovies', debouncedSearchValue, currentPage],
    staleTime: Infinity,
    queryFn: () => fetchMovies(debouncedSearchValue, currentPage),
    enabled: !!debouncedSearchValue && !!currentPage,
  })

  const totalMovies = useMemo(() => {
    if (!data || data.Response === 'False') {
      return 0
    }
    return Number(data.totalResults)
  }, [data])

  const apiErrorMessage = useMemo(() => {
    if (!data || data.Response === 'True') {
      return ''
    }
    return data.Error
  }, [data])

  const movies = useMemo(() => {
    if (!data || data.Response === 'False' || !data.Search) {
      return []
    }
    return data.Search
  }, [data])

  return (
    <MovieContext.Provider
      value={{
        movies,
        totalMovies,
        isFetching,
        isError: Boolean(error),
        apiErrorMessage,

        currentPage,
        setCurrentPage,

        setSearchValue,
        debouncedSearchValue,
      }}
    >
      {children}
    </MovieContext.Provider>
  )
}
