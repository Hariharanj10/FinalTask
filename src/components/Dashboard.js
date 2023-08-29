import React from "react";
import Header from "./Header";
import Subheader from "./Subheader";
import ImageContainer from "./ImageContainer";
import AgentsRectangle from "./AgentsRectangle";
import Score from "./Score";
import styled from "styled-components";
import ActiveCampaigns from "./ActiveCampaigns";
import LeaderBoard from "./LeaderBoard";

const Container = styled.div`
  display: flex;
  margin:20px;
  gap:20px;
  background-color:#F8F8F9;
`;
const FirstColumn = styled.div`
  display: flex;
  flex-direction: column;
  gap:20px;
`;
const SecondColumn = styled.div`
  display: flex;
  flex-direction: column;
  gap:20px;
  width:100%;
`;

const Dashboard = () => {
  return (
    <>
    <Header/>
    <Subheader />
      <Container>
       
        <FirstColumn>
          <ImageContainer />
          <AgentsRectangle />
        </FirstColumn>
        <SecondColumn>
          <Score />
          <ActiveCampaigns/>
          {/* <LeaderBoard/> */}
        </SecondColumn>
      </Container>
    </>
  );
};

export default Dashboard;
