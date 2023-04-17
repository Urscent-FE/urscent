import MenuBurger from '@/assets/svg/menu-burger.svg';
import User from '@/assets/svg/user-icon.svg';
import { Link } from 'react-router-dom';

export const MainHeader = () => {
  return (
    <header className="h-[3.75rem] w-full flex items-center justify-between pl-8 pr-7">
      <Link to="/">
        <div className="title_bold cursor-pointer">URscent</div>
      </Link>
      <nav className="flex gap-7 justify-center items-center h-full">
        <img
          className="mt-[0.7px] cursor-pointer"
          src={User}
          alt="my account icon"
        />
        <img className="cursor-pointer" src={MenuBurger} alt="menu icon" />
      </nav>
    </header>
  );
};
