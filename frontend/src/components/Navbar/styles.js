import styled from "styled-components";

export const NavbarWrapper = styled.div`
  background-color: ${(props) => props.bgColor};
  width: 100%;
  height: 7vh;
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  padding: 0 2%;
`;

export const Logo = styled.div`
  background-image: url(${(props) => props.logo});
  background-repeat: no-repeat;
  background-size: contain;
  background-position: center;
  height: inherit;
  min-width: 5%;
`;

export const RightSideWrapper = styled.div`
  display: flex;
  width: 20%;
`;

export const SearchContainer = styled.div`
  background: transparent url(${(props) => props.icon}) 0% 0% no-repeat
    padding-box;
  background-repeat: no-repeat;
  background-size: contain;
  background-position: center;
  height: inherit;
  min-width: 5%;
`;

export const SearchIcon = styled.div``;

export const AddItem = styled.div``;

export const Avatar = styled.div``;
