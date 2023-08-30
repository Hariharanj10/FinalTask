import React from "react";
import styled from "styled-components";
import BgImage from "../assets/BgImage.png";

const Container = styled.div`
  width: 794px;
  display: flex;
  height: 281px;
  flex-shrink: 0;
  border-radius: 3px;
  background: url(${BgImage}), lightgray 50% / cover no-repeat;
`;
const ImageContainer = () => {
  return <Container></Container>;
};

export default ImageContainer;
