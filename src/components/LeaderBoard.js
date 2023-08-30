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
  TableHeader,
  TableRow,
  TableHeaderRow,
  ImgRow,
} from "./Styles/LeaderBoardStyles";
const LeaderBoard = () => {
  const columns = ["Rank", "Agents", "Average Score"];
  const rows = [
    { rank: 1, agents: "Agent A", score: 95 },
    { rank: 2, agents: "Agent B", score: 85 },
    { rank: 3, agents: "Agent C", score: 78 },
    { rank: 4, agents: "Agent D", score: 72 },
    { rank: 5, agents: "Agent E", score: 68 },
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
            {columns.map((column) => (
              <TableHeader key={column}>{column}</TableHeader>
            ))}
          </TableHeaderRow>
          <tbody>
            {rows.map((row) => (
              <TableRow key={row.rank}>
                <TableData>{row.rank}</TableData>
                <TableData>
                  <ImgRow>
                    <StyledImg src={img} />
                    {row.agents}
                  </ImgRow>
                </TableData>
                <TableData>{row.score}</TableData>
              </TableRow>
            ))}
          </tbody>
        </StyledTable>
      </TableContainer>
    </>
  );
};

export default LeaderBoard;
