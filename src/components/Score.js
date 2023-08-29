import React from "react";
import styled from "styled-components";

const Container = styled.div`
  display: flex;
  width: 367px;
  height: 206px;
  padding: 20px;
  justify-content: center;
  align-items: center;
  flex-shrink: 0;
  border-radius: 3px;
  background: #fff;
  box-shadow: 0px 5px 10px 0px rgba(99, 116, 135, 0.1);
`;
const InnerWrapper = styled.div`
  display: flex;
  width: 337px;
  height: 176px;
  flex-shrink: 0;
  background: var(--grey-t-96, #f8f8f9);
`;
const TextWrapper = styled.div`
  display: flex;
  flex-direction: column;
  justify-content:center;
  align-items:center;
`;
const Number = styled.div`
  color: #242e39;
  font-family: SF Pro Display;
  font-size: 24px;
  font-style: normal;
  font-weight: 600;
  line-height: normal;
`;
const Text = styled.div`
  color: var(--grey-t-15, #637487);
  font-family: SF Pro Display;
  font-size: 15px;
  font-style: normal;
  font-weight: 400;
  line-height: normal;
  letter-spacing: 0.225px;
`;
const Score = () => {
  return (
    <Container>
      <InnerWrapper>
        <TextWrapper>
          <Number>54</Number>
          <Text>Net Promoter </Text>
          <Text>Score</Text>
        </TextWrapper>
      </InnerWrapper>
    </Container>
  );
};

export default Score;
