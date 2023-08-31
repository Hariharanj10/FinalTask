import React from "react";
import styled from "styled-components";
import LineChart from "./LineChart";
import SurveyInfo from "./SurveyInfo";

const Container = styled.div`
  display: flex;
  width: 793px;
  flex-direction: column;
  border-radius: 3px;
  background: #fff;
  box-shadow: 0px 5px 10px 0px rgba(99, 116, 135, 0.1);
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
  margin: 10px 551px 11px 20px;
`;
const Main = styled.div`
  display: flex;
  heigth: 289px;
`;
const SurveyTrend = () => {
  return (
    <Container>
      <Header>
        <Title>Transaction and Survey Trend</Title>
      </Header>
      <Main>
        <LineChart />
        <SurveyInfo />
      </Main>
    </Container>
  );
};

export default SurveyTrend;
