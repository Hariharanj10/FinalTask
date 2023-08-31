import React from "react";
import styled from "styled-components";
import RightArrow from "../assets/RightArrow";

const Container = styled.div`
  display: flex;
  flex-direction: column;
  width: 250px;
  height: 210px;
  flex-shrink: 0;
  border-radius: 3px;
  background-color: #fff;
  box-shadow: 0px 5px 10px 0px rgba(99, 116, 135, 0.1);
  font-family: "SF Pro Display", sans-serif;
`;
const Header = styled.div`
  display: flex;
  background-color: #e4e7ea;
  width: 250px;
  height: 42px;
  justify-content: space-between;
  align-items: center;
`;
const Title = styled.div`
  color: #3a4a5b;
  font-family: "SF Pro Display", sans-serif;
  font-size: 18px;
  font-style: normal;
  font-weight: 400;
  line-height: normal;
  margin: 10px auto 11px 20px;
`;
const View = styled.div`
  color: #637487;
  font-family: "SF Pro Display", sans-serif;
  font-size: 15px;
  font-style: normal;
  font-weight: 400;
  line-height: normal;
`;
const ArrowWrapper = styled.div`
  margin-left: 7px;
`;
const ViewWrapper = styled.div`
  display: flex;
  margin: 11px 14px 13px auto;
`;
const Main = styled.div`
  display: flex;
  flex-direction: column;
`;
const FirstRow = styled.div`
  display: flex;
  height: 93px;
  border-bottom: 1px solid #e4e7ea;
  margin: 0px 20px;
`;
const TotalCount = styled.div`
  color: #161c22;
  font-size: 24px;
  font-style: normal;
  font-weight: 700;
  line-height: normal;
  margin: 32px 8px 32px 3px;
`;
const Profile = styled.div`
  color: #768595;

  font-size: 14px;
  font-style: normal;
  font-weight: 400;
  line-height: normal;
  margin: 42px auto 34px 0px;
`;
const SecondRow = styled.div`
  display: flex;
  margin-top: 12px;
  margin-bottom: 21px;
`;
const SecondRowSection = styled.div`
  display: flex;
  flex-direction: column;
  border-right: ${(props) => props?.borderRight};
  margin-left: 19px;
  width: 110px;
`;
const Count = styled.div`
  color: #161c22;
  font-size: 18px;
  font-style: normal;
  font-weight: 700;
  line-height: normal;
`;
const TextProfiles = styled.div`
  color: #637487;
  font-size: 14px;
  font-style: normal;
  font-weight: 300;
  line-height: normal;
  letter-spacing: 0.21px;
  // margin-left:${(props) => props?.marginLeft}
`;
const ReviewProduct = ({
  TitleValue,
  TotalCountValue,
  ProfileValue,
  CountValue,
  TextProfilesValue,
}) => {
  return (
    <Container>
      <Header>
        <Title>{TitleValue}</Title>
        <ViewWrapper>
          <View>View</View>
          <ArrowWrapper>
            <RightArrow />
          </ArrowWrapper>
        </ViewWrapper>
      </Header>
      <Main>
        <FirstRow>
          <TotalCount>{TotalCountValue}</TotalCount>
          <Profile>{ProfileValue}</Profile>
        </FirstRow>
        <SecondRow>
          <SecondRowSection borderRight="1px solid #E4E7EA">
            <Count>{CountValue}</Count>
            <TextProfiles>{TextProfilesValue}</TextProfiles>
          </SecondRowSection>

          <SecondRowSection>
            <Count>{CountValue}</Count>
            <TextProfiles>{TextProfilesValue}</TextProfiles>
          </SecondRowSection>
        </SecondRow>
      </Main>
    </Container>
  );
};

export default ReviewProduct;
