import React from "react";
import styled from "styled-components";
import Vector from "../assets/Vector";
import { Avatar, Rate } from "antd";
import Avatar1 from "../assets/Avatar1.png";
import Avatar2 from "../assets/Avatar2.png";
import Avatar3 from "../assets/Avatar3.png";
import Avatar4 from "../assets/Avatar4.png";
import Avatar5 from "../assets/Avatar5.png";
import Avatar6 from "../assets/Avatar6.png";
import DownArrow from "../assets/DownArrow.png";
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
  background: linear-gradient(144deg, #38f6d3 0%, #1edeea 100%);
  margin:19.88px 0px 0px 23.59px;
`;
const FirstRow = styled.div`
  display: flex;
`;
const SecondRow = styled.div`
  display: flex;
`;
const BoxText = styled.div`
  display: flex;
  width: 43.765px;
  flex-shrink: 0;
  color: ${(props) => props?.color};
  text-align: center;
  font-family: Prata;
  font-size: 13.373px;
  font-style: normal;
  font-weight: 400;
`;
const TextWrapper = styled.div`
  display: flex;
  flex-direction: column;
  margin-left: 18.59px;
  
`;
const Text = styled.div`
  width: 324px;
  color: #242e39;
  font-family: SF Pro Display;
  font-size: 24px;
  font-style: normal;
  font-weight: 600;
  line-height: normal;
  margin-right: 128px;
  margin-top:30px;
`;
const Text2 = styled.div`
  color:  #637487;
  font-family: SF Pro Display;
  font-size: 14px;
  font-style: normal;
  font-weight: 300;
  line-height: normal;
  margin-top:1px;
  letter-spacing: 0.21px;
`;
const RatingWrapper = styled.div`
  display: flex;
  justify-content: center;
  margin-left: 20px;
`;
const Ratings = styled.div`
  color:  #242e39
  font-family: SF Pro Display;
  font-size: 42px;
  font-style: normal;
  font-weight: 300;
  line-height: normal;
  margin-right:14px;
  margin-top:30px;
`;
const RatingText = styled.div`
  color:  #242e39;
  font-family: SF Pro Display;
  font-size: 14px;
  font-style: normal;
  font-weight: 300;
  line-height: normal;
  letter-spacing: 0.21px;
  margin-top:37px;
`;
const RatingStarWrapper = styled.div`
  display: flex;
  flex-direction: column;
`;
const RatingStar = styled(Rate)`
  color:  #1b63a9;
  font-family: Font Awesome 5 Free;
  font-size: 14px;
  font-style: normal;
  font-weight: 900;
  line-height: normal;
`;
const AgentCount = styled.div`
  display: flex;
  flex-direction: column;
  margin-left: 25px;
  margin-top: 26px;
  margin-bottom:23px;
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
  margin:26px 42px 24px 20px;
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
  margin:26px 40px 23px 20px;
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
  margin:26px 113px 24px 20px;
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
  color:  #637487;
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
          <Text2>
            San Francisco
            <img
              src={DownArrow}
              style={{ marginLeft: "10px" }}
              alt="DownArrow"
            />
          </Text2>
        </TextWrapper>
        <Vector />
        <RatingWrapper>
          <Ratings>4.2</Ratings>
          <RatingStarWrapper>
            <RatingText>Ratings</RatingText>
            <RatingStar allowHalf defaultValue={2.5} color="#1B63A9" readonly />
          </RatingStarWrapper>
        </RatingWrapper>
      </FirstRow>
      <HoridonzalVector />
      <SecondRow>
        <AgentCount>
          <Count>346</Count>
          <AgentText>Agents</AgentText>
        </AgentCount>
        <Avatar.Group
          style={{
            margin:'31.42px 39.26px 28.58px 17px'
          }}
        >
          <Avatar src={Avatar1} />
          <Avatar src={Avatar2} />
          <Avatar src={Avatar3} />
          <Avatar src={Avatar4} />
          <Avatar src={Avatar5} />
          <Avatar src={Avatar6} />
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
