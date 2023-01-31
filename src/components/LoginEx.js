import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import MyButton from "./MyButton";

const LoginEx = () => {
  let [id, setId] = useState("");
  let [pw, setPw] = useState("");
  const navigate = useNavigate();
  const [button, setButton] = useState(true);
  //   function changeButton() {
  //     id.includes("@") && pw.length >= 5 ? setButton(false) : setButton(true);
  //   }
  const goToMain = () => {
    navigate("/main");
  };
  const realId = "a@a";
  const realPw = "11111";
  return (
    <div>
      <input
        placeholder="전화번호 사용자 이름 또는 이메일"
        id="id"
        className="login"
        onChange={(e) => {
          setId(e.target.value);
        }}
        //onKeyUp={changeButton}
      />
      <input
        type="password"
        placeholder="비밀번호"
        id="password"
        className="login"
        onChange={(e) => {
          setPw(e.target.value);
        }}
        //onKeyUp={changeButton}
      />
      <MyButton
        className="loginButton"
        onClick={(e) => {
          if (realId == id) {
            if (realPw == pw) {
              e.stopPropagation();
              goToMain();
            }
          } else {
            alert("아이디 혹은 비밀번호가 일치하지 않습니다.");
          }
        }}
        text="로그인"
      ></MyButton>
    </div>
  );
};

export default LoginEx;
