import styled from "styled-components";

export const CalculatorLayoutStyle = styled.div`
  background-color: #0f4c75;
  border: 10px solid #2c003e;
  border-radius: 35px;
  height: ${(props) => (props.isScientific ? "80vh" : "70vh")};
  margin: 1rem;
  padding: 1rem;
  box-sizing: border-box;
`;
