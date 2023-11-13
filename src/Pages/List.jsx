import ListMovie from "../componots/ListMovie";
import { UseData } from "../context/ContextP";

function List() {
    const { watchedList } = UseData();
    console.log(watchedList)
    return (
        <div>
            <ListMovie/>

            
        </div>
    )
}

export default List
