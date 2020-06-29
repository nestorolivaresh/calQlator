import React from "react";
import {
  CalculatorControlDiv,
  Number,
  Operation,
  ScientificOperation,
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
  faSquareRootAlt,
} from "@fortawesome/free-solid-svg-icons";

const CalculatorControls = (props) => {
  return (
    <CalculatorControlDiv isScientific={props.isScientific}>
      <ScientificOperation isScientific={props.isScientific}>
        2nd
      </ScientificOperation>
      <ScientificOperation
        isScientific={props.isScientific}
        onClick={() => props.setRadians()}
      >
        {props.radians ? "deg" : "rad"}
      </ScientificOperation>
      <ScientificOperation isScientific={props.isScientific}>
        sin
      </ScientificOperation>
      <ScientificOperation isScientific={props.isScientific}>
        cos
      </ScientificOperation>
      <ScientificOperation isScientific={props.isScientific}>
        tan
      </ScientificOperation>
      <ScientificOperation
        isScientific={props.isScientific}
        onClick={() => props.pow()}
      >
        <span>
          X<sup>Y</sup>
        </span>
      </ScientificOperation>
      <ScientificOperation
        isScientific={props.isScientific}
        onClick={() => props.logBaseTen()}
      >
        lg
      </ScientificOperation>
      <ScientificOperation
        isScientific={props.isScientific}
        onClick={() => props.logBaseE()}
      >
        ln
      </ScientificOperation>
      <ScientificOperation isScientific={props.isScientific}>
        (
      </ScientificOperation>
      <ScientificOperation isScientific={props.isScientific}>
        )
      </ScientificOperation>
      <ScientificOperation
        isScientific={props.isScientific}
        onClick={() => props.squareRoot()}
      >
        <FontAwesomeIcon icon={faSquareRootAlt} />
      </ScientificOperation>
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
      <ScientificOperation isScientific={props.isScientific}>
        X!
      </ScientificOperation>
      <Number onClick={() => props.addToInput(7)}>7</Number>
      <Number onClick={() => props.addToInput(8)}>8</Number>
      <Number onClick={() => props.addToInput(9)}>9</Number>
      <Operation onClick={() => props.multiply()}>
        <FontAwesomeIcon icon={faTimes} />
      </Operation>
      <ScientificOperation
        isScientific={props.isScientific}
        onClick={() => props.expMinusOne()}
      >
        <span>
          1/<sub>X</sub>
        </span>
      </ScientificOperation>
      <Number onClick={() => props.addToInput(4)}>4</Number>
      <Number onClick={() => props.addToInput(5)}>5</Number>
      <Number onClick={() => props.addToInput(6)}>6</Number>
      <Operation onClick={() => props.substract()}>
        <FontAwesomeIcon icon={faMinus} />
      </Operation>
      <ScientificOperation
        isScientific={props.isScientific}
        onClick={() => props.pi()}
      >
        π
      </ScientificOperation>
      <Number onClick={() => props.addToInput(1)}>1</Number>
      <Number onClick={() => props.addToInput(2)}>2</Number>
      <Number onClick={() => props.addToInput(3)}>3</Number>
      <Operation onClick={() => props.add()}>
        <FontAwesomeIcon icon={faPlus} />
      </Operation>
      <ScientificOperation
        isScientific={props.isScientific}
        onClick={() => props.expEuler()}
      >
        <span>
          e<sup>x</sup>
        </span>
      </ScientificOperation>
      <Operation onClick={() => props.setScientific()}>
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
