import React from "react";
import styled from "styled-components";

export const Container = styled.div`
  display: flex;
  font-family: "SF Pro Display", sans-serif;
  color: #2b69a9;
  flex-direction: column;
  width: 387px;
  box-shadow: 0px 5px 10px 0px rgba(99, 116, 135, 0.1);
  height: 473px;
`;
export const Title = styled.div`
  width: 188px;
  font-family: "SF Pro Display", sans-serif;
  color: ${(props) => props?.color};
  font-weight: ${(props) => props?.fontWeight};
  font-size: 14px;
  height: 100%;
  border-bottom: ${(props) => props?.borderBottom};
  display: flex;
  justify-content: center;
  align-items: center;
  margin-right: ${(props) => props?.marginRight};
  margin-left: ${(props) => props?.marginLeft};
`;
export const Datas = styled.div`
  height: 79px;
  border-bottom: 1px solid #e4e7ea;
  display: flex;
  justify-content: center;
  flex-direction: column;
  margin: 0px 15px;
`;
export const Text = styled.div`
  font-family: "SF Pro Display", sans-serif;
  color: #161c22;
  font-size: 14px;
  margin: 20px 0px 6px 5px;
  font-style: normal;
  font-weight: 400;
  line-height: normal;
`;
export const Count = styled.div`
  color: #242e39;
  font-size:${(props) => props.fontSize || "16px"}
  font-style: normal;
  font-weight: 700;
  line-height: normal;
  margin-bottom: 15px;
  margin-left:5px;
`;
export const Header = styled.div`
  display: flex;
  width: 387px;
  border-bottom: 1px solid #e4e7ea;
  justify-content: center;
  align-items: center;
  height: 56px;
`;
const columns = [
  { Title: "Unprocessed Transactions", Count: "8,483" },
  { Title: "Unassigned Transactions", Count: "2,216" },
  { Title: "Duplicate Transactions", Count: "1,411" },
  { Title: "Corrupted Transactions", Count: "1,890" },
  { Title: "Unsubcribed Transactions", Count: "1,046" },
];
const Column2 = [
  { Title: "Survey Sent (Manual)", Count: "8,483" },
  { Title: "Posted On Social Media", Count: "2,216" },
  { Title: "Social Posts", Count: "1,411" },
  { Title: "Marked Abusive", Count: "1,890" },
  { Title: "Reviews Replied To", Count: "1,046" },
];
const Transaction = ({ Title1, Title2 }) => {
  return (
    <Container>
      <Header>
        <Title color="#768595" marginRight="15px" fontWeight="400px">
          {Title1}
        </Title>
        <Title
          color="#2B69A9"
          fontWeight="600px"
          borderBottom="3px solid #2B69A9"
        >
          {Title2}
        </Title>
      </Header>

      {columns?.map((item, index) => (
        <Datas key={index}>
          <Text>{item?.Title}</Text>
          <Count>{item?.Count}</Count>
        </Datas>
      ))}
    </Container>
  );
};

export default Transaction;
