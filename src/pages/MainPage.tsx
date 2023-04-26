import { CarouselSlider } from '@/components/CarouselSlider';
import { PerfumeCard } from '@/components/PerfumeCard';
import { RowRecommend } from '@/components/RowRecommend';
import BrandIcon from '../assets/svg/brand-ticket.svg';
import React from 'react';
import { InfSlider } from '@/components/InfSlider';

const test = [
  {
    img: 'https://via.placeholder.com/153x133',
    name: 'Bois des Îles',
    brand: 'Chanel',
    rate: '9.4',
    like: true,
  },
  {
    img: 'https://via.placeholder.com/153x133',
    name: 'Bois des Îles',
    brand: 'Chanel',
    rate: '9.4',
    like: false,
  },
  {
    img: 'https://via.placeholder.com/153x133',
    name: 'Bois des Îles',
    brand: 'Chanel',
    rate: '9.4',
    like: false,
  },
  {
    img: 'https://via.placeholder.com/153x133',
    name: 'Bois des Îles',
    brand: 'verylongBrandNameIs',
    rate: '9.4',
    like: true,
  },
  {
    img: 'https://via.placeholder.com/153x133',
    name: 'Bois des Îles',
    brand: 'Chanel',
    rate: '9.4',
    like: true,
  },
  {
    img: 'https://via.placeholder.com/153x133',
    name: 'Bois des Îles',
    brand: 'Chanel',
    rate: '9.4',
    like: false,
  },
  {
    img: 'https://via.placeholder.com/153x133',
    name: 'Bois des Îles',
    brand: 'Chanel',
    rate: '9.4',
    like: false,
  },
  {
    img: 'https://via.placeholder.com/153x133',
    name: 'Bois des Îles',
    brand: 'verylongBrandNameIs',
    rate: '9.4',
    like: true,
  },
];

const brandlist = [
  'Alterna',
  'Balenciaga',
  'Carven',
  'Decleor',
  'Escada',
  'Fanola',
  'Giorgio Beverly Hills',
  'Herbal Essences',
  'Issey Miyake',
  'Jacques Bogart',
  'Katy Perry',
  'Laura Biagiotti',
  'Moroccanoil',
  'Narciso Rodriguez',
];

export const MainPage = () => {
  return (
    <>
      <CarouselSlider />
      <section className="w-full">
        <div className="w-full mt-7 flex items-center justify-between px-5 cursor-pointer">
          <RowRecommend text="신학기 캠퍼스에서 뒤돌아보게 하는 그 향수" />
        </div>
        <div className="w-full mt-6 gap-3 px-4 flex flex-wrap">
          {test.map(({ name, brand, img, rate, like }, index) => (
            <PerfumeCard
              key={index}
              name={name}
              brand={brand}
              img={img}
              rate={rate}
              like={like}
            />
          ))}
        </div>
      </section>
      <section>
        <div className="flex items-center mt-14 px-5">
          <img
            src={BrandIcon}
            className="w-6 md:w-8 lg:w-10"
            alt="popular brands"
          />
          <div className="title-bold2 ml-3 mb-0.5">인기브랜드</div>
        </div>
        <div className="w-full overflow-hidden">
          <InfSlider list={brandlist} />
        </div>
      </section>

      <section className="w-full">
        <div className="w-full mt-7 flex items-center justify-between px-5 cursor-pointer">
          <RowRecommend text="신학기 캠퍼스에서 뒤돌아보게 하는 그 향수" />
        </div>
        <div className="w-full mt-6 gap-3 px-4 flex flex-wrap">
          {test.map(({ name, brand, img, rate, like }, index) => (
            <PerfumeCard
              key={index}
              name={name}
              brand={brand}
              img={img}
              rate={rate}
              like={like}
            />
          ))}
        </div>
      </section>
    </>
  );
};
