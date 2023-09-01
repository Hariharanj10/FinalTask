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
import Transaction from "./Transaction";
import Products from "./Products";
import ProductContainer from "./ProductContainer";
import DataDisplay from "./DataDisplay";

const Container = styled.div`
  margin: 20px;
  margin-top: 0px;
  // width: 1219px;
`;
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
  @media (max-width: 768px) {
    flex-direction: column;
  }
  
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
const TransactionSection = styled.div`
  display: flex;
  gap: 19px;
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
            <TransactionSection>
              <Transaction Title1="Processed Transactions" Title2="Unprocessed Transactions"/>
              <Transaction Title1="Surveys Sent (Automated)" Title2="Surveys Sent (Manual)" />
            </TransactionSection>
            <Products />
            <ProductContainer />
          </FirstColumn>
          <SecondColumn>
            <Score />
            <ActiveCampaigns />
            <LeaderBoard />
          </SecondColumn>
        </MainContainer>
      </Wrapper>
      <DataDisplay/>
    </Container>
  );
};

export default Dashboard;
