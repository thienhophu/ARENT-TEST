import React from 'react';

const navItems = [
  { name: '会員登録', url: '.' },
  { name: '運営会社', url: '.' },
  { name: '利用規約', url: '.' },
  { name: '個人情報の取扱について', url: '.' },
  { name: '特定商取引法に基づく表記', url: '.' },
  { name: 'お問い合わせ', url: '.' },
];

const Footer = () => (
  <footer className="bg-dark-500 h-32">
    <div className="max-w-default m-auto px-4 lg:px-0 h-32 flex flex-wrap gap-x-11 items-center text-light">
      {navItems.map(item => (
        <a key={item.name} href={item.url} className="text-xs hover:text-primary-400">
          {item.name}
        </a>
      ))}
    </div>
  </footer>
);

export default Footer;
