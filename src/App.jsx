import Navbar from "./components/Navbar"
import NowPlaying from "./components/NowPlaying"
import Home from "./screens/Home"
import AlbumScreen from "./screens/AlbumScreen"
import CollectionScreen from "./screens/CollectionScreen"
import {
  BrowserRouter as Router, Routes, Route
} from "react-router-dom";

function App() {

  // const router = createBrowserRouter([
  //   {
  //     path: "/",
  //     element: <Home/>,
  //   },
  //   {
  //     path: "/album/:id",
  //     element: <AlbumScreen/>,
  //   },
  //   {
  //     path: "/collection",
  //     element: <CollectionScreen/>,
  //   },
  // ]);

  return (
    <Router> 
        <Navbar/> 
        <Routes>
          <Route path='/' element={<Home/>}/>
          <Route path='/album/:id' element={<AlbumScreen/>}/>
          <Route path='/collection' element={<CollectionScreen/>}/>
        </Routes>
      {/* <RouterProvider router={router} /> */}
        <NowPlaying/>         
    </Router>
  )
}

export default App
