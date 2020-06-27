import styled from "styled-components";

export const CalculatorControlDiv = styled.div`
  margin-top: 20px;
  display: grid;
  grid-template-columns: repeat(4, 1fr);
  grid-gap: 10px;
  align-items: center;

  div {
    height: 60px;
    font-size: 30px;
    font-weight: bold;
    display: flex;
    align-items: center;
    justify-content: center;
  }
`;

export const Number = styled.div`
  color: #bbe1fa;
  font-weight: lighter !important;
`;

export const Operation = styled.div`
  color: #bbe1fa;
  border-radius: 10px;
  height: 10px;
`;

export const SpecialBtn = styled.div`
  background-color: #bbe1fa;
  color: #0f4c75;
  border-radius: 10px;
  height: 50px !important;
`;
