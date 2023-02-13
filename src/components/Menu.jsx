import React, { useState } from 'react';
import { NavLink } from 'react-router-dom';
import classNames from 'classnames';

const Menu = ({ links }) => {
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
          {links.map(link => (
            <NavLink
              to={link.url}
              key={link.text}
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
