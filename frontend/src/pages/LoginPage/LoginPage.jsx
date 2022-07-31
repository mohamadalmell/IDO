import React, { useEffect, useState } from "react";
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
import { NavLink } from "react-router-dom";
import axios from "axios";

export default function LoginPage(props) {
  const [admin, setAdmin] = useState({});
  const [token, setToken] = useState("");

  function handleSubmit(e) {
    // e.preventDefault();
    let data = new FormData();
    data.append("email", admin.email);
    data.append("password", admin.password);
    console.log(data);

    axios
      .post(`${connection.connectionString}/token`, data)
      .then((res) => {
        setToken(res.data);
        localStorage.setItem("token", token);
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
      <MainContainer>
        {console.log(token)}
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
            <LoginForm>
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

              <Button onClick={() => handleSubmit()}>
                SIGN IN{token && setInterval(()=>{window.location.replace("/dashboard")}, 2000) }
              </Button>
            </LoginForm>
          </RightContainerWrapper>
        </RightContainer>
      </MainContainer>
    </>
  );
}
