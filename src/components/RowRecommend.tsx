import React from 'react';

export const RowRecommend: React.FC<IProps> = ({ text }) => {
  return (
    <>
      <div className="title-bold2">{text}</div>
      <div className="w-6 h-6 flex justify-center items-center">
        <div className="h-2 w-2 md:w-3 md:h-3 lg:w-4 lg:h-4 border-t-2 border-r-2 border-black rotate-45" />
      </div>
    </>
  );
};

interface IProps {
  text: string;
}
