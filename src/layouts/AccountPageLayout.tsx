import { Outlet } from 'react-router-dom';

export const AccountPageLayout = () => {
  return (
    <div className="flex justify-center">
      <div className="flex flex-col items-center w-[330px]">
        <Outlet />
      </div>
    </div>
  );
};
