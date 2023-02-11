import React from 'react';

const navItems = [
  { icon: './images/icon_memo.svg', name: '自分の記録', url: '.' },
  { icon: './images/icon_challenge.svg', name: 'チャレンジ', url: '.' },
  { icon: './images/icon_info.svg', name: 'お知らせ', url: '.' },
];

const Header = () => (
  <header className="bg-dark-500 h-16 sticky top-0 z-10">
    <div className="max-w-default m-auto h-full py-2 px-4 flex justify-between items-center">
      <a href="." className="h-10">
        <img src={'./images/logo.svg'} className="h-full" alt="logo" />
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

        <img src={'./images/icon_menu.svg'} className="h-7 w-7 ml-4 cursor-pointer" alt="menu" />
      </div>
    </div>
  </header>
);

export default Header;
