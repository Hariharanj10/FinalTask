import React from "react";
import RightArrow from "../assets/RightArrow";
import Star from "../assets/Star";
import Vector72 from "../assets/Vector72";
import GreenProgress from "../assets/GreenProgress";
import OrangeProgress from "../assets/OrangeProgress";
import {
  Container,
  Header,
  Title,
  Wrapper,
  ViewWrapper,
  Campaigns,
  RatingsWrapper,
  SurveyType,
  StarContainer,
  RatingPercentage,
  Number,
  ProgressWrapper,
  CompletionRateText,
  View,
} from "./Styles/ActiveCampaignsStyles";

const CampaignsComponent = ({ SurveyHeading, ProgressBar, Count, Ratings }) => {
  const stars = [1,2,3,4,5]

  return (
    <Campaigns>
      <Wrapper>
        <RatingsWrapper>
          <SurveyType>{SurveyHeading}</SurveyType>
          <StarContainer>
            {stars.map((_, index) => (
              <Star key={index} />
            ))}
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
  const campaignsData = [
    {
      SurveyHeading: "Mid-Process Survey",
      Count: 457,
      Ratings: 4.9,
      ProgressBar: <GreenProgress />,
    },
    {
      SurveyHeading: "Closing Survey",
      Count: 1800,
      Ratings: 4.9,
      ProgressBar: <OrangeProgress />,
    },
  ];

  return (
    <Container>
      <Header>
        <Title>Active Campaigns</Title>
        <ViewWrapper>
          <View>View</View>
          <RightArrow />
        </ViewWrapper>
      </Header>
      {campaignsData.map((campaign, index) => (
        <CampaignsComponent key={index} {...campaign} />
      ))}
    </Container>
  );
};

export default ActiveCampaigns;
