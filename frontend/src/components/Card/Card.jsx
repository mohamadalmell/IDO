import React, { useEffect, useState } from "react";
import { colors, connection } from "../../config/config";
import {
  CardContainer,
  Key,
  Value,
  EditIcon,
  HeaderContainer,
  ImportanceValue,
  ItemTitle,
  ItemContainer,
  Input,
  Select,
  Option,
  Save,
} from "./styles";
import Edit from "../../assets/Edit.svg";
import axios from "axios";

export default function Card(props) {
  const [isEdit, setIsEdit] = useState(false);
  const [priority, setPriority] = useState([0]);
  const [card, setCard] = useState({
    Title: "",
    Category: "",
    DueDate: "",
    Estimate: "",
    Priority: "",
    id: props.element.id,
  });

  useEffect(() => {
    getAllPriority();
  }, []);

  function getAllPriority() {
    axios
      .get(`${connection.connectionString}/priority`)
      .then((res) => {
        setPriority(res.data);
      })
      .catch((err) => console.error(err));
  }

  const importance = {
    Low: "#39AC95 ",
    Medium: "#FE913E ",
    High: "#DC3545",
  };

  function handleChange(event) {
    let value = event.target.value;
    let name = event.target.name;

    setCard((prevalue) => {
      return {
        ...prevalue,
        [name]: value,
      };
    });
  }

  function handleSubmit(e) {
    e.preventDefault();

    const data = new FormData();
    card.Title == ""
      ? data.append("Title", props.element.title)
      : data.append("Title", card.Title);
    card.DueDate == ""
      ? data.append("DueDate", props.element.dueDate)
      : data.append("DueDate", card.DueDate);
    card.Estimate == ""
      ? data.append("Estimate", props.element.estimate)
      : data.append("Estimate", card.Estimate);
    card.Category == ""
      ? data.append("Category", props.element.category)
      : data.append("Category", card.Category);

    data.append("Categoryid", props.element.category.id);
    data.append("Statusid", props.element.status.id);
    data.append("Priorityid", props.element.priority.id);
    data.append("id", props.element.id);

    axios
      .put(`${connection.connectionString}/item/${props.element.id}`, data)
      .then((res) => console.log(res))
      .catch((err) => console.error(err));
  }

  return (
    <CardContainer cardBg={props.cardBg}>
      <form onSubmit={handleSubmit}>
        <HeaderContainer>
          {isEdit ? (
            <Input
              onChange={handleChange}
              name="Title"
              type="text"
              defaultValue={props.element.title}
            />
          ) : (
            <ItemTitle>{props.element.title}</ItemTitle>
          )}
          {isEdit && (
            <Save
              type="submit"
              onClick={handleSubmit}
              color={colors.quoteBgGrad1}
              value="Submit"
            />
          )}
          <EditIcon
            icon={Edit}
            onClick={() => {
              setIsEdit(!isEdit);
            }}
          />
        </HeaderContainer>
        <ItemContainer key={props.element.id}>
          <Key cardKeyColor={colors.cardKeyColor}>Category</Key>
          {isEdit ? (
            <Input
              onChange={handleChange}
              name="Category"
              type="text"
              defaultValue={props.element.category}
            />
          ) : (
            <Value>{props.element.category}</Value>
          )}
        </ItemContainer>
        <ItemContainer>
          <Key cardKeyColor={colors.cardKeyColor}>DueDate</Key>
          {isEdit ? (
            <Input
              onChange={handleChange}
              name="DueDate"
              type="Date"
              defaultValue={props.element.dueDate?.split("T")[0]}
            />
          ) : (
            <Value>{props.element.dueDate?.split("T")[0]}</Value>
          )}
        </ItemContainer>
        <ItemContainer>
          <Key cardKeyColor={colors.cardKeyColor}>Estimate</Key>
          {isEdit ? (
            <Input
              onChange={handleChange}
              name="Estimate"
              type="text"
              defaultValue={props.element.estimate}
            />
          ) : (
            <Value>{props.element.estimate}</Value>
          )}
        </ItemContainer>
        <ItemContainer>
          <Key cardKeyColor={colors.cardKeyColor}>Importance</Key>
          {/* {isEdit ? (
            <Select
              onChange={handleChange}
              name="Priority"
              color={importance[props.element.priority.name]}
            >
              {priority.map((element) => {
                return (
                  <Option color={importance[element.name]}>
                    {element.name}
                  </Option>
                );
              })}
            </Select>
          ) : ( */}
          <ImportanceValue color={importance[props.element.priority.name]}>
            {props.element.priority.name}
          </ImportanceValue>
          {/* )} */}
        </ItemContainer>
      </form>
    </CardContainer>
  );
}
