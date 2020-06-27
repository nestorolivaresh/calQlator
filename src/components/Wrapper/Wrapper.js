import React from "react";
import { WrapperDiv } from "./Wrapper.styles";
import Title from "../Title/Title";
import Calculator from "../../containers/Calculator/Calculator";

const Wrapper = (props) => {
  return (
    <WrapperDiv>
      <Title />
      <Calculator />
    </WrapperDiv>
  );
};

export default Wrapper;
