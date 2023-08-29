import React from "react";

const OrangeProgress = () => {
  return (
    <div>
      <svg
        xmlns="http://www.w3.org/2000/svg"
        width="87"
        height="42"
        viewBox="0 0 87 42"
        fill="none"
      >
        <path
          opacity=".15"
          fill-rule="evenodd"
          clip-rule="evenodd"
          d="M43.064 0C66.315 0 85.266 18.504 86.13 41.658h-6.04C79.231 21.854 62.983 6.063 43.064 6.063c-19.918 0-36.167 15.791-37.026 35.595H0C.863 18.504 19.813 0 43.064 0Z"
          fill="#000"
        />
        <path
          fill-rule="evenodd"
          clip-rule="evenodd"
          d="M43.064 0v6.063c-19.918 0-36.167 15.791-37.026 35.595H0C.863 18.504 19.813 0 43.064 0Z"
          fill="#FFAE45"
        />
        <text
          x="30"
          y="40"
          font-family="SF Pro Display"
          font-size="13px"
          font-style="normal"
          font-weight="600"
          fill="#000"
          text-align="center"
          line-height="normal"
        >
          61.2%
        </text>
      </svg>
    </div>
  );
};
export default OrangeProgress;