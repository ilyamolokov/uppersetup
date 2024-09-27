export interface IApiResponse {
  Search: IMovie[];
  totalResults: string;
  Response: string;
}

export interface IMovie {
  Title: string;
  Year: string;
  imdbID: string;
  Type: string;
  Poster: string;
}
