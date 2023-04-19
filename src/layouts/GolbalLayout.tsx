import { Outlet } from 'react-router-dom';
import { MainHeader } from '@/components/MainHeader';

export const GolbalLayout = () => {
  return (
    <div className="w-full">
      <div className="max-w-[90rem] mx-auto">
        <MainHeader />
        <main className="flex justify-center">
          <Outlet />
        </main>
        <footer />
      </div>
    </div>
  );
};
