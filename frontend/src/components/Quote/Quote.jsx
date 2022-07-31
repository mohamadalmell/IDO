import React, { useState } from "react";
import { 
  QuoteContainer, 
  QuoteIcon, 
  QuoteText, 
  ShowQuote 
} from "./styles";
import RemoveQuote from "../../assets/RemoveQuote.svg";
import ShowQuoteIcon from '../../assets/ShowQuote.svg';
import { colors } from "../../config/config";

export default function Quote(props) {
  const [isHover, setIsHover] = useState(false);
  const [showQuote, setshowQuote] = useState(true);
  
  return (
    <>
      {showQuote && (
        <QuoteContainer
          quoteBgGrad1={colors.quoteBgGrad1}
          quoteBgGrad2={colors.quoteBgGrad2}
          onMouseEnter={() => setIsHover(!isHover)}
          onMouseLeave={() => setIsHover(!isHover)}
        >
          <QuoteText>"Anything that can go wrong, will go wrong!"</QuoteText>
          {isHover && (
            <QuoteIcon
              icon={RemoveQuote}
              onClick={() => setshowQuote(!showQuote)}
            />
          )}
        </QuoteContainer>
      )}

      {!showQuote &&(
        <ShowQuote 
          icon={ShowQuoteIcon}
          onClick={()=>{
            setIsHover(!isHover);
            setshowQuote(!showQuote);
          }}
        />
      )}
    </>
  );
}
