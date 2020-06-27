import React from "react";
import { CalculatorInputStyle } from "./CalculatorInput.styles";

const CalculatorInput = (props) => {
  return (
    <CalculatorInputStyle>
      <p>{props.prevValue}</p>
      <input type="text" value={props.currValue} disabled/>
    </CalculatorInputStyle>
  );
};

export default CalculatorInput;
