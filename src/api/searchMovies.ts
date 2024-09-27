import { IApiResponse } from "../components/@types/types";

export const searchMovies = async (
  searchValue: string,
  page: number
): Promise<IApiResponse | undefined> => {
  const url = process.env.REACT_APP_API_URL ?? "";

  const params = new URLSearchParams({
    s: searchValue,
    page: String(page),
  }).toString();
  
  try {
    const response = await fetch(`${url}&${params}`);
    if (response.ok) {
      return response.json();
    }

    throw new Error("Something went wrong");
  } catch (e) {
    console.log(e);
  }
};
