import React, { useState, useEffect } from "react";
import { useNavigate, useParams } from "react-router-dom";

import MyButton from "../components/MyButton";
import MyHeader from "../components/MyHeader";

const Main = () => {
  const [query, setQuery] = useState("");
  const [movies, setMovies] = useState([]);

  useEffect(() => {
    const fetchData = async () => {
      const response = await fetch(
        `https://openapi.naver.com/v1/search/movie.json?query=${query}`,
        {
          headers: {
            "X-Naver-Client-Id": "ccNCXaCW7RJaaHA_KGcl",
            "X-Naver-Client-Secret": "u24KIalDNc",
          },
        }
      );
      const data = await response.json();
      setMovies(data.items);
    };

    fetchData();
  }, [query]);
  return (
    <div>
      <MyHeader headText={"영화 리뷰페이지 입니다."}></MyHeader>
      <form>
        <input
          type="text"
          value={query}
          onChange={(event) => setQuery(event.target.value)}
        />
        <button type="submit">Search</button>
      </form>
      <ul>
        {movies.map((movie) => (
          <li key={movie.title}>
            {movie.title} ({movie.pubDate})
          </li>
        ))}
      </ul>
    </div>
  );
};

export default Main;
