import React from "react";
import styled from "styled-components";
import ReviewProduct from "./ReviewProduct";

const Container = styled.div`
  display: flex;
  flex-wrap: wrap;
  gap: 20px;
`;

const ProductContainer = () => {
  return (
    <Container>
      <ReviewProduct />
    </Container>
  );
};

export default ProductContainer;
