import React from "react";
import Vector from "../assets/Vector";
import { Avatar } from "antd";
import Avatar1 from "../assets/Avatar1.png";
import Avatar2 from "../assets/Avatar2.png";
import Avatar3 from "../assets/Avatar3.png";
import Avatar4 from "../assets/Avatar4.png";
import Avatar5 from "../assets/Avatar5.png";
import Avatar6 from "../assets/Avatar6.png";
import DownArrow from "../assets/DownArrow.png";
import Vector48 from "../assets/Vector48";
import HoridonzalVector from "../assets/HoridonzalVector";
import {
  Container,
  FirstRow,
  Box,
  BoxText,
  TextWrapper,
  Text,
  Text2,
  RatingWrapper,
  RatingStar,
  RatingText,
  Ratings,
  AgentCount,
  AgentText,
  TierCount,
  TierText,
  TierWrapper,
  RatingStarWrapper,
  SecondRow,
  Count,
  ProfileCount,
  ProfileText,
  ProfileWrapper,
  CompletionPercentage,
  CompletionWrapper,
  CompletionText,
} from "./Styles/AccountProfileStyles";

const AccountProfile = () => {
  const avatars = [Avatar1, Avatar2, Avatar3, Avatar4, Avatar5, Avatar6];
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
            margin: "31.42px 39.26px 28.58px 17px",
          }}
        >
          {avatars?.map((avatar, index) => (
            <Avatar key={index} src={avatar} />
          ))}
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

export default AccountProfile;
