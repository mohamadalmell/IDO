import React from 'react';
import { 
    AddItem,
    Avatar,
    Logo, 
    NavbarWrapper, 
    RightSideWrapper,
    SearchContainer,
    SearchIcon
} from './styles';
import { colors } from '../../config/styles';
import Icon from '../../assets/Logo.png';
import Search from '../../assets/Search.svg';


export default function Navbar() {
  return (
    <>
        <NavbarWrapper bgColor={colors.navbarBg}>
            <Logo logo={Icon}/>
            <RightSideWrapper>
                <SearchContainer>
                    <SearchIcon icon={Search} />
                </SearchContainer>
                <AddItem />
                <Avatar />
            </RightSideWrapper>
        </NavbarWrapper>
    </>
  )
}
