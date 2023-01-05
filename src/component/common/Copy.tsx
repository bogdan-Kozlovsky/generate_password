import { FC } from 'react';

import { IIconProps } from '../../types';

const Copy: FC<IIconProps> = ({ size = '30', color = 'orange' }) => (
  <svg
    width={size}
    height={size}
    viewBox="0 0 24 24"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
  >
    <path
      d="M16 12.5H17.5C18.0523 12.5 18.5 12.0523 18.5 11.5V5.5C18.5 4.94772 18.0523 4.5 17.5 4.5H11.5C10.9477 4.5 10.5 4.94772 10.5 5.5V6.5M6.5 17.5H12.5C13.0523 17.5 13.5 17.0523 13.5 16.5V10.5C13.5 9.94772 13.0523 9.5 12.5 9.5H6.5C5.94772 9.5 5.5 9.94772 5.5 10.5V16.5C5.5 17.0523 5.94772 17.5 6.5 17.5Z"
      stroke={color}
      strokeWidth="1.3"
    />
  </svg>
);

export { Copy };
