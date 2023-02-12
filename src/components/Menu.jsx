import React, { useState } from 'react';
import { NavLink } from 'react-router-dom';
import classNames from 'classnames';

const menuLinks = [
  { text: '自分の記録', url: 'my-record' },
  { text: '体重グラフ', url: 'pending' },
  { text: '目標', url: 'pending' },
  { text: '選択中のコース', url: 'pending' },
  { text: 'コラム一覧', url: 'pending' },
  { text: '設定', url: 'pending' },
];

const Menu = () => {
  const [open, setOpen] = useState(false);

  const onOpen = () => {
    setOpen(true);
  };

  const onClose = () => {
    setOpen(false);
  };

  return (
    <div className="ml-4 cursor-pointer relative">
      <img
        src={open ? './images/icon_close.svg' : './images/icon_menu.svg'}
        className="h-7 w-7 ml-4"
        alt="menu"
        onClick={() => (open ? onClose() : onOpen())}
      />

      {open && (
        <div className="absolute top-full right-0 bg-gray ">
          {menuLinks.map(link => (
            <NavLink
              to={link.url}
              onClick={onClose}
              className={({ isActive }) =>
                classNames('hover:text-primary-400', {
                  'text-primary-400': isActive,
                  'text-light': !isActive,
                })
              }
            >
              <div className="px-8 py-6 whitespace-nowrap">{link.text}</div>
            </NavLink>
          ))}
        </div>
      )}
    </div>
  );
};

export default Menu;
