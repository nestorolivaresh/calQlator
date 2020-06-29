import React from "react";
import { CalculatorLayoutStyle } from "./CalculatorLayout.styles";
import CalculatorInput from "./CalculatorInput/CalculatorInput";
import CalculatorControls from "./CalculatorControls/CalculatorControls";

const CalculatorLayout = (props) => {
  return (
    <CalculatorLayoutStyle isScientific={props.isScientific}>
      <CalculatorInput
        currValue={props.currValue}
        prevValue={props.prevValue}
      />
      <CalculatorControls
        addToInput={props.addToInput}
        deleteLastValue={props.deleteLastValue}
        clearAll={props.clearAll}
        add={props.add}
        substract={props.substract}
        multiply={props.multiply}
        divide={props.divide}
        pow={props.pow}
        percentage={props.percentage}
        addDecimal={props.addDecimal}
        equal={props.equal}
        operation={props.operation}
        setScientific={props.setScientific}
        isScientific={props.isScientific}
        expMinusOne={props.expMinusOne}
        squareRoot={props.squareRoot}
        expEuler={props.expEuler}
        logBaseTen={props.logBaseTen}
        logBaseE={props.logBaseE}
        pi={props.pi}
        setRadians={props.setRadians}
        radians={props.radians}
      />
    </CalculatorLayoutStyle>
  );
};

export default CalculatorLayout;
