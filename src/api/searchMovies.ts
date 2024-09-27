import { IApiResponseError, IApiResponseSuccess } from '../@types/types'

export const searchMovies = async (
  searchValue: string,
  page: number,
): Promise<IApiResponseSuccess | IApiResponseError | undefined> => {
  const url = process.env.REACT_APP_API_URL ?? ''

  const params = new URLSearchParams({
    s: searchValue,
    page: String(page),
  }).toString()

  try {
    const response = await fetch(`${url}&${params}`)

    if (!response.ok) {
      throw new Error('Something went wrong')
    }

    return response.json()
  } catch (e) {
    console.log(e)
  }
}
