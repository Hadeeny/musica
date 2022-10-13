import { useState, useEffect, useRef } from "react";
import { motion } from "framer-motion";
import cover7 from "../assets/cover7.png";
import cover1 from "../assets/cover1.png";
import cover2 from "../assets/cover2.png";
import cover4 from "../assets/cover4.png";
import cover5 from "../assets/cover5.png";
import cover3 from "../assets/cover3.png";

const NewRelease = ({title}) => {
  const [width, setWidth] = useState(0);
  const [newRelease, setNewRelease] = useState([
    {
      album: "Golden age of 80s",
      cover: cover7,
    },
    {
      album: 'Raggae "n" blues',
      cover: cover1,
    },
    {
      album: "Tomorrows tunes",
      cover: cover2,
    },
    {
      album: "Tomorrows tunes",
      cover: cover3,
    },
    {
      album: "Tomorrows tunes",
      cover: cover4,
    },
    {
      album: "Tomorrows tunes",
      cover: cover5,
    },
    {
      album: "Tomorrows tunes",
      cover: cover2,
    },
  ]);
  const carousel = useRef();

  useEffect(() => {
    // console.log(carousel.current);
    setWidth(carousel.current.scrollWidth - carousel.current.offsetWidth);
  }, []);
  return (
    <div className='w-11/12 mx-auto'>
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
          {newRelease.map((chart, index) => {
            return (
              <div
                key={index}
              >
                <img
                  src={chart.cover}
                  className="mr-4 mt-2 min-w-[10em]"
                />
                <div>
                  <h3 className="pt-1">{chart.album}</h3>
                </div>
              </div>
            );
          })}
        </motion.div>
      </motion.div>
    </div>
  );
};

export default NewRelease;
