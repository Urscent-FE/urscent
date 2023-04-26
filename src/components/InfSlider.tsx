import React from 'react';

export const InfSlider: React.FC<IProps> = ({ list }) => {
  return (
    <div className="w-[1440px] shrink-0 h-[200px] overflow-hidden relative">
      <div className="animate-[slide1_35s_linear_infinite] shrink-0 flex gap-10 w-fit h-full items-center pl-4">
        {list.map(brand => (
          <button
            key={brand}
            onClick={() => {
              console.log(brand);
            }}
            className="title-bold w-40 h-40 rounded-full bg-zinc-300 shrink-0 text-center flex items-center justify-center cursor-pointer"
          >
            {brand}
          </button>
        ))}
      </div>
      <div className="absolute animate-[slide1_35s_linear_infinite_18340ms]  left-[1440px] top-0 shrink-0 flex gap-10 w-fit h-full items-center pl-4">
        {list.map(brand => (
          <div
            key={brand + '2'}
            className="title-bold w-40 h-40 rounded-full bg-zinc-300 shrink-0 text-center flex items-center justify-center cursor-pointer"
          >
            {brand}
          </div>
        ))}
      </div>
    </div>
  );
};

interface IProps {
  list: string[];
}
