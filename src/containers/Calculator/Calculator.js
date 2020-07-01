import React, { useState } from "react";
import CalculatorLayout from "../../components/CalculatorLayout/CalculatorLayout";

const Calculator = (props) => {
  const [currValue, setCurrValue] = useState(0);
  const [prevValue, setPrevValue] = useState(0);
  const [operation, setOperation] = useState("");
  const [scientificMode, setScientificMode] = useState(false);
  const [radiansMode, setRadiansMode] = useState(false);

  // Layout Organization
  const printValue = (value) => {
    const enteredValue = parseFloat(value);
    let newValue = currValue;
    if (currValue === Math.PI.toFixed(9)) {
      newValue = parseFloat(currValue) * enteredValue;
    } else {
      newValue = newValue + enteredValue;
    }
    setCurrValue(newValue.toString());
  };

  const deleteLastValue = () => {
    const currentValue = currValue;
    if (currentValue === 0 || currentValue.length === 1) {
      setCurrValue(0);
    } else {
      const newValue = currentValue.slice(0, -1);
      setCurrValue(newValue);
    }
  };

  const clearAll = () => {
    setCurrValue(0);
    setPrevValue(0);
  };

  const organizeInput = () => {
    const previousValue = parseFloat(currValue);
    setCurrValue(0);
    setPrevValue(previousValue);
  };

  const setScientific = () => {
    setScientificMode(!scientificMode);
  };

  const setRadians = () => {
    setRadiansMode(!radiansMode);
  };

  // Operations
  const add = () => {
    organizeInput();
    setOperation("add");
  };

  const substract = () => {
    organizeInput();
    setOperation("substract");
  };

  const multiply = () => {
    organizeInput();
    setOperation("multiply");
  };

  const divide = () => {
    organizeInput();
    setOperation("divide");
  };

  const percentage = () => {
    const newValue = parseFloat(currValue) / 100;
    setPrevValue(0);
    setCurrValue(newValue);
  };

  const expMinusOne = () => {
    const newValue = 1 / parseFloat(currValue);
    setPrevValue(0);
    setCurrValue(newValue);
  };

  const squareRoot = () => {
    let newValue = Math.sqrt(parseFloat(currValue));
    if (!Number.isInteger(newValue)) {
      newValue = newValue.toFixed(9);
    }
    setPrevValue(0);
    setCurrValue(newValue);
  };

  const trigonometric = (trigCase) => {
    const currentValue = parseFloat(currValue);
    let newValue = 0;
    switch (trigCase) {
      case "sin":
        newValue = radiansMode
          ? Math.sin(currentValue)
          : Math.sin((currentValue * Math.PI) / 180);
        break;
      case "cos":
        newValue = radiansMode
          ? Math.cos(currentValue)
          : Math.cos((currentValue * Math.PI) / 180);
        break;
      case "tan":
        newValue = radiansMode
          ? Math.tan(currentValue)
          : Math.tan((currentValue * Math.PI) / 180);
        break;
      default:
        break;
    }
    setPrevValue(0);
    setCurrValue(newValue);
  };

  const expEuler = () => {
    let newValue = Math.exp(parseFloat(currValue));
    if (!Number.isInteger(newValue)) {
      newValue = newValue.toFixed(9);
    }
    setPrevValue(0);
    setCurrValue(newValue);
  };

  const logBaseTen = () => {
    let newValue = Math.log10(parseFloat(currValue));
    if (currValue === 0) {
      newValue = "You broke Math";
    } else if (!Number.isInteger(newValue)) {
      newValue = newValue.toFixed(9);
    }
    setPrevValue(0);
    setCurrValue(newValue);
  };

  const logBaseE = () => {
    let newValue = Math.log(parseFloat(currValue));
    const currentValue = parseFloat(currValue);
    if (currentValue < 0) {
      newValue = "You broke Math";
    } else if (!Number.isInteger(newValue)) {
      newValue = newValue.toFixed(9);
    }
    setPrevValue(0);
    setCurrValue(newValue);
  };

  const poweredBy = (num) => {
    if (num) {
      const currentValue = parseFloat(currValue);
      const newValue = Math.pow(currentValue, num);
      setPrevValue(0);
      setCurrValue(newValue);
    } else {
      organizeInput();
      setOperation("pow");
    }
  };

  const addDecimal = () => {
    let newValue = "";
    const inputArray = currValue.toString().split("");
    const hasPoint = inputArray.some((letter) => letter === ".");
    if (hasPoint) {
      console.log("Cannot add another point");
    } else {
      newValue = currValue + ".";
      setCurrValue(newValue);
    }
  };

  const pi = () => {
    let newValue = "";
    const currentValue = parseFloat(currValue);
    if (currentValue === 0) {
      newValue = Math.PI.toFixed(9);
    } else {
      newValue = (parseFloat(Math.PI.toFixed(9)) * currentValue).toString();
    }
    setCurrValue(newValue);
  };

  const equal = (operation) => {
    let newValue = 0;
    const previousValue = parseFloat(prevValue),
      currentValue = parseFloat(currValue);
    switch (operation) {
      case "add":
        if (currentValue === 0) {
          newValue = previousValue;
        } else {
          newValue = previousValue + currentValue;
        }
        break;

      case "substract":
        if (currentValue === 0) {
          newValue = previousValue;
        } else {
          newValue = previousValue - currentValue;
        }
        break;

      case "multiply":
        newValue = previousValue * currentValue;
        break;

      case "divide":
        if (currentValue === 0) {
          newValue = "You broke Math";
        } else {
          newValue = previousValue / currentValue;
        }
        break;

      case "pow":
        newValue = Math.pow(previousValue, currentValue);
        break;

      default:
        break;
    }
    setPrevValue(0);
    setCurrValue(newValue.toString());
  };

  return (
    <CalculatorLayout
      currValue={currValue}
      prevValue={prevValue}
      addToInput={printValue}
      deleteLastValue={deleteLastValue}
      clearAll={clearAll}
      add={add}
      substract={substract}
      multiply={multiply}
      divide={divide}
      pow={poweredBy}
      percentage={percentage}
      addDecimal={addDecimal}
      equal={equal}
      operation={operation}
      setScientific={setScientific}
      isScientific={scientificMode}
      expMinusOne={expMinusOne}
      squareRoot={squareRoot}
      expEuler={expEuler}
      logBaseTen={logBaseTen}
      logBaseE={logBaseE}
      trigonometric={trigonometric}
      pi={pi}
      setRadians={setRadians}
      radians={radiansMode}
    />
  );
};

export default Calculator;
