import React, { useState, useEffect } from "react";
import { useRecoilState, atom } from "recoil";
import { Input, Row, Col } from "antd";
import MovieInfo from "../util/MovieInfo";
import MyButton from "./MyButton";
import SearchBar from "./SearchBar";
import item from "../item.json";
import { Code } from "../Common/common";
const { Search } = Input;

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
    apiGet(query);
  };

  return (
    <div className="listArea">
      <Input
        type="text"
        value={query}
        onChange={(e) => setQuery(e.target.value)}
      />
      <div className="input_searchbar">
        <MyButton text={"검색"} onClick={handleSubmit}></MyButton>
      </div>

      <div
        className="listView"
        style={{
          display: "grid",
          justifyContent: "center",
        }}
      >
        {articles &&
          articles.map((v, inx) => {
            return <MovieInfo key={inx} row={v} />;
          })}
      </div>
    </div>
  );
};

export default MovieList;
