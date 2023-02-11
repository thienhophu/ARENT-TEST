import React from 'react';

import logo from './logo.svg';
import iconMenu from './icon_menu.svg';
import iconMemo from './icon_memo.svg';
import iconChallenge from './icon_challenge.svg';
import iconInfo from './icon_info.svg';

const navItems = [
  { icon: iconMemo, name: '自分の記録', url: '.' },
  { icon: iconChallenge, name: 'チャレンジ', url: '.' },
  { icon: iconInfo, name: 'お知らせ', url: '.' },
];

const Header = () => (
  <header className="bg-dark-500 h-16 sticky top-0">
    <div className="max-w-default m-auto h-full py-2 px-4 flex justify-between items-center">
      <a href="." className="h-10">
        <img src={logo} className="h-full" alt="logo" />
      </a>

      <div className="flex flex-row items-center">
        <nav className="text-light flex flex-row gap-x-4 md:gap-x-11">
          {navItems.map(item => (
            <a href={item.url} className="hover:text-primary-400 flex flex-row">
              <img src={item.icon} className="h-7 w-7 md:mr-2" alt={item.name} />
              <span className="hidden md:block">{item.name}</span>
            </a>
          ))}
        </nav>

        <img src={iconMenu} className="h-7 w-7 ml-4 cursor-pointer" alt="menu" />
      </div>
    </div>
  </header>
);

export default Header;
