import { useQuery } from "@tanstack/react-query";
import { useNavigate } from "react-router";
import { getMovieImg } from "../api/api";
import Loader from "./Loader";

function PopularMoviesItem({movie}) {
    const { data,isLoading ,error} = useQuery({
      queryFn: () => getMovieImg(movie.imdb_id),
      queryKey: ["popImg", movie.imdb_id],
    });
    const navigate = useNavigate();
    function hanldeNavigate() {
      navigate(`/movieDetails/${movie.imdb_id}`);
    }
     console.log(data);
          if (isLoading)
            return (
              <div className=" flex items-center justify-center">
                <Loader />
              </div>
            );
            if (error)
              return (
                <div className=" flex justify-center items-center my-10">
                  <h2 className=" text-omar text-xl font-bold ">
                    Error : {error.message}
                  </h2>
                </div>
              );

    return (
      <div className=" flex flex-col text-white  shadow-xl    justify-center items-center   ">
        <div className=" w-40">
          <img
            onClick={hanldeNavigate}
            className=" cursor-pointer rounded-lg shadow-lg  "
            src={data?.Poster}
            alt={`${movie.title} img`}
          />
        </div>
        <h2 className=" text-xl   font-semibold">{movie.title} </h2>
      </div>
    );
}

export default PopularMoviesItem
