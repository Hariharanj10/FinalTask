import styled from "styled-components";

export const TableContainer = styled.div`
  width: 367px;
  font-family: "SF Pro Display", sans-serif;
  box-shadow: 0px 5px 10px 0px rgba(99, 116, 135, 0.1);
  background-color:#FFF;
  &:hover{
    cursor:pointer;
  }
`;
export const StyledTable = styled.table`
  width: 100%;
  border-collapse: collapse;
  border-radius: 3px;
`;
export const TableHeader = styled.td`
  background-color: #f0f2f5;
  color: #637487;
`;
export const TableData = styled.td`
  padding: 12px 0px;
  color: #637487;
  font-size: 14px;
  font-style: normal;
  font-weight: 400;
  line-height: normal;
`;
export const TableRow = styled.tr`
  width: 367px;
  border-bottom: 1px solid #e8ecf0;
  height:47px;
`;
export const TableHeaderRow = styled.tr`
  height: 33.952px;
  background-color: #f0f2f4;
`;
export const FirstRow = styled.td`
  color: #242e39;
  font-size: 14px;
  font-style: normal;
  font-weight: 600;
  line-height: normal;
  margin: 15px 63px 14px 10px;
`;
export const Header = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  width: 367px;
  height: 42px;
  flex-shrink: 0;
  background-color: #e4e7ea;
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
  margin-right: 11px;
`;
export const ViewWrapper = styled.div`
  display: flex;
  margin-right: 20.14px;
`;
export const StyledImg = styled.img`
  margin-right: 10px;
`;
export const ImgRow = styled.div`
  display: flex;
  align-items: center;
`;
export const TableDataScore = styled.td`
  color: #242e39;
  font-size: 14px;
  font-style: normal;
  font-weight: 600;
  line-height: normal;
  border-bottom: 1px solid #e8ecf0;
  text-align: center;
`;
export const TableDataID = styled.td`
  color: #242e39;
  font-size: 14px;
  font-weight: 400;
  border-bottom: 1px solid #e8ecf0;
  padding-left: 20px;
  width: 70px;
`;
export const HeaderTitle1 = styled.th`
  color: #637487;
  font-size: 14px;
  font-style: normal;
  font-weight: 400;
  line-height: normal;
  padding-left: 20px;
  text-align: left;
`;
export const HeaderTitle2 = styled(HeaderTitle1)`
  padding-left: 0;
`;
export const HeaderTitle3 = styled(HeaderTitle1)``;
