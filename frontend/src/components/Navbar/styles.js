import styled from "styled-components";

export const NavbarWrapper = styled.div`
  background-color: ${(props) => props.bgColor};
  width: 100%;
  height: 10vh;
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
`;

export const Logo = styled.div`
  background-image: url(${(props) => props.logo});
  background-repeat: no-repeat;
  background-size: contain;
  background-position: center;
  height: inherit;
  min-width: 5%;
  padding: 0 2%;
`;

export const RightSideWrapper = styled.div`
  width: 45%;
  display: flex;
  justify-content: space-evenly;
`;

export const SearchContainer = styled.div`
  display: flex;
  flex-direction: row;
`;

export const SearchInput = styled.input`
  width: 25vw;
  border: 2px solid #b6a3c2;
  border-radius: 15px;
  background: ${(props) => props.inputBg} 0% 0% no-repeat padding-box;
  padding: 0.5rem 0;
  padding-left: 1rem;
  color: #b6a3c2;
  &::placeholder {
    color: #b6a3c2;
    font-weight: lighter;
    font-size: 1rem;
  }
`;

export const SearchIcon = styled.div`
  background: transparent url(${(props) => props.icon}) 0% 0% no-repeat
    padding-box;
  background-repeat: no-repeat;
  background-size: contain;
  background-position: center;
  width: 25px;
  height: 25px;
  padding: 0.5rem 0;
  position: relative;
  right: 2.5rem;
`;

export const AddItem = styled.div`
  background: transparent url(${(props) => props.icon}) 0% 0% no-repeat
    padding-box;
  background-repeat: no-repeat;
  background-size: contain;
  background-position: center;
  width: 25px;
  height: 25px;
  padding: 0.5rem 0;
  &:hover{
    cursor: pointer;
  }
`;

export const Avatar = styled.div`
  background: transparent url(${(props) => props.icon}) 0% 0% no-repeat
    padding-box;
  background-repeat: no-repeat;
  background-size: contain;
  background-position: center;
  width: 42px;
  height: 42px;
  border-radius: 100%;
`;

export const AdminPanel = styled.div`
  background-color: ${(props) => props.bgColor};
  position: absolute;
  right: 2%;
  top: 8%;
  width: 25vw;
  height: 20vh;
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: space-around;
`;

export const Avatar2X = styled.div`
  background: transparent url(${(props) => props.icon}) 0% 0% no-repeat
    padding-box;
  background-repeat: no-repeat;
  background-size: contain;
  background-position: center;
  width: 70px;
  height: 70px;
  border-radius: 100%;
`;

export const AdminRightSideWrapper = styled.div`
  display: flex;
  flex-direction: column;
  padding-right: 3rem;
  margin-top: 0;
`;

export const Email = styled.p`
  color: #b6a3c2;
  text-align: center;
`;

export const LogOut = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  width: 65%;
  margin: 0 auto;
  &:hover{
    cursor: pointer;
  }
`;

export const LogoutText = styled.p`
  color: #fff;
  text-align: center;
  margin: 0;
`;

export const LogoutIcon = styled.div`
  background: transparent url(${(props) => props.icon}) 0% 0% no-repeat
    padding-box;
  background-repeat: no-repeat;
  background-size: contain;
  background-position: center;
  width: 20px;
  height: 16px;
`;
