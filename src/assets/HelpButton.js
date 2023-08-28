import React from "react";
import styled from "styled-components";

const Container=styled.div`
color: var(--grey-s-30, #324050);
font-family: SF Pro Display;
font-size: 13px;
font-style: normal;
font-weight: 400;
line-height: normal;
display: inline-flex;
justify-content: center;
align-items: center;
margin:15px;
`
const HelpButton = () => {
  return (
    <Container>
      <svg
        width="58"
        height="32"
        viewBox="0 0 58 32"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
      >
        <rect width="58" height="32" rx="3" fill="#E4E7EA" />
        <path
          d="M24.201 21v-9.16H23.06v3.961h-5.03v-3.96h-1.14V21h1.142v-4.17h5.028V21h1.14Zm4.253-5.757c1.041 0 1.733.787 1.758 1.891h-3.586c.07-1.098.793-1.891 1.828-1.891Zm1.733 3.865c-.184.622-.8 1.048-1.638 1.048-1.187 0-1.93-.832-1.93-2.095v-.063h4.736v-.42c0-1.999-1.098-3.294-2.882-3.294-1.822 0-2.99 1.39-2.99 3.44 0 2.076 1.15 3.39 3.04 3.39 1.442 0 2.559-.85 2.75-2.006h-1.086ZM32.529 21h1.105v-9.16h-1.105V21Zm5.802-6.716c-.958 0-1.727.489-2.133 1.232h-.025v-1.118h-1.047v8.805h1.104v-3.276h.025c.394.724 1.156 1.187 2.101 1.187 1.663 0 2.8-1.345 2.8-3.415 0-2.07-1.143-3.415-2.825-3.415Zm-.216 5.86c-1.13 0-1.891-.972-1.891-2.445 0-1.466.761-2.444 1.891-2.444 1.175 0 1.91.952 1.91 2.444 0 1.498-.735 2.444-1.91 2.444Z"
          fill="#324050"
        />
      </svg>
    </Container>
  );
};

export default HelpButton;
