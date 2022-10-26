import Navbar from "./components/Navbar"
import NowPlaying from "./components/NowPlaying"
import Home from "./screens/Home"
import AlbumScreen from "./screens/AlbumScreen"
import CollectionScreen from "./screens/CollectionScreen"
import {useSelector} from 'react-redux'
// import {getAllMusic} from './features/musicSlice'
import {
  BrowserRouter as Router, Routes, Route
} from "react-router-dom";

function App() {
  const allMusic = useSelector(state => state.allMusic)
  const {isListening} = allMusic


  return (
    <Router> 
        <Navbar/> 
        <Routes>
          <Route path='/' element={<Home/>}/>
          <Route path='/album/:id' element={<AlbumScreen/>}/>
          <Route path='/collection' element={<CollectionScreen/>}/>
        </Routes>
      {/* <RouterProvider router={router} /> */}
        {isListening && <NowPlaying/>}         
    </Router>
  )
}

export default App
