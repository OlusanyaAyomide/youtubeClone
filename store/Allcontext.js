import React, { useState, useContext, createContext } from "react";

const Allcontext = createContext({
  searchParam: "",
  setSearchParam: function () {},
  videos: {},
  changesetVideos: function () {},
  hasrendered: false,
  sethasrendered: function () {},
  inview: "",
  setIsInview: function () {},
});

export function AllcontextProvider(props) {
  const [searchParam, setSearchParam] = useState("New");
  const [videos, setVideos] = useState({});
  const [hasrendered, sethasrendered] = useState(false);
  const [inview, setIsInviewS] = useState(true);

  const changesetVideos = (videoList) => {
    setVideos(videoList);
  };
  const setIsInview = (value) => {
    setIsInviewS(value);
  };

  const context = {
    searchParam,
    videos,
    setSearchParam,
    changesetVideos,
    sethasrendered,
    hasrendered,
    inview,
    setIsInview,
  };
  return (
    <Allcontext.Provider value={context}>{props.children}</Allcontext.Provider>
  );
}

export default Allcontext;
