import axios from 'axios'
import { IApiResponseError, IApiResponseSuccess } from '../@types/types'

export const fetchMovies = async (
  searchValue: string,
  page: number,
): Promise<IApiResponseSuccess | IApiResponseError> => {
  const url = process.env.REACT_APP_API_URL ?? ''

  const params = new URLSearchParams({
    s: searchValue,
    page: String(page),
  }).toString()

  try {
    const { data } = await axios<IApiResponseSuccess | IApiResponseError>(
      `${url}&${params}`,
    )

    if (!data || data.Response === 'False') {
      throw new Error(data.Error)
    }

    return data
  } catch (e: any) {
    return { Response: 'False', Error: e.message || 'Not defined' }
  }
}
