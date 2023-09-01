import React from "react";
import styled from "styled-components";
import RightArrowRound from "../assets/RightArrowRound";

const Container = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  border-radius: 3px;
  border: 1px solid #e4e7ea;
  background: rgba(255, 255, 255, 0.7);
  width: 250px;
  height: 210px;
  flex-shrink: 0;
`;
const Box = styled.div`
  width: 48px;
  height: 48px;
  display: flex;
  justify-content: center;
  align-items: center;
  flex-shrink: 0;
  background-color: #1b63a9;
  filter: drop-shadow(0px 5px 10px rgba(99, 116, 135, 0.1));
  border-radius: 50px;
`;
const Text = styled.div`
  color: #324050;
  font-family: "SF Pro Display", sans-serif;
  font-size: 15px;
  font-style: normal;
  font-weight: 500;
  line-height: normal;
  margin-top: 10px;
`;

const MoreApps = () => {
  return (
    <Container>
      <Box>
        <RightArrowRound />
      </Box>
      <Text>Find More Apps</Text>
    </Container>
  );
};

export default MoreApps;
