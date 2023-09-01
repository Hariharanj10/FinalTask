import React from "react";
import styled from "styled-components";
import BoxIcon from "../assets/BoxIcon";
import Vector50 from "../assets/Vector50";
import RightArrow from "../assets/RightArrow";

const Container = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  width: 250px;
  height: 210px;
  flex-shrink: 0;
  border-radius: 3px;
  border: 1px solid #e4e7ea;
  background: rgba(255, 255, 255, 0.7);
`;

const Text = styled.div`
  color: #324050;
  font-size: 15px;
  font-weight: 500;
`;

const Description = styled.div`
  color: #8895a3;
  text-align: center;
  font-size: 13px;
  font-weight: 400;
  letter-spacing: 0.195px;
  max-width: 154px;
  margin: 7px auto 0;
`;

const Footer = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  width: 220px;
  margin-top: 7px;
`;

const Contact = styled.div`
  color: #1b63a9;
  font-family: Open Sans;
  font-size: 13px;
  font-weight: 600;
`;

const ArrowWrapper = styled.div``;
const Line = styled(Vector50)``; 

const Tableau = ({ Icon, BrandTitle, DescriptionText }) => {
  return (
    <Container>
      {Icon}
      <Text>{BrandTitle}</Text>
      <Description>{DescriptionText}</Description>
      <Line />
      <Footer>
        <Contact>Contact Us</Contact>
        <ArrowWrapper>
          <RightArrow />
        </ArrowWrapper>
      </Footer>
    </Container>
  );
};

export default Tableau;
