import { MovieType } from "../common/types";
import api from "./api";
import { useQuery } from "@tanstack/react-query";

type PaginateFetch = (page: number) => Promise<MovieType[]>;

const fetchPaginatedMovies: PaginateFetch = async (page = 1) => {
  const response = await api.get(
    `/movie/popular?api_key=${import.meta.env.VITE_API_KEY}&page=${page}`
  );
  return response.data.results;
};

const usePaginatedFetchedMovies = (page: number) => {
  const {
    data: paginatedMovies,
    isError,
    error,
    isLoading,
    isFetching
  } = useQuery(["movies", page], () => fetchPaginatedMovies(page), {
    keepPreviousData: true,
  });

  return { isFetching,paginatedMovies, isError, error, isLoading };
};

export default usePaginatedFetchedMovies;
