import styled from "styled-components";

const CursorType = {
  cursor: "pointer",
};
export const Container = styled.div`
  display: flex;
  align-items: center;
  font-family: SF Pro Display;
  max-width:1219px;
`;
export const LeftNav = styled.div`
  display: flex;
`;
export const Text = styled.div`
  color: #415367;
  font-size: 14px;
  font-weight: 400;
  line-height: 140%;
  margin-left: 7px;
  margin: 26px 293px 26px 1px;
`;

export const RightNav = styled.div`
  display: flex;
  align-items: center;
  height: 32px;
  flex-shrink: 0;
  margin: 27px 9px 29px 0px;
`;
export const StyledText = styled.div`
  color: #242e39;
  font-size: 12px;
  font-weight: 400;
  display: flex;
  align-items: center;
  justify-content: center;
  margin: ${(props) => props.margin};
  &:hover {
    ${CursorType}
  }
`;
export const TextBorder = styled.div`
  width: 34px;
  height: 23px;
  flex-shrink: 0;
  border-radius: 13px;
  background: #dde8f2;
  display: flex;
  justify-content: center;
  align-items: center;
  margin: 24px 15px 25px 0px;
`;
export const ExportButton = styled.button`
  display: inline-flex;
  padding: 7px 15px;
  align-items: center;
  gap: 10px;
  border-radius: 3px;
  background-color: #e4e7ea;
  color: #242e39;
  font-size: 13px;
  font-style: normal;
  font-weight: 400;
  line-height: normal;
  border:none;
  &:hover {
    ${CursorType}
  }
`;
