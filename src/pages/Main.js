import React, { useState, useEffect } from "react";
import { useNavigate, useParams } from "react-router-dom";
import axios from "axios";

import MyButton from "../components/MyButton";
import MyHeader from "../components/MyHeader";
import MovieList from "../components/MovieList";
import item from "../item.json";
import MovieCard from "../components/MovieCard";
import SearchBar from "../components/SearchBar";

const Main = () => {
  return (
    <div>
      <MyHeader headText={"영화 리뷰페이지 입니다."}></MyHeader>
      {/* <SearchBar /> */}
      <MovieList />
    </div>
  );
};

export default Main;
