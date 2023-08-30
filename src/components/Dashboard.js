import React from "react";
import Header from "./Header";
import Subheader from "./Subheader";
import ImageContainer from "./ImageContainer";
import AccountProfile from "./AccountProfile";
import Score from "./Score";
import styled from "styled-components";
import ActiveCampaigns from "./ActiveCampaigns";
import LeaderBoard from "./LeaderBoard";
import SurveyTrend from "./SurveyTrend";

const Container=styled.div`
    margin: 20px;
    margin-top:0px;
    width: 1219px;
`
const Wrapper = styled.div`
  display: flex;
  flex-direction: column;
  background-color: #f8f8f9;
`;
const MainContainer = styled.div`
  display: flex;
  margin: 20px;
  margin-top: 0px;
  gap: 20px;
  background-color: #f8f8f9;
`;
const FirstColumn = styled.div`
  display: flex;
  flex-direction: column;
  gap: 20px;
`;
const SecondColumn = styled.div`
  display: flex;
  flex-direction: column;
  gap: 20px;
  width: 100%;
`;

const Dashboard = () => {
  return (
    <Container>
      <Header />
      <Wrapper>
        <Subheader />
        <MainContainer>
          <FirstColumn>
            <ImageContainer />
            <AccountProfile />
            <SurveyTrend />
          </FirstColumn>
          <SecondColumn>
            <Score />
            <ActiveCampaigns />
            <LeaderBoard />
          </SecondColumn>
        </MainContainer>
      </Wrapper>
    </Container>
  );
};

export default Dashboard;
