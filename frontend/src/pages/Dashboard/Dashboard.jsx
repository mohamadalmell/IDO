import React, { useEffect, useState } from "react";
import axios from "axios";
import CardsDeck from "../../components/CardDeck/CardsDeck";
import Navbar from "../../components/Navbar/Navbar";
import Quote from "../../components/Quote/Quote";
import { CardsDecksContainer, MainContainer } from "./styles";
import { colors, connection } from "../../config/config";

export default function Dashboard() {
  const [status, setStatus] = useState([]);
  const [add, setAdd] = useState(false);

  useEffect(() => {
    getStatus();
  }, []);

  function getStatus() {
    axios
      .get(`${connection.connectionString}/status`)
      .then((res) => {
        setStatus(res.data);
      })
      .catch((err) => console.error(err));
  }

  return (
    <MainContainer color={colors.dashboardBg}>
      <Navbar add={add} setAdd={setAdd} />
      {console.log(add)}
      <Quote />
      <CardsDecksContainer>
        {status.map((element) => {
          return (
            <CardsDeck
              setAdd={setAdd}
              add={add}
              key={element.id}
              status={element.name}
            />
          );
        })}
      </CardsDecksContainer>
    </MainContainer>
  );
}
