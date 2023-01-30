import React from "react";
import { useRecoilState } from "recoil";

import MyButton from "./MyButton";

import { searchKeyword, selectedTabId } from "./MovieList";

const SearchBar = () => {
  //ADD :: Start
  const [keyword, setKeyword] = useRecoilState(searchKeyword);

  const search = () => {
    const searchKeyword = document.querySelector("#keyword").value;
    setKeyword(searchKeyword);
  };
  //ADD :: End

  return (
    <div className="header">
      <input type="text" className="iptSearch" id="keyword" />
      {/* onClick 추가 */}
      <MyButton text={"검색"} onClick={search}></MyButton>
    </div>
  );
};

export default SearchBar;
