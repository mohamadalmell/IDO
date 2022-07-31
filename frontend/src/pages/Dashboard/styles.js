import styled from "styled-components";

export const CardsDecksContainer = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: space-evenly;
  width: 90vw;
  `;

export const MainContainer = styled.div`
  background-color: ${props=>props.color};
  height: 100%;
`;