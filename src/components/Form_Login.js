import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import { Button, Checkbox, Form, Input } from "antd";
import MyButton from "./MyButton";

const Form_Login = () => {
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
  const realId = "aa";
  const realPw = "11";
  return (
    <Form
      name="basic"
      labelCol={{ span: 4 }}
      wrapperCol={{ span: 16 }}
      style={{ maxWidth: 600 }}
      //initialValues={{ remember: true }}
      // onFinish={onFinish}
      // onFinishFailed={onFinishFailed}
      autoComplete="off"
    >
      <Form.Item
        label="Username"
        name="username"
        id="id"
        onChange={(e) => {
          setId(e.target.value);
        }}
        rules={[{ required: true, message: "Please input your username!" }]}
      >
        <Input />
      </Form.Item>

      <Form.Item
        label="Password"
        name="password"
        id="password"
        onChange={(e) => {
          setPw(e.target.value);
        }}
        rules={[{ required: true, message: "Please input your password!" }]}
      >
        <Input.Password />
      </Form.Item>

      <Form.Item wrapperCol={{ offset: 18 }}>
        <MyButton
          text={"로그인"}
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
        ></MyButton>
      </Form.Item>
    </Form>
  );
};

export default Form_Login;
