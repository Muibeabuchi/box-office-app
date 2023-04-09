import { createSlice, PayloadAction } from "@reduxjs/toolkit";

import { MovieType } from "../common/types";

type Movie = Omit<
  MovieType,
  "overview" | "vote_average" | "release_date" | "runtime" | "genres"
>;

interface FavoriteState {
  movies: Movie[];
}

const initialState: FavoriteState = {
  movies: [],
};

const addFavorite = (state: FavoriteState, action: PayloadAction<Movie>) => {
  const existingItem = state.movies.find(
    (movie) => movie.id === action.payload.id
  );

  if (!existingItem) {
    state.movies.push(action.payload);
  }
};

const removeFavorite = (
  state: FavoriteState,
  action: PayloadAction<number>
) => {
  const updatedFavorites = state.movies.filter(
    (movie) => movie.id !== action.payload
  );
  if (updatedFavorites) {
    state.movies = updatedFavorites;
  }
};

const favoritesSlice = createSlice({
  name: "favorites",
  initialState,
  reducers: {
    addFavorite,
    removeFavorite,
  },
});

export const { addFavorite: addFav, removeFavorite: removeFav } =
  favoritesSlice.actions;

export default favoritesSlice.reducer;
