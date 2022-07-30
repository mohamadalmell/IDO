import React from 'react';
import {
    MainContainer,
    LeftContainer, 
    RightContainer,
    LoginForm,
    Inputs, 
    Button,
    RightContainerWrapper,
} from './styles';
import { colors } from '../../config/styles';
import loginBg from '../../assets/loginBg.png';
import { NavLink } from 'react-router-dom';

export default function LoginPage(props) {
  return (
    <>
        <MainContainer>
            <LeftContainer
                bgImage={loginBg}
                bgColor={colors.loginPage}
            />
            <RightContainer >
                <RightContainerWrapper>
                    <h1
                        style={{
                            fontWeight: 100,
                            width: '55%',
                            fontSize: '3rem'
                            }}
                    >Time to Work!</h1>
                    <LoginForm>
                        <label htmlFor='email'>
                            Email
                        </label>
                        <Inputs
                            type="email"
                            id="email"
                            inputColor={colors.loginPage}
                        />
                        <label htmlFor='password'>
                            Password
                        </label>
                        <Inputs
                            type="password"
                            id="password"
                            inputColor={colors.loginPage}
                        />
                        <NavLink to="/dashboard" >
                            <Button>
                                SIGN IN
                            </Button>
                        </NavLink>
                    </LoginForm>
                </RightContainerWrapper>
            </RightContainer>
        </MainContainer>
    </>
  )
}
