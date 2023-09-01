import React from "react";
import styled from "styled-components";

const Container = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  margin-left: 49px;
`;
const Meter = () => {
  return (
    <Container>
      <svg
        width="132"
        height="96"
        viewBox="0 0 132 96"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
      >
        <path
          d="M65.971 65.903H.513C.786 29.738 29.99.511 65.97.511c35.976 0 64.748 29.223 65.016 65.392H65.971Z"
          fill="#F8F8F9"
          stroke="#E4E7EA"
          strokeWidth="1.022"
        />
        <path
          d="m35.42 33.65 1.771 1.771m60.217-1.771-2.656 1.771M66.414 20.367v2.657"
          stroke="#BFC6CE"
          strokeWidth="1.022"
        />
        <path
          d="M116.89 65.53c0-28.366-22.994-51.36-51.36-51.36-28.365 0-51.36 22.994-51.36 51.36"
          stroke="#E4E7EA"
          strokeWidth="8.174"
        />
        <path
          d="m58.814 18.729 4.046-.575-1.15-8.093-4.046.575 1.15 8.093ZM29.568 34.84c7.305-8.551 17.596-14.457 29.246-16.113l-1.15-8.092c-13.686 1.944-25.756 8.882-34.31 18.895l6.214 5.31Z"
          fill="#FFD654"
        />
        <path
          d="M116.971 65.53c0-28.366-22.995-51.36-51.36-51.36"
          stroke="#5DC288"
          strokeWidth="8.174"
        />
        <path
          d="M14.521 65.528A51.13 51.13 0 0 1 24.523 35.07"
          stroke="#E04C4C"
          strokeWidth="8.174"
        />
        <path
          d="M94.924 40.377a.8.8 0 0 0-.975-1.268L63.436 62.56a.8.8 0 0 0 .974 1.268l30.514-23.45Z"
          fill="#A3ADB8"
        />
        <g filter="url(#a)">
          <circle cx="65.528" cy="64.643" r="15.054" fill="#fff" />
        </g>
        <g clipPath="url(#b)">
          <path
            d="M76.021 64.643c0 5.794-4.696 10.49-10.49 10.49-5.793 0-10.49-4.696-10.49-10.49 0-5.793 4.697-10.49 10.49-10.49 5.794 0 10.49 4.697 10.49 10.49Z"
            stroke="#47BA78"
            strokeWidth="2.044"
          />
          <path
            d="M70.052 68.233a.42.42 0 0 0-.316-.137H61.32a.418.418 0 0 0-.316.137.308.308 0 0 0-.066.302c.575 1.775 2.462 3.014 4.59 3.014 2.127 0 4.014-1.24 4.59-3.014a.31.31 0 0 0-.067-.302Zm-8.84-5.029a1.439 1.439 0 1 0 0-2.878 1.439 1.439 0 0 0 0 2.878Zm8.633 0a1.439 1.439 0 1 0 0-2.878 1.439 1.439 0 0 0 0 2.878Z"
            fill="#47BA78"
          />
        </g>
        <defs>
          <clipPath id="b">
            <path fill="#fff" d="M54.02 53.132h23.024v23.024H54.02z" />
          </clipPath>
          <filter
            id="a"
            x="40.257"
            y="44.481"
            width="50.542"
            height="50.543"
            filterUnits="userSpaceOnUse"
            colorInterpolationFilters="sRGB"
          >
            <feFlood floodOpacity="0" result="BackgroundImageFix" />
            <feColorMatrix
              in="SourceAlpha"
              values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0"
              result="hardAlpha"
            />
            <feOffset dy="5.109" />
            <feGaussianBlur stdDeviation="5.109" />
            <feColorMatrix values="0 0 0 0 0.388235 0 0 0 0 0.454902 0 0 0 0 0.529412 0 0 0 0.1 0" />
            <feBlend
              in2="BackgroundImageFix"
              result="effect1_dropShadow_3144_279182"
            />
            <feBlend
              in="SourceGraphic"
              in2="effect1_dropShadow_3144_279182"
              result="shape"
            />
          </filter>
        </defs>
      </svg>
    </Container>
  );
};

export default Meter;
