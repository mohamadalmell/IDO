import styled from "styled-components";

export const QuoteContainer = styled.div`
  height: 10vh;
  background: transparent
    linear-gradient(
      180deg,
      ${(props) => props.quoteBgGrad1} 0%,
      ${(props) => props.quoteBgGrad2} 100%
    )
    0% 0% no-repeat padding-box;
  opacity: 1;
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 0 1.5rem 0 3rem;
  width: 100%;
`;

export const QuoteText = styled.p`
  font-style: italic;
  color: #fff;
`;

export const QuoteIcon = styled.div`
  background: transparent url(${(props) => props.icon}) 0% 0% no-repeat
    padding-box;
  background-repeat: no-repeat;
  background-size: contain;
  background-position: center;
  width: 20px;
  height: 20px;
  margin-right: 10%;
  :hover {
    cursor: pointer;
  }
`;

export const ShowQuote = styled.div`
  background: transparent url(${(props) => props.icon}) 0% 0% no-repeat
    padding-box;
  background-repeat: no-repeat;
  background-size: contain;
  background-position: center;
  width: 25px;
  height: 25px;
  :hover {
    cursor: pointer;
  }
  float: right;
  margin: 3.5rem 3.5rem 0 0;
`;
