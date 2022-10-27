import React, { useState, useRef, useEffect } from "react";
import {useSelector, useDispatch} from 'react-redux'
import cover11 from "../assets/cover11.png";
import { BsFillPauseCircleFill, BsFillPlayCircleFill } from "react-icons/bs";
import { GiNextButton, GiPreviousButton } from "react-icons/gi";
import { BiShuffle } from "react-icons/bi";
import { TbRepeatOnce } from "react-icons/tb";
import { motion } from "framer-motion";
import { IconContext } from "react-icons";
import {getAllMusic, getNextSong, getSongIndex, goToNextSong, goToPrevSong} from '../features/musicSlice'
import { RotatingLines } from "react-loader-spinner";


const NowPlaying = () => {
  const audioEl = useRef(null);
  const progressBar = useRef(null);
  const animationRef = useRef(null);
  const [currentTime, setCurrentTime] = useState(0);
  // const [width, setWidth] = useState(0);
  const [duration, setDuration] = useState(0);
  const [isPlaying, setIsPlaying] = useState(false);
 
  const allMusic = useSelector(state => state.allMusic)

  const {songIndex, nowPlaying, loading, error, message} = allMusic

  // const [songIndex, setCurrentSongIndex] = useState(0);
  // const [nextSongIndex, setNextSongIndex] = useState(currentSongIndex + 1);

  const dispatch = useDispatch()

  useEffect(() => {
  dispatch(getAllMusic())
  }, [dispatch])

  useEffect(() => {
    dispatch(getNextSong(() => {
      if (songIndex + 1 > nowPlaying.length - 1) {
        return 0;
      } else {
        return songIndex + 1;
      }
    }))
  }, [songIndex]);

  useEffect(() => {
    if (isPlaying) {
      audioEl.current.play();
      animationRef.current = requestAnimationFrame(whilePlaying);
    } else {
      audioEl.current.pause();
      cancelAnimationFrame(animationRef.current);
    }
  });

  useEffect(() => {
    const seconds = Math.floor(audioEl.current.duration);
    setDuration(seconds);
    progressBar.current.max = seconds;
  }, [audioEl?.current?.loadedmetadata, audioEl?.current?.readyState]);

  const whilePlaying = () => {
    progressBar.current.value = audioEl.current.currentTime;
    changePlayerCurrentTime();
    animationRef.current = requestAnimationFrame(whilePlaying);
  };

  const changeRange = () => {
    audioEl.current.currentTime = progressBar.current.value;
    changePlayerCurrentTime();
  };

  const changePlayerCurrentTime = () => {
    progressBar.current.style.setProperty(
      "--seek-before-width",
      `${(progressBar.current.value / duration) * 100}%`
    );
    setCurrentTime(progressBar.current.value);
  };

  // const skipSong = (forward = true) => {
  //   if (forward) {
  //     dispatch(goToNextSong())
  //   } else {
  //     dispatch(goToPrevSong());
  //   }
  // };

  // let temp = currentSongIndex;
  //       temp--;
  //       if (temp < 0) {
  //         temp = nowPlaying.length - 1;
  //       }
  //       return temp;
  return (
    <section className="z-50 backdrop-blur-xl h-32 w-full fixed bottom-0 flex ">
      <div
        id="stub"
        className="w-11/12 flex justify-between items-center py-4 mx-auto"
      >
        {loading? (<RotatingLines/>) : error?( <h2>{message}</h2>):(<>
          <div className="flex gap-4 cursor-pointer items-center">
          <img width="60em" className="rounded-xl" src={nowPlaying[songIndex].cover} alt="cover" />
          <div className="w-24">
            <div>{nowPlaying[songIndex].title}</div>
            <div>{nowPlaying[songIndex].artist}</div>
          </div>
        </div>
        </>)}
        <div className="h-14">
          <audio
            ref={audioEl}
            src={nowPlaying[songIndex].audio}
            type="audio/mpeg"
          ></audio>
          <div className="flex justify-center gap-12">
            <BiShuffle className="cursor-pointer hidden lg:flex" />
            <GiPreviousButton
              onClick={() => {
                dispatch(goToPrevSong());
              }}
              className="cursor-pointer hidden lg:flex"
            />
            <div
              className="cursor-pointer"
              onClick={() => {
                setIsPlaying(!isPlaying);
              }}
            >
              {isPlaying ? <BsFillPauseCircleFill /> : <BsFillPlayCircleFill />}
            </div>
            <GiNextButton
              onClick={() => {
                dispatch(goToNextSong())
              }}
              className="cursor-pointer"
            />
            <TbRepeatOnce className="hidden cursor-pointer lg:flex" />
          </div>
          <div className='hidden lg:flex w-[40rem] mt-8'>
            {/* <div>{calculateTime(currentTime)}</div> */}
            <input
              type="range"
              id="progressBar"
              defaultValue="0"
              ref={progressBar}
              onChange={changeRange}
            />
          </div>
        </div>
        <div className="hidden items-center lg:flex">
          <svg
            width="18"
            height="18"
            viewBox="0 0 18 18"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              d="M13.5 12.5625C13.38 12.5625 13.2675 12.525 13.1625 12.45C12.915 12.2625 12.8625 11.91 13.05 11.6625C14.2275 10.095 14.2275 7.90499 13.05 6.33749C12.8625 6.08999 12.915 5.73749 13.1625 5.54999C13.41 5.36249 13.7625 5.41499 13.95 5.66249C15.42 7.62749 15.42 10.3725 13.95 12.3375C13.8375 12.4875 13.6725 12.5625 13.5 12.5625Z"
              fill="#EFEEE0"
            />
            <path
              d="M14.8725 14.4375C14.7525 14.4375 14.64 14.4 14.535 14.325C14.2875 14.1375 14.235 13.785 14.4225 13.5375C16.425 10.8675 16.425 7.13249 14.4225 4.46249C14.235 4.21499 14.2875 3.86249 14.535 3.67499C14.7825 3.48749 15.135 3.53999 15.3225 3.78749C17.625 6.85499 17.625 11.145 15.3225 14.2125C15.2175 14.3625 15.045 14.4375 14.8725 14.4375Z"
              fill="#EFEEE0"
            />
            <path
              d="M10.515 2.83501C9.675 2.37001 8.6025 2.49001 7.5075 3.17251L5.3175 4.54501C5.1675 4.63501 4.995 4.68751 4.8225 4.68751H4.125H3.75C1.935 4.68751 0.9375 5.68501 0.9375 7.50001V10.5C0.9375 12.315 1.935 13.3125 3.75 13.3125H4.125H4.8225C4.995 13.3125 5.1675 13.365 5.3175 13.455L7.5075 14.8275C8.1675 15.24 8.8125 15.4425 9.4125 15.4425C9.8025 15.4425 10.1775 15.3525 10.515 15.165C11.3475 14.7 11.8125 13.7325 11.8125 12.4425V5.55751C11.8125 4.26751 11.3475 3.30001 10.515 2.83501Z"
              fill="#EFEEE0"
            />
          </svg>
          <div className="bg-[#E6E6E6] hidden min-w-[10em] cursor-pointer rounded-md h-[0.3em] lg:block">
            <div className="bg-yellow rounded-md w-1/2 relative h-[0.3em]"></div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default NowPlaying;
