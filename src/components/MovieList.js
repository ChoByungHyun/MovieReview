import React, { useState, useEffect } from "react";
import { useRecoilState, atom } from "recoil";

import MovieInfo from "../util/MovieInfo";
import MyButton from "./MyButton";
import SearchBar from "./SearchBar";

export const selectedTabId = atom({
  key: "tabId",
  default: "news",
});
export const searchKeyword = atom({
  key: "keyword",
  default: "코로나",
});
const MovieList = () => {
  const [articles, setArticles] = useState(null);
  const [movies, setMovies] = useState([]);
  const [query, setQuery] = useState("");
  const [searchTerm, setSearchTerm] = useState("");

  const apiGet = async (param) => {
    const apiUrl = "/v1/search/movie" + "?query=" + param;
    const resp = await fetch(apiUrl, {
      method: "GET",
      headers: {
        "Content-Type": "application/json",
        "X-Naver-Client-Id": "ccNCXaCW7RJaaHA_KGcl",
        "X-Naver-Client-Secret": "u24KIalDNc",
      },
    });
    resp.json().then((data) => {
      setArticles(data.items);
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    apiGet(searchTerm);
  };

  //   useEffect(() => {
  //     apiGet("바스터즈");
  //   }, []);

  return (
    <div className="listArea">
      {/* //   <form onSubmit={handleSubmit}>
    //     <input
    //       type="text"
    //       value={searchTerm}
    //       onChange={(e) => setSearchTerm(e.target.value)}
    //     />
    //     <button type="submit">Search</button>
    //   </form>
    //   <SearchResults articles={articles} /> */}

      <input
        type="text"
        value={query}
        onChange={(e) => setQuery(e.target.value)}
      />
      <MyButton text={"검색"} onClick={handleSubmit}></MyButton>
      <div className="listView">
        {articles &&
          articles.map((v, inx) => {
            return <MovieInfo key={inx} row={v} />;
          })}
      </div>
    </div>
  );
};

export default MovieList;
