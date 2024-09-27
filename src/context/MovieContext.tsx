import { useQuery } from "@tanstack/react-query";
import { createContext, useContext, useEffect, useState } from "react";
import { IApiResponse, IMovie } from "../components/@types/types";
import { useDebounce } from "@uidotdev/usehooks";
import { searchMovies } from "../api/searchMovies";
import { useSearchParams } from "react-router-dom";

interface IMovieContext {
  movies: IMovie[];
  currentPage: number;
  setCurrentPage: (page: number) => void;
  isLoading: boolean;
  isError: boolean;

  setSearchValue: React.Dispatch<React.SetStateAction<string>>;
  totalMovies: number;

  debouncedSearchValue: string;
}

const MovieContext = createContext<IMovieContext>({
  movies: [],

  currentPage: 0,
  setCurrentPage: () => {},
  isLoading: false,
  isError: false,
  setSearchValue: () => {},
  totalMovies: 0,
  debouncedSearchValue: "",
});

export const useMovies = () => useContext<IMovieContext>(MovieContext);

export const MovieProvider = ({ children }: { children: React.ReactNode }) => {
  const [movies, setMovies] = useState<IMovie[]>([]);
  const [searchValue, setSearchValue] = useState("");
  const [isLoading, setIsLoading] = useState(false);
  const [isError, setIsError] = useState(false);
  const [totalMovies, setTotalMovies] = useState(0);

  const debouncedSearchValue = useDebounce(searchValue, 500);

  let [searchParams, setSearchParams] = useSearchParams();

  const currentPage = Number(searchParams.get("page") ?? 1);

  const setCurrentPage = (page: number) => {
    const params = new URLSearchParams({
      search: debouncedSearchValue,
      page: String(page),
    });
    setSearchParams(params);
  };

  useEffect(() => {
    const fetchMovies = async () => {
      setIsLoading(true);
      try {
        const data = await searchMovies(debouncedSearchValue, currentPage);
        if (!data) return;

        const totalMovies = Number(data.totalResults);
        const isSuccess = data.Response === "True" && totalMovies;

        setMovies(isSuccess ? data.Search : []);
        setTotalMovies(isSuccess ? totalMovies : 0);

        const params = new URLSearchParams({
          search: debouncedSearchValue,
          page: String(currentPage),
        });

        setSearchParams(isSuccess ? params : {});
      } catch (e) {
        console.log(e);
        setIsError(true);
      } finally {
        setIsLoading(false);
      }
    };

    fetchMovies();
  }, [debouncedSearchValue, currentPage]);

  return (
    <MovieContext.Provider
      value={{
        movies,
        totalMovies,
        isLoading,
        isError,

        currentPage,
        setCurrentPage,

        setSearchValue,
        debouncedSearchValue,
      }}
    >
      {children}
    </MovieContext.Provider>
  );
};
