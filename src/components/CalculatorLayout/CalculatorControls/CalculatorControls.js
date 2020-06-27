import React from "react";
import {
  CalculatorControlDiv,
  Number,
  Operation,
  SpecialBtn,
} from "./CalculatorControls.styles";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faPlus,
  faMinus,
  faTimes,
  faDivide,
  faEquals,
  faPercent,
  faArrowAltCircleLeft,
  faFlask,
} from "@fortawesome/free-solid-svg-icons";

const CalculatorControls = (props) => {
  return (
    <CalculatorControlDiv>
      <Operation onClick={() => props.clearAll()}>CA</Operation>
      <Operation onClick={() => props.deleteLastValue()}>
        <FontAwesomeIcon icon={faArrowAltCircleLeft} />
      </Operation>
      <Operation onClick={() => props.percentage()}>
        <FontAwesomeIcon icon={faPercent} />
      </Operation>
      <Operation onClick={() => props.divide()}>
        <FontAwesomeIcon icon={faDivide} />
      </Operation>
      <Number onClick={() => props.addToInput(7)}>7</Number>
      <Number onClick={() => props.addToInput(8)}>8</Number>
      <Number onClick={() => props.addToInput(9)}>9</Number>
      <Operation onClick={() => props.multiply()}>
        <FontAwesomeIcon icon={faTimes} />
      </Operation>
      <Number onClick={() => props.addToInput(4)}>4</Number>
      <Number onClick={() => props.addToInput(5)}>5</Number>
      <Number onClick={() => props.addToInput(6)}>6</Number>
      <Operation onClick={() => props.substract()}>
        <FontAwesomeIcon icon={faMinus} />
      </Operation>
      <Number onClick={() => props.addToInput(1)}>1</Number>
      <Number onClick={() => props.addToInput(2)}>2</Number>
      <Number onClick={() => props.addToInput(3)}>3</Number>
      <Operation onClick={() => props.add()}>
        <FontAwesomeIcon icon={faPlus} />
      </Operation>
      <Operation>
        <FontAwesomeIcon icon={faFlask} />
      </Operation>
      <Number onClick={() => props.addToInput(0)}>0</Number>
      <Operation onClick={() => props.addDecimal()}>.</Operation>
      <SpecialBtn onClick={() => props.equal(props.operation)}>
        <FontAwesomeIcon icon={faEquals} />
      </SpecialBtn>
    </CalculatorControlDiv>
  );
};

export default CalculatorControls;
