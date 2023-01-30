import { useNavigate, useParams } from "react-router-dom";
import React, { useState, useEffect } from "react";
import axios from "axios";

import Main from "./Main";
import SignIn from "./SignIn";
import MyHeader from "../components/MyHeader";
import MyButton from "../components/MyButton";

const LogIn = () => {
  const navigate = useNavigate();
  const header = "여기는 로그인페이지";

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
      <MyHeader headText={header} />
      <div>어서오세요</div>
      <form onSubmit={handleSubmit}>
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

        <MyButton
          text={"회원가입"}
          onClick={() => navigate("/SignIn")}
        ></MyButton>
      </form>
    </div>
  );
};

export default LogIn;
