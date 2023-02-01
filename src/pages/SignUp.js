import React, { useState } from "react";
import { useNavigate, useParams } from "react-router-dom";

import MyHeader from "../components/MyHeader";
import MyButton from "../components/MyButton";
import SubHeader from "../components/SubHeader";
import NaverLogin from "../components/NaverLogin";

const SignUp = () => {
  const navigate = useNavigate();
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");
  const [error, setError] = useState(false);

  const handleSubmit = (event) => {
    event.preventDefault();
    if (password !== confirmPassword) {
      setError(true);
      return;
    }
    // Add your registration logic here
    console.log("Username: ", username);
    console.log("Password: ", password);
  };
  return (
    <div>
      <MyHeader
        leftChild={
          <MyButton text={"<"} onClick={() => navigate(-1)}></MyButton>
        }
      />
      <SubHeader headText={"회원가입"} />
      <form onSubmit={handleSubmit}>
        <label>
          ID:
          <input
            type="text"
            value={username}
            onChange={(e) => setUsername(e.target.value)}
          />
        </label>
        <br />
        <br />
        <label>
          Password:
          <input
            type="password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
          />
        </label>

        <label>
          Confirm Password:
          <input
            type="password"
            value={confirmPassword}
            onChange={(e) => setConfirmPassword(e.target.value)}
            style={error ? { border: "1px solid red" } : {}}
            onFocus={() => setError(false)}
          />
          {error && (
            <span style={{ color: "red" }}>Password does not match</span>
          )}
        </label>

        <button type="submit">Complete Registration</button>
      </form>
    </div>
  );
};

export default SignUp;
