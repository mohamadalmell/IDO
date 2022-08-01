import styled from "styled-components";

export const MainContainer = styled.div`
  display: flex;
`;

export const LeftContainer = styled.div`
  width: 50vw;
  height: 100vh;
  background-image: url(${(props) => props.bgImage});
  background-repeat: no-repeat;
  background-size: contain;
  background-position: center;
  background-color: ${(props) => props.bgColor};
`;

export const RightContainer = styled.div`
  width: 50%;
  background: transparent linear-gradient(180deg, #8556a4 0%, #2d2b52 100%) 0%
    0% no-repeat padding-box;
`;

export const RightContainerWrapper = styled.div`
  margin-top: 15%;
  display: flex;
  flex-direction: column;
  align-items: center;
  color: #fff;
`;

export const LoginForm = styled.form`
  display: flex;
  flex-direction: column;
  width: 55%;
`;

export const Inputs = styled.input`
  background-color: ${(props) => props.inputColor};
  font-weight: 100;
  margin-bottom: 5%;
  margin-top: 1%;
  border: 0;
  border-radius: 5px;
  height: 38px;
`;

export const Button = styled.input`
  width: 100%;
  background: #b6a3c2;
  height: 38px;
  border: 0;
  border-radius: 20px;
  margin-top: 5%;
  color: #403564;
  font-weight: bolder;
  &:hover{
    cursor: pointer;
  }
`;
