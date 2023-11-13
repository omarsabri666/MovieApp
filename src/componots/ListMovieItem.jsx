import { AiFillStar } from "react-icons/ai";
import { formatTime } from "../helper/helper";
import { BsPlay } from "react-icons/bs";
import { UseData } from "../context/ContextP";

function ListMovieItem({item}) {
    const {dispatch} = UseData()
function handleDel(){
    dispatch({type:"deleteMovie",payload:item.id})

}
    return (
      <div className="  text-white flex py-10   sm:px-0    justify-center  mx-auto sm:mx-0 sm:flex-row flex-col    gap-16  ">
        <div className=" rounded-lg shadow-lg  w-96  px-5 sm:px-0   h-auto">
          <img src={item.poster} alt={`${item.title}img`} />
        </div>
        <div className=" sm:items-start gap-3  items-center justify-center   sm:justify-start flex flex-col ">
          <h1 className=" capitalize text-2xl font-semibold">{item?.title}</h1>
          <h3>
            Name: <span className="  text-omar"> {item?.title}</span>
          </h3>
          <h3>
            Time:{" "}
            <span className="  text-omar"> {formatTime(item?.runtime)}</span>
          </h3>
          <h3>
            Date: <span className="  text-omar"> {item?.year}</span>
          </h3>
          <h3>
            Language:{" "}
            <span className=" capitalize  text-omar"> {item?.lang}</span>
          </h3>
          <h3>
            country :{" "}
            <span className=" capitalize  text-omar"> {item?.country}</span>
          </h3>
          <h3 className=" flex items-center gap-1">
            <AiFillStar color="yellow" /> :{" "}
            <span className=" capitalize  font-semibold  text-omar">
              {" "}
              {item?.rating} |
            </span>
            <span className=" capitalize  font-semibold  text-omar">
              {" "}
              {item?.votes}
            </span>
          </h3>
          <div className=" flex space-x-5">
            <a
              className=" inline-flex gap-1 items-center px-4 py-2 md:py-2 md:px-6 w-fit my-2 rounded-full text-white bg-omar"
              href={item?.trailer}
              target="_blank"
              rel="noopener noreferrer"
            >
              {" "}
              <span className=" text-2xl">
                <BsPlay />
              </span>{" "}
              Watch
            </a>
            <button
              onClick={handleDel}
              className=" px-5 py-2 font-semibold text-lg "
            >
              Delete
            </button>
          </div>
        </div>
      </div>
    );
}

export default ListMovieItem
