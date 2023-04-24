import { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import slide1 from '@/assets/image/mainSlide_01.jpg';
import slide2 from '@/assets/image/mainSlide_02.jpg';
import slide3 from '@/assets/image/mainSlide_03.jpg';

export const CarouselSlider = () => {
  const [slideNum, setSlideNum] = useState(0);
  const [customDelay, setCustomDelay] = useState<number | null>(3000);

  const sliderArr = [slide1, slide2, slide3];
  const SLIDE_LENGTH = sliderArr.length;

  let timer: number;

  useEffect(() => {
    window.clearTimeout(timer);
    if (customDelay) {
      timer = window.setTimeout(() => {
        nextSlide();
      }, customDelay);
    }

    return () => {
      window.clearTimeout(timer);
    };
  }, [slideNum, customDelay]);

  const prevSlide = () => {
    if (0 === slideNum) {
      setSlideNum(SLIDE_LENGTH - 1);
      return;
    }
    setSlideNum(num => num - 1);
  };

  const nextSlide = () => {
    if (SLIDE_LENGTH - 1 <= slideNum) {
      setSlideNum(0);
      return;
    }
    setSlideNum(num => num + 1);
  };

  const activeAutoSlide = () => {
    setCustomDelay(3000);
  };

  const stopAutoSlide = () => {
    setCustomDelay(null);
  };

  return (
    <div
      className="w-full h-32 md:h-44 lg:h-60 relative overflow-hidden group"
      onMouseOver={stopAutoSlide}
      onFocus={stopAutoSlide}
      onMouseOut={activeAutoSlide}
      onBlur={activeAutoSlide}
    >
      <div
        className="flex transition-transform ease-in-out duration-1000 h-full"
        style={{
          width: `${SLIDE_LENGTH}00%`,
          transform: `translateX(${slideNum * (-100 / SLIDE_LENGTH)}%)`,
        }}
      >
        {sliderArr.map((slide, index) => {
          return (
            <div key={index} className="relative w-full h-full">
              <img className="w-full h-full" src={slide} alt={slide} />
              <Link
                to="/account/sign-up"
                className="absolute left-10 bottom-6 text-sm md:left-20 md:text-base md:bottom-8 lg:text-lg lg:left-28 lg:bottom-10 underline text-white"
              >
                회원가입 바로가기
              </Link>
            </div>
          );
        })}
      </div>
      <div className="w-full absolute top-2/4 -translate-y-3 px-6 flex justify-between">
        <div className="group-hover:bg-black/20 transition-colors ease-in-out duration-300 w-12 h-12 rounded-full flex justify-center pl-2 items-center hover:cursor-pointer">
          <button
            className="w-4 h-4 border-t border-l border-white opacity-0 group-hover:opacity-100 -rotate-45 transition-opacity ease-in-out duration-300"
            onClick={prevSlide}
          />
        </div>
        <div className="group-hover:bg-black/20 transition-colors ease-in-out duration-300 w-12 h-12 rounded-full flex justify-center pr-2 items-center hover:cursor-pointer">
          <button
            className="w-4 h-4 border-t border-r border-white opacity-0 group-hover:opacity-100 transition-opacity ease-in-out duration-300 rotate-45"
            onClick={nextSlide}
          />
        </div>
      </div>
    </div>
  );
};
