import styled from "styled-components";

export const CalculatorInputStyle = styled.div`
  margin: 5px;
  padding: 5px;
  background-color: #bbe1fa;
  max-width: 100%;
  text-align: right;
  border-radius: 25px;

  input {
    background-color: #bbe1fa;
    padding: 5px 5px 0px 0px;
    direction: rtl;
    height: 50px;
    border-radius: 25px;
    max-width: 100%;
    outline: none;
    border: none;
  }

  input,
  p {
    color: #2c003e;
    font-size: 30px;
    font-weight: bold;
    padding-right: 20px;
    box-sizing: border-box;
  }

  p {
    opacity: 0.3;
  }
`;
