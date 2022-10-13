import { useState, useEffect, useRef } from "react";
import { motion } from "framer-motion";
import { FcLikePlaceholder } from "react-icons/fc";
import golden from "../assets/golden.png";
import reggae from "../assets/reggae.png";
import tomorrow from "../assets/tomorrow.png";

const TopCharts = () => {
  const [width, setWidth] = useState(0);
  const [topChart, setTopChart] = useState([
    {
      album: "Golden age of 80s",
      title: "Sean Swadder",
      duration: "2:21:35",
      cover: golden,
    },
    {
      album: 'Raggae "n" blues',
      title: "DJ YK mule",
      duration: "1:02:42",
      cover: reggae,
    },
    {
      album: "Tomorrows tunes",
      title: "Obi Datti",
      duration: "2:01:25",
      cover: tomorrow,
    },
  ]);
  const carousel = useRef();

  useEffect(() => {
    // console.log(carousel.current);
    setWidth(carousel.current.scrollWidth - carousel.current.offsetWidth);
  }, []);
  return (
    <div>
      <motion.div ref={carousel} className="cursor-pointer overflow-hidden my-8 lg:overflow-x-clip">
        <h2 className="text-2xl">Top Charts</h2>
        <motion.div
          drag="x"
          dragConstraints={{ right: 0, left: -700 }}
          className="flex gap-8 mt-2 lg:gap-4 lg:flex-col"
        >
          {topChart.map((chart, index) => {
            return ( 
              <div
                key={index}
                className="flex justify-between min-h-[8em] min-w-[22em] p-4 bg-darkGray rounded-xl lg:min-h-[4em]"
              >
                <div className="lg:flex">
                  <img
                    width="120rem"
                    height="100rem"
                    src={chart.cover}
                    className="lg:w-[4em] lg:h-[4em] mr-4 mt-2"
                  />
                  <div>
                    <h3 className="pt-1">{chart.album}</h3>
                    <p className="text-sm pb-2 lg:pb-0">{chart.title}</p>
                    <div>{chart.duration}</div>
                  </div>
                </div>
                <FcLikePlaceholder />
              </div>
            );
          })}
        </motion.div>
      </motion.div>
    </div>
  );
};

export default TopCharts;
