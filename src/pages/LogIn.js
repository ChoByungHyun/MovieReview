import React from "react";
import MyButton from "../components/MyButton";
import { useNavigate, useParams } from "react-router-dom";

import Main from "./Main";
import SignIn from "./SignIn";
import MyHeader from "../components/MyHeader";

const LogIn = () => {
  const navigate = useNavigate();
  const header = "여기는 로그인페이지";
  console.log(header);
  return (
    <div>
      <MyHeader headText={header} />
      <MyButton text={"Go Main!"} onClick={() => navigate("/Main")} />
      <MyButton text={"Go SignIn!"} onClick={() => navigate("/SignIn")} />
    </div>
  );
};

export default LogIn;
