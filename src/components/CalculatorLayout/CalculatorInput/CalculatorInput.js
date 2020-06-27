import React from "react";
import { CalculatorInputStyle } from "./CalculatorInput.styles";

const CalculatorInput = (props) => {
  return (
    <CalculatorInputStyle>
      <p>{props.prevValue}</p>
      <div>
        <span>{props.currValue}</span>
      </div>
    </CalculatorInputStyle>
  );
};

export default CalculatorInput;
