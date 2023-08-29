import React from "react";
import styled from 'styled-components'

const Container =styled.div`
    margin-top:17px;
`
const Vector = () => {
  return (
    <Container>
      <svg
        xmlns="http://www.w3.org/2000/svg"
        width="2"
        height="79"
        viewBox="0 0 2 79"
        fill="none"
      >
        <path d="M1 0v79" stroke="#E4E7EA" />
      </svg>
    </Container>
  );
};

export default Vector;
