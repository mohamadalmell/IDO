import styled from "styled-components";

export const CardContainer = styled.div`
  background-color: ${(props) => props.cardBg};
  width: 25vw;
  box-shadow: 0px 3px 6px #00000029;
  border-radius: 6px;
  opacity: 1;
  margin: 0 2rem 2rem;
  padding: 1rem;
  height: 40vh;
`;

export const HeaderContainer = styled.div`
  display: flex;
  justify-content: space-between;
`;

export const ItemTitle = styled.div`
  margin-bottom: 1.5rem;
`;

export const Save = styled.input`
  height: 25px;
  width: 55px;
  background-color: ${(props) => props.color};
  color: #fff;
  border: 0px;
  border-radius: 5px;
  margin-left: 20%;
`;
export const EditIcon = styled.div`
  background: transparent url(${(props) => props.icon}) 0% 0% no-repeat
    padding-box;
  background-repeat: no-repeat;
  background-size: contain;
  background-position: center;
  color: #fff;
  width: 25px;
  height: 25px;
  &:hover {
    cursor: pointer;
  }
`;

export const ItemContainer = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  width: 80%;
  font-size: 0.8rem;
  margin-bottom: 22px;
`;

export const Key = styled.div`
  color: ${(props) => props.cardKeyColor};
`;

export const Value = styled.div`
  width: 55%;
  text-align: left;
`;

export const Input = styled.input`
  width: 35%;
  padding: auto 0.5rem;
  background-color: transparent;
  color: #fff;
  border: 1px solid #fff;
  border-radius: 5px;
`;

export const ImportanceValue = styled.div`
  background: ${(props) => props.color} 0% 0% no-repeat padding-box;
  padding: 7px 10px;
  border-radius: 4px;
  opacity: 1;
  text-align: center;
  width: 45%;
`;

export const Select = styled.select`
  background: ${(props) => props.color} 0% 0% no-repeat padding-box;
  width: 35%;
  padding: 7px 10px;
  border-radius: 4px;
  opacity: 1;
  text-align: center;
`;

export const Option = styled.option`
  background: ${(props) => props.color} 0% 0% no-repeat padding-box;
  padding: 7px 10px;
  border-radius: 4px;
  opacity: 1;
  width: 25%;
`;
