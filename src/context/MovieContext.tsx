import { useQuery } from '@tanstack/react-query'
import { createContext, useContext, useState } from 'react'
import { IMovie } from '../@types/types'
import { useDebounce } from '@uidotdev/usehooks'
import { searchMovies } from '../api/searchMovies'
import { useSearchParams } from 'react-router-dom'

interface IMovieContext {
  movies: IMovie[]
  currentPage: number
  setCurrentPage: (page: number) => void
  isLoading: boolean
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
  isLoading: false,
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

  const [totalMovies, setTotalMovies] = useState(0)

  let [searchParams, setSearchParams] = useSearchParams()

  const currentPage = Number(searchParams.get('page') ?? 1)

  const [apiErrorMessage, setApiErrorMessage] = useState('')

  const { data, isFetching, error } = useQuery(
    ['fetchMovies', debouncedSearchValue, currentPage],
    async () => {
      setApiErrorMessage('')
      const data = await searchMovies(debouncedSearchValue, currentPage)
      if (!data) return

      const isApiError = data.Response === 'False'

      if (isApiError) {
        setApiErrorMessage(data.Error)
        return []
      }

      const totalMovies = Number(data.totalResults)
      const isSuccess = data.Response === 'True' && totalMovies

      setTotalMovies(isSuccess ? totalMovies : 0)

      const params = new URLSearchParams({
        search: debouncedSearchValue,
        page: String(currentPage),
      })

      setSearchParams(isSuccess ? params : {})

      return isSuccess ? data.Search : []
    },
    {
      enabled: !!debouncedSearchValue && !!currentPage,
    },
  )

  const setCurrentPage = (page: number) => {
    const params = new URLSearchParams({
      search: debouncedSearchValue,
      page: String(page),
    })
    setSearchParams(params)
  }

  return (
    <MovieContext.Provider
      value={{
        movies: data ?? [],
        totalMovies,
        isLoading: isFetching,
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
