import React from "react";
import styled from "styled-components";
import RightArrow from "../assets/RightArrow";
import Star from "../assets/Star";
import Vector72 from "../assets/Vector72";
import GreenProgress from "../assets/GreenProgress";
import OrangeProgress from "../assets/OrangeProgress";

const Container = styled.div`
  display: flex;
  flex-direction: column;
  width: 367px;
  height: 281px;
  border-radius: 3px;
  background: #fff;
  box-shadow: 0px 5px 10px 0px rgba(99, 116, 135, 0.1);
  font-family: SF Pro Display;
`;
const Header = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  width: 367px;
  height: 42px;
  flex-shrink: 0;
  background-color: #e4e7ea;
  margin-bottom: 10px;
`;
const Title = styled.div`
  color: #3a4a5b;
  font-size: 18px;
  font-weight: 400;
  line-height: normal;
  margin-left: 20px;
`;
const View = styled.div`
  color: #637487;
  font-size: 15px;
  font-weight: 400;
  line-height: normal;
  margin-right: 5px;
`;
const ViewWrapper = styled.div`
  display: flex;
  margin-right: 20.14px;
`;
const Campaigns = styled.div`
  margin: 0px 4px 11px 13px;
  background-color: #f8f8f9;
  height: 102px;
  display: flex;
  width: 341px;
`;
const Wrapper = styled.div`
  display: flex;
`;
const SurveyType = styled.div`
  color:  #485c72;
  font-size: 15px;
  font-style: normal;
  font-weight: 400;
  line-height: 130%; 
`;
const RatingsWrapper = styled.div`
  display: flex;
  flex-direction: column;
  margin: 24px 0px 10px 19px;
`;
const StarContainer = styled.div`
  display: flex;
  margin-top: 10px;
`;
const RatingPercentage = styled.div`
  color: #242e39;
  font-size: 14px;
  font-style: normal;
  font-weight: 600;
  line-height: normal;
  margin: 0px 11px 0px 4px;
`;
const Number = styled.div`
  color: #242e39;
  font-size: 18px;
  font-style: normal;
  font-weight: 700;
  line-height: normal;
  margin-left: 13px;
`;
const ProgressWrapper = styled.div`
  display: flex;
  flex-direction: column;
  margin-left: 43px;
`;
const CompletionRateText = styled.div`
  color: #637487;
  font-size: 12px;
  font-style: normal;
  font-weight: 300;
  line-height: normal;
  letter-spacing: 0.18px;
`;
const CampaignsComponent = ({ SurveyHeading, ProgressBar, Count, Ratings }) => {
  return (
    <Campaigns>
      <Wrapper>
        <RatingsWrapper>
          <SurveyType>{SurveyHeading}</SurveyType>

          <StarContainer>
            {[1, 2, 3, 4, 5].map((index) => {
              return <Star key={index} />;
            })}
            <RatingPercentage>{Ratings}</RatingPercentage>
            <Vector72 />
            <Number>{Count}</Number>
          </StarContainer>
        </RatingsWrapper>
        <ProgressWrapper>
          {ProgressBar}
          <CompletionRateText>Completion Rate</CompletionRateText>
        </ProgressWrapper>
      </Wrapper>
    </Campaigns>
  );
};
const ActiveCampaigns = () => {
  return (
    <Container>
      <Header>
        <Title>Active Campaigns</Title>
        <ViewWrapper>
          <View>View</View>
          <RightArrow />
        </ViewWrapper>
      </Header>
      <CampaignsComponent
        SurveyHeading="Mid-Process Survey"
        Count={457}
        Ratings={4.1}
        ProgressBar={<GreenProgress />}
      />
      <CampaignsComponent
        SurveyHeading="Closing Survey"
        Count={1800}
        Ratings={4.3}
        ProgressBar={<OrangeProgress />}
      />
    </Container>
  );
};

export default ActiveCampaigns;
