import React from 'react';

import { IIconProps } from '../../types';

const CheckmarkRound = ({
  size = '30',
  color = 'orange',
}: IIconProps): React.ReactElement => (
  <svg
    width={size}
    height={size}
    viewBox="0 0 18 18"
    fill={color}
    xmlns="http://www.w3.org/2000/svg"
  >
    <path
      fillRule="evenodd"
      clipRule="evenodd"
      d="M9 18C13.9706 18 18 13.9706 18 9C18 4.02944 13.9706 0 9 0C4.02944 0 0 4.02944 0 9C0 13.9706 4.02944 18 9 18ZM9.35329 12.6745L14.0574 4.83442L12.9426 4.16558L8.23855 12.0057C8.11747 12.2075 7.83571 12.2347 7.67828 12.0598L4.98314 9.06517L4.01686 9.93483L6.712 12.9294C7.4542 13.7541 8.78247 13.6259 9.35329 12.6745Z"
      fill={color}
      strokeWidth="1.3"
    />
  </svg>
);

export { CheckmarkRound };
