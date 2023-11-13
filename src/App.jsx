

import "react-toastify/dist/ReactToastify.css";



import "./index.css";

import AppLayout from "./Pages/AppLayout";


import { RouterProvider, createBrowserRouter } from "react-router-dom";
import { lazy } from "react";
const Movies = lazy(()=> import("./Pages/Movies"))
const List = lazy(()=> import("./Pages/List"))
const Series = lazy(()=> import("./Pages/Series"))
const Search = lazy(()=> import("./Pages/Search"))
const MovieDetails = lazy(() => import("./Pages/MovieDetails"));
const Home = lazy(()=> import("./Pages/Home"))





function App() {
  const router = createBrowserRouter([{
   
    element: <AppLayout/>,
    children:[{
      path : "/",
      element : <Home/>


    },
  {
    path : "movieDetails/:id",
    element: <MovieDetails/>
  },

  {
    path : "Movies",
    element : <Movies/>

  }
  ,
  {
    path: "series",
    element:<Series/>
  },
  {
    path:"list",
    element : <List/>
  },
  {
    path:"search",
    element : <Search/>
  },
]
  }])
 
 
  


  return (
    <div className=" font-abc bg-[#0D0C11]">
     
      <div className=" ">

      <RouterProvider router={router} />
      </div>
    </div>
  );
}

export default App;
