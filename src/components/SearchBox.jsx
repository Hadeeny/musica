import React from "react";
import { getSingle } from "../features/musicSlice";
import { useSelector, useDispatch } from "react-redux";
const SearchBox = ({ query, setQuery }) => {
  const dispatch = useDispatch();
  const playlist = useSelector((state) => state.playlist);
  const { filesFound } = playlist;

  const allMusic = useSelector((state) => state.allMusic);
  const { musicFiles } = allMusic;

  const filteredFiles = musicFiles.filter((item) => {
    return (
      item.artist.toLowerCase().includes(query.toLowerCase()) ||
      item.title.toLowerCase().includes(query.toLowerCase())
    );
  });

  const show = (id, files) => {
    setQuery("");
    const index = musicFiles.findIndex((object) => {
      return object.id === id;
    });
    console.log(index);
    dispatch(getSingle({ index, files }));
  };

  return (
    <div
      className={`bg-darkGray ${
        query == "" && "hidden"
      } fixed w-full space-y-4 px-6 py-8`}
    >
      {filteredFiles.map((file, index) => (
        <div
          key={index}
          onClick={() => show(file.id, musicFiles)}
          className="bg-gray-500 cursor-pointer p-2"
        >
          <h3>{file.artist}</h3>
          <p>{file.title}</p>
        </div>
      ))}
    </div>
  );
};

export default SearchBox;
