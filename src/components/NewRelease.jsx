import { useState, useEffect, useRef } from "react";
import { motion } from "framer-motion";
import { RotatingLines, LineWave } from "react-loader-spinner";
import { Link } from "react-router-dom";

const NewRelease = ({
  myPlaylist,
  error,
  errorMessage,
  title,
  loadingMusic,
}) => {
  const [width, setWidth] = useState(0);
  const carousel = useRef();

  useEffect(() => {
    setWidth(carousel.current.scrollWidth - carousel.current.offsetWidth);
  }, []);
  return (
    <div className="w-[87%] mx-auto">
      {loadingMusic ? (
        <RotatingLines height="80" width="80" />
      ) : error ? (
        <h2>{errorMessage}</h2>
      ) : (
        <>
          <motion.div
            ref={carousel}
            className="cursor-pointer overflow-hidden my-8 mx-5 lg:overflow-x-clip"
          >
            <h2 className="text-2xl">{title}</h2>
            <motion.div
              drag="x"
              dragConstraints={{ right: 0, left: -width }}
              className="flex gap-8 mt-2"
            >
              {myPlaylist.map((playlist) => {
                return (
                  <div key={playlist.id}>
                    <Link to={`album/${playlist.id}`}>
                      <img
                        src={playlist.cover}
                        className="mr-4 mt-2 min-w-[10rem] rounded-xl hover:rounded-xl hover:scale-[1.1] duration-500 h-[10rem]"
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
    </div>
  );
};

export default NewRelease;
