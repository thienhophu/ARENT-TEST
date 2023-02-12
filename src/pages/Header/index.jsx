import classNames from 'classnames';
import React from 'react';
import { Link, NavLink } from 'react-router-dom';
import Menu from '../../components/Menu';

const navItems = [
  { icon: './images/icon_memo.svg', name: '自分の記録', url: 'my-record' },
  { icon: './images/icon_challenge.svg', name: 'チャレンジ', url: 'challenge' },
  { icon: './images/icon_info.svg', name: 'お知らせ', url: 'info' },
];

const Header = () => (
  <header className="bg-dark-500 h-16 sticky top-0 z-10">
    <div className="max-w-default m-auto h-full py-2 px-4 flex justify-between items-center">
      <Link to="/" className="h-10">
        <img src={'./images/logo.svg'} className="h-full" alt="logo" />
      </Link>

      <div className="flex flex-row items-center">
        <nav className="text-light flex flex-row gap-x-4 md:gap-x-11">
          {navItems.map(item => (
            <NavLink
              to={item.url}
              className={({ isActive }) =>
                classNames('hover:text-primary-400 flex flex-row', { 'text-primary-400': isActive })
              }
            >
              <img src={item.icon} className="h-7 w-7 md:mr-2" alt={item.name} />
              <span className="hidden md:block">{item.name}</span>
            </NavLink>
          ))}
        </nav>

        <Menu />
      </div>
    </div>
  </header>
);

export default Header;
