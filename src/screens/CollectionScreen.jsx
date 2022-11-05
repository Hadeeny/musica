import { useState } from "react";
import Collections from "../components/Collections";
import NewRelease from "../components/NewRelease";
import { useSelector } from "react-redux";
import MusicList from "../components/MusicList";
const CollectionScreen = () => {
  const playlist = useSelector((state) => state.playlist);
  const allMusic = useSelector((state) => state.allMusic);

  const [showLikes, setShowLikes] = useState(false);
  const [showCollections, setShowCollections] = useState(true);

  const { myCollection, myLikes } = allMusic;

  const {
    myPlaylist,
    error,
    message: errorMessage,
    loading: loadingMusic,
  } = playlist;

  const displayLikes = () => {
    setShowCollections(false);
    setShowLikes(true);
  };

  const displayCollections = () => {
    setShowLikes(false);
    setShowCollections(true);
  };

  return (
    <div className="mt-[1rem] ml-4">
      <div className="flex gap-2">
        <button
          className={`py-2 px-4 lg:ml-16 cursor-pointer rounded-3xl focus:bg-yellow focus:text-black border-[1.2px] border-[#eee]`}
          href=""
          onClick={displayCollections}
        >
          My Collection
        </button>
        <button
          onClick={displayLikes}
          className={`py-2 px-4 cursor-pointer focus:bg-yellow focus:text-black rounded-3xl border-[1.2px]  border-[#eee]`}
          href=""
        >
          Likes
        </button>
      </div>
      {showCollections && (
        <div>
          <Collections
            error={error}
            myPlaylist={myCollection}
            erroMessage={errorMessage}
            loadingMusic={loadingMusic}
          />
        </div>
      )}
      {showLikes && (
        <div className="mt-6 w-11/12 mx-auto space-y-2">
          <MusicList list={myLikes} />
        </div>
      )}
    </div>
  );
};

export default CollectionScreen;
