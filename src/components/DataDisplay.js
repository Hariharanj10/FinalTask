import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { callApi } from "../redux/action";
import styled from "styled-components";

const Table = styled.table`
  border-collapse: collapse;
  width: 100%;
  border: 1px solid #ddd;
`;

const TableRow = styled.tr`
  &:nth-child(even) {
    background-color: #f2f2f2;
  }
`;

const TableHeader = styled.th`
  background-color: #f2f2f2;
  border: 1px solid #ddd;
  padding: 8px;
  text-align: left;
`;

const TableCell = styled.td`
  border: 1px solid #ddd;
  padding: 8px;
`;

const ErrorMessage = styled.div`
  color: #d9534f;
  font-size: 16px;
  margin-top: 10px;
`;

const LoadingMessage = styled.div`
  font-size: 16px;
  margin-top: 10px;
`;

const DataDisplay = () => {
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(callApi());
  }, [dispatch]);

  const { loading, data, error } = useSelector((state) => state?.userData?.datas);

  if (loading) {
    return <LoadingMessage>Loading...</LoadingMessage>;
  }

  if (error) {
    return <ErrorMessage>Error: {error}</ErrorMessage>;
  }

  return (
    <Table>
      <thead>
        <TableRow>
          <TableHeader>Name</TableHeader>
          <TableHeader>Organization ID</TableHeader>
          <TableHeader>Active Tiers Count</TableHeader>
          <TableHeader>Active Users Count</TableHeader>
        </TableRow>
      </thead>
      <tbody>
        {data?.map((item) => (
          <TableRow key={item.id}>
            <TableCell>{item?.name}</TableCell>
            <TableCell>{item?.organization_id}</TableCell>
            <TableCell>{item?.active_tiers_count}</TableCell>
            <TableCell>{item?.active_users_count}</TableCell>
          </TableRow>
        ))}
      </tbody>
    </Table>
  );
};

export default DataDisplay;
