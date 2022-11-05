import React, { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { addToLikes, getIndex } from "../features/musicSlice";
import { toggleLike } from "../features/playlistSlice";

const MusicList = ({ list }) => {
  const allMusic = useSelector((state) => state.allMusic);
  const { myLikes } = allMusic;
  const dispatch = useDispatch();
  const playOne = (index, list) => {
    dispatch(getIndex({ index, list }));
  };
  const likeMusic = (item) => {
    dispatch(toggleLike(item.id));
    if (!myLikes.includes(item)) {
      dispatch(addToLikes(item));
    }
  };

  return (
    <>
      {list.map((li, index) => (
        <div
          key={index}
          className="bg-[#25292C] cursor-pointer flex justify-between items-center py-8 px-2 rounded-xl w-full h-14"
        >
          <div className="flex gap-2 lg:gap-60 items-center">
            <div className="flex items-center gap-8">
              <img width="50rem" src={li.cover} onClick={() => playOne(index, list)}/>
              <svg
                onClick={() => likeMusic(li)}
                className={`hidden lg:flex ${li.liked && "fill-red-500"}`}
                width="20"
                height="20"
                viewBox="0 0 20 20"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  fillRule="evenodd"
                  clipRule="evenodd"
                  d="M2.43496 10.3718C1.54079 7.58016 2.58662 4.10933 5.51746 3.16599C7.05912 2.66849 8.96162 3.08349 10.0425 4.57433C11.0616 3.02849 13.0191 2.67183 14.5591 3.16599C17.4891 4.10933 18.5408 7.58016 17.6475 10.3718C16.2558 14.7968 11.4 17.1018 10.0425 17.1018C8.68579 17.1018 3.87329 14.8485 2.43496 10.3718Z"
                  stroke="#EFEEE0"
                  strokeWidth="0.625"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                />
                <path
                  d="M13.1572 6.30328C14.163 6.40662 14.7922 7.20412 14.7547 8.32162"
                  stroke="#EFEEE0"
                  strokeWidth="0.625"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                />
              </svg>
            </div>
            <div
              onClick={() => playOne(index, list)}
              className="lg:flex lg:justify-between lg:w-96"
            >
              <h3>{li.title}</h3>
              <p>{li.title}</p>
            </div>
          </div>
          <div className="lg:flex gap-52 items-center text-right">
            <svg
              className="order-1 lg:order-2"
              width="15"
              height="14"
              viewBox="0 0 15 14"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                d="M7.25789 7.58341C7.58006 7.58341 7.84123 7.32225 7.84123 7.00008C7.84123 6.67792 7.58006 6.41675 7.25789 6.41675C6.93573 6.41675 6.67456 6.67792 6.67456 7.00008C6.67456 7.32225 6.93573 7.58341 7.25789 7.58341Z"
                stroke="#FACD66"
                strokeWidth="1.16667"
                strokeLinecap="round"
                strokeLinejoin="round"
              />
              <path
                d="M7.25789 3.49992C7.58006 3.49992 7.84123 3.23875 7.84123 2.91659C7.84123 2.59442 7.58006 2.33325 7.25789 2.33325C6.93573 2.33325 6.67456 2.59442 6.67456 2.91659C6.67456 3.23875 6.93573 3.49992 7.25789 3.49992Z"
                stroke="#FACD66"
                strokeWidth="1.16667"
                strokeLinecap="round"
                strokeLinejoin="round"
              />
              <path
                d="M7.25789 11.6667C7.58006 11.6667 7.84123 11.4055 7.84123 11.0833C7.84123 10.7612 7.58006 10.5 7.25789 10.5C6.93573 10.5 6.67456 10.7612 6.67456 11.0833C6.67456 11.4055 6.93573 11.6667 7.25789 11.6667Z"
                stroke="#FACD66"
                strokeWidth="1.16667"
                strokeLinecap="round"
                strokeLinejoin="round"
              />
            </svg>
            <p className="order-2 lg:order-1 text-right">{li.duration}</p>
          </div>
        </div>
      ))}
    </>
  );
};

export default MusicList;
