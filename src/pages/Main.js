import React from "react";
import { useNavigate, useParams } from "react-router-dom";

import MyButton from "../components/MyButton";
import MyHeader from "../components/MyHeader";

const Main = () => {
  return (
    <div>
      <MyHeader headText={"영화 리뷰페이지 입니다."}></MyHeader>
    </div>
  );
};

export default Main;
