import { useNavigate, useParams } from "react-router-dom";
import React, { useState, useEffect } from "react";
import axios from "axios";

import Main from "./Main";
import SignIn from "./SignIn";
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
  // const header = "영화 검색";
  // const header = Code.Header_Name;
  // console.log(header);

  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");

  const handleSubmit = (event) => {
    event.preventDefault();
    // Add your authentication logic here
    console.log("Username: ", username);
    console.log("Password: ", password);
  };
  const callApi = async () => {
    axios.get("/api").then((res) => console.log(res.data));
  };

  useEffect(() => {
    callApi();
  }, []);

  return (
    <div>
      <MyHeader />
      {/* <div className="wrapper_Login">로그인 해주세요.</div> */}
      {/* <LoginEx /> */}
      <SubHeader headText={"로그인 해주세요."} />
      <Form_Login />
      {/* <form onSubmit={handleSubmit}>
        <label>
          ID:
          <input
            type="text"
            value={username}
            onChange={(e) => setUsername(e.target.value)}
          />
        </label>
        <label>
          Password:
          <input
            type="password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
          />
        </label>

        <MyButton
          type="submit"
          text={"로그인"}
          onClick={() => navigate("/Main")}
        ></MyButton>
        
        
      </form> */}
      <div className="btn_SignIn">
        <MyButton
          text={"회원가입"}
          onClick={() => navigate("/SignIn")}
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
