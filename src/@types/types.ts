export interface IApiResponseSuccess {
  Search: IMovie[]
  totalResults: string
  Response: 'True'
}

export interface IApiResponseError {
  Response: 'False'
  Error: string
}

export interface IMovie {
  Title: string
  Year: string
  imdbID: string
  Type: string
  Poster: string
}
