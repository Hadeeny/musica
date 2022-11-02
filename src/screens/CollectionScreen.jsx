import { useState } from "react";
import NewRelease from "../components/NewRelease";
import { useSelector } from "react-redux";
const CollectionScreen = () => {
  const playlist = useSelector((state) => state.playlist);
  const allMusic = useSelector((state) => state.allMusic);

  const { myCollection } = allMusic;

  const {
    myPlaylist,
    error,
    message: errorMessage,
    loading: loadingMusic,
  } = playlist;

  return (
    <div className="mt-[1rem] ml-12">
      <div className="flex ml-12 gap-2">
        <button
          onClick={likes}
          className={`py-2 px-4 cursor-pointer rounded-3xl focus:bg-yellow focus:text-black border-[1.2px] border-[#eee]`}
          href=""
        >
          My Collection
        </button>
        <button
          onClick={collections}
          className={`py-2 px-4 cursor-pointer focus:bg-yellow focus:text-black rounded-3xl border-[1.2px]  border-[#eee]`}
          href=""
        >
          Likes
        </button>
      </div>
      <NewRelease
        error={error}
        myPlaylist={myCollection}
        erroMessage={errorMessage}
        loadingMusic={loadingMusic}
      />
    </div>
  );
};

export default CollectionScreen;
