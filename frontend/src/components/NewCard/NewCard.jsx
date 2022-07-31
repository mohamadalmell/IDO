import React, { useState } from "react";
import { colors } from "../../config/config";
import {
  HeaderContainer,
  Input,
  ItemContainer,
  Key,
  Option,
  Save,
  Select,
} from "../Card/styles";
import { NewCardContainer } from "./styles";

export default function NewCard(props) {
  const [data, setData] = useState({ Priorityid: 1, Statusid: 1 });

  const importance = {
    Low: "#39AC95 ",
    Medium: "#FE913E ",
    High: "#DC3545",
  };

  function handleChange(e) {
    setData({ ...data, [e.target.name]: e.target.value });
  }

  function handleSubmit() {
    props.createCard(data);
  }
  return (
    <NewCardContainer cardBg={colors.cardBg}>
      <form onSubmit={handleSubmit}>
        <HeaderContainer>
          <Input onChange={handleChange} name="Title" type="text" />
          <Save
            type="submit"
            onClick={handleSubmit}
            color={colors.quoteBgGrad1}
            value="Submit"
          />
        </HeaderContainer>
        <ItemContainer>
          <Key cardKeyColor={colors.cardKeyColor}>Category</Key>
          <Input onChange={handleChange} name="Category" type="text" />
        </ItemContainer>
        <ItemContainer>
          <Key cardKeyColor={colors.cardKeyColor}>DueDate</Key>
          <Input onChange={handleChange} name="DueDate" type="Date" />
        </ItemContainer>
        <ItemContainer>
          <Key cardKeyColor={colors.cardKeyColor}>Estimate</Key>
          <Input onChange={handleChange} name="Estimate" type="text" />
        </ItemContainer>
        <ItemContainer>
          <Key cardKeyColor={colors.cardKeyColor}>Importance</Key>
          <Select
            onChange={handleChange}
            name="Priority"
            color={importance["Low"]}
          >
            <Option color={importance["Low"]}>Low</Option>
            <Option color={importance["Medium"]}>Medium</Option>
            <Option color={importance["High"]}>Low</Option>
          </Select>
        </ItemContainer>
      </form>
    </NewCardContainer>
  );
}
