import React from 'react';
import '../../styles/header.scss';
//Components
import Logo from './Logo';

const Header = () => {
  return (
    <div className="header">
      <Logo text="Banku" />
    </div>
  );
};

export default Header;
