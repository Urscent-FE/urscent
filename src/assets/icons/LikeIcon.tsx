import React from 'react';

export const LikeIcon: React.FC<IconProps> = ({
  fill = '#000000',
  width = '24',
  height = '22',
  fullfill = false,
}) => {
  return (
    <svg
      width={width}
      height={height}
      viewBox="0 0 24 22"
      fill={fullfill ? fill : 'none'}
      xmlns="http://www.w3.org/2000/svg"
    >
      <path
        d="M19.0554 2.41708C19.7228 2.69364 20.3292 3.099 20.84 3.60999C21.351 4.12075 21.7563 4.72718 22.0329 5.39464C22.3095 6.0621 22.4518 6.77751 22.4518 7.49999C22.4518 8.22248 22.3095 8.93789 22.0329 9.60535C21.7563 10.2728 21.351 10.8792 20.84 11.39L19.78 12.45L12 20.23L4.22 12.45L3.16 11.39C2.1283 10.3583 1.54871 8.95903 1.54871 7.49999C1.54871 6.04096 2.1283 4.64169 3.16 3.60999C4.19169 2.5783 5.59096 1.9987 7.05 1.9987C8.50903 1.9987 9.9083 2.5783 10.94 3.60999L12 4.66999L13.06 3.60999C13.5708 3.099 14.1772 2.69364 14.8446 2.41708C15.5121 2.14052 16.2275 1.99817 16.95 1.99817C17.6725 1.99817 18.3879 2.14052 19.0554 2.41708Z"
        stroke={fill}
        strokeWidth="2"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  );
};

interface IconProps {
  fill?: string;
  width?: string;
  height?: string;
  fullfill?: boolean;
}
