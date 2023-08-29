import React from "react";
import Header from "./Header";
import Subheader from "./Subheader";
import ImageContainer from "./ImageContainer";
import AgentsRectangle from "./AgentsRectangle";
import Score from "./Score";
import styled from "styled-components";

const Container = styled.div`
  display: flex;
`;
const FirstColumn = styled.div`
  display: flex;
  flex-direction: column;
`;
const SecondColumn = styled.div`
  display: flex;
  flex-direction: column;
`;

const Dashboard = () => {
  return (
    <>
    <Header/>
      <Container>
        {/* <Subheader /> */}
        <FirstColumn>
          <ImageContainer />
          <AgentsRectangle />
        </FirstColumn>
        <SecondColumn>
          <Score />
          <h1>helloworld</h1>
          <h1>helloworld</h1>
          <h1>helloworld</h1>
        </SecondColumn>
      </Container>
    </>
  );
};

export default Dashboard;
