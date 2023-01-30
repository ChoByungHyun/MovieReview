import React, { useState, useEffect } from "react";
import { useNavigate, useParams } from "react-router-dom";
import axios from "axios";

import MyButton from "../components/MyButton";
import MyHeader from "../components/MyHeader";
import MovieList from "../components/MovieList";

const Main = () => {
  return (
    <div>
      <MyHeader headText={"영화 리뷰페이지 입니다."}></MyHeader>
      <MovieList />
    </div>
  );
};

export default Main;
