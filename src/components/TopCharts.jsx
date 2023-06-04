import { useState, useEffect, useRef } from "react";
import { motion } from "framer-motion";
import { FcLikePlaceholder } from "react-icons/fc";
import { Link } from "react-router-dom";
import { useSelector, useDispatch } from "react-redux";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation } from "swiper";
import { useQuery } from "@tanstack/react-query";
import axios from "axios";
import "swiper/css";
import "swiper/css/effect-coverflow";
import "swiper/css/pagination";
import { populatePlaylists } from "../features/playlistSlice";

const playlists = async () => {
  const { data } = await axios.get("https://musica-api.onrender.com/playlist");
  return data;
};

const TopCharts = () => {
  const dispatch = useDispatch();
  const {
    data: myPlaylist,
    error,
    isLoading,
  } = useQuery({
    queryFn: playlists,
    queryKey: ["allPlaylists"],
  });
  if (isLoading)
    return (
      <>
        <div className="mb-[3rem]">
          <div className="w-full md:w-[200px]">
            <div className="space-y-5 overflow-hidden rounded-2xl bg-white/5 p-4 shadow-xl shadow-black/5 before:absolute before:inset-0 before:-translate-x-full before:-skew-x-12 before:animate-[shimmer_2s_infinite] before:border-t before:border-white/10 before:bg-gradient-to-r before:from-transparent before:via-white/10 before:to-transparent">
              <div className="h-24 w-1/2 rounded-lg bg-white/5"></div>
              <div className="space-y-3">
                <div className="h-3 w-3/5 rounded-lg bg-white/5"></div>
                <div className="h-3 w-4/5 rounded-lg bg-white/10"></div>
                <div className="h-3 w-2/5 rounded-lg bg-white/5"></div>
              </div>
            </div>
          </div>
        </div>
      </>
    );
  if (error) return <p>An error occured</p>;

  dispatch(populatePlaylists(myPlaylist));

  return (
    <div>
      <h2 className="text-2xl ml-6 mb-4">Top Charts</h2>

      {/* skeleton loader */}

      {/* Desktop */}
      <div className="hidden md:block">
        {myPlaylist.slice(0, 3).map((chart, index) => (
          <Link key={index} to={`album/${chart.id}`}>
            <div
              className="flex mb-4 justify-between min-h-[6em] min-w-[22em] p-2 
          bg-gray-800 rounded-xl lg:h-[4em]"
            >
              <div className="lg:flex gap-4 items-center">
                <img
                  width="120rem"
                  height="100rem"
                  src={chart.cover}
                  className="lg:w-[4em] lg:h-[4em]"
                />
                <div className="p-2">
                  <h3 className="">{chart.title}</h3>
                  <p className="text-sm ">{chart.info.slice(0, 30)}</p>
                  <div>{chart.title}</div>
                </div>
              </div>
              <FcLikePlaceholder />
            </div>
          </Link>
        ))}
      </div>
      {/* ends desktop */}
      {/* mobile */}
      <Swiper
        slidesPerView={1}
        spaceBetween={60}
        centeredSlides={true}
        loop={false}
        pagination={{
          clickable: true,
        }}
        className="md:hidden w-full inset-x-0 px-[1.5rem] block"
      >
        {myPlaylist.slice(0, 3).map((chart, index) => (
          <SwiperSlide key={index} className="md:hidden">
            <Link to={`album/${chart.id}`}>
              <div
                className="flex border border-white/60 justify-between min-h-[6em] min-w-[22em] p-2 
                      bg-gray-800 rounded-xl lg:h-[4em]"
              >
                <div className="gap-4 flex flex-col items-start">
                  {/* <div className="w-1/2 h-1/2"> */}
                  <img
                    width="120rem"
                    height="100rem"
                    src={chart.cover}
                    className="w-[8em] h-[8em]"
                  />
                  {/* </div> */}
                  <div className="p-2">
                    <h3 className="">{chart.title}</h3>
                    <p className="text-sm ">{chart.info.slice(0, 30)}</p>
                    <div>{chart.title}</div>
                  </div>
                </div>
                <FcLikePlaceholder />
              </div>
            </Link>
          </SwiperSlide>
        ))}
      </Swiper>
    </div>
  );
};

export default TopCharts;
