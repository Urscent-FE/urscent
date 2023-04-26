import React from 'react';
import { LikeIcon } from '@/assets/icons/LikeIcon';
import { StarIcon } from '@/assets/icons/StarIcon';

export const PerfumeCard: React.FC<IPerfumeCard> = ({
  name,
  brand,
  img,
  rate,
  like,
}) => {
  return (
    <div className="w-40 h-56 bg-white shrink-0 shadow-cards rounded-xl cursor-pointer">
      <div className="relative w-full h-[163px] flex justify-center items-center pt-1 bg-gray-100">
        <img src={img} alt={name} />
        <div className="absolute top-2 left-2">
          <LikeIcon width="18" fullfill={like} />
        </div>
      </div>
      <div className="pt-2 px-2 flex justify-between">
        <div className="w-24">
          <div className="text-sm truncate">{name}</div>
          <div className="text-sm text-gray-400 truncate">{brand}</div>
        </div>
        <div className="flex items-end">
          <div className="flex items-center gap-1">
            <StarIcon width="14" />
            <div className="text-sm">{rate}</div>
          </div>
        </div>
      </div>
    </div>
  );
};

interface IPerfumeCard {
  name: string;
  brand: string;
  img: string;
  rate: string;
  like: boolean;
}
