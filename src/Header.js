import React from 'react';
import './Header.css';

const Header = ({ nickName }) => {
  return (
    <header className="header">
      <div className="header-content">
        <h1 className="nickname">{nickName}</h1>
        <p className="tagline">Cherishing Every Memory</p>
      </div>
    </header>
  );
};

export default Header;
