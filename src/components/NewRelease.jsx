import { useState, useEffect, useRef } from "react";
import { motion } from "framer-motion";
import { RotatingLines, LineWave } from "react-loader-spinner";
import { Link } from "react-router-dom";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation } from "swiper";
import axios from "axios";
import "swiper/css";
import "swiper/css/effect-coverflow";
import "swiper/css/pagination";
import { useQuery } from "@tanstack/react-query";
import { populatePlaylists } from "../features/playlistSlice";
import { useDispatch } from "react-redux";

const allMusic = async () => {
  const { data } = await axios.get("https://musica-api.onrender.com/playlist");
  return data;
};

const NewRelease = ({ title }) => {
  const {
    data: myPlaylist,
    error,
    isLoading: loadingMusic,
  } = useQuery({
    queryFn: allMusic,
    queryKey: ["allMusic"],
  });

  if (error) {
    <div className="w-[99%] lg:w-[87%] mx-auto">
      <p>An error occured, check connection</p>
    </div>;
  }
  if (loadingMusic) {
    return (
      <div className="w-[99%] lg:w-[87%] mx-auto">
        <div className="flex space-x-8">
          {[1, 2].map((i, j) => (
            <div key={j} className="w-full md:w-[200px]">
              <div className="relative space-y-5 overflow-hidden rounded-2xl bg-white/5 p-4 shadow-xl shadow-black/5 before:absolute before:inset-0 before:-translate-x-full before:-skew-x-12 before:animate-[shimmer_2s_infinite] before:border-t before:border-white/10 before:bg-gradient-to-r before:from-transparent before:via-white/10 before:to-transparent">
                <div className="h-24 rounded-lg bg-white/5"></div>
                <div className="space-y-3">
                  <div className="h-3 w-3/5 rounded-lg bg-white/5"></div>
                  <div className="h-3 w-4/5 rounded-lg bg-white/10"></div>
                  <div className="h-3 w-2/5 rounded-lg bg-white/5"></div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    );
  }
  return (
    <div className="w-[99%] lg:w-[87%] mx-auto">
      <>
        <motion.div className="cursor-pointer py-[6rem] md:py-[2rem]">
          <h2 className="text-2xl ml-4 my-[1rem]">{title}</h2>
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
            className="md:hidden absolute w-full inset-x-0 px-[1.5rem] block"
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
    </div>
  );
};

export default NewRelease;
