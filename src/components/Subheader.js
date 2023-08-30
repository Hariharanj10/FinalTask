import React from "react";
import InfoIcon from "../assets/InfoIcon";
import DateRangePicker from "./DateRangePicker";
import DownArrow from "../assets/DownArrow";
import {
  Container,
  LeftNav,
  RightNav,
  StyledText,
  TextBorder,
  Text,
  ExportButton,
} from "./Styles/SubHeaderStyles";

const Subheader = () => {
  return (
    <Container>
      <LeftNav>
        <InfoIcon />
        <Text>Refreshed on Feb 20, 2021 at 10:06 AM EST</Text>
      </LeftNav>
      <RightNav>
        <StyledText margin="29px 9px 29px 0px">Today</StyledText>
        <TextBorder margin="24px 15px 25px 0px;">
          <StyledText>7D</StyledText>
        </TextBorder>
        <StyledText margin="29px 25px 29px 0px">15D</StyledText>
        <StyledText margin="29px 25px 29px 0px ">1M</StyledText>
        <StyledText margin="29px 21px 29px 0px ">6M</StyledText>
        <StyledText margin="29px 23px 29px 0px">1Y</StyledText>
        <DateRangePicker />
        <ExportButton>
          <DownArrow /> Export
        </ExportButton>
      </RightNav>
    </Container>
  );
};

export default Subheader;
