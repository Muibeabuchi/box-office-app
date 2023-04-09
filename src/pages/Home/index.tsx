import usePaginatedFetchedMovies from "../../services/paginate";
import { useState } from "react";
import Card, { MovieCardData } from "../../components/Card";

function Home() {
  const [page, setPage] = useState<number>(1);
  const { paginatedMovies, isLoading, isFetching, isError } =
    usePaginatedFetchedMovies(page);
  // console.log(paginatedMovies);
  // console.log(paginatedMovies);
  return (
    <div className="mt-[75px] pt-2 max-w-6xl mx-auto mb-6">
      {isLoading && (
        <h2 className="text-center font-semibold text-[18px]">Loading...</h2>
      )}
      <main className="p-3 space-y-4 md:space-y-0 md:grid md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 md:gap-3">
        {paginatedMovies?.map(
          ({ id, poster_path, original_title }: MovieCardData) => {
            return (
              <Card
                key={id}
                id={id}
                poster_path={poster_path}
                original_title={original_title}
              />
            );
          }
        )}
      </main>
      <footer className="mt-[15px] ml-6 ">
        <button
          type="button"
          onClick={() => setPage((prev) => prev - 1)}
          disabled={page == 1 ? true : false}
          className="px-5 py-2 text-white bg-teal-600 rounded-lg"
        >
          Prev
        </button>
        <p className="inline mx-5 my-2 text-2xl font-bold">{page}</p>
        <button
          type="button"
          onClick={() => setPage((prev) => prev + 1)}
          disabled={isFetching ? true : false}
          className="px-5 py-2 text-white bg-teal-600 rounded-lg"
        >
          Next
        </button>
      </footer>
    </div>
  );
}

export default Home;
