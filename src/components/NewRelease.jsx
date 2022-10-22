import { useState, useEffect, useRef } from "react";
import { motion } from "framer-motion";
import {useDispatch, useSelector} from 'react-redux'
import { Audio } from  'react-loader-spinner'
import { getAllMusic } from '../features/musicSlice'


const NewRelease = ({ title}) => {
  const [width, setWidth] = useState(0);
  const allMusic = useSelector(state => state.allMusic)

  const {musicFiles, error, message:errorMessage, loading:loadingMusic} = allMusic
  
  const dispatch = useDispatch()
  
  const carousel = useRef();

  useEffect(() => {
    dispatch(getAllMusic())
  }, [dispatch])
  


  useEffect(() => {
    // console.log(carousel.current);
    // setWidth(carousel.current.scrollWidth - carousel.current.offsetWidth);
  }, []);
  return (
    <div className='w-11/12 mx-auto'>
      {loadingMusic?  <Audio
      height = "80"
      width = "80"
      radius = "9"
      color = 'green'
      ariaLabel = 'three-dots-loading'     
      wrapperStyle
      wrapperClass
      /> : error? <h2>{errorMessage}</h2>: (<>
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
          {musicFiles.map((chart, index) => {
            return (
              <div
                key={index}
              >
                <img
                  src={chart.cover}
                  className="mr-4 mt-2 min-w-[10em]"
                />
                <div>
                  <h3 className="pt-1">{chart.artist}</h3>
                </div>
              </div>
            );
          })}
        </motion.div>
      </motion.div>
      </>) }
      {/* {successMusic && } */}
    </div>
  );
};

export default NewRelease;
