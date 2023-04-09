import { useQuery } from "@tanstack/react-query";
import api from "./api";
import { MovieType } from "../common/types";

export type fetchMovieById = (movieId: string) => Promise<MovieType>;

const fetchMovie: fetchMovieById = async (movieId: string) => {
  const response = await api.get(
    `/movie/${movieId}?api_key=${import.meta.env.VITE_API_KEY}`
  );
  return response.data;
};

const useFetchMovieById = (movieId: string) =>
  useQuery(["movie", movieId], () => fetchMovie(movieId));

export default useFetchMovieById;
