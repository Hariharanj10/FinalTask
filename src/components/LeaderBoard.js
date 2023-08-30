import React from "react";
import RightArrow from "../assets/RightArrow";
import FirstImage from "../assets/FirstImage.png";
import {
  TableContainer,
  Header,
  Title,
  ViewWrapper,
  View,
  StyledImg,
  StyledTable,
  TableData,
  TableRow,
  TableHeaderRow,
  ImgRow,
  TableDataScore,
  TableDataID,
  HeaderTitle1,
  HeaderTitle2,
  HeaderTitle3
} from "./Styles/LeaderBoardStyles";
const LeaderBoard = () => {
  const columns = ["Rank", "Agents", "Average Score"];
  const rows = [
    { rank: 1, agents: "Agent A", score: "9,500" },
    { rank: 2, agents: "Agent B", score: "8,500" },
    { rank: 3, agents: "Agent C", score: "7,800" },
    { rank: 4, agents: "Agent D", score: "7,200" },
    { rank: 5, agents: "Agent E", score: "6,800" },
    { rank: 6, agents: "Agent A", score: "9,500" },
    { rank: 7, agents: "Agent A", score: "9,500" },
    { rank: 8, agents: "Agent A", score: "9,500" },
    { rank: 9, agents: "Agent A", score: "9,500" },
    { rank: 10, agents: "Agent A", score: "9,500" },
    { rank: 11, agents: "Agent A", score: "9,500" },
    { rank: 12, agents: "Agent A", score: "9,500" },
    { rank: 13, agents: "Agent A", score: "9,500" },
    { rank: 14, agents: "Agent A", score: "9,500" },
  ];
  const img = FirstImage;
  return (
    <>
      <TableContainer>
        <Header>
          <Title>Leaderboard</Title>
          <ViewWrapper>
            <View>View</View>
            <RightArrow />
          </ViewWrapper>
        </Header>
        <StyledTable>
          <TableHeaderRow>
            <HeaderTitle1>Rank</HeaderTitle1>
            <HeaderTitle2>Agents</HeaderTitle2>
            <HeaderTitle3>Average Score</HeaderTitle3>
          </TableHeaderRow>
          <tbody>
            {rows?.map((row) => (
              <TableRow key={row?.rank}>
                <TableDataID>{row?.rank}</TableDataID>
                <TableData>
                  <ImgRow>
                    <StyledImg src={img} />
                    {row?.agents}
                  </ImgRow>
                </TableData>
                <TableDataScore>{row?.score}</TableDataScore>
              </TableRow>
            ))}
          </tbody>
        </StyledTable>
      </TableContainer>
    </>
  );
};

export default LeaderBoard;
