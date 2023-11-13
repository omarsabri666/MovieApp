import { UseData } from "../context/ContextP";
import ListMovieItem from "./ListMovieItem";

function ListMovie() {
       const { watchedList } = UseData();
       console.log(watchedList);
    return (
      <div className=" flex flex-col gap-5 ">
        {watchedList.length > 0 && watchedList?.map((item)=> <ListMovieItem key={item.id} item={item}/> )}
      </div>
    );
}

export default ListMovie
