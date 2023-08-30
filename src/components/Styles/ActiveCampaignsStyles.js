import styled from "styled-components";

export const Container = styled.div`
  display: flex;
  flex-direction: column;
  width: 367px;
  height: 281px;
  border-radius: 3px;
  background: #fff;
  box-shadow: 0px 5px 10px 0px rgba(99, 116, 135, 0.1);
  font-family: SF Pro Display;
`;
export const Header = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  width: 367px;
  height: 42px;
  flex-shrink: 0;
  background-color: #e4e7ea;
  margin-bottom: 10px;
`;
export const Title = styled.div`
  color: #3a4a5b;
  font-size: 18px;
  font-weight: 400;
  line-height: normal;
  margin-left: 20px;
`;
export const View = styled.div`
  color: #637487;
  font-size: 15px;
  font-weight: 400;
  line-height: normal;
  margin-right: 5px;
`;
export const ViewWrapper = styled.div`
  display: flex;
  margin-right: 20.14px;
`;
export const Campaigns = styled.div`
  margin: 0px 4px 11px 13px;
  background-color: #f8f8f9;
  height: 102px;
  display: flex;
  width: 341px;
`;
export const Wrapper = styled.div`
  display: flex;
`;
export const SurveyType = styled.div`
  color:  #485c72;
  font-size: 15px;
  font-style: normal;
  font-weight: 400;
  line-height: 130%; 
`;
export const RatingsWrapper = styled.div`
  display: flex;
  flex-direction: column;
  margin: 24px 0px 10px 19px;
`;
export const StarContainer = styled.div`
  display: flex;
  margin-top: 10px;
`;
export const RatingPercentage = styled.div`
  color: #242e39;
  font-size: 14px;
  font-style: normal;
  font-weight: 600;
  line-height: normal;
  margin: 0px 11px 0px 4px;
`;
export const Number = styled.div`
  color: #242e39;
  font-size: 18px;
  font-style: normal;
  font-weight: 700;
  line-height: normal;
  margin-left: 13px;
`;
export const ProgressWrapper = styled.div`
  display: flex;
  flex-direction: column;
  margin-left: 43px;
`;
export const CompletionRateText = styled.div`
  color: #637487;
  font-size: 12px;
  font-style: normal;
  font-weight: 300;
  line-height: normal;
  letter-spacing: 0.18px;
`;