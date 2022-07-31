import React, { useEffect, useState } from "react";
import { DragDropContext, Draggable, Droppable } from "react-beautiful-dnd";
import { colors, connection } from "../../config/config";
import Card from "../Card/Card";
import ToDoIcon from "../../assets/ToDoIcon.svg";
import DoingIcon from "../../assets/DoingIcon.svg";
import DoneIcon from "../../assets/DoneIcon.svg";
import {
  CardsContainer,
  CardsDeckWrapper,
  StatusHeader,
  StatusHeaderIcon,
} from "./styles";
import axios from "axios";
import NewCard from "../NewCard/NewCard";

export default function CardDeck(props) {
  const [cards, setCards] = useState([]);

  useEffect(() => {
    getAllCards();
  }, []);

  function getAllCards() {
    axios
      .get(`${connection.connectionString}/item`)
      .then((res) => {
        setCards(res.data);
      })
      .catch((err) => console.error(err));
  }

  function createCard(input) {
    let data = new FormData();

    Object.keys(input).forEach((key) => {
      data.append(key, input[key]);
    });

    axios
      .post(`${connection.connectionString}/item`, data)
      .then((res) => console.log(res))
      .catch((err) => console.error(err));

    props.setAdd(false);
    getAllCards();
  }

  // a little function to help us with reordering the result
  function reorder(list, startIndex, endIndex) {
    const result = Array.from(list);
    const [removed] = result.splice(startIndex, 1);
    result.splice(endIndex, 0, removed);

    return result;
  }

  /**
   * Moves an item from one list to another list.
   */
  const move = (source, destination, droppableSource, droppableDestination) => {
    const sourceClone = Array.from(source);
    const destClone = Array.from(destination);
    const [removed] = sourceClone.splice(droppableSource.index, 1);

    destClone.splice(droppableDestination.index, 0, removed);

    const result = {};
    result[droppableSource.droppableId] = sourceClone;
    result[droppableDestination.droppableId] = destClone;

    return result;
  };

  let id2List = {
    droppable: props.status[0],
    droppable2: props.status[1],
    droppable3: props.status[2],
  };

  const items = { ...cards };

  const getList = (id) => items[id2List[id]];

  function handleOnDragEnd(result) {
    const { source, destination } = result;

    // dropped outside the list
    if (!destination) return;

    if (source.droppableId === destination.droppableId) {
      const items = reorder(
        getList(source.droppableId),
        source.index,
        destination.index
      );

      // if (source.droppableId === 'droppable2') {
      //   state = { selected: items };
      // }
      setCards(items);
    } else {
      const result = move(
        getList(source.droppableId),
        getList(destination.droppableId),
        source,
        destination
      );

      setCards(result);
    }
  }

  return (
    <CardsDeckWrapper>
      <StatusHeader cardBg={colors.cardBg}>
        <StatusHeaderIcon
          icon={
            (props.status == "To Do" && ToDoIcon) ||
            (props.status == "Doing" && DoingIcon) ||
            (props.status == "Done" && DoneIcon)
          }
        />
        {props.status}
      </StatusHeader>
      <DragDropContext onDragEnd={handleOnDragEnd}>
        <Droppable droppableId={props.status}>
          {(provided) => (
            <div {...provided.droppableProps} ref={provided.innerRef}>
              {props.add && <NewCard createCard={createCard} />}
              <CardsContainer>
                {cards.map((element, index) => {
                  return (
                    element.status.name === props.status && (
                      <Draggable
                        key={element.id}
                        draggableId={element.id.toString()}
                        index={index}
                      >
                        {(provided) => (
                          <div
                            {...provided.draggableProps}
                            {...provided.dragHandleProps}
                            ref={provided.innerRef}
                          >
                            <Card
                              add={props.add}
                              cardBg={colors.cardBg}
                              cardKeyColor={colors.cardKeyColor}
                              element={element}
                            />
                          </div>
                        )}
                      </Draggable>
                    )
                  );
                })}
              </CardsContainer>
              {provided.placeholder}
            </div>
          )}
        </Droppable>
      </DragDropContext>
    </CardsDeckWrapper>
  );
}
