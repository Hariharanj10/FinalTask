import styled from "styled-components";
import { Rate } from "antd";

export const Container = styled.div`
  width: 793px;
  height: 206px;
  flex-shrink: 0;
  border-radius: 3px;
  background: #fff;
  box-shadow: 0px 5px 10px 0px rgba(99, 116, 135, 0.1);
  // font-family: 'SF Pro Display', sans-serif;
  line-height: normal;
  font-style: normal;
`;
export const Box = styled.div`
  width: 74.824px;
  height: 76.235px;
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;
  background: linear-gradient(144deg, #38f6d3 0%, #1edeea 100%);
  margin: 19.88px 0px 0px 23.59px;
`;
export const FirstRow = styled.div`
  display: flex;
`;
export const SecondRow = styled.div`
  display: flex;
`;
export const BoxText = styled.div`
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
export const TextWrapper = styled.div`
  display: flex;
  flex-direction: column;
  margin-left: 18.59px;
`;
export const Text = styled.div`
  width: 324px;
  color: #242e39;
  font-size: 24px;
  font-weight: 600;
  margin: 30px 128px 0px 0px;
`;
export const Text2 = styled.div`
  color: #637487;
  font-size: 14px;
  font-weight: 300;
  margin-top: 1px;
  letter-spacing: 0.21px;
`;
export const RatingWrapper = styled.div`
  display: flex;
  justify-content: center;
  margin-left: 20px;
`;
export const Ratings = styled.div`
  color: #242e39;
  font-size: 42px;

  font-weight: 300;
  margin: 30px 14px 0px 0px;
`;
export const RatingText = styled.div`
  color: #242e39;
  font-size: 14px;
  font-weight: 300;
  letter-spacing: 0.21px;
  margin-top: 37px;
`;
export const RatingStarWrapper = styled.div`
  display: flex;
  flex-direction: column;
`;
export const RatingStar = styled(Rate)`
  color: #1b63a9;
  font-family: Font Awesome 5 Free;
  font-size: 14px;
  font-weight: 900;
`;
export const AgentCount = styled.div`
  display: flex;
  flex-direction: column;
  margin-left: 25px;
  margin-top: 26px;
  margin-bottom: 23px;
  margin: 26px 0px 23px 25px;
`;
export const Count = styled.div`
  color: #242e39;
  font-size: 24px;
  font-weight: 700;
`;
export const AgentText = styled.div`
  color:  #637487
  font-size: 14px;
  font-weight: 300;
  letter-spacing: 0.21px;
`;
export const TierWrapper = styled.div`
  display: flex;
  flex-direction: column;
  margin: 26px 42px 24px 20px;
`;
export const TierCount = styled.div`
  color: #242e39;
  font-size: 24px;
  font-weight: 700;
`;
export const TierText = styled.div`
  color: #637487;
  font-size: 14px;
  font-weight: 300;
  letter-spacing: 0.21px;
`;
export const ProfileWrapper = styled.div`
  display: flex;
  flex-direction: column;
  margin: 26px 40px 23px 20px;
`;
export const ProfileCount = styled.div`
  color: #ffa642;
  font-size: 24px;
  font-weight: 700;
`;
export const ProfileText = styled.div`
  color: #637487;
  font-size: 14px;
  font-weight: 300;
  letter-spacing: 0.21px;
`;
export const CompletionWrapper = styled.div`
  display: flex;
  flex-direction: column;
  margin: 26px 113px 24px 20px;
`;
export const CompletionPercentage = styled.div`
  color: #242e39;
  font-size: 24px;
  font-weight: 700;
`;
export const CompletionText = styled.div`
  color: #637487;
  font-size: 14px;
  font-weight: 300;
  letter-spacing: 0.21px;
`;
