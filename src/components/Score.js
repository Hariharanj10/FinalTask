import React from "react";
import styled from "styled-components";
import Meter from "../assets/Meter"

const Container = styled.div`
  display: flex;
  width: 367px;
  height: 206px;
  justify-content: center;
  align-items: center;
  flex-shrink: 0;
  border-radius: 3px;
  background: #fff;
  box-shadow: 0px 5px 10px 0px rgba(99, 116, 135, 0.1);
  font-family: SF Pro Display;
`;
const InnerWrapper = styled.div`
  display: flex;
  width: 337px;
  height: 176px;
  flex-shrink: 0;
  background: #f8f8f9;
`;
const TextWrapper = styled.div`
  display: flex;
  flex-direction: column;
  margin-left:33px;
  margin-top:51px;
`;
const Number = styled.div`
  color: #242e39;
  font-size: 24px;
  font-weight: 600;
`;
const Text = styled.div`
  color:  #637487;
  font-size: 15px;
  font-weight: 400;
  letter-spacing: 0.225px;
  margin-top:4px;
`;
const Text2=styled(Text)`
  margin-top:0px;
`
const Score = () => {
  return (
    <Container>
      <InnerWrapper>
        <TextWrapper>
          <Number>54</Number>
          <Text>Net Promoter </Text>
          <Text2>Score</Text2>
        </TextWrapper>
        <Meter/>
      </InnerWrapper>
    </Container>
  );
};

export default Score;
