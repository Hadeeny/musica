import { useState } from "react";
import NewRelease from "../components/NewRelease";
import { useSelector } from "react-redux";
const CollectionScreen = () => {
  const [showCollections, setShowCollections] = useState(false);
  const [showLikes, setShowLikes] = useState(true);

  const playlist = useSelector((state) => state.playlist);
  const allMusic = useSelector((state) => state.allMusic);

  const { myCollection } = allMusic;

  const likes = () => {
    setShowLikes(true);
    setShowCollections(false);
  };
  const collections = () => {
    setShowLikes(false);
    setShowCollections(true);
  };

  const {
    myPlaylist,
    error,
    message: errorMessage,
    loading: loadingMusic,
  } = playlist;

  return (
    <div className="mt-[1rem] ml-12">
      <div className="flex ml-12 gap-2">
        <div
          onClick={likes}
          className={`py-2 px-4 cursor-pointer ${
            showLikes ? "bg-yellow text-darkGray" : ""
          } rounded-3xl border-[1.2px] border-[#eee]`}
          href=""
        >
          My Collection
        </div>
        <div
          onClick={collections}
          className={`py-2 px-4 cursor-pointer ${
            showCollections ? "bg-yellow text-darkGray" : ""
          } rounded-3xl border-[1.2px]  border-[#eee]`}
          href=""
        >
          Likes
        </div>
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
