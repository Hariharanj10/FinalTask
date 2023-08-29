import React from "react";
import styled from "styled-components";
import Vector from "../assets/Vector";
import { Avatar, Rate } from "antd";
import { AntDesignOutlined, UserOutlined } from "@ant-design/icons";
import Avatar1 from "../assets/Avatar1.png";
import Avatar2 from "../assets/Avatar2.png";
import Avatar3 from "../assets/Avatar3.png";
import Avatar4 from "../assets/Avatar4.png";
import Avatar5 from "../assets/Avatar5.png";
import Vector48 from "../assets/Vector48";
import HoridonzalVector from "../assets/HoridonzalVector";

const Container = styled.div`
  width: 793px;
  height: 206px;
  flex-shrink: 0;
  border-radius: 3px;
  background: #fff;
  box-shadow: 0px 5px 10px 0px rgba(99, 116, 135, 0.1);
`;
const Box = styled.div`
  width: 74.824px;
  height: 76.235px;
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;
  gap: 0px;
  flex-shrink: 0;
  background: linear-gradient(144deg, #38f6d3 0%, #1edeea 100%);
`;
const FirstRow = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
`;
const SecondRow = styled.div`
  display: flex;
  gap: 20px;
`;
const BoxText = styled.div`
  display: flex;
  width: 43.765px;
  height: 24.314px;
  flex-shrink: 0;
  color: ${(props) => props?.color}
text-align: center;
font-family: Prata;
font-size: 13.373px;
font-style: normal;
font-weight: 400;
line-height: 12.157px; /* 90.909% */
`;
const TextWrapper = styled.div`
  display: flex;
  flex-direction: column;
`;
const Text = styled.div`
  width: 324px;
  color: #242e39;
  font-family: SF Pro Display;
  font-size: 24px;
  font-style: normal;
  font-weight: 600;
  line-height: normal;
`;
const Text2 = styled.div`
  color: var(--grey-t-15, #637487);
  font-family: SF Pro Display;
  font-size: 14px;
  font-style: normal;
  font-weight: 300;
  line-height: normal;
  letter-spacing: 0.21px;
`;
const RatingWrapper = styled.div`
  display: flex;
  justify-content: center;
`;
const Ratings = styled.div`
  color: var(--grey-s-50, #242e39);
  font-family: SF Pro Display;
  font-size: 42px;
  font-style: normal;
  font-weight: 300;
  line-height: normal;
`;
const RatingText = styled.div`
  color: var(--grey-s-50, #242e39);
  font-family: SF Pro Display;
  font-size: 14px;
  font-style: normal;
  font-weight: 300;
  line-height: normal;
  letter-spacing: 0.21px;
`;
const RatingStarWrapper = styled.div`
  display: flex;
  flex-direction: column;
`;
const AgentCount = styled.div`
  display: flex;
  flex-direction: column;
`;
const Count = styled.div`
  color: var(--grey-s-50, #242e39);
  font-family: SF Pro Display;
  font-size: 24px;
  font-style: normal;
  font-weight: 700;
  line-height: normal;
`;
const AgentText = styled.div`
  color: var(--grey-t-15, #637487);
  font-family: SF Pro Display;
  font-size: 14px;
  font-style: normal;
  font-weight: 300;
  line-height: normal;
  letter-spacing: 0.21px;
`;
const TierWrapper = styled.div`
  display: flex;
  flex-direction: column;
`;
const TierCount = styled.div`
  color: var(--grey-s-50, #242e39);
  font-family: SF Pro Display;
  font-size: 24px;
  font-style: normal;
  font-weight: 700;
  line-height: normal;
`;
const TierText = styled.div`
  color: var(--grey-t-15, #637487);
  font-family: SF Pro Display;
  font-size: 14px;
  font-style: normal;
  font-weight: 300;
  line-height: normal;
  letter-spacing: 0.21px;
`;
const ProfileWrapper = styled.div`
  display: flex;
  flex-direction: column;
`;
const ProfileCount = styled.div`
  color: #ffa642;
  font-family: SF Pro Display;
  font-size: 24px;
  font-style: normal;
  font-weight: 700;
  line-height: normal;
`;
const ProfileText = styled.div`
  color: var(--grey-t-15, #637487);
  font-family: SF Pro Display;
  font-size: 14px;
  font-style: normal;
  font-weight: 300;
  line-height: normal;
  letter-spacing: 0.21px;
`;
const CompletionWrapper = styled.div`
  display: flex;
  flex-direction: column;
`;
const CompletionPercentage = styled.div`
  color: #242e39;
  font-family: SF Pro Display;
  font-size: 24px;
  font-style: normal;
  font-weight: 700;
  line-height: normal;
`;
const CompletionText = styled.div`
  color: var(--grey-t-15, #637487);
  font-family: SF Pro Display;
  font-size: 14px;
  font-style: normal;
  font-weight: 300;
  line-height: normal;
  letter-spacing: 0.21px;
`;
const AgentsRectangle = () => {
  return (
    <Container>
      <FirstRow>
        <Box>
          <BoxText color="#000">North </BoxText>
          <BoxText color="white"> Pacific</BoxText>
        </Box>
        <TextWrapper>
          <Text>North Pacific - Retail Mortgage</Text>
          <Text2>San Francisco</Text2>
        </TextWrapper>
        <Vector />
        <RatingWrapper>
          <Ratings>4.2</Ratings>
          <RatingStarWrapper>
            <RatingText>Ratings</RatingText>
            <Rate allowHalf defaultValue={2.5} color="#1B63A9" />;
          </RatingStarWrapper>
        </RatingWrapper>
      </FirstRow>
      <HoridonzalVector/>
      <SecondRow>
        <AgentCount>
          <Count>346</Count>
          <AgentCount>Agents</AgentCount>
        </AgentCount>
        <Avatar.Group>
          <Avatar src={Avatar1} />
          <Avatar src={Avatar2} />
          <Avatar src={Avatar3} />
          <Avatar src={Avatar4} />
          <Avatar src={Avatar5} />
        </Avatar.Group>
        <Vector48 />
        <TierWrapper>
          <TierCount>15</TierCount>
          <TierText>Tiers</TierText>
        </TierWrapper>
        <Vector48 />
        <ProfileWrapper>
          <ProfileCount>14</ProfileCount>
          <ProfileText>Incomplete Profiles</ProfileText>
        </ProfileWrapper>
        <Vector48 />
        <CompletionWrapper>
          <CompletionPercentage>56.3%</CompletionPercentage>
          <CompletionText>Completion Rate</CompletionText>
        </CompletionWrapper>
      </SecondRow>
    </Container>
  );
};

export default AgentsRectangle;
