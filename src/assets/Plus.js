import React from "react";
import styled from "styled-components";

const Container=styled.div`
  margin-left:11px;
`;
const Plus = () => {
  return (
    <Container>
      <svg
        xmlns="http://www.w3.org/2000/svg"
        width="18"
        height="18"
        viewBox="0 0 18 18"
        fill="none"
      >
        <path
          d="M9 3.75v10.5M3.75 9h10.5"
          stroke="#637487"
          stroke-width="2"
          stroke-linecap="round"
          stroke-linejoin="round"
        />
      </svg>
    </Container>
  );
};

export default Plus;
