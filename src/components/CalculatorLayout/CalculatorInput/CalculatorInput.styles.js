import styled from "styled-components";

export const CalculatorInputStyle = styled.div`
  margin: 5px;
  padding: 5px;
  background-color: #bbe1fa;
  max-width: 100%;
  text-align: right;
  border-radius: 25px;
  overflow-x: scroll;

  p {
    opacity: 0.3;
  }

  span,
  p {
    color: #2c003e;
    font-size: 30px;
    font-weight: bold;
    padding-right: 20px;
    box-sizing: border-box;
    border-radius: inherit;
  }
`;
