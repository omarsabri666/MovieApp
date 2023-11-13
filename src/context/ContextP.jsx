import { createContext, useContext, useReducer, useState } from "react";
const initialState = {
  watchedList: JSON.parse(localStorage.getItem("movieapp")) || [],
};
function reducer(state,action){
  
  switch (action.type) {

  case  "addMovie" : {
    const movieToAdd = action.payload
    const doubleCheckForMovie = state.watchedList.filter(item=> item.id === movieToAdd.id)
    if(doubleCheckForMovie.length > 0){
      return state
    } else {
      return { ...state, watchedList: [...state.watchedList, movieToAdd] };
    }
    
  }
  case "deleteMovie": return {...state,watchedList:state.watchedList.filter(item=> item.id!== action.payload)}
}
}
const contextProvider = createContext()
function ContextP({children}) {
   const [{ watchedList }, dispatch] = useReducer(reducer, initialState);
  const [s,setS] = useState("")

    return (
      <contextProvider.Provider value={{ dispatch, watchedList, s, setS }}>
        {children}
      </contextProvider.Provider>
    );
}

export default ContextP;
export function UseData(){
    const context = useContext(contextProvider)
    if(context === undefined ) {
 throw new Error("context in undefined");
    } 
    return context
}