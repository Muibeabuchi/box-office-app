import { Link } from "react-router-dom";
import { MovieType } from "../../common/types";
import { AiOutlineStar, AiFillStar } from "react-icons/ai";
import { useAppDispatch, useAppSelector } from "../../hooks/hook";
import { useState } from "react";
import { addFav, removeFav } from "../../features/FavMovieSlice";

export type MovieCardData = Omit<
  MovieType,
  "overview" | "vote_average" | "release_date" | "runtime" | "genres"
>;

function Card(movieData: MovieCardData) {
  const { movies } = useAppSelector((state) => state.favorites);
  const dispatch = useAppDispatch();

  const [isFavorite, setIsFavorite] = useState<boolean>(() => {
    const isFavoriteMovie = movies.find((movie) => movie.id == movieData.id);
    return !!isFavoriteMovie;
  });

  function handleFavorite(e: React.MouseEvent<HTMLElement>) {
    e.stopPropagation();
    if (isFavorite) {
      dispatch(removeFav(movieData.id));
      setIsFavorite((prevState) => !prevState);
    } else {
      dispatch(addFav(movieData));
      setIsFavorite((prevState) => !prevState);
    }
  }

  return (
    <div className="border border-solid shadow-sm hover:shadow-lg border-slate-500">
      <div className="relative">
        <h4
          onClick={(e) => handleFavorite(e)}
          className="absolute p-4 bg-red-300 rounded-full right-1 top-1"
        >
          <i>
            {isFavorite ? (
              <AiFillStar size={24} />
            ) : (
              <AiOutlineStar size={24} />
            )}
          </i>
        </h4>
        <Link to={`/movie/${movieData.id}`}>
          <img
            src={`https://image.tmdb.org/t/p/w500${movieData.poster_path}`}
            alt="movie poster image"
          />
          <h5 className="p-1 mt-4 ml-4 text-lg font-medium text-teal-600 ">
            {movieData.original_title}
          </h5>
        </Link>
      </div>
    </div>
  );
}

export default Card;
