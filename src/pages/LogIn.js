import { useNavigate, useParams } from "react-router-dom";
import React, { useState, useEffect } from "react";
import axios from "axios";

import Main from "./Main";
import SignUp from "./SignUp";
import MyHeader from "../components/MyHeader";
import MyButton from "../components/MyButton";
import NaverLogin from "../components/NaverLogin";
import LoginEx from "../components/LoginEx";
import Form_Login from "../components/Form_Login";
import { Code } from "../Common/common";
import SubHeader from "../components/SubHeader";
import GirdTest from "../components/GirdTest";

const LogIn = () => {
  const navigate = useNavigate();

  return (
    <div>
      <MyHeader />
      <SubHeader headText={"로그인 해주세요."} />

      {/* 로그인 폼 */}
      <Form_Login />

      <div className="btn_SignUp">
        <MyButton
          text={"회원가입"}
          onClick={() => navigate("/SignUp")}
        ></MyButton>
        <NaverLogin />
        <MyButton
          text={"메인으로"}
          onClick={() => navigate("/Main")}
        ></MyButton>
        <MyButton
          text={"연습장"}
          onClick={() => navigate("/GridTest")}
        ></MyButton>
        {/* <GirdTest /> */}
      </div>
    </div>
  );
};

export default LogIn;
