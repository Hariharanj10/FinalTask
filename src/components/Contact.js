import React from "react";
import styled from "styled-components";
import RightArrow from "../assets/RightArrow";
const Container = styled.div`
  display: flex;
  flex-direction: column;
  font-family: "SF Pro Display", sans-serif;
  align-items: center;
  justify-content: center;
  border-radius: 3px;
  border: 1px solid #e4e7ea;
  background: rgba(255, 255, 255, 0.7);
  width: 250px;
  height: 210px;
  flex-shrink: 0;
`;
const Brand = styled.div`
  color: #324050;
  font-size: 15px;
  font-style: normal;
  font-weight: 500;
  line-height: normal;
  margin: 10px 108px 7px 109px;
`;
const BoxIconContainer = styled.div`
  margin: 21px 108 0px 102px;
  width: 48px;
  height: 48px;
`;
const Description = styled.div`
  color: #8895a3;
  text-align: center;
  width: 154px;
  font-size: 13px;
  font-style: normal;
  font-weight: 400;
  line-height: normal;
  letter-spacing: 0.195px;
  margin-top:7px;
`;
const Navigation = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  border-top:1px solid  #E4E7EA;
  width:100%;
  height:42px;
  margin-top:23px;
  
`;
const ContactUs = styled.div`
  color: #1b63a9;
  font-family: Open Sans;
  font-size: 13px;
  font-style: normal;
  font-weight: 600;
  line-height: normal;
  margin:13px 129px 20px 17px;
  
  
`;
const ArrowContainer=styled.div`
    margin:13px 20px 18px 0px;
`;
const Contact = ({Icon,BrandTitle,DescriptionText}) => {
  return (
    <Container>
      <BoxIconContainer>
      {Icon} 
      </BoxIconContainer>

      <Brand>{BrandTitle}</Brand>
      <Description>{DescriptionText}</Description>
      <Navigation>
        <ContactUs>Contact Us</ContactUs>
        <ArrowContainer><RightArrow /></ArrowContainer>
      </Navigation>
    </Container>
  );
};

export default Contact;
