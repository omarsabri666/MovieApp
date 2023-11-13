import { useQuery } from "@tanstack/react-query";
import { getMovieImg } from "../api/api";
import { useNavigate } from "react-router";
import Loader from "./Loader";

function TrendingMovieItems({movie}) {
    const navigate = useNavigate()
    const { data,isLoading,error } = useQuery({
      queryFn: () => getMovieImg(movie.imdb_id),
      queryKey: ["movieImg", movie.imdb_id],
    });
    function hanldeNavigate() {
        navigate(`/movieDetails/${movie.imdb_id}`);

    }
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

    return (<>
      <div className=" flex flex-col text-white  shadow-xl  gap-2    justify-center items-center   my-10">
        <div className=" flex  w-40 justify-center items-center">
          <img onClick={hanldeNavigate}  className=" cursor-pointer rounded-lg shadow-lg  " src={data?.Poster} alt={`${movie.title} img`} />
        </div>
        <h2 className=" text-xl  cursor-text  font-semibold">{movie.title} </h2>
      </div>
    </>
    );
}

export default TrendingMovieItems
