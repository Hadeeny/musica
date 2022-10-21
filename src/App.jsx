import Navbar from "./components/Navbar"
import NowPlaying from "./components/NowPlaying"
import Home from "./screens/Home"
import AlbumScreen from "./screens/AlbumScreen"
import CollectionScreen from "./screens/CollectionScreen"
import {
  createBrowserRouter,
  RouterProvider,
  Route,
} from "react-router-dom";

function App() {

  const router = createBrowserRouter([
    {
      path: "/",
      element: <Home/>,
    },
    {
      path: "/album",
      element: <AlbumScreen/>,
    },
    {
      path: "/collection",
      element: <CollectionScreen/>,
    },
  ]);

  return (
    <> 
        <Navbar/> 
      <RouterProvider router={router} />
        <NowPlaying/>         
    </>
  )
}

export default App
