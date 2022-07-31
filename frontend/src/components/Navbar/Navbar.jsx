import React, { useEffect, useState } from "react";
import {
  AddItem,
  AdminPanel,
  AdminRightSideWrapper,
  Avatar,
  Avatar2X,
  Email,
  Logo,
  LogOut,
  LogoutIcon,
  LogoutText,
  NavbarWrapper,
  RightSideWrapper,
  SearchContainer,
  SearchIcon,
  SearchInput,
} from "./styles";
import { colors, connection } from "../../config/config";
import Icon from "../../assets/Logo.png";
import Search from "../../assets/Search.svg";
import Add from "../../assets/Add.png";
import Profile from "../../assets/Bitmap.png";
import Profile2X from "../../assets/Bitmap2X.png";
import Logout from "../../assets/Logout.svg";
import axios from "axios";
import { NavLink } from "react-router-dom";

export default function Navbar(props) {
  const [isHover, setIsHover] = useState(false);
  const [showAdminPanel, setShowAdminPanel] = useState(false);
  const [admin, setAdmin] = useState([]);

  useEffect(() => {
    getAdmin();
  }, []);

  function getAdmin() {
    axios
      .get(`${connection.connectionString}/admin`)
      .then((res) => setAdmin(res.data))
      .catch((err) => console.error(err));
  }

  return (
    <>
      <NavbarWrapper bgColor={colors.navbarBg}>
        <Logo logo={Icon} />
        <RightSideWrapper>
          <SearchContainer>
            <SearchInput
              id="search"
              inputBg={colors.navbarBg}
              type="search"
              placeholder="What are you looking for?"
              onMouseOver={() => setIsHover(true)}
              onMouseLeave={() => setIsHover(false)}
              style={{
                visibility: isHover ? "visible" : "hidden",
              }}
            />
            <label htmlFor="search">
              <SearchIcon
                onMouseOver={() => setIsHover(!isHover)}
                onMouseLeave={() => setIsHover(!isHover)}
                onClick={() => setIsHover(true)}
                icon={Search}
              />
            </label>
          </SearchContainer>
          <AddItem onClick={() => props.setAdd(!props.add)} icon={Add} />
          <Avatar
            icon={Profile}
            onClick={() => setShowAdminPanel(!showAdminPanel)}
          />
        </RightSideWrapper>
        {showAdminPanel && (
          <AdminPanel bgColor={colors.navbarBg}>
            <Avatar2X icon={Profile2X} />
            <AdminRightSideWrapper>
              <Email>{admin[0].email}</Email>
              <NavLink to='/'>
                <LogOut
                  onClick={() => {
                    if (localStorage.getItem("token") != null) {
                      localStorage.removeItem("token");
                      window.location.replace("/");
                    }
                  }}
                >
                  <LogoutText>Log Out</LogoutText>
                  <LogoutIcon icon={Logout} />
                </LogOut>
              </NavLink>
            </AdminRightSideWrapper>
          </AdminPanel>
        )}
      </NavbarWrapper>
    </>
  );
}
