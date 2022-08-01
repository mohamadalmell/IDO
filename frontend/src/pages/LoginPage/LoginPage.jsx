import React, { useState } from "react";
import {
  MainContainer,
  LeftContainer,
  RightContainer,
  LoginForm,
  Inputs,
  Button,
  RightContainerWrapper,
} from "./styles";
import { colors, connection } from "../../config/config";
import loginBg from "../../assets/loginBg.png";
import { Navigate } from "react-router-dom";
import axios from "axios";

export default function LoginPage(props) {
  const [admin, setAdmin] = useState({});
  const [isLoggedIn, setIsLoggedIn] = useState(false);

  function handleSubmit(e) {
    e.preventDefault();

    let data = new FormData();
    data.append("email", admin.email);
    data.append("password", admin.password);

    axios
      .post(`${connection.connectionString}/token`, data)
      .then((res) => {
        setIsLoggedIn(!isLoggedIn);
        console.log(res.data);
        localStorage.setItem("token", res.data);
      })
      .catch((err) => console.error(err));
  }

  function handleChange(event) {
    let value = event.target.value;
    let name = event.target.name;

    setAdmin((prevalue) => {
      return {
        ...prevalue,
        [name]: value,
      };
    });
  }
  return (
    <>
      {isLoggedIn && <Navigate to="/dashboard" />}
      <MainContainer>
        <LeftContainer bgImage={loginBg} bgColor={colors.loginPage} />
        <RightContainer>
          <RightContainerWrapper>
            <h1
              style={{
                fontWeight: 100,
                width: "55%",
                fontSize: "3rem",
              }}
            >
              Time to Work!
            </h1>
            <LoginForm onSubmit={handleSubmit}>
              <label htmlFor="email">Email</label>
              <Inputs
                onChange={handleChange}
                name="email"
                type="email"
                id="email"
                inputColor={colors.loginPage}
              />
              <label htmlFor="password">Password</label>
              <Inputs
                name="password"
                onChange={handleChange}
                type="password"
                id="password"
                inputColor={colors.loginPage}
              />
              <Button value="SIGN IN" type="submit" />
            </LoginForm>
          </RightContainerWrapper>
        </RightContainer>
      </MainContainer>
    </>
  );
}
