import { useEffect, useState } from 'react';
import BrandIcon from '../assets/svg/brand-ticket.svg';
import BrandIconActive from '../assets/svg/brand-ticket-active.svg';
import Purfume from '../assets/svg/purfume-icon.svg';
import PurfumeActive from '../assets/svg/purfume-icon-active.svg';
import { Outlet, useNavigate, useLocation } from 'react-router-dom';

export const MainPageLayout = () => {
  const [tabindx, setTabindex] = useState('0');
  const navigate = useNavigate();
  const { pathname } = useLocation();

  const handleClickTab = (event: React.MouseEvent<HTMLButtonElement>) => {
    const index = event.currentTarget.value;
    setTabindex(index);
    if (index === '0') {
      navigate('/main');
    } else {
      navigate('/search');
    }
  };

  useEffect(() => {
    if (pathname.includes('/search')) {
      navigate('/search');
      setTabindex('1');
    } else {
      navigate('/main');
      setTabindex('0');
    }
  }, []);

  return (
    <div className="w-full">
      <div className="h-[48px] relative">
        <div className="flex mb-[2px]">
          <button
            className="flex justify-center items-center pb-[1px] gap-1 w-full h-[46px]"
            value="0"
            onClick={handleClickTab}
          >
            <div className="w-5 h-5">
              {tabindx === '0' ? (
                <img src={BrandIconActive} alt="brand selected" />
              ) : (
                <img src={BrandIcon} alt="brand" />
              )}
            </div>
            <div className="small_title_bold">브랜드</div>
          </button>
          <button
            className="flex justify-center items-center pb-[1px] gap-1 w-full h-[46px]"
            value="1"
            onClick={handleClickTab}
          >
            <div className="w-5 h-5">
              {tabindx === '1' ? (
                <img src={PurfumeActive} alt="purfume selected" />
              ) : (
                <img src={Purfume} alt="purfume" />
              )}
            </div>
            <div className="small_title_bold">향수</div>
          </button>
        </div>
        <div
          className="absolute bottom-0 h-[2px] w-1/2 bg-black rounded-[5px] transition-transform"
          style={{
            transform: `translateX(${+tabindx * 100}%)`,
          }}
        />
      </div>
      <Outlet />
    </div>
  );
};
