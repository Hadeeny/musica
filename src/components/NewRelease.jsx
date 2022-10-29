import { useState, useEffect, useRef } from "react";
import { motion } from "framer-motion";
import { useDispatch, useSelector } from "react-redux";
import { RotatingLines, LineWave } from "react-loader-spinner";
import { getPlaylists } from "../features/playlistSlice";
import { Link } from "react-router-dom";
import { getAllMusic } from "../features/musicSlice";

const NewRelease = ({
  myPlaylist,
  error,
  errorMessage,
  title,
  loadingMusic,
}) => {
  const [width, setWidth] = useState(0);
  // const playlist = useSelector(state => state.playlist)

  // const {myPlaylist, error, message:errorMessage, loading:loadingMusic} = playlist

  // const dispatch = useDispatch()

  // useEffect(() => {
  //   dispatch(getPlaylists())
  //   dispatch(getAllMusic())
  // }, [dispatch])

  const carousel = useRef();

  useEffect(() => {
    // console.log(carousel.current);
    // setWidth(carousel.current.scrollWidth - carousel.current.offsetWidth);
  }, []);
  return (
    <div className="w-11/12 mx-auto">
      {loadingMusic ? (
        <RotatingLines height="80" width="80" />
      ) : error ? (
        <h2>{errorMessage}</h2>
      ) : (
        <>
          <motion.div
            ref={carousel}
            className="cursor-pointer overflow-hidden my-8 lg:overflow-x-clip"
          >
            <h2 className="text-2xl">{title}</h2>
            <motion.div
              drag="x"
              dragConstraints={{ right: 0, left: -700 }}
              className="flex gap-8 mt-2"
            >
              {myPlaylist.map((playlist) => {
                return (
                  <div key={playlist.id}>
                    <Link to={`album/${playlist.id}`}>
                      <img
                        src={playlist.cover}
                        className="mr-4 mt-2 min-w-[10rem] h-[10rem]"
                      />
                    </Link>
                    <div>
                      <h3 className="pt-1">{playlist.title}</h3>
                    </div>
                  </div>
                );
              })}
            </motion.div>
          </motion.div>
        </>
      )}
      {/* {successMusic && } */}
    </div>
  );
};

export default NewRelease;
