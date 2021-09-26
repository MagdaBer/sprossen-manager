import React from 'react';

export default function AddButtonIcon(): JSX.Element {
  return (
    <svg
      width="97"
      height="97"
      viewBox="0 0 97 97"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <g filter="url(#filter0_d)">
        <circle
          cx="48.5"
          cy="48.5"
          r="43.5"
          fill="#E6F1F3"
          fill-opacity="0.25"
          shape-rendering="crispEdges"
        />
      </g>
      <rect x="46" y="27" width="4" height="42" rx="2" fill="#4C4E4D" />
      <rect
        x="69.0071"
        y="46.0759"
        width="4"
        height="42"
        rx="2"
        transform="rotate(90.1037 69.0071 46.0759)"
        fill="#4C4E4D"
      />
      <defs>
        <filter
          id="filter0_d"
          x="0"
          y="0"
          width="97"
          height="97"
          filterUnits="userSpaceOnUse"
          color-interpolation-filters="sRGB"
        >
          <feFlood flood-opacity="0" result="BackgroundImageFix" />
          <feColorMatrix
            in="SourceAlpha"
            type="matrix"
            values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0"
            result="hardAlpha"
          />
          <feOffset />
          <feGaussianBlur stdDeviation="2.5" />
          <feComposite in2="hardAlpha" operator="out" />
          <feColorMatrix
            type="matrix"
            values="0 0 0 0 0.298039 0 0 0 0 0.305882 0 0 0 0 0.301961 0 0 0 1 0"
          />
          <feBlend
            mode="normal"
            in2="BackgroundImageFix"
            result="effect1_dropShadow"
          />
          <feBlend
            mode="normal"
            in="SourceGraphic"
            in2="effect1_dropShadow"
            result="shape"
          />
        </filter>
      </defs>
    </svg>
  );
}
