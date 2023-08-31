import React from "react";

const BoxIcon = () => {
  return (
    <div>
      <svg
        width="68"
        height="68"
        viewBox="0 0 68 68"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
      >
        <g filter="url(#a)">
          <circle cx="34" cy="29" r="24" fill="#C6D8E9" />
        </g>
        <path
          d="M43.128 17.169h-18.93a2.704 2.704 0 0 0-2.704 2.704v18.93a2.704 2.704 0 0 0 2.704 2.704h18.93a2.704 2.704 0 0 0 2.704-2.704v-18.93a2.704 2.704 0 0 0-2.704-2.704Zm-21.634 8.113h24.338M29.607 41.507V25.282"
          stroke="#FAFCFD"
          stroke-width="2"
          stroke-linecap="round"
          stroke-linejoin="round"
        />
        <defs>
          <filter
            id="a"
            x="0"
            y="0"
            width="68"
            height="68"
            filterUnits="userSpaceOnUse"
            color-interpolation-filters="sRGB"
          >
            <feFlood flood-opacity="0" result="BackgroundImageFix" />
            <feColorMatrix
              in="SourceAlpha"
              values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0"
              result="hardAlpha"
            />
            <feOffset dy="5" />
            <feGaussianBlur stdDeviation="5" />
            <feColorMatrix values="0 0 0 0 0.388235 0 0 0 0 0.454902 0 0 0 0 0.529412 0 0 0 0.1 0" />
            <feBlend
              in2="BackgroundImageFix"
              result="effect1_dropShadow_3144_279413"
            />
            <feBlend
              in="SourceGraphic"
              in2="effect1_dropShadow_3144_279413"
              result="shape"
            />
          </filter>
        </defs>
      </svg>
    </div>
  );
};

export default BoxIcon;
