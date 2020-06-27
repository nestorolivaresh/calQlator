import React, { useState } from "react";
import CalculatorLayout from "../../components/CalculatorLayout/CalculatorLayout";

const Calculator = (props) => {
  const [currValue, setCurrValue] = useState(0);
  const [prevValue, setPrevValue] = useState(0);
  const [operation, setOperation] = useState("");

  // Layout Organization
  const printValue = (value) => {
    let newValue = currValue;
    newValue = newValue + value;
    setCurrValue(newValue.toString());
  };

  const deleteLastValue = () => {
    const actualValue = currValue;
    if (actualValue === 0 || actualValue.length === 1) {
      setCurrValue(0);
    } else {
      const newValue = actualValue.slice(0, -1);
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

  const addDecimal = () => {
    let newValue = "";
    const inputArray = currValue.split("");
    const hasPoint = inputArray.some((letter) => letter === ".");
    if (hasPoint) {
      console.log("Cannot add another point");
    } else {
      newValue = currValue + ".";
      setCurrValue(newValue);
    }
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
        if (currentValue === 0) {
          newValue = previousValue;
        } else {
          newValue = previousValue * currentValue;
        }
        break;

      case "divide":
        if (currentValue === 0) {
          newValue = "You just broke Math";
        } else {
          newValue = previousValue / currentValue;
        }
        break;

      default:
        break;
    }
    setPrevValue(0);
    console.log(newValue.toString());

    setCurrValue(newValue);
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
      percentage={percentage}
      addDecimal={addDecimal}
      equal={equal}
      operation={operation}
    />
  );
};

export default Calculator;
