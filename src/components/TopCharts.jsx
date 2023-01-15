import { useState, useEffect, useRef } from "react";
import { motion } from "framer-motion";
import { FcLikePlaceholder } from "react-icons/fc";
import {Link} from 'react-router-dom'
import {useSelector} from 'react-redux'
const TopCharts = () => {
  const [width, setWidth] = useState(0);
 
  const carousel = useRef();

  const playlist = useSelector(state => state.playlist)
  const {myPlaylist }= playlist

  useEffect(() => {
    // console.log(carousel.current);
    setWidth(carousel.current.scrollWidth - carousel.current.offsetWidth);
  }, []);
  return (
    <div>
      <motion.div ref={carousel} className="cursor-pointer overflow-hidden ml-4 my-[1rem] lg:overflow-x-clip">
        <h2 className="text-2xl mb-2">Top Charts</h2>
        <motion.div
          drag="x"
          dragConstraints={{ right: 0, left: -width }}
          className="flex gap-8 lg:gap-4 lg:flex-col"
        >
          {myPlaylist.slice(0, 3).map((chart, index) => {
            return ( 
              <Link to={`album/${chart.id}`}>
              
              <div
                key={index}
                className="flex justify-between min-h-[6em] min-w-[22em] p-2 bg-gray-800 rounded-xl lg:h-[4em]"
              >
                <div className="lg:flex gap-4 items-center">
                  <img
                    width="120rem"
                    height="100rem"
                    src={chart.cover}
                    className="lg:w-[4em] lg:h-[4em]"
                  />
                  <div className='p-2'>
                    <h3 className="">{chart.title}</h3>
                    <p className="text-sm ">{chart.info.slice(0, 30)}</p>
                    <div>{chart.title}</div>
                  </div>
                </div>
                <FcLikePlaceholder />
              </div>
              </Link>
            );
          })}
        </motion.div>
      </motion.div>
    </div>
  );
};

export default TopCharts;
