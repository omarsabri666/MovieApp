import { useQuery } from "@tanstack/react-query";
import { getMovieDetails } from "../api/api";
import { useParams } from "react-router";
import { formatTime } from "../helper/helper";
import {BsPlay} from "react-icons/bs"
import { AiFillStar } from "react-icons/ai";
import { UseData } from "../context/ContextP";
import Loader from "../componots/Loader";
import { useEffect } from "react";

function MovieDetails() {
    const { dispatch, watchedList } = UseData();
    console.log(watchedList)
    const {id} = useParams()
const isInWatchedListFilter =
  watchedList.filter((movie) => movie.id === id).length > 0;
   
    
    const {data,isLoading,error} = useQuery({queryFn:()=> getMovieDetails(id),queryKey:["movieDetails",id]})
    useEffect(()=>{
      localStorage.setItem("movieapp", JSON.stringify(watchedList));
    },[watchedList])
    if (error)
      return (
        <div className=" flex justify-center items-center my-10">
          <h2 className=" text-omar text-xl font-bold ">
            Error : {error.message}
          </h2>
        </div>
      );
     
      function handleAdd(){
        const newMovie = {
          id,
          title: data?.title,
          poster: data?.poster,
          runtime: data?.runtime,
          year: data?.year,
          rating: data?.ratings[0].value,
          votes: data?.ratings[0].votes,
          trailer: data?.trailer,
          lang: data?.spoken_language,
          description: data?.description,
          country: data?.country,
        };
        dispatch({type:"addMovie",payload:newMovie})

      }
            if (isLoading )
              return (
                <div className=" flex items-center justify-center">
                  <Loader />
                </div>
              );

    return (
      <div className=" font-abc  max-w-6xl text-white h-fit  px-20 mx-auto ">
        <div className=" my-20  w-full  gap-4  md:w-2/3 h-auto grid grid-cols-1 md:grid-cols-3  ">
          <div className=" flex justify-center items-center  w-full">
            <img
              className=" w-full"
              src={data?.poster}
              alt={`${data?.title}img`}
            />
          </div>
          <div className=" px-5 col-span-2 flex flex-col gap-2">
            <h1 className=" capitalize text-2xl font-semibold">
              {data?.title}
            </h1>
            <h3>
              Name: <span className="  text-omar"> {data?.title}</span>
            </h3>
            <h3>
              Time:{" "}
              <span className="  text-omar"> {formatTime(data?.runtime)}</span>
            </h3>
            <h3>
              Date: <span className="  text-omar"> {data?.year}</span>
            </h3>
            <h3>
              Language:{" "}
              <span className=" capitalize  text-omar">
                {" "}
                {data?.spoken_language}
              </span>
            </h3>
            <h3>
              country :{" "}
              <span className=" capitalize  text-omar"> {data?.country}</span>
            </h3>
            <h3 className=" flex items-center gap-1">
              <AiFillStar color="yellow" /> :{" "}
              <span className=" capitalize  font-semibold  text-omar">
                {" "}
                {data?.ratings[0].value} |
              </span>
              <span className=" capitalize  font-semibold  text-omar">
                {" "}
                {data?.ratings[0].votes}
              </span>
            </h3>
            <div className="  flex items-center gap-4">

            <a
              className=" inline-flex gap-1 items-center px-4 py-2 md:py-2 md:px-6 w-fit my-2 rounded-full text-white bg-omar"
              href={data?.trailer}
              target="_blank"
              rel="noopener noreferrer"
            >
              {" "}
              <span className=" text-2xl">
                <BsPlay />
              </span>{" "}
              Watch
            </a>
           { !isInWatchedListFilter? <button onClick={handleAdd} className=" md:px-5 px-4  md:py-2  bg-gray-900 font-semibold md:text-lg outline outline-black shadow-2xl  text-white  rounded-full">Add to watchList</button> : <h2 className=" text-lg  font-semibold">this movie is already in The watched list</h2>}
              </div>
          </div>
        </div>
        <div className=" flex flex-col py-5 gap-4 ">
          <h3 className=" text-xl font-semibold">About the movie</h3>
          <p className=" text-sm text-gray-300">{data?.description}</p>
        </div>
       
       
      </div>
    );
}

export default MovieDetails
