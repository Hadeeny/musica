import { useState, useEffect, useRef } from "react";
import { motion } from "framer-motion";
import { RotatingLines, LineWave } from "react-loader-spinner";
import { Link } from "react-router-dom";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation } from "swiper";

import "swiper/css";
import "swiper/css/effect-coverflow";
import "swiper/css/pagination";

const NewRelease = ({
  myPlaylist,
  error,
  errorMessage,
  title,
  loadingMusic,
}) => {
  return (
    <div className="w-[99%] lg:w-[87%] mx-auto">
      {loadingMusic ? (
        <RotatingLines height="80" width="80" />
      ) : error ? (
        <h2>{errorMessage}</h2>
      ) : (
        <>
          <motion.div className="cursor-pointer py-[10rem]">
            {/* <h2 className="text-2xl my-10">{title}</h2> */}
            <Swiper
              slidesPerView={5}
              spaceBetween={30}
              loop={false}
              pagination={{
                clickable: true,
              }}
              className="hidden md:block"
            >
              {myPlaylist.map((playlist) => {
                return (
                  <SwiperSlide key={playlist.id}>
                    <div>
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
                  </SwiperSlide>
                );
              })}
            </Swiper>
            <Swiper
              slidesPerView={2}
              spaceBetween={60}
              loop={false}
              pagination={{
                clickable: true,
              }}
              className="md:hidden absolute w-full inset-x-0 px-[1rem] block"
            >
              {myPlaylist.map((playlist) => {
                return (
                  <SwiperSlide key={playlist.id}>
                    <div>
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
                  </SwiperSlide>
                );
              })}
            </Swiper>
          </motion.div>
        </>
      )}
    </div>
  );
};

export default NewRelease;
