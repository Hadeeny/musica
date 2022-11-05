import React, {useEffect, useState} from "react";
import { getSingle } from "../features/musicSlice";
import { useSelector, useDispatch } from "react-redux";
const SearchBox = ({ query, setQuery }) => {
  const [showResults, setShowResults] = useState(false)
  const dispatch = useDispatch();

  const allMusic = useSelector((state) => state.allMusic);
  const { musicFiles } = allMusic;

  const filteredFiles = musicFiles.filter((item) => {
    return (
      item.artist.toLowerCase().includes(query.toLowerCase()) ||
      item.title.toLowerCase().includes(query.toLowerCase())
    );
  });
useEffect(() => {
  if(query===''){
    setShowResults(false)
  } else setShowResults(true)
})
  const show = (id, files) => {
    setQuery('')
    const index = musicFiles.findIndex((object) => {
      return object.id === id;
    });
    dispatch(getSingle({ index, files }));
    setShowResults(false)
  };

  return (
    <>
    {showResults && (<div
      className={`bg-darkGray fixed top-12 w-full space-y-4 px-6 py-8`}
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
    </div>)}
    </>
  );
};

export default SearchBox;
