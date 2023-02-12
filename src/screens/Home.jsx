import { useEffect } from "react";

import {  useLocation } from "react-router-dom";
import TopCharts from "../components/TopCharts";
import user2 from "../assets/Ellipse 2.png";
import user3 from "../assets/Ellipse 3.png";
import user4 from "../assets/Ellipse 4.png";
import user5 from "../assets/Ellipse 5.png";
import user6 from "../assets/Ellipse 6.png";
import like from "../assets/whitelike.svg";
import NewRelease from "../components/NewRelease";
import { useDispatch, useSelector } from "react-redux";
import { getAllMusic } from "../features/musicSlice";
import { getPlaylists } from "../features/playlistSlice";

const Home = () => {

  const {pathname} = useLocation()
  useEffect(() => {
    window.scrollTo(0, 0);
  }, [pathname]);

  const playlist = useSelector((state) => state.playlist);

  const {
    myPlaylist,
    error,
    message: errorMessage,
    loading: loadingMusic,
  } = playlist;

  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(getPlaylists());
    dispatch(getAllMusic());
  }, [dispatch]);

  return (
    <>
      {/* first section */}
      <div className="w-[99%] lg:w-[87%] z-[100] h-96 mx-auto mb-[16em] lg:mb-[2em] lg:flex">
        <div className="bg-darkBlue space-y-14 lg:bg-[url('./assets/rema.png')] bg-no-repeat bg-right text-white rounded-3xl p-10 my-5 mx-5 lg:w-[50em] lg:h-[23em]">
          <h4>Curated Playlist</h4>
          <div className="">
            <h2 className="text-4xl">R & B Hits</h2>
            <p>
              All mine, lie again, Petty call me everyday,
              <br /> Out of time, No love, Bad habit, <br /> and so much more
            </p>
          </div>
          <div className="flex gap-6">
            <div className="flex cursor-pointer">
              <img className="ml-0" src={user2} />
              <img className="-ml-4" src={user5} />
              <img className="-ml-4" src={user4} />
              <img className="-ml-4" src={user3} />
              <img className="-ml-4" src={user4} />
              <img className="-ml-4" src={user5} />
              <img className="-ml-4" src={user6} />
            </div>
            <div className="flex">
              <img className="mr-4" src={like} />
              <p>33K Likes</p>
            </div>
          </div>
        </div>
        <TopCharts />
      </div>
      <NewRelease
        error={error}
        myPlaylist={myPlaylist}
        erroMessage={errorMessage}
        loadingMusic={loadingMusic}
        title="New Release"
      />
      {/* <NewRelease
        error={error}
        myPlaylist={myPlaylist}
        erroMessage={errorMessage}
        loadingMusic={loadingMusic}
        title="Popular in your area"
        
      /> */}
    </>
  );
};

export default Home;
