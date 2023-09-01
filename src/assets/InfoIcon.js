import React from "react";
import styled from "styled-components";

const Container=styled.div`
  margin:27px 7px 19px 19px;
`
const InfoIcon = () => {
  return (
    <Container>
      <svg
        xmlns="http://www.w3.org/2000/svg"
        width="18"
        height="18"
        viewBox="0 0 18 18"
        fill="none"
      >
        <g
          clipPath="url(#a)"
          stroke="#324050"
          strokeWidth="1.5"
          strokeLinecap="round"
          strokeLinejoin="round"
        >
          <path d="M9 16.5a7.5 7.5 0 1 0 0-15 7.5 7.5 0 0 0 0 15ZM9 12V9m0-3h.008" />
        </g>
        <defs>
          <clipPath id="a">
            <path fill="#fff" d="M0 0h18v18H0z" />
          </clipPath>
        </defs>
      </svg>
    </Container>
  );
};

export default InfoIcon;
