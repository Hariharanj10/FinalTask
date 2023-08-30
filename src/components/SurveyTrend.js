import React from "react";
import styled from "styled-components";
import LineGraph from "./LineChart";

const Container = styled.div`
  display: flex;
  width: 793px;
`;
const Header = styled.div`
  display: flex;
  width: 793px;
  height: 42px;
  flex-shrink: 0;
  background-color: #e4e7ea;
`;
const Title = styled.div`
  color: #3a4a5b;
  font-family: SF Pro Display;
  font-size: 18px;
  font-style: normal;
  font-weight: 400;
  line-height: normal;
  display: flex;
  // align-items:center;
  margin: 10px 551px 11px 20px;
`;
const SurveyTrend = () => {
  return (
    <Container>
      <Header>
        <Title>Transaction and Survey Trend</Title>
      </Header>
      {/* <LineGraph/> */}
    </Container>
  );
};

export default SurveyTrend;
