import React from "react";
import { useAppSelector } from "../../hooks/hook";
import Card, { MovieCardData } from "../../components/Card";

function Favorites() {
  const favoriteMovies = useAppSelector((state) => state.favorites.movies);
  // console.log(favoriteMovies);
  return (
    <main className="mt-[75px] pt-2 max-w-6xl mx-auto mb-6">
      <div className="space-y-3 md:grid md:space-x-7 md:grid-cols-2 lg:grid-cols-3">
        {favoriteMovies.map(
          ({ id, poster_path, original_title }: MovieCardData) => (
            <Card
              key={id}
              id={id}
              poster_path={poster_path}
              original_title={original_title}
            />
          )
        )}
      </div>
    </main>
  );
}

export default Favorites;
