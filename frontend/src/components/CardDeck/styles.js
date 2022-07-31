import styled from "styled-components";

export const CardsDeckWrapper = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  margin-top: 1rem;
  color: #fff;
`;

export const CardsContainer = styled.div`
  display: flex;
  flex-direction: column;
  width: 30vw;
  align-items: center;
  margin-top: 0.5rem;
`;

export const StatusHeader = styled.div`
  display: flex;
  align-items: center;
  background-color: ${(props) => props.cardBg};
  width: 25vw;
  height: 48px;
  box-shadow: 0px 3px 6px #00000029;
  border-radius: 6px;
  padding: 0 1rem;
`;

export const StatusHeaderIcon = styled.div`
  background: transparent url(${(props) => props.icon}) 0% 0% no-repeat
    padding-box;
  background-repeat: no-repeat;
  background-size: contain;
  background-position: center;
  width: 20px;
  height: 16px;
  padding: 0 1rem;
`;
