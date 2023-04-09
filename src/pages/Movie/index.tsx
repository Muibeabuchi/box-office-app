import { useParams } from "react-router-dom";
import useFetchMovieById from "../../services/FetchMovie";
import { FiArrowLeft } from "react-icons/fi";
import { useNavigate } from "react-router-dom";
import { AiOutlineStar } from "react-icons/ai";

export type idParams = {
  id?: string;
};

function Movie() {
  const navigate = useNavigate();
  const { id } = useParams();
  // if (id !== undefined) {
  // }
  const { data: movie, isLoading } = useFetchMovieById(id || "");
  // console.log(movie);

  return (
    <main className="mt-[75px] pt-2 max-w-6xl mx-auto mb-6">
      <div className="mb-5">
        <FiArrowLeft size={24} onClick={() => navigate("/")} />
      </div>
      <div className="flex flex-col w-full px-2 py-4 space-x-5 lg:flex-row">
        <div className="md:w-[40%] rounded-md overflow-hidden">
          <img
            src={`https://image.tmdb.org/t/p/w500${movie?.poster_path}`}
            alt=""
            className="w-full rounded-sm"
          />
        </div>
        <div className="md:w-[600px] ">
          <h1 className="mt-5 text-2xl font-semibold text-green-700 md:mt-0">
            {movie?.original_title}
          </h1>
          <p className="mt-4 mb-2 md:mt-0">{movie?.overview}</p>
          <div className="flex items-center mb-2 space-x-2 bg-[gold]  px-3 py-1 rounded-md mt-3 max-w-fit">
            <AiOutlineStar size={30} />
            <span className="text-base font-semibold">
              {movie?.vote_average}
            </span>
          </div>
          <p className="my-3">
            Type: <span>Movie</span>
          </p>
          <p>Release Date: {movie?.release_date}</p>
          <p className="my-3">Runtime: {movie?.runtime}</p>
          <div className="flex flex-wrap">
            <p className="mr-4 font-bold text-[22px]">Genres:</p>
            <ul className="flex flex-wrap items-center">
              {movie?.genres.map((item) => (
                <li key={item.id}>{item.name},</li>
              ))}
            </ul>
          </div>
        </div>
      </div>
    </main>
  );
}

export default Movie;
