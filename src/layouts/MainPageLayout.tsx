import { Outlet } from 'react-router-dom';

export const MainPageLayout = () => {
  return (
    <>
      <header />
      <main className="flex justify-center">
        <Outlet />
      </main>
      <footer />
    </>
  );
};
