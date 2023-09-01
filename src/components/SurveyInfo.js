import React from "react";
import styled from "styled-components";

const Container = styled.div`
  display: flex;
  flex-direction: column;
  width: 201px;
  height: 187px;
  margin: 62px 20px 40px 25px;
  font-family: "SF Pro Display", sans-serif;
  background-color: #f8f8f9;
`;
const FirstRow = styled.div`
  display: flex;
  flex-direction: column;
  border-bottom: 1px solid #e4e7ea;
  margin: 0px 20px;
`;
const SecondRow = styled.div`
  display: flex;
  flex-direction: column;
  margin: 20px;
`;
const SurveyPeriod = styled.div`
  height: 13px;
  flex-shrink: 0;
  color: #637487;
  font-size: 12px;
  font-style: normal;
  font-weight: 300;
  line-height: normal;
  margin: 20px auto 10px 0px;
`;
const Count = styled.div`
  margin-bottom: 10px;
  color: #161c22;
  font-size: 18px;
  font-style: normal;
  font-weight: 600;
  line-height: normal;
`;
const SurveyCompletion = styled.div`
  margin-bottom: 20px;
  color: #637487;
  font-size: 14px;
  font-style: normal;
  font-weight: 300;
  line-height: 12px;
`;

const SurveyInfo = () => {
  return (
    <Container>
      <FirstRow>
        <SurveyPeriod>In Last 7 Days</SurveyPeriod>
        <Count>357</Count>
        <SurveyCompletion>Transaction Completed</SurveyCompletion>
      </FirstRow>
      <SecondRow>
        <Count>209</Count>
        <SurveyCompletion>Transaction Completed</SurveyCompletion>
      </SecondRow>
    </Container>
  );
};

export default SurveyInfo;
