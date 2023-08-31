import React from "react";
import styled from "styled-components";
import Plus from "../assets/Plus";

const Container = styled.div`
  display: flex;
  font-family: "SF Pro Display", sans-serif;
`;
const Text = styled.div`
  color: #3a4a5b;
  font-size: 18px;
  font-style: normal;
  font-weight: 400;
  line-height: normal;
`;

const Products = () => {
  return (
    <Container>
      <Text>Products</Text>
      <Plus />
    </Container>
  );
};

export default Products;
