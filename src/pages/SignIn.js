import React from "react";
import { useNavigate, useParams } from "react-router-dom";

import MyHeader from "../components/MyHeader";
import MyButton from "../components/MyButton";

const SignIn = () => {
  const navigate = useNavigate();
  return (
    <div>
      <MyHeader
        headText={"회원가입 페이지 입니다."}
        leftChild={
          <MyButton text={"<"} onClick={() => navigate(-1)}></MyButton>
        }
      />
    </div>
  );
};

export default SignIn;
