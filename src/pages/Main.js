import React, { useState, useEffect } from "react";
import { useNavigate, useParams } from "react-router-dom";
import axios from "axios";

import MyButton from "../components/MyButton";
import MyHeader from "../components/MyHeader";
import MovieList from "../components/MovieList";
import SubHeader from "../components/SubHeader";
import item from "../item.json";
import MovieCard from "../components/MovieCard";
import SearchBar from "../components/SearchBar";

const Main = () => {
  const navigate = useNavigate();
  return (
    <div>
      <MyHeader
        leftChild={
          <MyButton text={"<"} onClick={() => navigate(-1)}></MyButton>
        }
      ></MyHeader>
      <SubHeader headText={"찾는 영화가 무엇인가요?"} />
      <MovieList />
    </div>
  );
};

export default Main;
