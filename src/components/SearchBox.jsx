import React from "react";
import { useSelector, useDispatch } from "react-redux";
const SearchBox = ({ query }) => {
  const playlist = useSelector((state) => state.playlist);
  const { filesFound } = playlist;

  const filteredFiles = filesFound.filter((item) => {
    return (
      item.artist.toLowerCase().includes(query.toLowerCase()) ||
      item.title.toLowerCase().includes(query.toLowerCase())
    );
  });

  const show = (id) => {
    console.log(id);
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
          onClick={() => show(file.id)}
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
